import types from "../reducers/Types";

export const fetchData = term => ({
  type: types.fetchData,
  payload: term
});

export const fetchDataFail = error => ({
  type: types.fetchDataFail,
  payload: error
});

export const setData = results => ({
  type: types.setData,
  payload: results
});

export const setPage = page => ({
  type: types.setPage,
  payload: page
});

export const viewMore = movie => ({
  type: types.viewMore,
  payload: movie
});

export const setViewMore = movie => ({
  type: types.setViewMore,
  payload: movie
});