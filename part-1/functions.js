function month(date){
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  if(date instanceof Date){
    let monthNum = date.getMonth()

    return months[monthNum]
  }

  return "Please enter a valid date."
}

module.exports = { month }
