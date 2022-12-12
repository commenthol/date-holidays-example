import assert from 'assert'
import { hd }from '../src/index.mjs'

describe('esm', function(){
  it('run', function(){
    assert.ok(hd.getHolidays().length > 10)
  })
})
