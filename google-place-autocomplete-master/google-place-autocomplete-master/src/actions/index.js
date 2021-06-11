export const service = new window.google.maps.places.AutocompleteService();
  const geocoder = new window.google.maps.Geocoder();  
  export const setLocation = (location) => ({
    type: 'SET_LOCATION',
    location: location
  })
  export const requestPost = () => ({
    type: 'REQUEST_POST'
  })
  export const receivedPost = (_data) => ({
    type: 'RECEIVE_POST',
    data: _data
  })
  export const resetPredictions = () => ({
    type: 'RESET_PREDICTIONS'
  })
  export const addUserSearchHistory = (value) => ({
    type: 'ADD_USER_SEARCH_HISTORY',
    value: value
  }) 

export const getLocation = (value) => (dispatch) => {
  dispatch(addUserSearchHistory(value.userSearch));
  const request = {
    placeId: value.placeId
  }
  geocoder.geocode(request,function(res){
    const location = res[0] || null;
    if(location !== null) {
      dispatch(setLocation(location));
    }
  })
}


export const getPredictions = (str) => (dispatch) => {
    if(!str.length) {
      dispatch(resetPredictions());
      return
    }
    dispatch(requestPost());
    var request = {
      input: str,
    };
  service.getPlacePredictions(request, function(data){
    const _data = data || [];
    dispatch(receivedPost(_data))
  });

}
