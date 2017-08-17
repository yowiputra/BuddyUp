require('dotenv').config();

const IO_PORT = process.env.IO_PORT
const socketIoJwt = require('socketio-jwt');

module.exports = (io, knex) => {

  let compatUsers = [];

  function queryCompatUsers(seriousness){
    knex('users').where('seriousness','>',seriousness-5)
      .andWhere('seriousness','<',seriousness+5)
      .then(function(results) {
        compatUsers = results;
        console.log(compatUsers);
      })
  }

  function queryUser(username){
    knex('users').where('username', username)
      .then(function(user) {
        queryCompatUsers(user[0].seriousness);
        console.log(user[0]);
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
