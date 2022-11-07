import axios from "axios";
import { CONTACT_BASE_REST_API_URL } from './ListContactService';

const ADD_CONTACT_REST_API_URL = CONTACT_BASE_REST_API_URL+"/new";

class AddContactService {

    addContacts() {
        return axios.post(ADD_CONTACT_REST_API_URL);
    }
}

export default new AddContactService();