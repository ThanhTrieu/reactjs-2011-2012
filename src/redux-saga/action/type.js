// hanh dong se truyen di
export const REQUEST_SERVER_DATA = Symbol('REQUEST_SERVER_DATA');

// cai hanh dong REQUEST_SERVER_DATA no se dc middleware - redux saga tiep nhan
// cac action ma saga se tra ve va sau nay se dispatch vao trong store

export const START_GET_DATA = Symbol('SET_GET_DATA');
export const GET_DATA_SUCCESS = Symbol('GET_DATA_SUCCESS');
export const GET_DATA_FAIL = Symbol('GET_DATA_FAIL');
export const FINISH_GET_DATA = Symbol('FINISH_GET_DATA');

