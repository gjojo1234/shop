import styled from "styled-components";

const Wrapper = styled.section`
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
`;

export default Wrapper;
