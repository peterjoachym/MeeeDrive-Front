import React from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const UploadFile = () => {
  return (
    <>
      <button className="icon__container__button" type="button">
        <UploadFileIcon className="utility__bar__icon" />
      </button>
    </>
  );
};

export default UploadFile;
