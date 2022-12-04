export const categoryState = {
  categories: [],
  addCategoryModal: false,
  editCategoryModal: {
    modal: false,
    cId: null,
    des: "",
    status: "",
  },
  loading: false,
  deleteCategoryModal: {
    modal: false,
    cId: "",
    cName: "",
  },
  snackbarState: {
    open: false,
    message: "",
  },
};

export const categoryReducer = (state, action) => {
  switch (action.type) {
    /* Get all category */
    case "fetchCategoryAndChangeState":
      return {
        ...state,
        categories: action.payload,
      };
    /* Create a category */
    case "addCategoryModal":
      return {
        ...state,
        addCategoryModal: action.payload,
      };
    /* Edit a category */
    case "editCategoryModalOpen":
      return {
        ...state,
        editCategoryModal: {
          modal: true,
          cId: action.cId,
          des: action.des,
          status: action.status,
        },
      };
    case "editCategoryModalClose":
      return {
        ...state,
        editCategoryModal: {
          modal: false,
          cId: null,
          des: "",
          status: "",
        },
      };
    case "loading":
      return {
        ...state,
        loading: action.payload,
      };
    /* Delete a Category */
    case "deleteCategoryModalOpen":
      return {
        ...state,
        deleteCategoryModal: {
          modal: true,
          cId: action.cId,
          cName: action.cName,
        },
      };
    case "deleteCategoryModalClose":
      return {
        ...state,
        deleteCategoryModal: {
          modal: false,
          cId: "",
          cName: "",
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
