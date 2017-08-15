require('dotenv').config();

const helper = require('./helper');
const IO_PORT = process.env.IO_PORT || 3001;

class Socket{
  constructor(socket, knex){
    this.io = socket;
    this.knex = knex;
  }

  socketEvents(knex){
    this.io.on('connect', (socket) => {
      console.log("a user connected!");
      socket.on('disconnect', function () {
        console.log('user disconnected');
      });
    });

    this.io.listen(IO_PORT, () => {
      console.log("Socket.io listening on port " + IO_PORT);
    });
  }

  socketConfig(){
    this.socketEvents(this.knex);
  }
}

module.exports = Socket;
