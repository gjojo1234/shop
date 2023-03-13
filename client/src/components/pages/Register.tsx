import { useState, useContext, useEffect } from "react";
import Wrapper from "../../wrappers/loginWrapper";
import { AppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

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
  const [value, setValue] = useState<State>(initialState);
  const values = useContext(AppContext);
  const { registerUser, user } = values;
  const navigate = useNavigate();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { name, password, email } = value;
    if (!name || !password || !email) {
      setValue({ ...value, showAlert: true });
      return;
    } else {
      setValue({ ...value, showAlert: false });
    }
    const currentUser = { name, email, password } as State;
    registerUser(currentUser);
  }
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
        <h1 className="title">register</h1>
        <form onSubmit={onSubmit} className="formContainer">
          {value.showAlert && <Alert />}
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={value.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
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
            Register
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Register;
