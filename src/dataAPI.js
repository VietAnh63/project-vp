import axios from 'axios'
export default async function loadData() {
     let URL1 = "https://jsonplaceholder.typicode.com/comments"
     let URL2 = "https://jsonplaceholder.typicode.com/posts"

     const promise1 = axios(URL1);
     const promise2 = axios(URL2);

     const [data, cmt]  =  await Promise.all([promise1, promise2])
}
