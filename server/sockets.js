require('dotenv').config();

const IO_PORT = process.env.IO_PORT
const socketIoJwt = require('socketio-jwt');
const _ = require('lodash');

const pry = require('pryjs');

module.exports = (io, knex) => {

  let compatUsers = [];
  const onlineUsers = {};

  function queryCompatUsers(username, seriousness){
    return knex('users').where('seriousness','>',seriousness-10)
      .andWhere('seriousness','<',seriousness+10)
      .whereIn('username', Object.keys(onlineUsers))
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

  function getSeriousness(username){
    return knex.select('seriousness').from('users').where('username', username)
  }

  function broadcastUpdatedOnlineList(){
    for (var userName in onlineUsers) {
      const {user, socket} = onlineUsers[userName];
      getSeriousness(userName).then((data) => {
        queryCompatUsers(userName, data[0].seriousness).then((users) => {
          // console.log('Before filter ', users)
          // //this filtration is working for getting out the user who is not online.
          // const matchUsers = users.filter(value => value.username !== userName)
          // console.log("After filter ", matchUsers)
          // sockets.forEach(socket => {
            io.emit('onlinematchedSeriousnessUserIds', JSON.stringify(users));
          // })
        })
      })
    }
  }

  io.sockets
    .on('connection', socketIoJwt.authorize({
      secret: process.env.JWT_SECRET,
      timeout: 1000
    })).on('authenticated', function(socket) {
      const currentUserName = socket.decoded_token.username;
      console.log('hello! ' + currentUserName);    
      
      if (!onlineUsers[currentUserName]) {
        onlineUsers[currentUserName] = {user: socket.decoded_token, socket: socket};
      }

      console.log('after auth ', onlineUsers);

      broadcastUpdatedOnlineList();
      
      // Initial Load
      queryUser(currentUserName).then(user => {
        socket.emit('getDefaultSeriousness', JSON.stringify(user[0].seriousness));
        queryCompatUsers(user[0].username, user[0].seriousness).then(users => {
          // const filteredUsers = users.filter(user => user.username != currentUserName);
          socket.emit('onlinematchedSeriousnessUserIds', JSON.stringify(users));
        });
      });

      // Update seriousness after slider change
      socket.on('updateSeriousness', function(data) {
        const sliderValue = JSON.parse(data).value;
        updateSeriousnessDb(currentUserName, sliderValue).then(() => {
          broadcastUpdatedOnlineList();
        })
      });

      // Initial invite
      socket.on('inviteUserB', function(userData) {
        console.log("invite received");
      });

      socket.on('disconnect', function(){ 
        delete onlineUsers[currentUserName];
        console.log('after delete on disconnect ', onlineUsers);
        broadcastUpdatedOnlineList();
      })
    })

  io.listen(IO_PORT, () => {
    console.log("Socket.io listening on port " + IO_PORT);
  })
}
