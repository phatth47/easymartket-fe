export const userState = {
  addUserModal: false,
  editUserModal: {
    modal: false,
    uId: "",
    name: "",
    phone: "",
  },
};

export const userReducer = (state, action) => {
  switch (action.type) {
    /* Create a user */
    case "addUserModal":
      return {
        ...state,
        addUserModal: action.payload,
      };
    /* Edit a User */
    case "editUserModalOpen":
      return {
        ...state,
        editUserModal: {
          modal: true,
          uId: action.user._id,
          name: action.user.name,
          phone: action.user.phoneNumber,
        },
      };
    case "editUserModalClose":
      return {
        ...state,
        editUserModal: {
          modal: false,
          uId: "",
          name: "",
          phone: "",
        },
      };
    default:
      return state;
  }
};
