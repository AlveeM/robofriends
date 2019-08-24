import { CHANGE_SEARCH_FIELD } from './constants';

export constsetSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})