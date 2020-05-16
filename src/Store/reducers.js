import { reducer as searchTermReducer } from '../Features/SearchTerm/reducer';
import { reducer as searchResultsReducer } from '../Features/SearchResults/reducer';
import { reducer as peopleResultsReducer } from '../Features/PeopleResults/reducer';
import { reducer as formChangeReducer } from '../Features/FormChange/reducer';
import { reducer as filterReducer } from '../Features/FilterCheck/reducer';

export default {
    radioCheck: filterReducer,
    searchTerm: searchTermReducer,
    searchResults: searchResultsReducer,
    peopleResults: peopleResultsReducer,
    formChange: formChangeReducer,
}