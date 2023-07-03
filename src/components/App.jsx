import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      email={contact.email}
      tel={contact.tel}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media.licdn.com/dms/image/C4D03AQHhechf8PDgQA/profile-displayphoto-shrink_800_800/0/1631970250864?e=1694044800&v=beta&t=43etG1Nq4wQXFPF7cS-e406fzZxd6Po3w7zJhsnhhuQ" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
