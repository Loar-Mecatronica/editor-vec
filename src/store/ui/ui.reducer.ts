import { uiInitialState } from './ui.initialState';
import { PAGE_OFF, PAGE_ON } from '../actions';
import { pageOff, pageOn } from './ui.actions';
export function UIReducer(
  state = uiInitialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case PAGE_ON:
      return pageOn(state);
    case PAGE_OFF:
      return pageOff(state);
    default:
      return state;
  }
}
