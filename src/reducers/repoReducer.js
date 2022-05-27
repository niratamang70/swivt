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

export const repoListReducer = (state = { repos: [] }, action) => {
  switch (action.type) {
    case REPO_LIST_REQUEST:
      return { loading: true, repos: [] };
    case REPO_LIST_SUCCESS:
      return { loading: false, repos: action.payload };
    case REPO_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const myRepoReducer = (state = { details: [] }, action) => {
  switch (action.type) {
    case REPO_DETAILS_REQUEST:
      return { ...state, loading: true };
    case REPO_DETAILS_SUCCESS:
      return { loading: false, REPO: action.payload };
    case REPO_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const searchDataReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return { ...state, loading: true };
    case SEARCH_SUCESS:
      return { loading: false, data: action.payload };
    case SEARCH_FAIL:
      return { loading: false, error: action.payload.data.message };
    default:
      return state;
  }
};
