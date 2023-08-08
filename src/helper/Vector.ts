export class Vector{
  public x: number;
  public y: number;
  constructor(x:number, y:number) {
    this.x = x;
    this.y = y;
  }
  getLen() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  getNormalize() {
    const len = this.getLen();
    return new Vector(this.x / len, this.y / len);
  }
  add(v:Vector) {
    return new Vector(this.x + v.x, this.y + v.y);
  }
  subtract(v:Vector) {
    return new Vector(this.x - v.x, this.y - v.y);
  }
  multe(x: number) {
    return new Vector(this.x * x ,this.y * x);
  }
  rotate(rad: number) {
    const cosA = Math.cos(rad);
    const sinA = Math.sin(rad);
    const newX = this.x * cosA - this.y * sinA;
    const newY = this.x * sinA + this.y * cosA;
    return new Vector(newX, newY);
  }
  isEqual(v2: Vector) {
    const esp = 0.001;// 比较的精度
    return (
      Math.abs(this.x - v2.x) < esp &&
      Math.abs(this.y - v2.y) < esp
    )
  }
  /**
   * 当前向量与另一个向量的夹角
   * @param v2 
   */
  angleWith(v2: Vector) {
    const cosA = (this.x * v2.x + this.y * v2.y) / (this.getLen() * v2.getLen());
    return Math.acos(Math.max(-1,Math.min(1,cosA)));
  }
  // 旋转向量朝向目标向量
  rotateTowards(targetVector:Vector, rad:number) {
    const angle = this.angleWith(targetVector);
    const rotationDirection = (targetVector.y * this.x - targetVector.x * this.y )>= 0 ? 1 : -1;
    const rotatedAngle = Math.min(angle , rad )* rotationDirection;

    const cosA = Math.cos(rotatedAngle);
    const sinA = Math.sin(rotatedAngle);

    const newX = this.x * cosA - this.y * sinA;
    const newY = this.x * sinA + this.y * cosA;

    return new Vector(newX, newY);
  }
}