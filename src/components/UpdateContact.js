import { useState, useEffect } from "react";
import { Form } from "./Form";
import ContactListService from "../services/ListContactService";
import { useParams, useNavigate } from "react-router-dom";
import { Modal } from "./Modal";

export const UpdateContact = () => {
    const [myContact, setMyContact] = useState({});
    const [show, setShow] = useState({display: "none"});
    const navigate = useNavigate();
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
        ).then(
            ()=> setShow({display: "block"})
        );
    }
    
    return(
        <div className="container">
            <Modal 
                show={show} 
                modalText="Contact updated successfully" 
                dualButton={false} 
                buttonText="Ok" 
                onClick={()=> {setShow({display: "none"}); navigate("/")}}
            />
            <Form title="Update contact" 
                onChangeFirstName={onChangeFirstName}
                onChangeLastName={onChangeLastName}
                onChangeEmail={onChangeEmail}
                onSave={onSave}
            />
        </div>
    )
}