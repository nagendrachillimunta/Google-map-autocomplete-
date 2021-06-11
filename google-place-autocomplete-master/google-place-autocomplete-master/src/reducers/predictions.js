const initialState = {
  isFetching: false,
  items: []
}

const predictions = (state = initialState, action) => {
  switch (action.type) {
      case 'RESET_PREDICTIONS':
          return initialState
      case 'REQUEST_POST' :
          return {...state,isFetching:true}
      case 'RECEIVE_POST' :
          return {...state,items:action.data,isFetching:false}
      case 'SET_LOCATION' :
          return initialState
    default:
      return state
  }
}

export default predictions
  