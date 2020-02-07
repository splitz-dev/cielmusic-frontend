import express from 'express'
import session from 'express-session'
import next from 'next'

// Router
import authRouter from './auth'

export const API_HOST: string = process.env.API || 'https://heewon.music.dev'

const port: number = Number(process.env.PORT) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev,
})
const handle = app.getRequestHandler()

const sessConfig: session.SessionOptions = {
  cookie: {
    httpOnly: true,
    secure: false, // To Do: 실서비스시, true 변경.
  },
  secret: process.env.SESSION_SECRET || 'ab##MUZi<sh/nGNm}ZHY-g~$&?(,Z8',
  name: 'cielmusic.sess',
  resave: true,
  saveUninitialized: true,
}

app.prepare().then(() => {
  const server = express()
  server.use(session(sessConfig))

  // Routers
  server.use('/api/v1', authRouter)

  server.all('*', (req: express.Request, res: express.Response) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ciel Music ready on port ${port}`)
  })
})
