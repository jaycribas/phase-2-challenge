/* searchByCity.js takes one string argument (let's call it the city), finds all the clients from clients.json who have a city that exactly matches the city, and prints the id, rep_name, company, city, and state of each matching client.
*/
const fs = require('fs')
const city = process.argv[2]
const json  = JSON.parse(fs.readFileSync('clients.json'))

function searchByCity(city){
  let searchResults = []

  for(let client of json){
    if( city.toUpperCase() === client.city.toUpperCase() ){
      let match = {
        id: client.id,
        rep_name: client.rep_name,
        company: client.company,
        city: client.city,
        state: client.state
      }
      searchResults.push(match)
    }
  }
  return console.log(`Finding clients in City "${city}"...\n\n`, searchResults)
}

searchByCity(city)
