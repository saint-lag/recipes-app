export const SAVE_EMAIL = 'SAVE_EMAIL';
export const UPDATE_INGREDIENTS_FILTER = 'UPDATE_INGREDIENTS_FILTER';

export const saveEmail = (payload) => ({ type: SAVE_EMAIL, payload });
export const updateIngredientsFilter = (payload) => ({
  type: UPDATE_INGREDIENTS_FILTER, payload });
