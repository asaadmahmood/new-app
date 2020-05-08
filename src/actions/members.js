import uuid from 'uuid';
import database from '../firebase/firebase';

export const addMember = (member) => ({
  type: 'ADD_MEMBER',
  member
});
export const startAddMember = (memberData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      name = '',
      age = '',
      sex = '',
      packege = 0,
      address = '',
      createdAt = 0
    } = memberData;
    const member = { name, age, sex, packege, address, createdAt };

    database.ref(`users/${uid}/members`).push(member).then((ref) => {
      dispatch(addMember({
        id: ref.key,
        ...member
      }));
    });
  };
};
// REMOVE_MEMBER
export const removeMember = ({ id } = {}) => ({
  type: 'REMOVE_MEMBER',
  id
});
export const startRemoveMember = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/members/${id}`).remove().then(() => {
      dispatch(removeMember({ id }));
    });
  };
};
// EDIT_MEMBER
export const editMember = (id, updates) => ({
  type: 'EDIT_MEMBER',
  id,
  updates
});
export const startEditMember = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/members/${id}`).update(updates).then(() => {
      dispatch(editMember(id, updates));
    });
  };
};

//SET_MEMBERS

const setMembers = (members) => ({
  type: 'SET_MEMBERS',
  members
});

export const startSetMembers = () => {
  console.log('asdsad');
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/members`)
      .once('value')
      .then((snapshot) => {
        const members = [];

        snapshot.forEach((childSnapshot) => {
          members.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setMembers(members));
      });
  };
};
