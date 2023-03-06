import styled from "styled-components";

const Wrapper = styled.section`
  nav {
    width: 100vw;

    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
  }

  .menuItem {
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid var(--background-color-300);
    text-align: start;
    font-size: 1.5rem;
    padding: 0.5rem 0 0.5rem 1rem;
    text-decoration: none;
    color: var(--light-blue-color-400);
  }
  .menuItem button {
    background-color: transparent;
    border: 0;
    font-size: 1.5rem;
    padding: 0;
    text-decoration: none;
    color: var(--light-blue-color-400);
  }
`;

export default Wrapper;
