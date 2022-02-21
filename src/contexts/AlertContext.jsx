import React, { createContext, useState } from "react";

const AlertContext = createContext();

export function AlertContextProvider({ children }) {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertOn, setAlertOn] = useState(false);

  return (
    <AlertContext.Provider
      value={{
        alertMessage,
        setAlertMessage,
        alertOn,
        setAlertOn,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}

export default AlertContext;
