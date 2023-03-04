import React, { useContext, useState, useEffect } from "react";
import Wrapper from "../../wrappers/productsWrapper";
import { HiChevronDown, HiChevronUp, HiMagnifyingGlass } from "react-icons/hi2";
import { AppContext } from "../context/appContext";
interface Filter {
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
  const [keyword, setKeyword] = useState<string>();
  const [filter, setFilter] = useState<Filter>();
  const [productToShop, setProductToShop] = useState<ProductToShop[]>([]);
  const [products, setProducts] = useState<Product[] | null>();
  const values = useContext(AppContext);
  const { toggleCategoryShow, toggleCategoryBtn } = values;

  async function fetchProducts<Product>(resourceUrl: string): Promise<Product> {
    const response = await fetch(resourceUrl);
    return await response.json();
  }

  const onSubmitKeyword: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(keyword);
  };
  const onSubmitFilter: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(filter);
  };
  const resetFilter: React.MouseEventHandler<HTMLButtonElement> = () => {
    setFilter(undefined);
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
  useEffect(() => {
    window.localStorage.setItem("buy", `${JSON.stringify(productToShop)}`);
  }, [productToShop]);
  useEffect(() => {
    fetchProducts<Product[]>("./src/products.json").then((products) => {
      let newProducts: Product[] = products;
      setProducts(newProducts);
    });
  }, []);
  return (
    <Wrapper>
      <section className="home">
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
                        setFilter({ ...filter, category: event.target.value })
                      }
                      checked={filter?.category === "obuv"}
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
                        setFilter({ ...filter, category: event.target.value })
                      }
                      checked={filter?.category === "mikina"}
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
                        setFilter({ ...filter, category: event.target.value })
                      }
                      checked={filter?.category === "tričko"}
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
