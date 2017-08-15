require('dotenv').config();

const IO_PORT = process.env.IO_PORT

module.exports = (io) => {
  io.on('connect', (socket) => {
    console.log("a user connected!");
    socket.on('disconnect', function () {
      console.log('user disconnected');
    });
  });

  io.listen(IO_PORT, () => {
    console.log("Socket.io listening on port " + IO_PORT);
  });
}
