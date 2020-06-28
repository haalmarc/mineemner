import { combineReducers } from 'redux';
import subjectsReducer from './subjectsReducer'
import modalToggle from './modalToggle'
import resources from './resources'

const allReducers = combineReducers ({
    subjectsReducer,
    modalToggle,
    resources,
});

export default allReducers;