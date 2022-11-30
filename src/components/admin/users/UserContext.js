export const userState = {
  addUserModal: false,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    /* Create a user */
    case "addUserModal":
      return {
        ...state,
        addUserModal: action.payload,
      };
    default:
      return state;
  }
};
