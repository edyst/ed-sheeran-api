const socketIO = require('socket.io')
const io = new socketIO()

io.on('connection', socket => {
  console.log('connected!')
  socket.on('login', data => {
    console.log('message login with data: ', data)
  })
})

module.exports = io
