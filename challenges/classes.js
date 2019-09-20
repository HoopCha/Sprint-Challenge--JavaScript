// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2 {
    constructor(cAttr) {
        this.length = cAttr.length;
        this.width = cAttr.width;
        this.height = cAttr.height;
    }
    volume() {
        return this.length * this.width * this.height;
      };
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
};

  const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2{
    constructor(cMAttrs) {
        super(cMAttrs);
    }
    volume() {
        return this.length * this.length * this.length;
      };
    surfaceArea() {
        return (6 * this.length * this.length);
    }
};

const cube = new CubeMaker({
    length: 5
});

const cubeTwo = new CubeMaker({
    length: 16
});

console.log(cube.volume()); // 125
console.log(cube.surfaceArea()); // 150


console.log(cubeTwo.volume()); // 4096
console.log(cubeTwo.surfaceArea()); // 1536