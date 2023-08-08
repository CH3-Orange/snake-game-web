import GameController from "./GameController";
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
      setTimeout(() => {
        console.log('game start');
        GameController.init();
      },2000)
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
  
}

export default new CanvasHelper();