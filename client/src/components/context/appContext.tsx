import React, {
  useReducer,
  useMemo,
  useCallback,
  PropsWithChildren,
} from "react";
import reducer from "./reducer";
import axios from "axios";

interface InitState {
  toggleCategoryBtn: boolean;
  toggleCategoryShow(event: React.MouseEvent<HTMLButtonElement>): void;
  showShopState: boolean;
  showShop(event: React.MouseEvent<HTMLButtonElement>): void;
  toggleShowMenu(event: React.MouseEvent<HTMLButtonElement>): void;
  registerUser(currentUser: {
    name: string;
    email: string;
    password: string | number;
  }): void;
  loginUser(currentUser: { email: string; password: string | number }): void;
  showMenu: boolean;

  user: { name: string; email: string } | null;
  token: string | null;
  removeFromLocalStorage(): void;
}
const userValue = window.localStorage.getItem("user");
const tokenValue = window.localStorage.getItem("token");
const initialState: InitState = {
  toggleCategoryBtn: false,
  toggleCategoryShow() {},
  showShopState: false,
  showShop() {},
  toggleShowMenu() {},
  registerUser() {},
  loginUser() {},
  showMenu: false,
  user: userValue ? JSON.parse(userValue) : null,
  token: tokenValue,
  removeFromLocalStorage() {},
};

const AppContext = React.createContext<InitState>(initialState);

const AppProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleCategoryShow = useCallback(() => {
    dispatch({
      type: "TOGGLE_CATEGORY_BTN",
      payload: {
        user: state.user,
        token: state.token,
      },
    });
  }, [state]);
  const showShop = useCallback(() => {
    dispatch({
      type: "SHOW_SHOP",
      payload: {
        user: state.user,
        token: state.token,
      },
    });
  }, [state]);
  const toggleShowMenu = useCallback(() => {
    dispatch({
      type: "SHOW_MENU",
      payload: {
        user: state.user,
        token: state.token,
      },
    });
  }, [state]);

  const addUserToLocalStorage = ({
    user,
    token,
  }: {
    user: { name: string; email: string };
    token: string;
  }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };
  const removeFromLocalStorage = useCallback(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }, []);
  const registerUser = useCallback(
    async (currentUser: {
      name: string;
      email: string;
      password: string | number;
    }) => {
      try {
        const response = await axios.post("/auth/register", currentUser);

        const { user, token } = response.data;
        addUserToLocalStorage({ user, token });
        dispatch({
          type: "USER_SUCCESS",
          payload: {
            user,
            token,
          },
        });
      } catch (error) {}
    },
    []
  );
  const loginUser = useCallback(
    async (currentUser: { email: string; password: string | number }) => {
      try {
        const response = await axios.post("/auth/login", currentUser);

        const { user, token } = response.data;
        addUserToLocalStorage({ user, token });
        dispatch({
          type: "USER_SUCCESS",
          payload: {
            user,
            token,
          },
        });
      } catch (error) {}
    },
    []
  );
  const values = useMemo(
    () => ({
      ...state,
      toggleCategoryShow,
      showShop,
      toggleShowMenu,
      registerUser,
      loginUser,
      removeFromLocalStorage,
    }),
    [
      state,
      toggleCategoryShow,
      showShop,
      toggleShowMenu,
      registerUser,
      loginUser,
      removeFromLocalStorage,
    ]
  );
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
