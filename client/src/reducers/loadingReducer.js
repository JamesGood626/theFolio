import { LOADING, LOADING_FINISHED } from "../actions/types";

export default function(state = false, action) {
  switch (action.type) {
    case LOADING:
      return true;
    case LOADING_FINISHED:
      return false;
    default:
      return state;
  }
}
