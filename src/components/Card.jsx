import React from "react";
import Span from "./Span";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <Span
          className="emoji"
          content={props.Image}
          role="img"
          aria-label="Tense Biceps"
        />
        <Span content={props.text} />
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

export default Card;
