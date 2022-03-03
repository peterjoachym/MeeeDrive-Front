import React, { useContext, useState } from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import AlertContext from "../../../../contexts/AlertContext";
import UserContext from "../../../../contexts/UserContext";
import DriveDataContext from "../../../../contexts/DriveDataContext";
import Alert from "../../../Alert/Alert";
import "./AllModals.css";

const CreateFolderModal = ({ handleOpenModal }) => {
  const { alertOn, setAlertOn, setAlertMessage } = useContext(AlertContext);
  const { user } = useContext(UserContext);
  const { pathId, updateFolder, setUpdateFolder } =
    useContext(DriveDataContext);
  const [folderName, setFolderName] = useState("");

  const createFolder = async () => {
    if (!folderName) {
      setAlertMessage("Name needed little rabbit!");
      setAlertOn(true);
    } else {
      try {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/api/folders`,
          {
            folder_name: `${folderName}`,
            folder_parent_id: `${pathId}`,
            user_id: `${user.id}`,
            is_in_the_bin: 0,
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
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createFolder();
    setFolderName("");
    setUpdateFolder(!updateFolder);
    handleOpenModal();
  };

  return (
    <div className="modal__container create__folder">
      <button
        className="icon__container__button close__modal__button"
        type="button"
        onClick={handleOpenModal}
      >
        <CloseIcon className="close__icon" />
      </button>
      <form className="modal__form" onSubmit={handleSubmit}>
        <label className="modal__label" htmlFor="folder-name">
          <input
            type="text"
            className="input modal__input"
            id="folder__name"
            placeholder="Folder Name"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
          />
        </label>
        <button
          className="main__button modal__button"
          type="button"
          onClick={handleSubmit}
        >
          Create Folder
        </button>
      </form>
      {alertOn && <Alert />}
    </div>
  );
};

export default CreateFolderModal;
