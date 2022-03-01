import React from "react";
import SearchBar from "../ComponentsDrive/SearchBar/SearchBar";
import UserProfile from "../ComponentsDrive/UserProfile/UserProfile";

function DriveHeader() {
  return (
    <div className="drive__header__container">
      <SearchBar />
      <UserProfile />
    </div>
  );
}

export default DriveHeader;
