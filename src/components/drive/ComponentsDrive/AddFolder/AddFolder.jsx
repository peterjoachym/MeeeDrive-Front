import React, { useState } from "react";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import CreateFolderModal from "../modals/CreateFolderModal";

const AddFolder = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <button
        className="icon__container__button create__new__folder"
        type="button"
        onClick={handleOpenModal}
      >
        <CreateNewFolderIcon className="create__new__folder__icon" />
      </button>
      {openModal && (
        <CreateFolderModal
          openModal={openModal}
          handleOpenModal={handleOpenModal}
        />
      )}
    </>
  );
};

export default AddFolder;
