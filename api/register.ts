import axios from 'axios'

export async function getRegister({ email, password }: RegisterParams) {
  // Generic 을 통해 응답 데이터의 타입을 설정 할 수 있습니다.
  const response = await axios.post<RegisterResult>(``)
  return response.data // 데이터 값을 바로 반환하도록 처리합니다.
}

export interface RegisterResult {
  token: string
}
export interface RegisterParams {
  email: string
  password: string
}
