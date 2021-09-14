import { combineReducers } from 'redux';
import { UIReducer } from './ui/ui.reducer';
import { sessionReducer } from './session/session.reducer';
export const rootReducer = combineReducers({
  ui: UIReducer,
  session: sessionReducer,
});
