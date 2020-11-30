import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import notesReducer from './notesReducer';
import testingReducer from './testingState';

const reducers = combineReducers({
  notes: notesReducer,
  visibility: visibilityFilter,
  test: testingReducer,
});

export default reducers;
