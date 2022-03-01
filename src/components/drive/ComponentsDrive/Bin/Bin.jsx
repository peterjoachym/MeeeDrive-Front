import React from "react";
import BinIcon from "@mui/icons-material/Delete";

const Bin = () => {
  return (
    <>
      <button className="icon__container__button bin" type="button">
        <BinIcon className="utility__bar__icon" />
      </button>
    </>
  );
};

export default Bin;
