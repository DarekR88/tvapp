import { reducer as searchTermReducer } from '../Features/SearchTerm/reducer';
import { reducer as searchResultsReducer } from '../Features/SearchResults/reducer'

export default {
    searchTerm: searchTermReducer,
    searchResults: searchResultsReducer
}