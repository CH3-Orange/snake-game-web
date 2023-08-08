import CanvasHelper from "./CanvasHelper";
import SnakeHelper, { SnakeInfo } from "./SnakeHelper";
import { Vector } from "./Vector";

class GameController{
  public RenderFreq = 10;//逻辑帧30hz
  public ActionFreq = 10;//动作帧10hz
  public intervalId;
  init() {
    this.test();
  }
  start() {
    // let times = 0;
    this.intervalId=setInterval(() => {
      this.handelRender();
      if (window.gamestop) {
        clearInterval(this.intervalId);
      }
    }, 1000 / this.RenderFreq);
  }
  handelRender() {
    SnakeHelper.updateNext();
    CanvasHelper.clearCanvas();
    SnakeHelper.getAllSnake().forEach(s => {
      CanvasHelper.paintSnake(s);
    })
    // TODO 画点 
  }
  handelAction(snackes:Array<any>) {
    // snackes.forEach(snacke => {
    //   SnakeHelper.setSnake(snacke.id,)
    // })
  }

  test() {
    const s1 = this.__test_genSnake(1,413,395,5,new Vector(1,1).getNormalize(),new Vector(0,-1).getNormalize())
    // const s2 = this.__test_genSnake(2,120,300,5,new Vector(1,1).getNormalize(),new Vector(-1,0.5).getNormalize())
    // const s3 = this.__test_genSnake(3,556,114,10,new Vector(-1,-1).getNormalize(),new Vector(-1,0.5).getNormalize())
    // const s4 = this.__test_genSnake(4,276,336,10,new Vector(1,0.5).getNormalize(),new Vector(-1,0.5).getNormalize())
    SnakeHelper.setSnake(s1);
    // SnakeHelper.setSnake(s2);
    // SnakeHelper.setSnake(s3);
    // SnakeHelper.setSnake(s4);
    this.start();
  }
  __test_genSnake(id:number,x:number,y:number,len:number,dir:Vector,expectDir:Vector) {
    const snake = new SnakeInfo(id);
    snake.Nodes.push(new Vector(x, y));
    snake.ExpectDirection = expectDir;
    const snakeGenDir = dir.multe(-20);
    for (let i = 1; i < len; i++){
      const lastDot = snake.Nodes[i - 1];
      snake.Nodes.push(lastDot.add(snakeGenDir));
    }
    snake.Direction = dir.getNormalize();
    return snake;
  }
}

export default new GameController();