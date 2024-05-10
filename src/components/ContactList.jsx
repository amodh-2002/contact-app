import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const contacts = [
    {
      id: 1,
      name: "Amodh",
      email: "cs.emgil.com",
    },
  ];
  const renderContactList = contacts.map((item) => {
    return <ContactCard item={item} key={item.id} />;
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
