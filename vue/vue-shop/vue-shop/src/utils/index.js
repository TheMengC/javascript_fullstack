// 请求封装
function request (url, method, data, header = {}) {
  return new Promise((resolve, reject) => {
    this.$http({
      url: host + url,
      method: method,
      data: data,
      header: {
        "content-type": "application/json"
      },
      success (res) {
        resolve(res.data)
      },
      fail (error) {
        reject(false)
      },

    })
  })
}

export function get (url, data) {
  return request(url, 'GET', data)
}
export function post (url, data) {
  return request(url, 'POST', data)
}