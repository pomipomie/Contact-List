import { useState } from "react";
import { Form } from "./Form";
import ContactListService from "../services/ListContactService";
import { Link } from "react-router-dom";

export const AddContact = () => {
    const [newContact, setNewContact] = useState({});

    function onChangeFirstName(e) {
        const updatedContact = {...newContact};
        updatedContact.firstName = e.target.value;
        setNewContact(updatedContact);
    }

    function onChangeLastName(e) {
        const updatedContact = {...newContact};
        updatedContact.lastName = e.target.value;
        setNewContact(updatedContact);

    }

    function onChangeEmail(e) {
        const updatedContact = {...newContact};
        updatedContact.email = e.target.value;
        setNewContact(updatedContact);
    }

    function onSave(e) {
        e.preventDefault();
        ContactListService.addContact(newContact).then(response => {
            setNewContact(response.data);
        }).catch(
            error => console.log(error)
        )
        //ADD MODAL;
    }
    
    return(
        <Form title="Add new contact" 
            onChangeFirstName={onChangeFirstName}
            onChangeLastName={onChangeLastName}
            onChangeEmail={onChangeEmail}
            onSave={onSave}
        />
    )
}