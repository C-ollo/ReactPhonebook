import React from "react";
import Card from "./Card.jsx";
import Contacts from "../contacts";
function App() {
  return (
    <div>
      {Contacts.map((contact, index) => (
        <Card
          key={index}
          name={contact.name}
          img={contact.imgURL}
          tel={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;
