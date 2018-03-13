const socketIO = require('socket.io')
const io = new socketIO()

var users = [
  {
    id: 1,
    userName: 'kotapi',
    password: 'kotapi',
    displayName: 'Pranay Kothapalli',
    avatar: 'https://c1.staticflickr.com/1/27/45800701_d7d1dbf364_b.jpg',
    status: 'offline'
  },
  {
    id: 2,
    userName: 'aneeq',
    password: 'aneeq',
    displayName: 'Aneeq Dholakia',
    avatar: 'http://www.rap-up.com/app/uploads/2011/07/soulja-boy-swag.jpg',
    status: 'offline'
  }
]

var channels = [
  {
    id: 1,
    name: 'general',
    description: 'General channel where everyone can talk anything they want.',
    messages: [
      {
        user: users[0],
        sentTime: '01 Jan 1970 00:00:00 GMT',
        html: 'hello'
      }
    ]
  },
  {
    id: 2,
    name: 'random',
    description: 'General channel where everyone can talk anything they want.',
    messages: []
  }
]

io.on('connection', socket => {
  io.emit('update_user_list', users)
  var currentUser = {}

  socket.emit('channel-list', channels)

  socket.on('send-message-to-channel', data => {
    let channelID = data.channelID
    for (var i = 0; i < channels.length; i++) {
      if (channels[i].id == channelID) {
        console.log(data)
        channels[i].messages.push(data.payload)
        io.sockets.emit('send-message-to-channel', data)
      }
    }
  })

  socket.on('authenticate', userCreds => {
    console.log('clicked')
    for (var i = 0; i < users.length; i++) {
      if (userCreds.ID == users[i].userName) {
        if (userCreds.password == users[i].password) {
          console.log('Valid user', userCreds)
          socket.emit('authenticated', users[i])
          currentUser = users[i]
          currentUser.status = 'online'

          io.emit('update_user_list', users)
          io.emit('channel-list', channels)
        }
      }
    }
  })

  socket.on('disconnect', () => {
    currentUser.status = 'offline'
    io.emit('update_user_list', users)
  })
})

module.exports = io
