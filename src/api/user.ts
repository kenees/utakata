import request from '../util/request';

interface ILogin {
  user_name: string,
  password: any
}

export async function Login (data: ILogin) {
  return request.post('/api/v1/user/login', data)
}