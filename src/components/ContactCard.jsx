import React from "react";
import user from "../images/user.jpg";

const ContactCard = (props) => {
  const { id, name, email } = props.item;
  return (
    <div className="item" key={id}>
      <img className="ui avatar image" src={user} alt="name" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", cursor: "pointer" }}
      />
    </div>
  );
};
export default ContactCard;
