import {
  REPO_DETAILS_REQUEST,
  REPO_DETAILS_SUCCESS,
  REPO_DETAILS_FAIL,
  REPO_LIST_REQUEST,
  REPO_LIST_SUCCESS,
  REPO_LIST_FAIL,
  SEARCH_REQUEST,
  SEARCH_SUCESS,
  SEARCH_FAIL
} from '../constants/repoConstants';

import axios from 'axios';

export const repoList = () => async dispatch => {
  try {
    dispatch({ type: REPO_LIST_REQUEST });

    const { data } = await axios.get(`https://api.github.com/repositories`);

    dispatch({
      type: REPO_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: REPO_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

export const userRepo = () => async dispatch => {
  try {
    dispatch({ type: REPO_DETAILS_REQUEST });

    const { data } = await axios.get(`https://api.github.com/user/repos`, {});

    dispatch({
      type: REPO_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: REPO_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

export const search = (keyword, order, perPageData, page) => async dispatch => {
  try {
    dispatch({ type: SEARCH_REQUEST });

    const { data } = await axios.get(
      `https://api.github.com/search/repositories?q=${keyword}&page=${page}&per_page=${perPageData}&sort=stars&order=${order}`
    );

    dispatch({
      type: SEARCH_SUCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: SEARCH_FAIL,
      payload: error.response
    });
  }
};
