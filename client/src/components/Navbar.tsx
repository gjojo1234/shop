import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../wrappers/navbarWrapper";
import { FiShoppingCart } from "react-icons/fi";
import { AppContext } from "./context/appContext";
import Shop from "./Shop";
const Navbar: React.FC = () => {
  const values = useContext(AppContext);
  const { showShop, showShopState } = values;
  return (
    <Wrapper>
      {showShopState && <Shop />}
      <nav className="nav">
        <Link to="/" className="navbarItem">
          Produkty
        </Link>
        <Link to="/login" className="navbarItem">
          Prihlásenie
        </Link>
        <Link to="/register" className="navbarItem">
          Registrácia
        </Link>
        <button onClick={showShop} className="navbarItem">
          <FiShoppingCart />
        </button>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
