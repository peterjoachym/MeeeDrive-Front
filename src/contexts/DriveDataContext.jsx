import React, { createContext, useState } from "react";

const DriveDataContext = createContext();

export const DriveDataContextProvider = ({ children }) => {
  const [pathId, setPathId] = useState(0);
  const [foldersData, setFoldersData] = useState();
  const [filesData, setFilesData] = useState();
  const [updateFolder, setUpdateFolder] = useState(false);
  const [folderToDeleteId, setFolderToDeleteId] = useState();

  return (
    <DriveDataContext.Provider
      value={{
        pathId,
        setPathId,
        foldersData,
        setFoldersData,
        filesData,
        setFilesData,
        updateFolder,
        setUpdateFolder,
        folderToDeleteId,
        setFolderToDeleteId,
      }}
    >
      {children}
    </DriveDataContext.Provider>
  );
};

export default DriveDataContext;
