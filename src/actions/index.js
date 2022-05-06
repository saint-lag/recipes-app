export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_SEARCH = 'SAVE_SEARCH';

export const saveEmail = (payload) => ({ type: SAVE_EMAIL, payload });
export const saveSearch = (payload) => ({ type: SAVE_SEARCH, payload });
