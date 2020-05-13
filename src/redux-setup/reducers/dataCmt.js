const initialState = [];

const dataCmt = (state = initialState, action) => {
     switch (action.type) {
          case "GET-CMT":
               return [...action.payload]
          default:
               return state

     }
}

export default dataCmt