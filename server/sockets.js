require('dotenv').config();

const IO_PORT = process.env.IO_PORT
const socketIoJwt = require('socketio-jwt');

module.exports = (io, knex) => {

  // io.use(socketIoJwt.authorize({
  //   secret: process.env.JWT_SECRET,
  //   handshake: true
  // }))
  
  
// io.sockets
// .on('connection', socketIoJwt.authorize({
//   secret: process.env.JWT_SECRET,
//   timeout: 3000 // 3 seconds to send the authentication message
// }))
// .on('authenticated', function(socket) {
//   //this socket is authenticated, we are good to handle more events from it.
//   console.log('hello!' + socket.decoded_token.name);
// });

    // function getLoggedInUserData(username){
    //   return knex('users')
    //   .where('username', username).then();
    // }

    // const loggedInUsername = socket.handshake.decoded_token.username    
    // const loggedInUserData = getLoggedInUserData(loggedInUsername);

    // console.log(loggedInUserData);
  //   console.log("a user connected!");
    
  //   socket.on('disconnect', function () {
  //     console.log('user disconnected');
  //   });
  // })
  io.use((socket, next) => {
    socketIoJwt.authorize({
      secret: 'secretpasswordforjwt',
      handshake: true,
    })(socket, next);
  })

  io.on('connection', (socket) => {
    console.log('Connect', socket.decoded_token);
  });

  io.listen(IO_PORT, () => {
    console.log("Socket.io listening on port " + IO_PORT);
  })
}
