const soap = require('soap')
const url = 'http://www.webservicex.com/globalweather.asmx?WSDL'

class clima {
    async cidades(nomePais) {
        let client = await soap.createClientAsync(url, { forceSoap12Headers: true })
        
        return await client.GetCitiesByCountryAsync({ "CountryName": nomePais})
    }
}

module.exports = new clima()