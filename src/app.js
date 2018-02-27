const http = require('http')
const koa = require('koa')
const compose = require('koa-compose')
const cors = require('kcors')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const router = require('./router')
const io = require('./chat')

const app = (module.exports = new koa())

app.use(
  compose([
    logger(),
    cors(),
    bodyparser(),
    router.routes(),
    router.allowedMethods()
  ])
)

const server = http.createServer(app.callback())

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log(`started server on port ${port}`)
})

io.attach(server)
