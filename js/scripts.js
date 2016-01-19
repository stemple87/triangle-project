var equilateral = function(sideA, sideB, sideC) {
  if ((sideA === sideB) && (sideB === sideC)) {
    return true;
  } else {
    return false;
  }
}
var isosceles = function(sideA, sideB, sideC) {
  if (sideA === sideB || sideB === sideC || sideA === sideC) {
    return true;
  } else {
    return false;
  }
}
var scalene = function(sideA, sideB, sideC) {
  if (sideA !== sideB || sideB !== sideC || sideA !== sideC) {
    return true;
  } else {
    return false;
  }
}

var notATriangle = function(sideA, sideB, sideC) {
  if (sideA + sideB <=  sideC || sideB + sideC <= sideA || sideA + sideC <= sideB) {
    return true;
  } else {
    return false;
  }
}
