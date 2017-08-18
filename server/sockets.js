require('dotenv').config();

const IO_PORT = process.env.IO_PORT
const socketIoJwt = require('socketio-jwt');

module.exports = (io, knex) => {

  let compatUsers = [];

  function queryCompatUsers(username, seriousness){
    return knex('users').where('seriousness','>',seriousness-10)
      .andWhere('seriousness','<',seriousness+10)
      .andWhere('username','!=', username)
      .then(function(results) {
        function sortFunction(record1,record2) {
          var difference1 = Math.abs(seriousness - record1.seriousness);
          var difference2 = Math.abs(seriousness - record2.seriousness);
          return difference1 > difference2;
        }
        results.sort(sortFunction);
        compatUsers = results;
        return Promise.resolve(compatUsers);
      });
  }

  function queryUser(username){
    return knex('users').where('username', username);
  }

  function updateSeriousnessDb(username, value){
    return knex('users')
    .where('username', username)
    .update('seriousness', value)
  }

  io.sockets
    .on('connection', socketIoJwt.authorize({
      secret: process.env.JWT_SECRET,
      timeout: 1000
    })).on('authenticated', function(socket) {
      const currentUserName = socket.decoded_token.username;
      console.log('hello! ' + currentUserName);

      // Initial Load
      queryUser(currentUserName).then(user => {
        socket.emit('getDefaultSeriousness', JSON.stringify(user[0].seriousness));
        queryCompatUsers(user[0].username, user[0].seriousness).then(users => {
          socket.emit('updateCompatUsers', JSON.stringify(users));
        });
      });

      // Update seriousness after slider change
      socket.on('updateSeriousness', function(data) {
        const sliderValue = JSON.parse(data).value;
        updateSeriousnessDb(currentUserName, sliderValue).then(() => {
          queryCompatUsers(currentUserName, sliderValue).then(users => {
            socket.emit('updateCompatUsers', JSON.stringify(users));
          })
        })
      });
    })

  io.listen(IO_PORT, () => {
    console.log("Socket.io listening on port " + IO_PORT);
  })
}
