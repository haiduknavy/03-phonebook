import PropTypes from "prop-types";
import { ListItem, DelBtn } from "./ContactListItem.styled";

export default function ContactListItem({ contactName, contactNumber, del }) {
  return (
    <ListItem>
      {contactName}: {contactNumber}
      <DelBtn type="button" onClick={del}>
        Delete
      </DelBtn>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  del: PropTypes.func.isRequired,
};
