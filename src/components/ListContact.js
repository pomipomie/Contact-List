import { useState, useEffect, useParams } from "react";
import ContactListService from "../services/ListContactService";
import { Link } from 'react-router-dom';


const ListContact = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        ContactListService.getAllContacts().then(response => {
            setContacts(response.data);
        }).catch(
            error => console.log(error)
        )
    }, [])
    
    function onDelete(id) {
        ContactListService.deleteContact(id).then(response => {
            const updatedContacts = contacts.filter(contact => contact.id !== id);
            response.data = updatedContacts;
            setContacts(response.data);
        }).catch(
            error => console.log(error)
        )
    }

    return (
        <div className="container">
                <Link to='/contacts/new'>
                    <button className="btn btn-primary btn-add">Add Contact</button>
                </Link>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    { contacts.map(contact => {
                        return <tr key={contact.id}>
                                    <td>{contact.id}</td>
                                    <td>{contact.firstName}</td>
                                    <td>{contact.lastName}</td>
                                    <td>{contact.email}</td>
                                    <td>
                                        <Link to={`/contacts/${contact.id}`}>
                                            <button className="btn btn-dark">Edit</button>
                                        </Link>
                                        <button className="btn btn-danger" onClick={id => {onDelete(contact.id)}}>Delete</button>
                                    </td>
                                </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ListContact;