import router from '../router'
import Mock from '../../node_modules/mockjs/dist/mock'
const axios = require('axios')


axios.defaults.baseURL = 'http://119.23.248.169'
axios.defaults.timeout = 5000
axios.defaults.retry = 4
axios.defaults.retryDelay = 1000

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (err) {
  // 对请求错误做些什么
  return Promise.reject(err)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // token失效
  if (response.data.code === '1001') {
    clearLocal()
    router.push('/login')
  }
  return response
}, function (err) {
  // 对响应错误做点什么
  var config = err.config
  // If config does not exist or the retry option is not set, reject
  if (!config || !config.retry) return Promise.reject(err)

  // Set the variable for keeping track of the retry count
  config.__retryCount = config.__retryCount || 0

  // Check if we've maxed out the total number of retries
  if (config.__retryCount >= config.retry) {
    // Reject with the error
    return Promise.reject(err)
  }

  // Increase the retry count
  config.__retryCount += 1

  // Create new promise to handle exponential backoff
  var backoff = new Promise(function (resolve) {
    setTimeout(function () {
      resolve()
    }, config.retryDelay || 1)
  })

  // Return the promise in which recalls axios to retry the request
  return backoff.then(function () {
    return axios(config)
  })
})

export function getLocal() {
  let arr = ['username', 'groupCode', 'token']
  let obj = {}
  for (let key in arr) {
    obj[arr[key]] = localStorage.getItem(arr[key])
  }
  console.log(obj)
  return obj
}

export function clearLocal() {
  let arr = ['username', 'groupCode', 'token', 'name']
  for (let key in arr) {
    localStorage.removeItem(arr[key])
  }
}

export function login(opt, fn) {
  axios.post('/admin/login', opt).then((res) => {
    fn && fn(res)
  })
}

export function logout(opt, fn) {
  axios.get('/admin/logout', {
    params: opt
  }).then((res) => {
    fn && fn(res)
  })
}

export function group(opt, fn) {
  axios.get('/action/group', {
    params: opt
  }).then((res) => {
    fn && fn(res)
  })
}

export function member(opt, fn) {
  axios.get('/action/member', {
    params: opt
  }).then((res) => {
    fn && fn(res)
  })
}
//-----------------------------------------------
//mock 
Mock.mock('http://mockjs/toptip', {
  'money|1-100.2': 1,
  'peoples|1-10': 0,
  'flow|1-1000.2': 0,
  'unprocessed|1-10': 0
})

export function topTip(fn) {
  axios.get('http://mockjs/toptip').then((res) => {
    fn && fn(res)
  })
}

Mock.mock('http://mockjs/peopleTrendChart', {
  "normalCount|7": [120],
  "testCount|7": [120],
  "silentCount|7": [120],
  "preCloseCount|7": [120],
  "stopCount|7": [120]
})

export function peopleTrendChart(fn) {
  axios.get('http://mockjs/peopleTrendChart').then((res) => {
    fn && fn(res)
  })
}
