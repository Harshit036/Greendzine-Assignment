import React from "react";
import { Badge } from "@mui/material";
import "./Photo.css";

function Photo(props) {
  return (
    <div className="photoModel">
      <Badge className="imageMainBox" color="error" badgeContent={props.id}>
        <div className="imageContainer">
          <div className="imageBox">
            <img src={props.avatar} alt="" />
          </div>
        </div>
      </Badge>
      <h1 className="userName">{props.first_name}</h1>
    </div>
  );
}

export default Photo;
