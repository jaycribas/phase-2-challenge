const expect = require('chai').expect
const { month, reverseSentence } = require('./functions')

describe('function month()', () => {
  it('should return "July"', () => {
    let birthday = new Date(2017, 6, 23)
    expect(month(birthday)).to.equal('July')
  })
  it('should ask for valid date input', () => {
    expect(month('July', 23, 1982)).to.equal('Please enter a valid date.')
  })
})

describe('function reverseSentence()', () => {
  it('should reverse the sentence', () => {
    let sentence = 'The cat jumped over the dog.'
    expect(reverseSentence(sentence)).to.equal('dog. the over jumped cat The')
  })
  it('should be undefined on invalid input', () => {
    expect(reverseSentence(1982)).to.be.undefined
  })
})
