import React, { useContext } from "react";

import Wrapper from "../wrappers/navbarWrapper";
import { FiShoppingCart } from "react-icons/fi";
import { HiBars4 } from "react-icons/hi2";
import { AppContext } from "./context/appContext";
import Shop from "./Shop";
import { Link } from "react-router-dom";
import LoginIcon from "./LoginIcon";

const Navbar: React.FC = () => {
  const values = useContext(AppContext);
  const { showShop, showShopState, toggleShowMenu, user } = values;

  return (
    <Wrapper>
      {showShopState && <Shop />}
      <nav>
        <button onClick={toggleShowMenu} className="navMenu">
          <HiBars4 />
        </button>
        <div>
          <h1>Trial Shop</h1>
        </div>
        <div className="navbarItems">
          <Link to="/" className="navbarItem navbarHide">
            Produkty
          </Link>

          <Link
            to="/login"
            className={user ? "hiddenItem" : "navbarItem navbarHide"}
          >
            Prihlásenie
          </Link>
          <Link
            to="/register"
            className={user ? "hiddenItem" : "navbarItem navbarHide"}
          >
            Registrácia
          </Link>

          <button onClick={showShop} className="navbarItem">
            <FiShoppingCart />
          </button>
          {user && <LoginIcon />}
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
