export interface AppState {
  isVisibleSidebar: boolean
}

export enum AppActionTypes {
  SWITCH_VISIBILITY_SIDEBAR = 'SWITCH_VISIBILITY_SIDEBAR',
  HIDE_VISIBILITY_SIDEBAR = 'HIDE_VISIBILITY_SIDEBAR',
  SHOW_VISIBILITY_SIDEBAR = 'SHOW_VISIBILITY_SIDEBAR'
}

interface SwitchVisibilitySidebar {
  type: AppActionTypes.SWITCH_VISIBILITY_SIDEBAR
}

interface HideVisibilitySidebar {
  type: AppActionTypes.HIDE_VISIBILITY_SIDEBAR
}

interface ShowVisibilitySidebar {
  type: AppActionTypes.SHOW_VISIBILITY_SIDEBAR
}

export type AppAction =
    SwitchVisibilitySidebar
  | HideVisibilitySidebar
  | ShowVisibilitySidebar
