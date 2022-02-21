import React, { useState } from "react";
import CreateFolderModal from "../CreateFolderModal/CreateFolderModal";

const DashBoard = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleDeleteFolder = () => {};

  return (
    <div>
      (
      <button
        className="delete-folder"
        type="button"
        onClick={handleDeleteFolder}
      >
        Delete Folder
      </button>
      )
      <button className="create-folder" type="button" onClick={handleOpenModal}>
        Add Folder
      </button>
      {openModal && (
        <CreateFolderModal
          openModal={openModal}
          handleOpenModal={handleOpenModal}
        />
      )}
    </div>
  );
};

export default DashBoard;
