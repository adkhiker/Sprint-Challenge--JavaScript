// Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker (stats) {
// this.length = stats.length;
// this.width = stats.width;
// this.height = stats.height
// }
// CuboidMaker.prototype.getVol = function() {
//   return this.height * this.width * this.length;
// }
// CuboidMaker.prototype.getSurf = function() {
//   return 2 * (this.height * this.width  + this.width * this.length + this.length * this.height)
// }
class CuboidMaker {
  constructor(stats) {
    this.length = stats.length;
    this.width = stats.width;
    this.height = stats.height;
  }
  getVol() {
    return this.height * this.width * this.length;
  }
  getSurf() {
    return (
      2 *
      (this.height * this.width +
        this.width * this.length +
        this.length * this.height)
    );
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.getVol()); // 100
console.log(cuboid.getSurf()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
class CubeMaker extends CuboidMaker {
  constructor(newProperties) {
    super(newProperties);
    this.area = newProperties.area;
    this.edge = newProperties.edge;
  }
  cubeVolume() {
    return this.edge * this.edge * this.edge;
  }
  cubeSurfaceArea() {
    return 6 * (this.area * this.area);
  }
}
const cube = new CubeMaker({
  area: 2,
  edge: 2
});

console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());