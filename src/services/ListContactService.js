import axios from "axios";

const CONTACT_BASE_REST_API_URL = "http://localhost:8080/api/contacts";

class ContactListService {

    getAllContacts() {
        return axios.get(CONTACT_BASE_REST_API_URL);
    }

    addContact(contact) {
        return axios.post(CONTACT_BASE_REST_API_URL+"/new", contact);
    }
}

export default new ContactListService();