import React, { useContext, useState } from "react";
import axios from "axios";
import AlertContext from "../../../contexts/AlertContext";
import UserContext from "../../../contexts/UserContext";
import DriveDataContext from "../../../contexts/DriveDataContext";
import Alert from "../../Alert/Alert";

const CreateFolderModal = ({ handleOpenModal }) => {
  const { alertOn, setAlertOn, setAlertMessage } = useContext(AlertContext);
  const { user } = useContext(UserContext);
  const { pathId, updateFolder, setUpdateFolder } = useContext(DriveDataContext);
  const [folderName, setFolderName] = useState();

  const createFolder = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/folders`,
        {
          folder_name: `${folderName}`,
          folder_parent_id: `${pathId}`,
          user_id: `${user.id}`,
        },
        { withCredentials: true }
      );
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
    await createFolder();
    setFolderName("");
    setUpdateFolder(!updateFolder);
    console.log(updateFolder);
    handleOpenModal()
  };

  return (
    <div className="add-folder-modal">
      <form action="submit">
        <label htmlFor="folder-name">
          Folder name
          <input
            type="text"
            className="folder-name"
            id="folder-name"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Create Folder
        </button>
        <button className="close" type="button" onClick={handleOpenModal}>
          Close
        </button>
      </form>
      {alertOn && <Alert />}
    </div>
  );
};

export default CreateFolderModal;
