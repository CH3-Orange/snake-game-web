import { SnakeInfo } from './SnakeHelper';
import { Vector } from "./Vector";

export class SnakeInfo{
  public Id: number;
  public Nodes: Vector[]=[];
  public Direction: Vector;
  public IsAlive: boolean;
  public Score: number;
  public Rank: number;
  constructor(id:number) {
    this.Id = id;
  }
}

class SnakeHelper{
  private SnakeMap = new Map<number,SnakeInfo>();
  setSnake(snake: SnakeInfo) {
    this.SnakeMap.set(snake.Id, snake);
  }
  getAllSnake() {
    return Array.from(this.SnakeMap.values());
  }

}
export default new SnakeHelper();