import loginApi from '../api/login-api'

class LoginService {
  login (loginParam) {
    return new Promise((resolve, reject) => {
      loginApi
        .login(loginParam)
        .then(response => {
          const data = response.data
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default new LoginService()
