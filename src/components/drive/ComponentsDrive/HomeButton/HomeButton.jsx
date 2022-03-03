import React, { useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import DriveDataContext from "../../../../contexts/DriveDataContext";

const HomeButton = () => {
  const { setPathId } = useContext(DriveDataContext);

  const handleClick = () => {
    setPathId(0);
  };

  return (
    <>
      <button
        type="button"
        className="icon__container__button"
        onClick={handleClick}
      >
        <HomeIcon className="home__icon" />
      </button>
    </>
  );
};

export default HomeButton;
