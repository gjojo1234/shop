interface Action {
  type: string;
  payload: {
    user: { name: string; email: string } | null;
    token: string | null;
  };
}
interface State {
  toggleCategoryBtn: boolean;
  showShopState: boolean;
  showMenu: boolean;
  user: { name: string; email: string } | null;
  token: string | null;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "TOGGLE_CATEGORY_BTN":
      return {
        ...state,
        toggleCategoryBtn: !state.toggleCategoryBtn,
      };
    case "SHOW_SHOP":
      return {
        ...state,
        showShopState: !state.showShopState,
      };
    case "SHOW_MENU":
      return {
        ...state,
        showMenu: !state.showMenu,
      };
    case "USER_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default reducer;
