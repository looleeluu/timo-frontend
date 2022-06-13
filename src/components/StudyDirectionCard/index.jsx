import React from "react";
import { Mail, TelephoneIcon, Geolocation } from "@assets/icons/index.js";

import "./index.scss";

export const StudyDirectionCard = ({
  icon,
  title,
  contacts,
  email,
  address,
}) => {
  return (
    <div className="direct-card-container">
      <div className="icon-contaier">{icon}</div>
      <div style={{ padding: 18 }}>
        <p className="card-title title-layout">{title}</p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", paddingBottom: 10 }}>
            <span className="pe-1">
              <TelephoneIcon />
            </span>
            <p className="lh-base">{contacts}</p>
          </div>
          <div style={{ display: "flex", paddingBottom: 10 }}>
            <span className="pe-1">
              <Mail />
            </span>
            <p>{email}</p>
          </div>
          <div style={{ display: "flex" }}>
            <span className="pe-1">
              <Geolocation />
            </span>
            <p className="lh-base">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
