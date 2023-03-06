import styled from "styled-components";

const Wrapper = styled.section`
  .home {
    display: flex;
    justify-content: flex-start;
  }
  .sectionFilter {
    width: 100vw;
    height: auto;
    background-color: var(--background-color-200);
  }
  //section containers

  .sectionProducts {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
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
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    .sectionProducts {
      padding-top: 0;
    }
    .sectionFilter {
      width: 100vw;

      background-color: var(--background-color-200);
    }
    .container {
      margin: 1rem 0 1rem 1rem;
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
