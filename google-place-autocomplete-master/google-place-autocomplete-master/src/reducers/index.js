import { combineReducers } from 'redux'
import predictions from './predictions'
import location from './location'
import searchHistory from './searchHistory'


const autocompleteApp = combineReducers({
    predictions,
    location,
    searchHistory
})

export default autocompleteApp