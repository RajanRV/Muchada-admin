import { BASE_URL } from './baseUrl/';

export const LOGIN_URL = BASE_URL + '/auth/local';
// dashboard 
export const SELLERS_COUNT = BASE_URL + '/users/count?role.id=4';
export const USERS_COUNT = BASE_URL + '/users/count?role.id=1';
export const ITEM_CATEGORY_COUNT = BASE_URL + '/item-categories/count';
export const ITEM_COUNT = BASE_URL + '/items/count';
// sellers and users
export const SELLERS_LIST = BASE_URL + '/users/?role.id=4';
export const USERS_LIST = BASE_URL + '/users/?role.id=1';
