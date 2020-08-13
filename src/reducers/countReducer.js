import { CLICK_FAILED, CLICK_SUCCEEDED } from "../constants/count";

export const countReducer = (state = 0, action) => {
  switch (action.type) {
    case CLICK_SUCCEEDED:
      return action.payload;

    case CLICK_FAILED:
      return state;

    default:
      return state;
  }
};
