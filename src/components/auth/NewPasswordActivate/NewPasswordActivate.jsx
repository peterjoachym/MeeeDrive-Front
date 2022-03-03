import React, { useContext, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import AlertContext from "../../../contexts/AlertContext";
import Alert from "../../Alert/Alert";
import LogoFrontPage from "../LogoFrontPage/LogoFrontPage";

function NewPasswordActivate() {
  const { alertOn, setAlertMessage, setAlertOn } = useContext(AlertContext);
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setAlertMessage("Your passwords are not the same!");
      setAlertOn(true);
    } else {
      try {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/api/auth/new-password/${token}`,
          { password }
        );
        setAlertMessage("Welcome back to Wonderland !");
        setAlertOn(true);
        navigate("/");
      } catch (err) {
        setAlertMessage(err.response.data);
        setAlertOn(true);
      }
    }
    setPassword("");
    setRepeatPassword("");
  };

  return (
    <>
      <LogoFrontPage />
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="password" className="auth-input">
          <input
            type="password"
            id="password"
            className="input"
            placeholder="Enter your new password"
            value={password}
            onChange={handlePassword}
          />
        </label>
        <label htmlFor="repeat-password" className="auth-input">
          <input
            type="password"
            id="repeat-password"
            className="input"
            placeholder="Enter your new password once more"
            value={repeatPassword}
            onChange={handleRepeatPassword}
          />
        </label>
        <button className="main__button" type="submit">
          Let me In
        </button>
      </form>
      {alertOn && <Alert />}
    </>
  );
}

export default NewPasswordActivate;
