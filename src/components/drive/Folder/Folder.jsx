/* eslint-disable indent */
import React, { useContext, useState } from "react";
import DriveDataContext from "../../../contexts/DriveDataContext";

function Folder(props) {
  const { setPathId, setDeleteFolderButtonOn } = useContext(DriveDataContext);
  const { folder_name, id } = props;
  const [folderSelectOn, setFolderSelectOn] = useState();

  // function handling simple and doubleclick can handle also tripleclick

  const handleClick = (e) => {
    switch (e.detail) {
      case 1:
        setFolderSelectOn(true);
        setDeleteFolderButtonOn(true);
        break;
      case 2:
        setPathId(id);
        setFolderSelectOn(false);
        break;
      default:
    }
  };

  return (
    <div>
      <button
        style={folderSelectOn ? { color: "red" } : { color: "black" }}
        type="button"
        onClick={handleClick}
      >
        {folder_name}
      </button>
    </div>
  );
}

export default Folder;
