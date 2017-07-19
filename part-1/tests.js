const expect = require('chai').expect
const { month, reverseSentence, nameProps, filterBetween } = require('./functions')

describe('function month(date)', () => {
  it('should return "July"', () => {
    let birthday = new Date(2017, 6, 23)
    expect(month(birthday)).to.equal('July')
  })
  it('should ask for valid date input', () => {
    expect(month('July', 23, 1982)).to.deep.equal('Please enter a valid date.')
  })
})

describe('function reverseSentence(string)', () => {
  it('should reverse the sentence', () => {
    let sentence = 'The cat jumped over the dog.'
    expect(reverseSentence(sentence)).to.deep.equal('dog. the over jumped cat The')
  })
  it('should be undefined on invalid input', () => {
    expect(reverseSentence(1982)).to.be.undefined
  })
})

describe('function nameProps(obj)', () => {
  it('should return an array of object properties', () => {
    let friend = {
      name: 'Dominique',
      age: 30,
      phone: '555-555-5555'
    }
    expect(nameProps(friend)).to.deep.equal(['age', 'name', 'phone'])
  })
  it('should return undefined on invalid input', () => {
    expect(nameProps('something something')).to.be.undefined
  })
})

describe('function filterBetween(array, min, max)', () => {
  it('should return a new shortened array', () => {
    let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']
    expect(filterBetween(arr, 'deer', 'giraffe')).to.deep.equal(['dog'])
  })
  it('should return undefined on invalid input', () => {
    let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']
    expect(filterBetween(arr, 2, 4)).to.be.undefined
  })
})
