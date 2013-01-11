var contains = require('..')

describe('contains(el, arr)', function () {
  it('should see elements present in the array', function () {
    var arr = [1, 2, 3]

    contains(1, arr).should.be.true
    contains(2, arr).should.be.true
  })

  it('should not see elements no present in the array', function () {
    var arr = [3, 4, 5]
    contains(1, arr).should.be.false
  })
})