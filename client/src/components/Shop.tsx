import { useState, useContext, useEffect } from "react";
import Wrapper from "../wrappers/shopWrapper";
import { HiOutlineXMark } from "react-icons/hi2";
import { AppContext } from "./context/appContext";

interface Items {
  id: number;
  name: string;
  price: number;
  imageURL: string;
}

const Shop = () => {
  const [items, setItems] = useState<Items[]>([]);
  const [total, setTotal] = useState<number[]>([]);

  const values = useContext(AppContext);
  const { showShop } = values;

  const removeItem = (name: string) => {
    if (items !== null) {
      const filtered = items.filter((item) => item.name !== name);

      localStorage.setItem("buy", JSON.stringify(filtered));
    }
  };
  useEffect(() => {
    const itemObject: Items[] = JSON.parse(
      `${window.localStorage.getItem("buy")}`
    );
    setItems(itemObject);
    if (itemObject !== null) {
      const sum: number = items.reduce((acc, result) => acc + result.price, 0);
      setTotal([sum]);
    }
  }, [items]);
  return (
    <Wrapper>
      <div className="shop" data-testid="shop-container">
        <div className="shopContainer">
          <h1 className="shopTitle">Košík</h1>
          <button onClick={showShop} className="closeBtn">
            <HiOutlineXMark />
          </button>
          <table>
            <thead>
              <tr>
                <th>Produkt</th>
                <th>Cena</th>
              </tr>
            </thead>

            <tbody>
              {items &&
                items.map((item) => {
                  const { id, name, price, imageURL } = item;

                  return (
                    <tr key={id}>
                      <td>
                        <div className="productShop">
                          <button onClick={() => removeItem(name)}>
                            <HiOutlineXMark />
                          </button>
                          <img
                            src={imageURL}
                            alt={name}
                            className="shopImg"
                          ></img>
                          <h1>{name}</h1>
                        </div>
                      </td>
                      <td>{price}€</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <button className="totalPriceBtn">Zaplatiť: {`${total}`}€</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Shop;
