import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';

const initialStateSearch = {
    searchField: ''
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
    console.log(action.type);
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
};

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {
                isPending: true,
                robots: [],
                error: ''
            });
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {
                isPending: false,
                robots: action.payload,
                error: ''
            });
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {
                isPending: false,
                robots: [],
                error: action.payload
            });
        default:
            return state;
    }
};
