import { useState, useContext } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Wrapper from "../wrappers/loginIconWrapper";
import { AppContext } from "./context/appContext";
import Logout from "./Logout";

const LoginIcon = () => {
  const values = useContext(AppContext);
  const { user } = values;
  console.log(user?.name);

  const [icon, setIcon] = useState(false);
  const changeIcon = () => {
    setIcon(!icon);
  };
  return (
    <Wrapper>
      <div className="logicon">
        <div className="loguser">
          {user?.name}
          <button onClick={changeIcon} className="loginIconBtn">
            {icon ? <FiChevronUp /> : <FiChevronDown />}
          </button>
        </div>
        {icon && <Logout />}
      </div>
    </Wrapper>
  );
};

export default LoginIcon;
