import styled from "styled-components";

const Wrapper = styled.section`
  .home {
    min-height: calc(100vh - 4rem);
    min-width: 100vw;
    background-color: var(--background-color-200);
    display: flex;

    justify-content: flex-start;
  }

  //section filters
  .sectionFilter {
    height: auto;
    background-color: var(--background-color-200);
  }
  nav {
    width: 17rem;
    height: auto;
    background-color: var(--background-color-900);
    color: var(--background-color-100);
  }
  .title {
    text-transform: uppercase;
  }
  .reset {
    color: var(--light-blue-color-400);
    background: transparent;
    border-width: 0;
  }
  .reset:hover {
    color: var(--light-blue-color-600);
    cursor: pointer;
  }
  .filterComponent {
    min-width: 10rem;
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 0;
    margin: 0 2rem;
    border-bottom: 1px solid var(--background-color-800);
    border: 80%;
  }
  .keyword {
    position: relative;
  }
  .inputKeyword {
    width: 100%;
    height: 2rem;
    background-color: var(--background-color-800);
    border-width: 0;
    color: var(--background-color-400);
  }
  .inputKeyword::placeholder {
    padding-left: 1rem;
    font-size: 1rem;
    color: var(--background-color-400);
  }
  .inputKeyword:focus {
    background-color: var(--background-color-700);
    color: var(--background-color-300);
  }
  .keywordBtn {
    position: absolute;
    font-size: 1.25rem;
    top: 1.1rem;
    right: 0.8rem;
    border-width: 0;
    background: transparent;
    color: var(--background-color-400);
  }
  .keywordBtn:hover {
    cursor: pointer;
    color: var(--background-color-500);
  }
  .toggleFilterBtn {
    font-size: 1.25rem;
    background: transparent;
    border-width: 0;
    color: var(--background-color-400);
  }
  .toggleFilterBtn:hover {
    cursor: pointer;
  }
  .categoryFilter {
    display: flex;
    justify-content: space-between;
  }
  .categoryItems {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .category {
    padding: 0.8rem 0;
    margin: 0 2rem;
    border-bottom: 1px solid var(--background-color-800);
    border: 80%;
  }
  label {
    padding-left: 0.5rem;
    font-size: 1rem;
    color: var(--background-color-400);
  }
  .inputCat {
    transform: translateY(10%);
  }
  .inputCat:hover {
    cursor: pointer;
  }
  .filterBtn {
    padding: 0.5rem 2rem;
    width: 50%;
    text-align: center;
    margin: 1rem 2rem;
    background-color: var(--light-blue-color-400);
    border: 0;
    border-radius: 4px;
    color: var(--background-color-100);
    font-weight: 600;
    letter-spacing: 0.1rem;
  }
  .filterBtn:hover {
    cursor: pointer;
    background-color: var(--light-blue-color-600);
  }

  //section containers

  .sectionProducts {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 2.5rem;
    background-color: var(--background-color-200);
  }
  .container {
    position: relative;
    margin-left: 2.5rem;
    margin-bottom: 2rem;
    padding: 1rem 2rem;
    width: 17rem;
    height: 20rem;
    background-color: white;
    box-shadow: 0 0 1rem var(--background-color-300);
  }
  .container img {
    width: 12rem;
    height: 12rem;
  }
  .container h1 {
    color: var(--light-blue-color-400);
  }
  .price {
    position: absolute;
    bottom: 1rem;
    right: 2rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--green-color-500);
  }
  .addToShop {
    text-align: center;
    width: 5rem;
    color: var(--background-color-50);
    background: var(--green-color-500);
    padding: 0.1rem 0.2rem;
    border: 0;
    border-radius: 5px;
    font-size: 0.9rem;

    letter-spacing: 0.05rem;
  }
  .addToShop:hover {
    cursor: pointer;
    background: var(--green-color-600);
  }

  @media screen and (max-width: 600px) {
    .home {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    .sectionProducts {
      width: 100vw;
      height: auto;
      padding-top: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
    .sectionFilter {
      width: 100vw;

      background-color: var(--background-color-200);
    }
    .container {
      margin: 1rem 0;
      padding: 0.5rem 1rem;
      width: 16rem;
      height: 15rem;
    }
    .container img {
      width: 60%;
      height: 55%;
    }
  }
`;
export default Wrapper;
