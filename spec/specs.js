describe('equilateral', function() {
  it("is false for a triangle that does not have equal sides", function() {
    expect(equilateral(2, 2, 3)).to.equal(false);
  });

  it("is true for a triangle that does have equal sides", function() {
    expect(equilateral(2, 2, 2)).to.equal(true);
  });

});
describe('isosceles', function() {
  it("is fales if two sides are not equal", function() {
    expect(isosceles(1, 2, 3)).to.equal(false);
  });

  it("is true for a triangle that does have two equal sides", function() {
    expect(isosceles(2, 2, 3)).to.equal(true);
  });

});
describe('scalene', function() {
    it("is fales if two or more sides are equal", function() {
      expect(isosceles(1, 2, 3)).to.equal(false);
    });

    it("is true if two or more sides are equal", function() {
      expect(isosceles(2, 2, 3)).to.equal(true);
    });

});
describe('notATriangle', function() {
    it("is fales if two or more sides are equal", function() {
      expect(notATriangle(1, 2, 3)).to.equal(false);
    });

    it("is true if two or more sides are equal", function() {
      expect(notATriangle(2, 2, 3)).to.equal(true);
    });

});
