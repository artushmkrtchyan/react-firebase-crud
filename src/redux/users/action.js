import { usersTypes } from './type';
import * as service from '../../service';

const getUsersStart = () => ({
  type: usersTypes.GET_USERS_START,
});

const getUsersSuccess = (data) => ({
  type: usersTypes.GET_USERS_SUCCESS,
  data,
});

const getUsersFailure = (error) => ({
  type: usersTypes.GET_USERS_FAILURE,
  error,
});

const getUserStart = () => ({
  type: usersTypes.GET_USER_START,
});

const getUserSuccess = (data) => ({
  type: usersTypes.GET_USER_SUCCESS,
  data,
});

const getUserFailure = (error) => ({
  type: usersTypes.GET_USER_FAILURE,
  error,
});

const createUserStart = () => ({
  type: usersTypes.CREATE_USER_START,
});

const createUserSuccess = (data) => ({
  type: usersTypes.CREATE_USER_SUCCESS,
  data,
});

const updateUserStart = () => ({
  type: usersTypes.UPDATE_USER_START,
});

const setUserSuccess = (data) => ({
  type: usersTypes.SET_USER_SUCCESS,
  data,
});

const setUserFailure = (error) => ({
  type: usersTypes.SET_USER_FAILURE,
  error,
});

const deleteUserStart = () => ({
  type: usersTypes.DELETE_USER_START,
});

const deleteUserSuccess = () => ({
  type: usersTypes.DELETE_USER_SUCCESS,
});

const deleteUserFailure = (error) => ({
  type: usersTypes.DELETE_USER_FAILURE,
  error,
});

/*  Case get data once. */
// export const getUsers = () => {
//   return (dispatch) => {
//     dispatch(getUsersStart());
//     service
//       .fetchUsers()
//       .then((data) => {
//         dispatch(getUsersSuccess(data));
//       })
//       .catch((e) => {
//         dispatch(getUsersFailure(e));
//       });
//   };
// };

export const getUsers = () => {
  return (dispatch) => {
    dispatch(getUsersStart());
    service.fetchUsers((data) => {
      if (data) {
        dispatch(getUsersSuccess(data));
      } else {
        dispatch(getUsersFailure('Not Found'));
      }
    });
  };
};

export const getUser = (id) => {
  return (dispatch) => {
    dispatch(getUserStart());
    service
      .fetchUser(id)
      .then((data) => {
        dispatch(getUserSuccess(data));
      })
      .catch((e) => {
        dispatch(getUserFailure(e));
      });
  };
};

export const createUser = (body) => {
  return (dispatch) => {
    dispatch(createUserStart());
    service
      .createUser(body)
      .then((data) => {
        dispatch(createUserSuccess(data));
      })
      .catch((e) => {
        dispatch(setUserFailure(e));
      });
  };
};

export const updateUser = (id, body) => {
  return (dispatch) => {
    dispatch(updateUserStart());
    service
      .updateUser(id, body)
      .then(() => {
        dispatch(setUserSuccess());
      })
      .catch((e) => {
        dispatch(setUserFailure(e));
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    dispatch(deleteUserStart());
    service
      .deleteUser(id)
      .then(() => {
        dispatch(getUsers());
        dispatch(deleteUserSuccess());
      })
      .catch((e) => {
        dispatch(deleteUserFailure(e));
      });
  };
};
