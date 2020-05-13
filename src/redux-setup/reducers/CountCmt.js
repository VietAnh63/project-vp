import loadCmt from '../../ConnectAPIcmt'

var cmt = []
loadCmt().then((res) => {
     var g = res.data.length
     for (var i = 0; i < g; i++) {
          cmt[i] = 5
     }
})

const countCmt = (state = cmt, action) => {
     switch (action.type) {
          case "GET-COUNT":
               return [...action.payload]
          default:
               return state

     }
}

export default countCmt