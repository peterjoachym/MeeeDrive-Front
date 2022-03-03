import React from "react";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import RenameIcon from "@mui/icons-material/DriveFileRenameOutline";
import MoveIcon from "@mui/icons-material/DriveFileMove";
import CloseIcon from "@mui/icons-material/Close";
import "./AllModals.css";

const OptionsModal = ({ handleOpenModal }) => {
  return (
    <div className="options__modal__container">
      <button
        className="icon__container__button close__options__modal__button"
        type="button"
        onClick={handleOpenModal}
      >
        <CloseIcon className="close__options__icon" />
      </button>
      <button className="icon__container__button" type="button">
        <MoveIcon className="move__icon" />
      </button>
      <button className="icon__container__button" type="button">
        <RenameIcon className="rename__icon" />
      </button>
      <button className="icon__container__button" type="button">
        <DeleteIcon className="delete__icon" />
      </button>
    </div>
  );
};

export default OptionsModal;
