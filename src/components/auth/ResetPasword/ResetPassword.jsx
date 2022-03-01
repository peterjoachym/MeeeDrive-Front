import React, { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AlertContext from "../../../contexts/AlertContext";
import Alert from "../../Alert/Alert";
import LogoFrontPage from "../LogoFrontPage/LogoFrontPage";

function ResetPassword() {
  const { alertOn, setAlertOn, setAlertMessage } = useContext(AlertContext);
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/users/reset-password`,
        { email },
        { withCredentials: true }
      );
      setAlertMessage("An email was send to your address !");
      setAlertOn(true);
    } catch (err) {
      setAlertMessage(err.response.data);
      setAlertOn(true);
    }
    setEmail("");
  };

  return (
    <>
      <LogoFrontPage />
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1 className="title">Reset Password</h1>
        <label htmlFor="email" className="auth-input">
          <input
            type="email"
            id="email"
            className="input"
            placeholder="Enter your M(-_(-_-)_-)E mail!"
            value={email}
            onChange={handleEmail}
          />
        </label>
        <div className="button-container">
          <Link to="/" className="link__button">
            <button className="main__button" type="button">
              Get Me Back
            </button>
          </Link>
          <button className="main__button" type="submit">
            Ask for new One
          </button>
        </div>
      </form>
      {alertOn && <Alert />}
    </>
  );
}

export default ResetPassword;
