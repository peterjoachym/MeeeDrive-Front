import React, { useEffect, useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignUp from "./components/auth/SinUp/SignUp";
import DrivePage from "./Pages/DrivePage/DrivePage";
import ResetPassword from "./components/auth/ResetPasword/ResetPassword";
import AccountActivate from "./components/auth/AccountActivate/AccountActivate";
import NewPasswordActivate from "./components/auth/NewPasswordActivate/NewPasswordActivate";
import LogoFrontPage from "./components/LogoFrontPage/LogoFrontPage";
import UserContext from "./contexts/UserContext";
import { DriveDataContextProvider } from "./contexts/DriveDataContext";
import "./App.css";

function App() {
  const { user, setRefreshTokenRef, refreshTokenRef, refreshToken } =
    useContext(UserContext);
  const [header, setHeader] = useState(true);

  useEffect(() => {
    setRefreshTokenRef((prevState) => {
      return prevState === null ? refreshToken() : null;
    });
    if (!refreshTokenRef) {
      refreshToken();
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">{header && <LogoFrontPage />}</header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/account-activate/:token" element={<AccountActivate />} />
        <Route
          path="/new-password-activate/:token"
          element={<NewPasswordActivate />}
        />

        {(user.role === 1 || user.role === 0) && (
          <Route
            path="/drive"
            element={
              <DriveDataContextProvider>
                <DrivePage setHeader={setHeader} />
              </DriveDataContextProvider>
            }
          />
        )}
      </Routes>
    </div>
  );
}

export default App;
