import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";
import { ContactList } from "./ContactsList.styled";

export default function ContactsList({ data, deleteButton }) {
  return (
    <ContactList>
      {data.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          contactName={name}
          contactNumber={number}
          del={() => deleteButton(id)}
        />
      ))}
    </ContactList>
  );
}

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteButton: PropTypes.func,
};
