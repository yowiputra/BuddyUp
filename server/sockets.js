require('dotenv').config();

const IO_PORT = process.env.IO_PORT
const socketIoJwt = require('socketio-jwt');

module.exports = (io, knex) => {

  let compatUsers = [];

  function queryCompatUsers(username, seriousness){
    knex('users').where('seriousness','>',seriousness-10)
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
        console.log(compatUsers);
      })
  }

  function queryUser(username){
    knex('users').where('username', username)
      .then(function(user) {
        queryCompatUsers(user[0].username,user[0].seriousness);
        // console.log(user[0]);
      })
  }

  io.sockets
    .on('connection', socketIoJwt.authorize({
      secret: process.env.JWT_SECRET,
      timeout: 1000
    })).on('authenticated', function(socket) {
      const currentUserName = socket.decoded_token.username;
      console.log('hello! ' + currentUserName);
      queryUser(currentUserName);
    });

  io.listen(IO_PORT, () => {
    console.log("Socket.io listening on port " + IO_PORT);
  })
}
