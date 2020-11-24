export const LANGUAGE = process.env.LANGUAGE;
//@todo: remove before production
export const API =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost:8080/api'
    : 'http://localhost:8080/api';
export const SITE =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost:8080/api'
    : 'http://localhost:8080/';
