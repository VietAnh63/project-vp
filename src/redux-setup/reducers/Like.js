import loadData from '../../ConnectAPI'

var arrLike = []
loadData().then((res) => {
     var g = res.data.length
     for (var i = 0; i < g; i++) {
          arrLike[i] = 10
     }
})


const Like = (state = arrLike, action) => {
     switch (action.type) {
          case "INCREASE-LIKE":
               return [...state,action.payload]
          case "REDUCE-LIKE":
               return [...state,action.payload]
          default:
               return state

     }
}

export default Like