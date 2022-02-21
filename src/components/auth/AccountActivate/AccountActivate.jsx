import React, { useContext, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import AlertContext from "../../../contexts/AlertContext";
import Alert from "../../Alert/Alert";

function AccountActivate() {
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
      setAlertMessage("Your passwords are different!");
      setAlertOn(true);
    } else {
      try {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/api/auth/activate/${token}`,
          { password }
        );
        setAlertMessage("Now you can enter the Wonderland !");
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
    <div className="acivate-account-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1>Account activation</h1>
        <label htmlFor="Password" className="auth-input">
          <input
            type="password"
            id="password"
            placeholder="Enter your new password"
            value={password}
            onChange={handlePassword}
          />
        </label>
        <label htmlFor="repeat-password" className="auth-input">
          <input
            type="password"
            id="repeat-password"
            placeholder="Enter your new password once more"
            value={repeatPassword}
            onChange={handleRepeatPassword}
          />
        </label>
        <div className="buttons">
          <button className="auth-submit" type="submit">
            Let me In
          </button>
        </div>
      </form>
      {alertOn && <Alert />}
    </div>
  );
}

export default AccountActivate;
