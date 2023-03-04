import styled from "styled-components";

const Wrapper = styled.section`
  .shop {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .shopContainer {
    position: relative;
    min-width: 25rem;
    min-height: 15rem;
    max-height: 70vh;
    padding: 2rem;
    background-color: white;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: scroll;
  }
  .shopTitle {
    font-size: 2rem;
    margin-bottom: 2rem;
    letter-spacing: 0.1rem;
    color: blue;
  }
  .closeBtn {
    position: absolute;
    top: 0.2rem;
    right: 0.3rem;
    font-size: 2rem;
    color: red;
    background: transparent;
    border: 0;
  }
  .closeBtn:hover {
    cursor: pointer;
  }

  .shopImg {
    width: 5rem;
    height: 5rem;
  }
  .productShop {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .productShop h1 {
    padding-left: 1rem;
    color: var(--light-blue-color-400);
  }
  table,
  th,
  td {
    border: 1px solid var(--background-color-400);
  }
  table {
    border-collapse: collapse;
  }

  thead {
    background-color: var(--background-color-600);
    color: var(--background-color-100);
    letter-spacing: 0.1rem;
  }
  th {
    min-width: 4rem;
    padding: 1rem;
  }
  td {
    padding: 1rem;
  }
  td button {
    font-size: 1.2rem;

    border: 0;
    background: transparent;
    padding-right: 1rem;
    color: red;
  }
  td button:hover {
    cursor: pointer;
  }
  tbody tr:nth-child(even) {
    background-color: var(--background-color-200);
  }
  tbody tr:nth-child(odd) {
    background-color: var(--background-color-100);
  }
  .totalPriceBtn {
    background-color: var(--green-color-500);
    margin-top: 1rem;
    font-size: 1.5rem;
    padding: 0.2rem 2rem 0.3rem 2rem;
    border-radius: 5px;
    border: 0;
    color: var(--background-color-50);
  }
  .totalPriceBtn:hover {
    cursor: pointer;
    background-color: var(--green-color-600);
  }
`;

export default Wrapper;
