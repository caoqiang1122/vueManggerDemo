import request from '@/utils/request'

class LoginApi {
  login (loginParam) {
    return request({
      url: '/api/user/login',
      method: 'post',
      data: loginParam,
      // 请求是否加密
      encrypted: true
    })
  }
}

export default new LoginApi()
