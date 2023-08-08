import { SnakeInfo } from './SnakeHelper';
import { Vector } from "./Vector";

const SnakeDotRadius = 10;
export class SnakeInfo{
  public Id: number;
  public Nodes: Vector[]=[];
  public Direction: Vector;
  public ExpectDirection: Vector;
  public IsAlive: boolean;
  public Score: number;
  public Rank: number;
  constructor(id:number) {
    this.Id = id;
  }
  updateSelf() {
    const newLoc = this.Nodes[0].add(this.Direction.multe(SnakeDotRadius * 2));
    this.Nodes.pop();
    this.Nodes.unshift(newLoc);
    // 当前方向和期望方向不一致，且夹角大于一度时，更新当前方向
    if (!this.Direction.isEqual(this.ExpectDirection) && Math.abs(this.Direction.angleWith(this.ExpectDirection))>0.017) {
      this.Direction = this.Direction.rotateTowards(this.ExpectDirection,Math.PI / 5);// 每一秒旋转180度 30hz render
    } 
  }
}

class SnakeHelper {
  private SnakeMap = new Map<number, SnakeInfo>();
  setSnake(snake: SnakeInfo) {
    this.SnakeMap.set(snake.Id, snake);
  }
  getAllSnake() {
    return Array.from(this.SnakeMap.values());
  }
  updateNext() {
    this.SnakeMap.forEach(snake => {
      snake.updateSelf();
    })
  }
  getSnake(id: number) {
    return this.SnakeMap.get(id);
  }
}


export default new SnakeHelper();