interface Action {
  type: string;
}
interface State {
  toggleCategoryBtn: boolean;
  showShopState: boolean;
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
    default:
      return state;
  }
};

export default reducer;
