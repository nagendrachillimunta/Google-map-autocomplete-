
  const searchHistory = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER_SEARCH_HISTORY':
            if(state.indexOf(action.value) !== -1) {
              return state
            }
            return [...state,action.value]
      default:
        return state
    }
  }
  
  export default searchHistory