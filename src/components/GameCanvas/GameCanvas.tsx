import React, { createRef, useEffect, useRef, useState } from 'react'
import "./GameCanvas.less"
import CanvasHelper from '../../helper/CanvasHelper';

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
  

  return (
    <div className='canvas-container'>
      <canvas ref={canvasRef} width={Playgound_Width}
        height={Playground_Height} id="playground-canvas"
        onMouseMove={(e) => {
          // 强行翻转原点在左下角
          setMouseLoc({
            x: Math.floor(e.clientX - canvasRef.current?.getBoundingClientRect().left),
            y: Playground_Height-Math.floor(e.clientY- canvasRef.current?.getBoundingClientRect().top),
          })
        }}
      />
      <div className='mouse-loc-tip'>
        <span>x:{ mouseLoc.x}</span>
        <span>y:{ mouseLoc.y}</span>
      </div>
    </div>
  )
}
