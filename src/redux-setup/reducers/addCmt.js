
const addCmt = (state = [], action) => {
     switch (action.type) {
          case "ADD-CMT":
               return [...action.payload]
          default:
               return state

     }
}

export default addCmt