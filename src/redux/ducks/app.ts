import { AppAction, AppActionTypes, AppState } from "../types/app";

const initialState: AppState = {
  isVisibleSidebar: window.innerWidth > 1200,
}

export default function reducer(state = initialState, action: AppAction) {
  switch (action.type) {
    case AppActionTypes.SWITCH_VISIBILITY_SIDEBAR:
      return { ...state, isVisibleSidebar: !state.isVisibleSidebar }
    case AppActionTypes.HIDE_VISIBILITY_SIDEBAR:
      return { ...state, isVisibleSidebar: false }
    case AppActionTypes.SHOW_VISIBILITY_SIDEBAR:
      return { ...state, isVisibleSidebar: true }
    default:
      return state;
  }
}

export const switchVisibilitySidebar = (): AppAction => {
  return { type: AppActionTypes.SWITCH_VISIBILITY_SIDEBAR }
}

export const hideVisibilitySidebar = () => {
  return { type: AppActionTypes.HIDE_VISIBILITY_SIDEBAR }
}

export const showVisibilitySidebar = () => {
  return { type: AppActionTypes.SHOW_VISIBILITY_SIDEBAR }
}