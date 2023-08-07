import SnakeHelper, { SnakeInfo } from "./SnakeHelper";
import { Vector } from "./Vector";

const LOG = (...rst) => {
  console.log('[canvas]',...rst);
}
class CanvasHelper{
  private canvasRef: HTMLCanvasElement = null;
  private canvasCxt: CanvasRenderingContext2D|null = null;
  private width: number;
  private height: number;


  init(ref: HTMLCanvasElement, width: number, height: number) {
    if (this.canvasRef == null) {
      this.canvasRef = ref;
      this.canvasCxt = this.canvasRef.getContext('2d');
      this.height = height;
      this.width = width;
      this.clearCanvas();
      this.paintDot(451,263,6,"white")
      this.paintDot(491, 203, 2, "white")
      this.test();
    }
  }

  clearCanvas() {
    this.canvasCxt?.clearRect(0, 0, this.width, this.height);
    LOG('已清除画布');
  }

  paintDot(x: number, y: number, radius: number, color: string) {
  if(this.canvasCxt)
    {
      this.canvasCxt.beginPath();
      // 强行翻转原点在左下角
      this.canvasCxt.arc(x, this.height-y, radius, 0, Math.PI * 2);
      this.canvasCxt.fillStyle = color;
      this.canvasCxt.fill();
    }
  }
  paintSnake(snake: SnakeInfo) {
    snake.Nodes.forEach((loc, idx) => {
      this.paintDot(loc.x, loc.y, 10, 'pink');
      if (idx == 0) {
        const eye = loc.add(snake.Direction.multe(4));
        this.paintDot(eye.x, eye.y, 4, 'black');
      }
    })
  }
  test() {
    const s1 = this.__test_genSnake(1,413,395,5,new Vector(-1,0.5).getNormalize())
    const s2 = this.__test_genSnake(2,120,300,5,new Vector(0,1).getNormalize())
    const s3 = this.__test_genSnake(3,556,114,10,new Vector(-1,-1).getNormalize())
    const s4 = this.__test_genSnake(4,276,336,10,new Vector(1,0.5).getNormalize())
    SnakeHelper.setSnake(s1);
    SnakeHelper.setSnake(s2);
    SnakeHelper.setSnake(s3);
    SnakeHelper.setSnake(s4);
    SnakeHelper.getAllSnake().forEach(s => {
      console.log(s);
      this.paintSnake(s)
    });
    
  }
  __test_genSnake(id:number,x:number,y:number,len:number,dir:Vector) {
    const snake = new SnakeInfo(id);
    snake.Nodes.push(new Vector(x, y));
    const snakeGenDir = dir.multe(-20);
    for (let i = 1; i < len; i++){
      const lastDot = snake.Nodes[i - 1];
      snake.Nodes.push(lastDot.add(snakeGenDir));
    }
    snake.Direction = dir.getNormalize();
    return snake;
  }
}

export default new CanvasHelper();