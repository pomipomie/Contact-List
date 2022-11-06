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
        ).finally(
            window.location.reload()
        );
    }

    return (
        <div className="container">
            <h2 className="text-center">Contact List</h2>
            <div className="row">
                <Link to='/contacts/new'>
                    <button className="btn btn-primary">Add Contact</button>
                </Link>
            </div>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Contact Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { contacts.map(contact => {
                        return <tr key={contact.id}>
                                    <td>{contact.id}</td>
                                    <td>{contact.firstName}</td>
                                    <td>{contact.lastName}</td>
                                    <td>{contact.email}</td>
                                    <td>
                                        <Link to={`/contacts/${contact.id}`}>
                                            <button className="btn btn-info">Edit</button>
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