const assert = require('assert')
const hd = require('../src/index.cjs')

describe('commonjs', function(){
  it('run', function(){
    assert.ok(hd.getHolidays().length > 10)
  })
})
