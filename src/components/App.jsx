import { Component } from 'react';
import { PhoneBook } from './PhoneBookForm/PhoneBook';
import { Section } from './Section/Section';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }
   
  addContact = (name,number) => {
  this.setState(prevState => ({
   contacts: [...prevState.contacts, {id: nanoid(), name,number}],
  }))
  }
  render() {
    const { contacts } = this.state;
    // const addContact = this.addContact(name,number);
    return (
      <>
        <Section title="Phonebook">
          <PhoneBook  onSubmit={this.addContact} contacts={contacts}/>
        </Section>
        <Section title="Contacts">
          {contacts.length > 0 && (
            <ContactList />
          )}
        </Section>
      </>
    );
  }
}
