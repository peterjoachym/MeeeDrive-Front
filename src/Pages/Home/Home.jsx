import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Login from "../../components/auth/Login/Login";
import AlertContext from "../../contexts/AlertContext";
import Alert from "../../components/Alert/Alert";
import "./Home.css";

function Home() {
  const { alertOn } = useContext(AlertContext);

  return (
    <>
      <Login />
      <div className="button-container">
        <Link to="/reset-password">
          <button className="main__button" type="button">
            I forgot my password
          </button>
        </Link>
        <Link to="/signup">
          <button className="main__button" type="button">
            Sign me Up
          </button>
        </Link>
      </div>
      {alertOn && <Alert />}
    </>
  );
}

export default Home;
