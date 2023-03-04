import Wrapper from "../../wrappers/loginWrapper";
import { useState } from "react";

const Login = () => {
  interface State {
    email: string;
    password: string | number;
    showAlert: boolean;
  }
  const initialState = {
    email: "",
    password: "",
    showAlert: false,
  };
  const [values, setValues] = useState<State>(initialState);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      setValues({ ...values, showAlert: true });
    } else {
      setValues({ ...values, showAlert: false });
    }
    console.log(values);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const Alert = () => {
    return <p className="alert">Please provide all values</p>;
  };
  return (
    <Wrapper>
      <div className="login">
        <h1 className="title">login</h1>
        <form onSubmit={onSubmit} className="formContainer">
          {values.showAlert && <Alert />}
          <div className="form-row">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              value={values.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={values.password}
              name="password"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="loginBtn">
            Log in
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Login;
