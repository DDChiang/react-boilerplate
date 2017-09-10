import {
  SET_USER_DATA,
} from '../actions/userActions';

export const userInitialState = {
  name: 'random name',
};

export default (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return action.user;

    default:
      return state;
  }
};
