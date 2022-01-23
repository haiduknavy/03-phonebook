import React from "react";
import { FormWrapper, Label, AddButton } from "./Form.styled";

class Form extends React.Component {
  state = {
    name: "",
    number: "",
  };

  handleInput = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    return this.setState({ name: "", number: "" });
  };
  render() {
    const { name, number } = this.state;
    return (
      <FormWrapper onSubmit={this.handleSubmit}>
        <Label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <AddButton type="submit">Add contact</AddButton>
      </FormWrapper>
    );
  }
}

export default Form;
