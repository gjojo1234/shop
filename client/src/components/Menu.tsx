import { useContext } from "react";

import Wrapper from "../wrappers/menuWrapper";
import { AppContext } from "./context/appContext";

const Menu = () => {
  const values = useContext(AppContext);
  const { showShop, toggleShowMenu } = values;
  return (
    <Wrapper>
      <nav>
        <a href="/" className="menuItem">
          <button onClick={toggleShowMenu}>Produkty</button>
        </a>

        <a href="/login" className="menuItem">
          <button onClick={toggleShowMenu}>Prihlásenie</button>
        </a>
        <a href="/register" className="menuItem">
          <button onClick={toggleShowMenu}>Registrácia</button>
        </a>
        <button onClick={showShop} className="menuItem">
          Nákupný košík
        </button>
      </nav>
    </Wrapper>
  );
};

export default Menu;
