export const productState = {
  products: null,
  addProductModal: false,
  editProductModal: {
    modal: false,
    pId: "",
    pName: "",
    pDescription: "",
    pImages: null,
    pStatus: "",
    pCategory: "",
    pQuantity: "",
    pPrice: "",
    pOffer: "",
  },
  deleteProductModal: {
    modal: false,
    pId: "",
    pName: "",
  },
  snackbarState: {
    open: false,
    message: "",
  },
};

export const productReducer = (state, action) => {
  switch (action.type) {
    /* Get all product */
    case "fetchProductsAndChangeState":
      return {
        ...state,
        products: action.payload,
      };
    /* Create a product */
    case "addProductModal":
      return {
        ...state,
        addProductModal: action.payload,
      };
    /* Edit a product */
    case "editProductModalOpen":
      return {
        ...state,
        editProductModal: {
          modal: true,
          pId: action.product.pId,
          pName: action.product.pName,
          pDescription: action.product.pDescription,
          pImages: action.product.pImages,
          pStatus: action.product.pStatus,
          pCategory: action.product.pCategory,
          pQuantity: action.product.pQuantity,
          pPrice: action.product.pPrice,
          pOffer: action.product.pOffer,
        },
      };
    case "editProductModalClose":
      return {
        ...state,
        editProductModal: {
          modal: false,
          pId: "",
          pName: "",
          pDescription: "",
          pImages: null,
          pStatus: "",
          pCategory: "",
          pQuantity: "",
          pPrice: "",
          pOffer: "",
        },
      };
    /* Delete a Product */
    case "deleteProductModalOpen":
      console.log(action.product._id);
      return {
        ...state,
        deleteProductModal: {
          modal: true,
          pId: action.product._id,
          pName: action.product.pName,
        },
      };
    case "deleteProductModalClose":
      return {
        ...state,
        deleteProductModal: {
          modal: false,
          pId: "",
          pName: "",
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
