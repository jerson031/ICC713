import axios from 'axios';

const baseURL = 'https://restcountries.eu/rest/v2';
class ApiService {
    constructor() {
        this.resource = axios.create({
            baseURL,
        });
    }

    getAllCountries() {
        return this.resource.get("all");
    }

    getCountryByName(name) {
        return this.resource.get(`name/${name}`);
    }
}

export default new ApiService();



// https://restcountries.eu/rest/v2/all
// https://restcountries.eu/rest/v2/name/{name}