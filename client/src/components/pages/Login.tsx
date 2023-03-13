import Wrapper from "../../wrappers/loginWrapper";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

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
  const [value, setValue] = useState<State>(initialState);
  const values = useContext(AppContext);
  const { loginUser, user } = values;
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = value;
    if (!email || !password) {
      setValue({ ...value, showAlert: true });
    } else {
      setValue({ ...value, showAlert: false });
    }
    const currentUser = { email, password } as State;
    loginUser(currentUser);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const Alert = () => {
    return <p className="alert">Please provide all values</p>;
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 100);
    }
  }, [user, navigate]);
  return (
    <Wrapper>
      <div className="login">
        <h1 className="title">login</h1>
        <form onSubmit={onSubmit} className="formContainer">
          {value.showAlert && <Alert />}
          <div className="form-row">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              value={value.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={value.password}
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
