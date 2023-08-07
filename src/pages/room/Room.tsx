import React from 'react'
import { useParams } from 'react-router-dom';
import "./Room.less"
import GameCanvas from '../../components/GameCanvas/GameCanvas';
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';

export default function Room() {
  const { roomId } = useParams();
  return (
    <>
      <div className='roomid-tips'>
        <span>房间号 { roomId }</span>
      </div>
      <div>
        <GameCanvas/>
      </div>
      <div>
        <ScoreBoard/>
      </div>
    </>
  )
}
