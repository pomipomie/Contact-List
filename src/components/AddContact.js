import { useState } from "react";
import { Form } from "./Form";
import ContactListService from "../services/ListContactService";
import { Modal } from "./Modal";
import { useNavigate } from "react-router-dom";

export const AddContact = () => {
    const [newContact, setNewContact] = useState({});
    const [formKey, setFormKey] = useState(0);
    const [show, setShow] = useState({display: "none"});
    const navigate = useNavigate();

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
        ).finally(
            ()=> setShow({display: "block"})
        )
    }
    
    return(
        <div className="container">
            <Modal 
                show={show} 
                modalText="Would you like to add another contact?" 
                dualButton={true} 
                buttonText="Yes" 
                onClick={()=> {setShow({display: "none"}); setFormKey(formKey + 1)}}
                onClose={()=> {setShow({display: "none"}); navigate("/")}}
            />
            <Form 
                key={formKey}
                title="Add new contact" 
                onChangeFirstName={onChangeFirstName}
                onChangeLastName={onChangeLastName}
                onChangeEmail={onChangeEmail}
                onSave={onSave}
            />
        </div>
    )
}