import { combineReducers } from 'redux';
import { UIReducer } from './ui/ui.reducer';

export const rootReducer = combineReducers({
  ui: UIReducer,
});
