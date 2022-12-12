const Holidays = require('date-holidays')

const hd = new Holidays()

console.log(hd.getCountries())

hd.init('US', 'la', 'no')

console.log(hd.getHolidays()[0])

module.exports = hd
