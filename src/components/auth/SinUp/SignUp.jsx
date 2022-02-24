import React, { useReducer, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import userProfileReducer from "../../../reducers/userProfileReducer";
import AlertContext from "../../../contexts/AlertContext";
import Alert from "../../Alert/Alert";

import Actions from "../../../actions/actions";

// import { UPDATE_FIRSTNAME, UPDATE_EMAIL } from "../../../actions/actions.json";

const initialState = {
  firstName: "",
  email: "",
  theme: "dark",
  isAdmin: 0,
};

function SignUp() {
  const { alertOn, setAlertOn, setAlertMessage } = useContext(AlertContext);
  const [state, dispatch] = useReducer(userProfileReducer, initialState);

  const createMember = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/users`,
        {
          firstname: `${state.firstName}`,
          email: `${state.email}`,
          theme: `${state.theme}`,
          is_admin: `${state.isAdmin}`,
        },
        { withCredentials: true }
      );
      setAlertMessage("An email was send to your address !");
      setAlertOn(true);
    } catch (err) {
      if (!err.response) {
        setAlertMessage("Ooops something get wrong in the foreign land !");
        setAlertOn(true);
      } else {
        setAlertMessage(err.response.data);
        setAlertOn(true);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createMember();
  };

  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="auth-input">
          <input
            id="firstanme"
            type="text"
            className="input"
            placeholder="Enter your name!"
            value={state.firsName}
            onChange={(e) =>
              dispatch({
                type: Actions.UPDATE_FIRSTNAME,
                payload: e.target.value,
              })
            }
          />
        </label>
        <label className="auth-input" htmlFor="password">
          <input
            type="email"
            id="email"
            className="input"
            placeholder="Enter your email !"
            value={state.email}
            onChange={(e) =>
              dispatch({
                type: Actions.UPDATE_EMAIL,
                payload: e.target.value,
              })
            }
          />
        </label>
        <div className="button-container">
          <Link to="/">
            <button className="main__button" type="button">
              Get Me Back
            </button>
          </Link>
          <button className="main__button" type="submit">
            Sing Me Up
          </button>
        </div>
      </form>
      {alertOn && <Alert />}
    </>
  );
}

export default SignUp;
