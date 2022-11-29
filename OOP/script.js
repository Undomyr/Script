// Parent Shape Class //

class Shape {
  constructor(name, color) {
      this.name = name
      this.color = color
  }

  returnName() {
    return this.name
  }

  returnColor() {
    return this.color
  }
}

// Circle Class //

class Circle extends Shape {
    constructor(radius, name, color) {
        super(name, color)
        this.radius = radius;
    }

    returnRadius() {
      return this.radius
    }

    calcArea() {
      return Math.PI * this.radius * this.radius
    }
}

// Circle Objects //

const redCircle = new Circle(10, 'red', 'redCircle')

const blueCircle = new Circle(1.5, 'blue', 'blueCircle')

const yellowCircle = new Circle(20, 'yellow', 'yellowCircle')

console.log(redCircle.calcArea())
console.log(blueCircle.calcArea())
console.log(yellowCircle.calcArea())

// Square Class //

class Square extends Shape {
  constructor(size) {
    super(name)
    this.size = size
  }

  returnSize() {
    return this.size
  }

  returnArea() {
    return Math.pow(this.size, 2)
  }

  returnName() {
    return this.name
  }
}

// Square Objects //

const blackSquare = new Square(2, 'black', 'blackSquare')

const greenSquare = new Square(5, 'green', 'greenSquare')

const orangeSquare = new Square(100, 'orange', 'orangeSquare')

console.log(blackSquare.returnArea())
console.log(greenSquare.returnArea())
console.log(orangeSquare.returnArea())


// Rectangle class //

class Rectangle extends Shape {
  constructor(width, height) {
    super(name)
    this.width = width
    this.height = height
  }

  returnWidth() {
    return this.width
  }

  returnHeight() {
    return this.height
  }

  returnArea() {
    return this.height * this.width
  }
}

// Rectangle Objects //

const blackRectangle = new Rectangle(2, 5, 'black', 'blackRectangle')

const greenRectangle = new Rectangle(5, 10, 'green', 'greenRectangle')

const orangeRectangle = new Rectangle(100, 100, 'orange', 'orangeRectangle')

console.log(blackRectangle.returnArea())
console.log(greenRectangle.returnArea())
console.log(orangeRectangle.returnArea())

// Inheritance Class Circle //

console.log(new Circle(10, 'blackCircle', 'black'))

const inheritanceCircle = new Circle(10, 'blackCircle', 'black')

console.log(inheritanceCircle.returnName())
console.log(inheritanceCircle.calcArea())
