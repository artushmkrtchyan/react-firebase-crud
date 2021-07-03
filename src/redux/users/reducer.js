import { usersTypes } from './type';

const initialState = {
  users: [],
  user: {},
  error: '',
  loading: false,
  loadingUser: false,
  setError: '',
  setLoading: false,
  deleted: null,
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case usersTypes.GET_USERS_START:
      return { ...state, loading: true };
    case usersTypes.GET_USERS_SUCCESS:
      const users = [];
      for (let id in action.data) {
        users.push({ id, ...action.data[id] });
      }
      return { ...state, users, loading: false };
    case usersTypes.GET_USERS_FAILURE:
      return { ...state, error: action.error, users: [], loading: false };
    case usersTypes.GET_USER_START:
      return { ...state, loadingUser: true };
    case usersTypes.GET_USER_SUCCESS:
      return { ...state, user: action.data, loadingUser: false };
    case usersTypes.GET_USER_FAILURE:
      return { ...state, error: action.error, user: {}, loadingUser: false };
    case usersTypes.CREATE_USER_START:
      return { ...state, setLoading: true };
    case usersTypes.CREATE_USER_SUCCESS:
      return { ...state, setLoading: false };
    case usersTypes.UPDATE_USER_START:
      return { ...state, setLoading: true };
    case usersTypes.SET_USER_SUCCESS:
      return { ...state, user: {}, setLoading: false };
    case usersTypes.SET_USER_FAILURE:
      return { ...state, setError: action.error };
    case usersTypes.DELETE_USER_START:
      return { ...state, deleted: null };
    case usersTypes.DELETE_USER_SUCCESS:
      return { ...state, deleted: true };
    case usersTypes.DELETE_USER_FAILURE:
      return { ...state, error: action.error, deleted: false };
    default:
      return state;
  }
};
