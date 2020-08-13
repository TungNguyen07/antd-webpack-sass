import { INSERT_FAILED, INSERT_SUCCEED } from "../constants/user";

const initUser = {
  name: "",
  age: 20,
  address: "",
};

export const userReducer = (state = initUser, action) => {
  switch (action.type) {
    case INSERT_SUCCEED: {
      return { ...state, name: action.payload };
    }

    case INSERT_FAILED: {
      return state;
    }

    default:
      return state;
  }
};
