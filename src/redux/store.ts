import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import recorderReducer from './recorder';
import userEventsReducer from './user-events'
import canStopRecorderReducer from './canStopRecorder'

const rootReducer = combineReducers({
  userEvents: userEventsReducer,
  recorder: recorderReducer,
  canStopRecorder: canStopRecorderReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;