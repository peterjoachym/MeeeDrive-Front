/* eslint-disable indent */
import React, { useContext } from "react";
import FolderIcon from "@mui/icons-material/Folder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DriveDataContext from "../../../../contexts/DriveDataContext";

function Folder(props) {
  const { setPathId } = useContext(DriveDataContext);
  const { folder_name, id } = props;
  // const [folderSelectOn, setFolderSelectOn] = useState();

  // function handling simple and doubleclick can handle also tripleclick

  // const handleClick = (e) => {
  //   switch (e.detail) {
  //     case 1:
  //       setFolderSelectOn(true);
  //       setDeleteFolderButtonOn(true);
  //       break;
  //     case 2:
  //       setPathId(id);
  //       setFolderSelectOn(false);
  //       break;
  //     default:
  //   }
  // };

  const handleClick = () => {
    setPathId(id);
  };

  return (
    <div className="folder__items__container">
      <button
        className="icon__container__button folder__container"
        type="button"
        onClick={handleClick}
      >
        <FolderIcon className="folder__icon" />
        <p className="folder__name">{folder_name}</p>
      </button>
      <button type="button" className="options__dots__button">
        <MoreVertIcon className="options__dots__icon" />
      </button>
    </div>
  );
}

export default Folder;
