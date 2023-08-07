export class Vector{
  public x: number;
  public y: number;
  constructor(x:number, y:number) {
    this.x = x;
    this.y = y;
  }
  getNormalize() {
    const len = Math.sqrt(this.x * this.x + this.y * this.y);
    return new Vector(this.x / len, this.y / len);
  }
  add(v:Vector) {
    return new Vector(this.x + v.x, this.y + v.y);
  }
  multe(x: number) {
    return new Vector(this.x * x ,this.y * x);
  }
}