export interface UIAppState {
  pageOpacity: number;
}

export interface AppState {
  ui: UIAppState;
  session: SessionState;
}

export interface SessionState {
  location: string;
}
