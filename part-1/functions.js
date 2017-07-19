/* Show a month

Write a function month(date) to find the month for a given Date object, returing the name of the month as a string ('January', 'February', 'March', 'April', 'May', ... etc).
*/

const months = [
  "January", "February", "March",
  "April", "May", "June",
  "July", "August", "September",
  "October", "November", "December"
]

const month = date => date instanceof Date ?
  months[date.getMonth()] : "Please enter a valid date."

/* Reverse a sentence

Write a function reverseSentence(string) that takes a string of words and returns a string with the words in reverse order. If there is only one word in the string return it unchanged. Consider any series of non-space characters a word.
*/

const reverseSentence = string => typeof string === 'string' ?
  string.split(' ').reverse().join(' ') : undefined

/* Names of properties

Write a function nameProps(obj) that returns the names of the properties an object has in alphabetical order. Ignore symbolic properties and count only the "own properties" (not inherited) of the object.
*/

const nameProps = obj => typeof obj === 'object' ?
  Object.keys(obj).sort() : undefined

/* Write a function filterBetween(array, min, max) that takes an array of strings, a min value, and a max value. It returns a new array containing only the elements that come after min alphabetically and before max.
*/

function filterBetween(array, min, max){
  if(
    Array.isArray(array) &&
    typeof min == 'string' &&
    typeof max == 'string'
  ){
    let newArr = array.concat(min, max).sort()
    let startSlice = newArr.indexOf(min) + 1
    let endSlice = newArr.indexOf(max)

    return newArr.slice(startSlice, endSlice)
  }
}

module.exports = { month, reverseSentence, nameProps, filterBetween }
