class Country {
    constructor(country = {}) {
        this.flag = country.flag || ''
        this.name = country.name || ''
        this.region = country.region || ''
        this.capital = country.capital || ''
        this.population = country.population || ''
    }
}

export default Country;