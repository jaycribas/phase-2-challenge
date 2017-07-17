function month(date){
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  let monthNum = date.getMonth()

  return months[monthNum]
}
