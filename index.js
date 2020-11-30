class Polygon{
  constructor(sides){
    this.sides = sides
    this.sidesCount = this.sides.length
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    let sides = this.sides;
    let parameter = 0;
    for(let i = 0; i < sides.length; i++){
      parameter += sides[i]
    }
    return parameter;
  }
}

class Triangle extends Polygon{
  get isValid(){
    if (this.sides.length !== 3) return false;
    let side1 = this.sides[0];
    let side2 = this.sides[1];
    let side3 = this.sides[2];
    return ((side1 + side2) > side3) && ((side2 + side3) > side1) && ((side1 + side3) > side1);
  }
}

class Square extends Polygon{
  get isValid(){
    if (this.sides.length !== 4) return false;
    let side1 = this.sides[0];
    let side2 = this.sides[1];
    let side3 = this.sides[2];
    let side4 = this.sides[3];
    return ((side1 === side2) && (side1 === side3) && (side1 === side4));
  }

  get area(){
    let side1 = this.sides[0];
    let side2 = this.sides[1];
    return side1 * side2;
  }
}