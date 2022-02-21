import React, { useContext } from "react";
import AlertContext from "../../contexts/AlertContext";
import "./Alert.css";

const Alert = () => {
  const { alertMessage, setAlertOn, setAlertMessage } =
    useContext(AlertContext);

  const handleAlertCloseClick = () => {
    setAlertOn(false);
    setAlertMessage("");
  };

  return (
    <div className="alert-container">
      <div className="alert-message-container">
        <p className="alert-message">{alertMessage}</p>
      </div>
      <button
        id="close"
        className="auth-submit"
        type="button"
        onClick={handleAlertCloseClick}
      >
        Close
      </button>
    </div>
  );
};

export default Alert;
