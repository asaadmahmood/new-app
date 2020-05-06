// MEMBERS REDUCER


const membersReducerDefaultState = [];

export default (state = membersReducerDefaultState, action) => {
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
          case 'SET_MEMBERS':
        return action.members;
    default:
      return state;

    }
};