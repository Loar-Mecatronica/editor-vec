import { UIAppState } from '../App-state.interfaces';
export function pageOn(state: UIAppState) {
  return { ...state, pageOpacity: 1 } as UIAppState;
}

export function pageOff(state: UIAppState) {
  return { ...state, pageOpacity: 0 } as UIAppState;
}
