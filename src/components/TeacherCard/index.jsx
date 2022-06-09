import React from "react";
import { Image } from "react-bootstrap";

export const TeacherCard = ({ photo, name, position }) => {
  return (
    <div>
      <Image src={photo} />
    </div>
  );
};
