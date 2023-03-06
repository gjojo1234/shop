import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/pages/Login";
import Produkty from "./components/pages/Products";
import Register from "./components/pages/Register";
import Menu from "./components/Menu";
import { AppContext } from "./components/context/appContext";

const App: React.FC = () => {
  const values = useContext(AppContext);
  const { showMenu } = values;
  return (
    <BrowserRouter>
      <Navbar />
      {showMenu && <Menu />}
      <Routes>
        <Route path="/" element={<Produkty />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
