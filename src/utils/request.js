import axios from 'axios'

const axiosService = createAxios()
// 封装axios的request方法
export default config => {
  return axiosService.request(config)
}

/**
 * 创建axios实例对象
 */
function createAxios () {
  let axiosService = axios.create({
    // baseURL: 'http://localhost:8018',
    // timeout: 3000,
    // 通过这个设定可以让发送跨域请求是携带cookies等凭证信息，但是，这时要求服务的Access-Control-Allow-Origin不能为*，必须是具体的domain
    withCredentials: true
  })
  // 配置请求拦截器
  axiosService.interceptors.request.use(...configRequestInterceptor())
  // 配置响应拦截器
  axiosService.interceptors.response.use(...configResponseInterceptor())

  /**
   * 请求拦截器
   */
  function configRequestInterceptor () {
    return [
      config => {
        // login id标识登录状态
        // 设定公共请求头
        configCommonHeader(config)
        // 配置请求加密
        // 配置get请求，添加额外时间戳参数 URL相同ie缓存GET请求的问题
        return config
      },
      error => {
        Promise.reject(error)
      }
    ]
  }

  /**
   * 响应拦截器
   */
  function configResponseInterceptor () {
    return [
      response => {
        if (response.config.method === 'post') {
          // 去掉重复请求
        }
        return response
      },
      error => {
        // pending = []
        // 获取状态码
        // const status = error.response ? error.response.status : ''
        // 获取错误信息
        // let errorMsg = error.message
        const jsonResult = error.response ? error.response.data : {}
        if (jsonResult.respCode && jsonResult.respDesc) {
          // errorMsg = `${jsonResult.respCode}:${jsonResult.respDesc}`
        }
        return Promise.reject(error)
      }
    ]
  }

  /**
   * 配置请求报文头
   * @param {*} config
   */
  function configCommonHeader (config) {
    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json'
    }
    return config
  }
  return axiosService
}
