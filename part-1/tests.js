const expect = require('chai').expect
const { month } = require('./functions')

describe('function month()', () => {
  it('should return "July"', () => {
    let birthday = new Date(2017, 6, 23)
    expect(month(birthday)).to.equal('July')
  })
  it('should ask for valid date input', () => {
    expect(month('July', 23, 1982)).to.equal('Please enter a valid date.')
  })
})
