import React from "react";
import CreateFileIcon from "@mui/icons-material/NoteAdd";

const CreateFile = () => {
  return (
    <>
      <button className="icon__container__button create-file" type="button">
        <CreateFileIcon className="create__file__icon" />
      </button>
    </>
  );
};

export default CreateFile;
