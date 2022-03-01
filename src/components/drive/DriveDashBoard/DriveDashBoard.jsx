import React from "react";
import BreadCrumbs from "../ComponentsDrive/BreadCrumbs/BreadCrumbs";
import HomeButton from "../ComponentsDrive/HomeButton/HomeButton";

function DriveBreadCrumbs() {
  return (
    <div className="drive__dashboard__container">
      <HomeButton />
      <BreadCrumbs />
    </div>
  );
}

export default DriveBreadCrumbs;
