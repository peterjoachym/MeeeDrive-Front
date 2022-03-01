import React from "react";
import AddFolder from "../ComponentsDrive/AddFolder/AddFolder";
import Bin from "../ComponentsDrive/Bin/Bin";
import CreateFile from "../ComponentsDrive/CreateFile/CreateFile";
import UploadFile from "../ComponentsDrive/UploadFile/UploadFile";

const DriveUtilityNavBar = () => {
  return (
    <divd className="drive__utility__nav__bar__container">
      <Bin />
      <CreateFile />
      <UploadFile />
      <AddFolder />
    </divd>
  );
};

export default DriveUtilityNavBar;
