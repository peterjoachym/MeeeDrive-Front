import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AlertContext from "../../../contexts/AlertContext";
import UserContext from "../../../contexts/UserContext";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setAlertMessage, setAlertOn } = useContext(AlertContext);
  const { refreshToken } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setAlertMessage("You need to enter your credentials");
      setAlertOn(true);
    } else {
      try {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/api/auth/login`,
          { email, password },
          { withCredentials: true }
        );
        refreshToken();
        navigate("/");
      } catch (err) {
        if (!err.response) {
          setAlertMessage("Ooops something get wrong in the foreign land !");
          setAlertOn(true);
        } else {
          setAlertMessage(err.response.data);
          setAlertOn(true);
        }
      }
    }
  };

  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="auth-input">
          <input
            id="email"
            type="email"
            className="input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="auth-input" htmlFor="password">
          <input
            type="password"
            id="password"
            className="input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="main__button" type="submit">
          Log In
        </button>
      </form>
    </>
  );
};

export default Login;
