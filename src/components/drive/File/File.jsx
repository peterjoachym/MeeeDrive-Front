import React from "react";

const File = (props) => {
  
  const { file_display_name, file_name } = props;

  return (
    <div>
      <button type="button">
      <a
        href={`${process.env.REACT_APP_API_URL}/drive_files/${file_name}`}
        rel="noreferrer"
        target="_blank"
      >
        {file_display_name}
      </a>
      </button>
    </div>
  );
};

export default File;
