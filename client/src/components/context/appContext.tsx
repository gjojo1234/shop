import React, { useReducer, useMemo, useCallback } from "react";
import reducer from "./reducer";
interface InitState {
  toggleCategoryBtn: boolean;
  toggleCategoryShow(event: React.MouseEvent<HTMLButtonElement>): void;
  showShopState: boolean;
  showShop(event: React.MouseEvent<HTMLButtonElement>): void;
  toggleShowMenu(event: React.MouseEvent<HTMLButtonElement>): void;
  showMenu: boolean;
}
const initialState: InitState = {
  toggleCategoryBtn: false,
  toggleCategoryShow() {},
  showShopState: false,
  showShop() {},
  toggleShowMenu() {},
  showMenu: false,
};

const AppContext = React.createContext<InitState>(initialState);

const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleCategoryShow = useCallback(() => {
    dispatch({ type: "TOGGLE_CATEGORY_BTN" });
  }, []);
  const showShop = useCallback(() => {
    dispatch({ type: "SHOW_SHOP" });
  }, []);
  const toggleShowMenu = useCallback(() => {
    dispatch({ type: "SHOW_MENU" });
  }, []);

  const values = useMemo(
    () => ({
      ...state,
      toggleCategoryShow,
      showShop,
      toggleShowMenu,
    }),
    [state, toggleCategoryShow, showShop, toggleShowMenu]
  );
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
