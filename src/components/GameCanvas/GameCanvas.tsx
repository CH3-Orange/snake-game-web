import React, { createRef, useCallback, useEffect, useRef, useState } from 'react'
import "./GameCanvas.less"
import CanvasHelper from '../../helper/CanvasHelper';
import SnakeHelper from '../../helper/SnakeHelper';
import { Vector } from '../../helper/Vector';

const Playgound_Width = 1000;
const Playground_Height = 500;

export default function GameCanvas() {
  const canvasRef = createRef<HTMLCanvasElement>();
  const [mouseLoc,setMouseLoc] = useState<{ x: number, y: number }>({x:0,y:0});
  useEffect(() => {
    if (canvasRef.current) {
      CanvasHelper.init(canvasRef.current, Playgound_Width, Playground_Height);
    }
  }, [canvasRef]);
  const handelClick = useCallback((e) => {
    if (canvasRef.current) {
      const x = Math.floor(e.clientX - canvasRef.current?.getBoundingClientRect().left);
      const y = Playground_Height - Math.floor(e.clientY - canvasRef.current?.getBoundingClientRect().top);
      const nowSnake = SnakeHelper.getSnake(1)!;
      const snakeHead = nowSnake!.Nodes[0];
      nowSnake.ExpectDirection=(new Vector(x,y)).subtract(snakeHead)
   }

  },[canvasRef]);

  return (
    <div className='canvas-container'>
      <canvas ref={canvasRef} width={Playgound_Width}
        height={Playground_Height} id="playground-canvas"
        onMouseMove={(e) => {
          // 强行翻转原点在左下角
          if (canvasRef.current) {
            setMouseLoc({
              x: Math.floor(e.clientX - canvasRef.current?.getBoundingClientRect().left),
              y: Playground_Height-Math.floor(e.clientY- canvasRef.current?.getBoundingClientRect().top),
            })
          }
        }}
        onClick={handelClick}
      />
      <div className='mouse-loc-tip'>
        <span>x:{ mouseLoc.x}</span>
        <span>y:{ mouseLoc.y}</span>
      </div>
    </div>
  )
}
