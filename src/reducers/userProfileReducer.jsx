/* eslint-disable indent */
// import Action from "../actions/actions";
import Actions from "../actions/actions";
// import {
//   UPDATE_FIRSTNAME,
//   UPDATE_EMAIL,
//   UPDATE_IS_ADMIN,
//   UPDATE_THEME,
// } from "../actions/actions.json";

const userProfileReducer = (state, action) => {
  // console.log(action.type);
  switch (action.type) {
    case Actions.UPDATE_FIRSTNAME:
      return { ...state, firstName: action.payload };
    case Actions.UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case Actions.UPDATE_THEME:
      return { ...state, theme: action.payload };
    case Actions.UPDATE_IS_ADMIN:
      return { ...state, isAdmin: action.payload };
    default:
      return state;
  }
};

export default userProfileReducer;
