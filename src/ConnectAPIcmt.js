import axios from 'axios'

export default function loadCmt () {
     const data = axios({
          method: 'get',
          url: 'https://jsonplaceholder.typicode.com/comments',
          data: null    
     }).catch((err)=>{
          console.log(err)
     })
     return data
}