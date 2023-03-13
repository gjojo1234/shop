import styled from "styled-components";

const Wrapper = styled.section`
  nav {
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--background-color-800);
  }
  .navbarItems {
    height: 100%;
    display: flex;
    justify-content: space-around;
  }
  nav h1 {
    color: var(--light-blue-color-400);
    font-family: cursive;
    padding-left: 2rem;
  }
  .navbarItem {
    font-size: 1.3rem;
    color: var(--background-color-400);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    background-color: transparent;
    text-decoration: none;
    border-width: 0;
  }
  .navbarItem:hover {
    cursor: pointer;
    color: var(--background-color-100);
    background-color: var(--background-color-900);
    border-bottom: 0.3rem solid var(--light-blue-color-400);
  }
  .navMenu {
    display: none;
    background-color: transparent;
    border: 0;
    font-size: 1.25rem;
    color: var(--background-color-400);
    padding: 0 1rem;
  }
  .hiddenItem {
    display: none;
  }
  @media screen and (max-width: 600px) {
    nav {
      max-width: 100vw;
      height: 2.5rem;
      justify-content: space-between;
      align-items: center;
    }
    nav h1 {
      color: var(--light-blue-color-400);
      font-family: cursive;
      padding-left: 0;
    }
    .navbarItem {
      font-size: 1.25rem;
      border-right: 1px solid var(--background-color-400);
      padding: 1rem;
    }
    .navMenu {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .navbarHide {
      display: none;
    }
    .navbarItem:last-child {
      border: 0;
    }
  }
`;
export default Wrapper;
