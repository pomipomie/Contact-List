import { useState, useEffect } from "react";
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
                    <th>Contact Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    { contacts.map(contact => {
                        return <tr key={contact.id}>
                                    <td>{contact.id}</td>
                                    <td>{contact.firstName}</td>
                                    <td>{contact.lastName}</td>
                                    <td>{contact.email}</td>
                                </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ListContact;