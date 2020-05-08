import axios from 'axios'

export default function loadData ()  {
     return axios({
          method: 'get',
          url: 'https://jsonplaceholder.typicode.com/posts',
          data: null    
     }).catch((err)=>{
          console.log(err)
     })
}



