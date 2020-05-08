import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_MEMBER
 const addMember =(
     {
name = '',
age= '',
sex = '',
package = '',
address = '',
createdAt= 0

}={}
     )=>({
type: 'ADD_MEMBER',
member: {
    id: uuid(),
    name,
    age,
    sex,
    package,
    address,
    createdAt

}
 });

 // REMOVE_MEMBER
 const removeMember =({id}={}) => ({
     type: 'REMOVE_MEMBER',
     id
 });
 //EDIT_MEMBER
 const editMember =(id, updates) =>({
     type: 'EDIT_MEMBER',
     id,
     updates
 });
 //SET_TEXT_FILTER
 const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
  });

  // SORT_BY_DATE
  const sortByDate = () => ({
    type: 'SORT_BY_DATE'
  });

  // SORT_BY_AMOUNT
  const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
  });

  // SET_START_DATE
  const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
  });

  // SET_END_DATE
  const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
  });

  // Members Reducer

const membersReducerDefaultState = [];

const membersReducer = (state = membersReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_MEMBER':
      return [
        ...state,
        action.member
      ];
    case 'REMOVE_MEMBER':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_MEMBER':
      return state.map((member) => {
        if (member.id === action.id) {
          return {
            ...member,
            ...action.updates
          };
        } else {
          return member;
        };
      });
    default:
      return state;
  }
};

// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_TEXT_FILTER':
        return {
          ...state,
          text: action.text
        };
      case 'SORT_BY_AMOUNT':
        return {
          ...state,
          sortBy: 'amount'
        };
      case 'SORT_BY_DATE':
        return {
          ...state,
          sortBy: 'date'
        };
      case 'SET_START_DATE':
        return {
          ...state,
          startDate: action.startDate
        };
      case 'SET_END_DATE':
        return {
          ...state,
          endDate: action.endDate
        };
      default:
        return state;
    }
  };
// Get visible members
const getVisibleMembers = (members, { text, sortBy, startDate, endDate }) => {
    return members.filter((member) => {
      const MtartDateMatch = typeof startDate !== 'number' || member.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || member.createdAt <= endDate;
      const textMatch = member.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };
  // Store creation

const store = createStore(
    combineReducers({
      members: mambersReducer,
      filters: filtersReducer
    })
  );



