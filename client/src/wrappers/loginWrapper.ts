import styled from "styled-components";

const Wrapper = styled.section`
  .login {
    background-color: var(--background-color-200);
    min-height: calc(100vh - 3rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title {
    color: var(--light-blue-color-400);
    padding-bottom: 2rem;
    text-transform: uppercase;
    font-size: 2rem;
  }
  .formContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 20rem;
    height: auto;
    background-color: white;
    color: var(--light-blue-color-400);
    border-radius: 1rem;
    box-shadow: 0px 0px 15px var(--background-color-500);
  }
  .form-row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 1rem;
    font-size: 1.25rem;
  }
  .loginBtn {
    margin: 1rem auto;
    padding: 0.25rem 2rem 0.4rem 2rem;
    border-radius: 0.5rem;
    border: 0 transparent;
    color: var(--background-color-50);
    background: var(--green-color-500);
  }
  .loginBtn:hover {
    transform: scale(1.03);
    cursor: pointer;

    background-color: var(--green-color-600);
  }
  .alert {
    color: red;
    font-size: 1.5rem;
  }
`;

export default Wrapper;
