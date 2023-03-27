import { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Button, Li } from './ContactList.styled';

class ContactList extends Component {
  deleteId = Id => {
    this.props.del(Id);
  };
  createList = () => {
    return this.props.contacts.map(contact => {
      return (
        <Li key={uuidv4()} id={contact.id}>
          {`${contact.name}: ${contact.number}`}
          <Button
            data-id={contact.id}
            onClick={() => this.deleteId(contact.id)}
          >
            Delete
          </Button>
        </Li>
      );
    });
  };

  render() {
    return <ul>{this.createList()}</ul>;
  }
}
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  del: PropTypes.func.isRequired,
};
ContactList.defaultProps = {
  contacts: [],
};

export default ContactList;
