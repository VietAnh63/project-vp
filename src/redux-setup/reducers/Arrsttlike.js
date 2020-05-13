import loadData from '../../ConnectAPI'

var arrsttlike = []
loadData().then((res) => {
     var g = res.data.length
     for (var i = 0; i < g; i++) {
          arrsttlike[i] = false
     }
})

// var data = loadData()[0].data
// var g = data.length
// for (var i = 0; i < g; i++){
//      arrsttlike[i]  = false
// }


const Arrsttlike = (state = arrsttlike, action) => {
     switch (action.type) {
          case "LIKE":
               return [...action.payload]
          case "NOT-LIKE":
               return [...action.payload]
          default:
               return state

     }
}

export default Arrsttlike