import axios from 'axios'
 
const axiosIns = axios.createInsatnce({
  baseUrl: 'http://localhost:3000',
  response: (res) => {
    if(res.code === 200) {

    } else {
      alert('出错了')
    }
  }
})

export default axiosIns

request ('/suggest')