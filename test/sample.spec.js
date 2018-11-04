
var assert = require('assert')

describe('Given ', function () {
  if(typeof parameterSetup !== 'undefined' && parameterSetup ){
    parameterSetup([
      {
        name: 'parameter1',
        value: 'parameter1value',
        set: function(newvalue){
          console.log(`1 set to ${newvalue}`)
        }
      },
      {
        name: 'parameter2',
        value: ['parameter2value1','parameter2value2' ],
        set: function(newvalue){
          console.log(`2 set to ${newvalue}`)
        }
      },
      {
        name: 'parameter3',
        value: 'parameter3value',
        set: function(newvalue){
          console.log(`3 set to ${newvalue}`)
        }
      },
    ])
  }
  describe('When ', function () {
    it(`Then `, function () {
      assert.ok(true)
    })
  })
})
