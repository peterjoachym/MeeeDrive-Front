import React, { useContext } from "react";
import Login from "../../components/auth/Login/Login";
import { Link } from "react-router-dom";
import AlertContext from "../../contexts/AlertContext";
import Alert from "../../components/Alert/Alert";
import "./Home.css";

function Home() {
  const { alertOn } = useContext(AlertContext);

  return (
    <div className="home-page-container">
      <Login />
      <div className="forgot-button-container">
        <Link to="/reset-password">
          <button className="forgot" type="button">
            I need new password
          </button>
        </Link>
        <Link to="/signup">
          <button className="forgot" type="button">
            Sign me Up
          </button>
        </Link>
      </div>
      {alertOn && <Alert />}
    </div>
  );
}

export default Home;
