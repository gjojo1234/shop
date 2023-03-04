import { useState } from "react";
import Wrapper from "../../wrappers/loginWrapper";

const Register: React.FC = () => {
  interface State {
    name: string;
    email: string;
    password: string | number;
    showAlert: boolean;
  }
  const initialState = {
    name: "",
    email: "",
    password: "",
    showAlert: false,
  };
  const [values, setValues] = useState<State>(initialState);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { name, password, email } = values;
    if (!name || !password || !email) {
      setValues({ ...values, showAlert: true });
      return;
    } else {
      setValues({ ...values, showAlert: false });
    }
    console.log(values);
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const Alert = () => {
    return <p className="alert">Please provide all values</p>;
  };

  return (
    <Wrapper>
      <div className="login">
        <h1 className="title">register</h1>
        <form onSubmit={onSubmit} className="formContainer">
          {values.showAlert && <Alert />}
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={values.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
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
            Register
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Register;
