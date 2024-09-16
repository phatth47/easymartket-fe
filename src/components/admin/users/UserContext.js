export const userState = {
  addUserModal: false,
  editUserModal: {
    modal: false,
    uId: "",
    name: "",
    phone: "",
  },
  deleteUserModal: {
    modal: false,
    uId: "",
    name: "",
  },
  snackbarState: {
    open: false,
    message: "",
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
    /* Delete a User */
    case "deleteUserModalOpen":
      return {
        ...state,
        deleteUserModal: {
          modal: true,
          uId: action.user._id,
          name: action.user.name,
        },
      };
    case "deleteUserModalClose":
      return {
        ...state,
        deleteUserModal: {
          modal: false,
          uId: "",
          name: "",
        },
      };
    case "showSnackbar":
      return {
        ...state,
        snackbarState: {
          open: true,
          message: action.message,
        },
      };
    case "hideSnackbar":
      return {
        ...state,
        snackbarState: {
          open: false,
          message: "",
        },
      };
    default:
      return state;
  }
};
