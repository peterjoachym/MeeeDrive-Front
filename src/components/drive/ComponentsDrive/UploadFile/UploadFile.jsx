import React from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const UploadFile = () => {
  return (
    <>
      <button className="icon__container__button upload-file" type="button">
        <UploadFileIcon className="upload__file__icon" />
      </button>
    </>
  );
};

export default UploadFile;
