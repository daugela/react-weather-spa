import { combineReducers } from 'redux';
import weatherReducer from './weather.reducer';
import { withReduxStateSync } from 'redux-state-sync';

// It is just one reducer at this point.. but no one knows the future..
const rootReducer = combineReducers({
  weatherReducer
});

export default withReduxStateSync(rootReducer);