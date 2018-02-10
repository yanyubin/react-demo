import React from 'react'
import PropTypes from 'prop-types'
const ContactList = ({
    contacts,
    filterText
}) => {
    const filterContacts = contacts.filter(contact => contact.name.indexOf(filterText) !== -1)
    return (
        <ul>
        	{filterContacts.map((contact,index) => <li key={index}>
        			<img src={contact.thumbnail} role="presentation"/>
        			<div className="contactData">
        				<strong>{contact.name}</strong><br/><small>{contact.email}</small>
        			</div>
        		</li>
        	)}
        </ul>
    )
}


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    filterText: PropTypes.string.isRequired
}

export default ContactList