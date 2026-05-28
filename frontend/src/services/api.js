import axios from "axios";

const API = axios.create({
    baseURL: "https://support-crm-gz51.onrender.com/api"
});

export default API;