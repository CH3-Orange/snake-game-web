import { Button, Input } from 'antd'
import React, { useCallback, useState } from 'react'
import "./Home.less"
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [roomid, setRoomid] = useState<string>();
  const navigate=useNavigate()

  const handleJoinClick = useCallback(() => {
    console.log(roomid);
    navigate(`rooms/${roomid}`)
  },[roomid])

  return (
    <>
      <h1 className='snake-game-title'>Snake Game</h1>
      <Input placeholder='请输入房间号' size='large' className="roomid-input"
        maxLength={6} value={roomid} 
        onChange={e => { setRoomid(e.target.value) }}
        onPressEnter={handleJoinClick}
      />
      <div className='join-btn-group'>
        <Button size='large' onClick={handleJoinClick}>加入房间</Button>
      </div>
    </>
  )
}
