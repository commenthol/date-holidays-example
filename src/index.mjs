import Holidays from 'date-holidays'

export const hd = new Holidays()

console.log(hd.getCountries())

hd.init('US', 'la', 'no')

console.log(hd.getHolidays()[0])
