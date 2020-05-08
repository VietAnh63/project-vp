const initialState = [];

const DataAPI = (state = initialState, action) => {
     switch (action.type) {
          case "GET-DATA":
               return [...action.payload]
          default:
               return state

     }
}

export default DataAPI
