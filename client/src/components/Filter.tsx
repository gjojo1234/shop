import { useState, useContext } from "react";
import Wrapper from "../wrappers/filterWrapper";
import { AppContext } from "./context/appContext";
import { HiChevronDown, HiChevronUp, HiMagnifyingGlass } from "react-icons/hi2";
interface Filtered {
  category: string;
}
const Filter = () => {
  const [keyword, setKeyword] = useState<string>();
  const [filters, setFilters] = useState<Filtered>();
  const values = useContext(AppContext);
  const { toggleCategoryShow, toggleCategoryBtn } = values;

  const onSubmitKeyword: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(keyword);
  };
  const onSubmitFilter: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(filters);
  };
  const resetFilter: React.MouseEventHandler<HTMLButtonElement> = () => {
    setFilters(undefined);
  };

  return (
    <Wrapper>
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
              <button onClick={toggleCategoryShow} className="toggleFilterBtn">
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
                      setFilters({ ...filters, category: event.target.value })
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
                      setFilters({ ...filters, category: event.target.value })
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
                      setFilters({ ...filters, category: event.target.value })
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
    </Wrapper>
  );
};

export default Filter;
