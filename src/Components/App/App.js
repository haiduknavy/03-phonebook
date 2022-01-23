import React from "react";
import { nanoid } from "nanoid";
import Section from "../Section/Section";
import Form from "../Form/Form";
import ContactsList from "../ContactsList/ContactsList";
import Filter from "../Filter/Filter";
import { Wrapper } from "./App.styled";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  formSubmitHandler = (data) => {
    const { name, number } = data;
    const { contacts } = this.state;
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    if (
      contacts.find(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts.`);
    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  filterInput = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteButton = (conId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== conId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const contactsParsed = JSON.parse(contacts);
    if (contactsParsed) {
      this.setState({ contacts: contactsParsed });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const filterContacts = this.filterContacts();
    return (
      <Wrapper>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Filter data={this.filterInput} />
          <ContactsList
            data={filterContacts}
            deleteButton={this.deleteButton}
          />
        </Section>
      </Wrapper>
    );
  }
}

export default App;
