import { useState, useEffect } from "react";
import { Form } from "./Form";
import ContactListService from "../services/ListContactService";
import { useParams } from "react-router-dom";

export const UpdateContact = () => {
    const [myContact, setMyContact] = useState({});
    const { id } = useParams();

    useEffect(() => {
        ContactListService.getContactById(id).then(response => {
            setMyContact(response.data);
        }).catch(
            error => console.log(error)
        )
    }, [])

    function onChangeFirstName(e) {
        const updatedContact = {...myContact};
        updatedContact.firstName = e.target.value;
        setMyContact(updatedContact);
    }

    function onChangeLastName(e) {
        const updatedContact = {...myContact};
        updatedContact.lastName = e.target.value;
        setMyContact(updatedContact);

    }

    function onChangeEmail(e) {
        const updatedContact = {...myContact};
        updatedContact.email = e.target.value;
        setMyContact(updatedContact);
    }

    function onSave(e) {
        e.preventDefault();
        ContactListService.updateContact(id, myContact).then(response => {
            setMyContact(response.data);
        }).catch(
            error => console.log(error)
        );
        //ADD MODAL;
    }
    
    return(
        <Form title="Update contact" 
            onChangeFirstName={onChangeFirstName}
            onChangeLastName={onChangeLastName}
            onChangeEmail={onChangeEmail}
            onSave={onSave}
        />
    )
}