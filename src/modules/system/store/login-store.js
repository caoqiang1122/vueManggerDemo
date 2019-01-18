import loginService from '../service/login-service'

const login = {
  namespaced: true,
  mutations: {

  },
  actions: {
    // 用户登录
    async login ({
      commit
    }, loginParam) {
      let fun = function () {
        return new Promise((resolve, reject) => {
          loginService
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
      await fun()
    }
  }
}

export default login
