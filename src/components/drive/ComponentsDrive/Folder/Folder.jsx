/* eslint-disable indent */
import React, { useContext, useState } from "react";
import FolderIcon from "@mui/icons-material/Folder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DriveDataContext from "../../../../contexts/DriveDataContext";
import OptionsModal from "../modals/OptionsModal";

function Folder(props) {
  const { setPathId } = useContext(DriveDataContext);
  const { folder_name, id } = props;

  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setPathId(id);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="folder__items__container">
      <button
        className="icon__container__button folder__container"
        type="button"
        onClick={handleClick}
      >
        <FolderIcon className="folder__icon" />
        <p className="folder__name">{folder_name}</p>
      </button>
      {!openModal && (
        <button
          type="button"
          className="options__dots__button"
          onClick={handleOpenModal}
        >
          <MoreVertIcon className="options__dots__icon" />
        </button>
      )}
      {openModal && (
        <OptionsModal openModal={openModal} handleOpenModal={handleOpenModal} />
      )}
    </div>
  );
}

export default Folder;
