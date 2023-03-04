import React, { useReducer, useMemo, useCallback } from "react";
import reducer from "./reducer";
interface InitState {
  toggleCategoryBtn: boolean;
  toggleCategoryShow(event: React.MouseEvent<HTMLButtonElement>): void;
  showShopState: boolean;
  showShop(event: React.MouseEvent<HTMLButtonElement>): void;
}
const initialState: InitState = {
  toggleCategoryBtn: false,
  toggleCategoryShow() {},
  showShopState: false,
  showShop() {},
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

  const values = useMemo(
    () => ({
      ...state,
      toggleCategoryShow,
      showShop,
    }),
    [state, toggleCategoryShow, showShop]
  );
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
