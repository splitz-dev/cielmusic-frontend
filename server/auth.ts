import express from 'express'
import { API_HOST } from './index'
import axios from 'axios'

const router = express.Router()

// 로그인
router.get('/login', (req: express.Request, res: express.Response) => {
  // 백-엔드로 로그인 리퀘스트
  axios
    .get(API_HOST + '/auth/login')
    .then(data => {
      // 로그인 성공
    })
    .catch(err => {
      res.status(err.response.status)
    })
})

export default router
