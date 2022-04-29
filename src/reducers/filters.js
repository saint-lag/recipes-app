import { UPDATE_INGREDIENTS_FILTER } from '../actions';

const INITIAL_STATE = {
  ingredientsFilter: [],
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_INGREDIENTS_FILTER:
    return {
      ...state,
      ingredientsFilter: action.payload,
    };
  default:
    return state;
  }
};

export default user;
