import { SessionState } from '../App-state.interfaces';
export function setLocation(state: SessionState, payload: string) {
  return { ...state, location: payload } as SessionState;
}
