import React, { createContext, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("guest");
  const [refreshTokenRef, setRefreshTokenRef] = useState(null);

  const refreshToken = async () => {
    try {
      const { data } = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/api/auth/refresh_token`,
        withCredentials: true,
      });
      const { id, role, firstname, expires_in } = data;
      setTimeout(() => {
        refreshToken();
      }, expires_in - 10000);

      setUser({ id, role, firstname });
    } catch (err) {
      setUser({ role: "guest" });
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        refreshTokenRef,
        setRefreshTokenRef,
        refreshToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
