import axios from "axios";

const CONTACT_BASE_REST_API_URL = "http://localhost:8080/api/contacts";

class ContactListService {

    getAllContacts() {
        return axios.get(CONTACT_BASE_REST_API_URL);
    }

    getContactById(id) {
        return axios.get(CONTACT_BASE_REST_API_URL+"/"+id);
    }

    addContact(contact) {
        return axios.post(CONTACT_BASE_REST_API_URL+"/new", contact);
    }

    updateContact(id, contact) {
        return axios.put(CONTACT_BASE_REST_API_URL+"/"+id, contact);
    }

    deleteContact(id) {
        return axios.delete(CONTACT_BASE_REST_API_URL+"/"+id);
    }
}

export default new ContactListService();