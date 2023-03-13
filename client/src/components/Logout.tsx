import { useContext } from "react";
import Wrapper from "../wrappers/logoutWrapper";
import { AppContext } from "./context/appContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const values = useContext(AppContext);
  const { removeFromLocalStorage } = values;
  const navigate = useNavigate();
  const refreshAndRemoveLS = () => {
    removeFromLocalStorage();
    navigate(0);
  };
  return (
    <Wrapper>
      <button className="logout" onClick={refreshAndRemoveLS}>
        Logout
      </button>
    </Wrapper>
  );
};

export default Logout;
