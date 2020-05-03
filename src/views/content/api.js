import request from '@/service/http.js' 

export function getPosts(id) {
    return request({
      url: '/posts/'+id,
      method: 'get',
    //   data: query
    })
  }


  export function getPostshome() {
    return request({
      url: '/posts/',
      method: 'get',
    //   data: query
    })
  }