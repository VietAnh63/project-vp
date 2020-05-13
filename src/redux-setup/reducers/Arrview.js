import loadData from '../../ConnectAPI'

var arrsttview = []
loadData().then((res) => {
     var g = res.data.length
     for (var i = 0; i < g; i++) {
          arrsttview[i] = 25
     }
})

const Arrview = (state = arrsttview, action) => {
     switch (action.type) {
          case "INCREASE-VIEW":
               return [...action.payload]
          default:
               return state
     }
}

export default Arrview
