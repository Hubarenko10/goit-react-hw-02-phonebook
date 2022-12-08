import { Form, Btn, Input, Label, Title } from './PhoneBookStyle';

export const PhoneBook = ({ onSubmit }) => {
  const handleSubmit = event =>{
    event.preventDefault();
    onSubmit(
        event.target.elements.name.value,
        event.target.elements.number.value
        );
};
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Title>Name</Title>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
        <Title>Number</Title>
        <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          </Label>
        <Btn>Add contacts</Btn>
      </Form>
    </>
  );
};
