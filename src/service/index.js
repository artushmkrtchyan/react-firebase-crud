import db from '../confige/firebase';

/*  Case get data once. */
// export const fetchUsers = () =>
//   db
//     .ref('users')
//     .once('value')
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         return snapshot.val();
//       } else {
//         throw new Error('Not Found');
//       }
//     });

export const fetchUsers = (fn) =>
  db.ref('users').on('value', (snapshot) => {
    if (snapshot.exists()) {
      fn(snapshot.val());
    } else {
      return fn();
    }
  });

export const fetchUser = (userId) =>
  db
    .ref(`users/${userId}`)
    .once('value')
    .then((snapshot) => {
      if (snapshot.exists()) {
        return { id: snapshot.key, ...snapshot.val() };
      } else {
        throw new Error('Not Found');
      }
    });

export const createUser = (body) =>
  db
    .ref('users')
    .push(body)
    .then((res) => res.key);

export const updateUser = (userId, body) =>
  db.ref(`users/${userId}`).set(body, (err) => {
    if (err) {
      throw new Error('Not Found');
    } else {
      return true;
    }
  });

export const deleteUser = (userId) => db.ref(`users/${userId}`).remove();
