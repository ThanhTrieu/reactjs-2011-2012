import * as types from './type';

// dinh nghia cac action
export const requestServerData = () => ({
  type: types.REQUEST_SERVER_DATA
});

// cac action dc saga no xu ly
export const startGetDataServer = (loading) => ({
  type: types.START_GET_DATA,
  loading
})

export const getDataServerSuccess = (data) => ({
  type: types.GET_DATA_SUCCESS,
  data
});

export const getDataServerFail = (error) => ({
  type: types.GET_DATA_FAIL,
  error
});

export const finishGetDataServer = (loading) => ({
  type: types.FINISH_GET_DATA,
  loading
})

