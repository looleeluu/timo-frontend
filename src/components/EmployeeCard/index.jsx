import React from "react";
import { Image } from "react-bootstrap";

import "./index.scss";

export const EmployeeCard = ({ photo, name, position }) => {
  return (
    <div className="employee-card-container">
      <div>
        <Image src={photo} className="w-auto" />
      </div>
      <div className="p-3">
        <p className="card-title title">{name}</p>
        <p>{position}</p>
      </div>
    </div>
  );
};
