import React from "react";
import "assets/stylesheets/card.scss";

function Card(props) {
  return (
    <div className={`card ${props.extraStyles}`}>
      <h2>{props.header}</h2>
      <p className="content">{props.content}</p>
    </div>
  );
}

export default Card;
