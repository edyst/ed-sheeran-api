// import { disconnect } from 'cluster';

const socketIO = require('socket.io')
const io = new socketIO()

var users = []
io.on('connection', socket => {
  socket.on('user_connected', data => {
    var obj = data
    console.log('connected ' + data)
  })
  socket.on('disconnect', user => {
    console.log(user)
  })
})

module.exports = io
