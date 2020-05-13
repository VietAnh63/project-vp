var Create2DArray = (rows) => {
     var arr = [];
     for (var i = 0; i < rows; i++) {
          arr[i] = [];
     }
     return arr;
}
var initArr = Create2DArray(1000)
const PushComment = (state = initArr, action) => {
     switch (action.type) {
          case "INCREASE-COMMENT":
               return [...state, [...action.payload]]
          case "REDUCE-COMMENT":
               return [...state, [...action.payload]]
          default:
               return state

     }
}



export default PushComment