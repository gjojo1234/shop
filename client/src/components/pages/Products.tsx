import React, { useState, useEffect } from "react";
import Wrapper from "../../wrappers/productsWrapper";

import Filter from "../Filter";

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
  const [products, setProducts] = useState<Product[] | null>();

  async function fetchProducts<Product>(resourceUrl: string): Promise<Product> {
    const response = await fetch(resourceUrl);
    return await response.json();
  }

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
        <section className="sectionFilter">{<Filter />}</section>
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
