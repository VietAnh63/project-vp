import loadData from '../../ConnectAPI'

var arrcmt = []
loadData().then((res) => {
     var g = res.data.length
     for (var i = 0; i < g; i++) {
          arrcmt[i] = 1
     }
})



const Comment = (state = arrcmt, action) => {
     switch (action.type) {
          case "GET-COMMENT":
               return [...state,action.payload]
          default:
               return state

     }
}

export default Comment