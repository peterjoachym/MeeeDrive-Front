import React, { useContext, useEffect } from "react";
import axios from "axios";
import DriveHeader from "../../components/drive/DriveHeader/DriveHeader";
import BreadCrumbs from "../../components/drive/BreadCrumbs/BreadCrumbs";
import DashBoard from "../../components/drive/DashBoard/DashBoard";
import DriveDisplay from "../../components/drive/DriveDisplay/DriveDisplay";
import UserContext from "../../contexts/UserContext";
import AlertContext from "../../contexts/AlertContext";
import Alert from "../../components/Alert/Alert";
import DriveDataContext from "../../contexts/DriveDataContext";
import "./DrivePage.css";

const DrivePage = ({ setHeader }) => {
  const { user } = useContext(UserContext);
  const { alertOn, setAlertOn, setAlertMessage } = useContext(AlertContext);
  const { setFoldersData, setFilesData, updateFolder } =
    useContext(DriveDataContext);

  // part of the code needed in order to hide front page logo

  setHeader(false);

  const getFoldersData = async () => {
    try {
      const resp = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/users/${user.id}/folders`,
        { withCredentials: true }
      );
      console.log(resp.data);
      return setFoldersData(resp.data);
    } catch (err) {
      if (!err.response) {
        setAlertMessage("Ooops something get wrong in the foreign land 1!");
        setAlertOn(true);
      } else {
        setAlertMessage(err.response.data);
        setAlertOn(true);
      }
      return null;
    }
  };

  const getFilesData = async () => {
    try {
      const resp = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/users/${user.id}/files`,
        { withCredentials: true }
      );
      return setFilesData(resp.data);
    } catch (err) {
      if (!err.response) {
        setAlertMessage("Ooops something get wrong in the foreign land 1!");
        setAlertOn(true);
      } else {
        setAlertMessage(err.response.data);
        setAlertOn(true);
      }
      return null;
    }
  };

  useEffect(() => {
    getFoldersData();
    getFilesData();
    return setHeader(true);
  }, [updateFolder]);

  return (
    <div className="drive-page-container">
      <DriveHeader />
      <BreadCrumbs />
      <DashBoard />
      <DriveDisplay />
      {alertOn && <Alert />}
    </div>
  );
};

export default DrivePage;
