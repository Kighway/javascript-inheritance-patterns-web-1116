const app = "I don't do much."

// JavaScript uses prototypal OO. Instead of creating a nonfunctional class
// definition, we actually create the object, which is then used as a
// prototype to create other objects.


// The key difference is that we are explicitly setting the
// Rectangle.prototype to a Shape.prototype using
// Object.create.

function Shape(sides, x, y) {
  this.sides = sides;
  this.x = x;
  this.y = y;
}

function Quadrilateral(x, y, sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
  // call Shape constructor
  Shape.call(this, 4, x, y);
  this.sideOneLength = sideOneLength;
  this.sideTwoLength = sideTwoLength;
  this.sideThreeLength = sideThreeLength;
  this.sideFourLength = sideFourLength;
}

//inherit from Shape prototype
Quadrilateral.prototype = Object.create(Shape.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

//extend Quadrilateral
Quadrilateral.prototype.perimeter = function() {
  return this.sideOneLength + this.sideTwoLength + this.sideThreeLength + this.sideFourLength;
}

function Rectangle(x, y, width, height) {
  //call Quadrilateral constructor
  Quadrilateral.call(this, x, y, width, height, width, height);
  //set rectangle values
  this.width = width;
  this.height = height;
}
// set Rectangle prototype to an instance of a Shape
Rectangle.prototype = Object.create(Quadrilateral.prototype);
// set Rectangle constructor
Rectangle.prototype.constructor = Rectangle

// extend with Rectangle behavior
Rectangle.prototype.area = function() {
  return this.width * this.height;
}

function Square(x, y, length) {
  //call Rectangle constructor
  Rectangle.call(this, x, y, length, length)
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square

var square = new Square(1,1,3);
square.length;
// 3 - defined on Square

square.width;
// 3 - inherited from Rectangle

square.sideOneLength;
// 3 - inherited from Quadrilateral through Rectangle

square.position();
// 1,1 - from Shape

square.move(2,3); // from Shape
square.position();
// 2,3

square.area();
// 9 - from Rectangle
square.perimeter();
// 12 - from Quadrilateral


// we can prove that rectangle is constructed from Shape by
// checking if rect instanceof Shape returns true. The opposite case is
// false, because shape was not constructed from Rectangle
console.log(rect instanceof Shape);
//true
console.log(shape instanceof Rectangle);
//false


// To see this prototypal delegation
for (var prop in rect) {
  if(rect.hasOwnProperty(prop)) {
    console.log("rect." + prop + " = " + rect[prop]);
  }
}

// use hasOwnProperty() to filter this output to only the
// properties directly available on rect
for (var prop in rect) {
  if(rect.hasOwnProperty(prop)) {
    console.log("rect." + prop + " = " + rect[prop]);
  }
}
