import axios from "axios";

export async function fetchDriversAPI() {
    const response = await axios.get(`https://api.openf1.org/v1/drivers`);
    return response.data;
}