import { reducer as searchTermReducer } from '../Features/SearchTerm/reducer';
import { reducer as searchResultsReducer } from '../Features/SearchResults/reducer';
import { reducer as peopleResultsReducer } from '../Features/PeopleResults/reducer';
import { reducer as formChangeReducer } from '../Features/FormChange/reducer';
import { reducer as filterReducer } from '../Features/FilterCheck/reducer';
import { reducer as loggedReducer } from '../Features/Loggedin/reducer';
import { reducer as modalReducer } from '../Features/Modal/reducer';
import { reducer as signupReducer } from '../Features/Signup/reducer';

export default {
    loggedIn: loggedReducer,
    modalOpen: modalReducer,
    filterCheck: filterReducer,
    searchTerm: searchTermReducer,
    searchResults: searchResultsReducer,
    peopleResults: peopleResultsReducer,
    formChange: formChangeReducer,
    signup: signupReducer,
}