import React from "react";
import BinIcon from "@mui/icons-material/Delete";

const Bin = () => {
  return (
    <>
      <button className="icon__container__button bin" type="button">
        <BinIcon className="bin__icon" />
      </button>
    </>
  );
};

export default Bin;
