import request from '@/service/http.js' 

export function getPosts() {
    return request({
      url: '/posts/',
      method: 'get',
    //   data: query
    })
  }