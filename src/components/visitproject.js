import React from "react";
const VisitProject = ({ onClick, url }) => {
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      onClick={onClick}
      className="btn btn-round btn-visit-project"
    >
      Visit Project
    </a>
  );
};

export default VisitProject;
