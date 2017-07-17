const expect = require('chai').expect
const { month, reverseSentence, nameProps } = require('./functions')

describe('function month()', () => {
  it('should return "July"', () => {
    let birthday = new Date(2017, 6, 23)
    expect(month(birthday)).to.equal('July')
  })
  it('should ask for valid date input', () => {
    expect(month('July', 23, 1982)).to.deep.equal('Please enter a valid date.')
  })
})

describe('function reverseSentence()', () => {
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
