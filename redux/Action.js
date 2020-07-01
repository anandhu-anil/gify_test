import {BOOKMARKED} from './Type';

export const bookmarked = data => ({
  type: BOOKMARKED,
  payload: data,
});
