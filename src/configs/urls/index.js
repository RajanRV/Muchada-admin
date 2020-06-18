import { BASE_URL } from './baseUrl/';

export const LOGIN_URL = BASE_URL + '/auth/local';
export const SELLERS_COUNT = BASE_URL + '/users/count?role.id=4';
export const USERS_COUNT = BASE_URL + '/users/count?role.id=1';
export const SELLERS_LIST = BASE_URL + '/users/?role.id=4';
export const USERS_LIST = BASE_URL + '/users/?role.id=1';