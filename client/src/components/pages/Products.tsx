import React, { useState, useEffect, useContext } from "react";
import Wrapper from "../../wrappers/productsWrapper";
import { AppContext } from "../context/appContext";
import { HiChevronDown, HiChevronUp, HiMagnifyingGlass } from "react-icons/hi2";
import axios from "axios";

interface Filtered {
  category: string;
}

interface ProductToShop {
  id: number;
  name: string;
  price: number;
  imageURL: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  color: string;
  price: number;
  imageURL: string;
}
const Products = () => {
  const [productToShop, setProductToShop] = useState<ProductToShop[]>([]);
  const [products, setProducts] = useState<Product[] | null>([]);
  const [keyword, setKeyword] = useState<string>();
  const [filters, setFilters] = useState<Filtered>();
  const values = useContext(AppContext);
  const { toggleCategoryShow, toggleCategoryBtn } = values;

  const getProducts = async () => {
    try {
      let { data } = await axios.get("/product");
      let { products } = data;
      setProducts(products);
    } catch (error) {}
  };

  const addToShop = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number,
    name: string,
    price: number,
    imageURL: string
  ) => {
    const item = { id, name, price, imageURL };

    setProductToShop([...productToShop, item]);
  };

  const onSubmitKeyword: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    try {
      e.preventDefault();
      let { data } = await axios.get(`/product/filter?name=${keyword}`);
      let { products } = data;

      setProducts(products);
    } catch (error) {}
  };
  const onSubmitFilter: React.FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault();
      let { data } = await axios.get(
        `/product/filter?category=${filters?.category}`
      );
      let { products } = data;

      setProducts(products);
    } catch (error) {}
  };
  const resetFilter: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    try {
      e.preventDefault();
      setFilters(undefined);
      let { data } = await axios.get(`/product`);
      let { products } = data;

      setProducts(products);
    } catch (error) {}
  };

  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    window.localStorage.setItem("buy", `${JSON.stringify(productToShop)}`);
  }, [productToShop]);

  return (
    <Wrapper>
      <section className="home">
        <section className="sectionFilter">
          <nav>
            <div className="filterComponent">
              <h1 className="title">filter</h1>
              <button className="reset" onClick={resetFilter}>
                Reset
              </button>
            </div>
            <form onSubmit={onSubmitKeyword}>
              <div className="filterComponent keyword">
                <input
                  type="text"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setKeyword(event.target.value)
                  }
                  placeholder="Názov..."
                  className="inputKeyword"
                />
                <button type="submit" className="keywordBtn">
                  {<HiMagnifyingGlass />}
                </button>
              </div>
            </form>
            <form onSubmit={onSubmitFilter}>
              <div className="category">
                <div className="categoryFilter">
                  <p>Kategória</p>
                  <button
                    type="button"
                    onClick={toggleCategoryShow}
                    className="toggleFilterBtn"
                  >
                    {toggleCategoryBtn ? <HiChevronUp /> : <HiChevronDown />}
                  </button>
                </div>
                {toggleCategoryBtn && (
                  <div className="categoryItems">
                    <div className="categoryItem ">
                      <input
                        type="radio"
                        id="category1"
                        name="category"
                        value="obuv"
                        className="inputCat"
                        onChange={(event) =>
                          setFilters({
                            ...filters,
                            category: event.target.value,
                          })
                        }
                        checked={filters?.category === "obuv"}
                      />
                      <label htmlFor="category1">Obuv</label>
                    </div>
                    <div className="categoryItem">
                      <input
                        type="radio"
                        id="category2"
                        name="category"
                        value="mikina"
                        className="inputCat"
                        onChange={(event) =>
                          setFilters({
                            ...filters,
                            category: event.target.value,
                          })
                        }
                        checked={filters?.category === "mikina"}
                      />
                      <label htmlFor="category2">Mikina</label>
                    </div>
                    <div className="categoryItem">
                      <input
                        type="radio"
                        id="category3"
                        name="category"
                        value="tričko"
                        className="inputCat"
                        onChange={(event) =>
                          setFilters({
                            ...filters,
                            category: event.target.value,
                          })
                        }
                        checked={filters?.category === "tričko"}
                      />
                      <label htmlFor="category3">Tričko</label>
                    </div>
                  </div>
                )}
              </div>
              <button type="submit" className="filterBtn">
                Filtrovať
              </button>
            </form>
          </nav>
        </section>
        <section className="sectionProducts">
          {products?.map((item) => {
            const { id, name, category, color, price, imageURL } = item;
            return (
              <div className="container" key={id}>
                <img src={imageURL} alt={name}></img>
                <h1>{name}</h1>
                <p>Kategória: {category}</p>
                <p>Farba: {color}</p>
                <button
                  onClick={(e) => addToShop(e, id, name, price, imageURL)}
                  className="addToShop"
                >
                  Kúpiť
                </button>
                <p className="price">{price}€</p>
              </div>
            );
          })}
        </section>
      </section>
    </Wrapper>
  );
};

export default Products;
