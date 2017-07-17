/* searchByCompany.js takes one string argument (let's call it company), finds all the clients from clients.json who have a company that starts with the company string, and prints the id, company and phone of each matching client.
*/
const fs = require('fs')
const name = process.argv[2]
const json  = JSON.parse(fs.readFileSync('clients.json'))

function searchByCompany(name){
  let searchResults = []

  for(let client of json){
    let match = client.company.toUpperCase()

    if( match.startsWith(name.toUpperCase()) ) {
      let result = {
        id: client.id,
        company: client.company,
        phone: client.phone
      }
      searchResults.push(result)
    }

  }
  return console.log(`Finding companies with name ${name} ... \n\n`, searchResults)
}

searchByCompany(name)
