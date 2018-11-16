import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <span onClick={() => props.pushArray(props.id)} className="pushIt">
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  </span>
  

);

export default FriendCard;
