import React, { useContext } from "react";
import DriveDataContext from "../../../contexts/DriveDataContext";
import Folder from "../ComponentsDrive/Folder/Folder";
import File from "../ComponentsDrive/File/File";

const DriveDisplay = () => {
  const { filesData, foldersData, pathId } = useContext(DriveDataContext);

  return (
    <div className="drive__display__container">
      {foldersData &&
        foldersData
          .filter((folder) => folder.folder_parent_id === pathId)
          .map((folder) => <Folder key={folder.id} {...folder} />)}
      {filesData &&
        filesData
          .filter((file) => file.folder_parent_id === pathId)
          .map((file) => <File key={file.id} {...file} />)}
    </div>
  );
};

export default DriveDisplay;
