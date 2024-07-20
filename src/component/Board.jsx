import React, { useState } from 'react'
import Peice from './Peice'

const initialState = {1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""};
const Board = () => {
  const [isXturn, setIsXturn] = useState(true);
  const [boardPieces, setBoardPieces] = useState(initialState);
  const [isWon, setIsWon] = useState(false);

  const onUpdateCard = (pos, cardType)=>{
    if(isWon){return;}
    const newBoardPositions = {...boardPieces};
    newBoardPositions[pos] = cardType;
    setBoardPieces(newBoardPositions);
    if(cardType!=""){
      checkWinState(newBoardPositions);
    }
  }
  const checkWinState = (boardPieces)=>{
    const winState = {...initialState}
    if(boardPieces[1] == boardPieces[2] && boardPieces[2]  == boardPieces[3] && boardPieces[3] != ''){
      winState[1] = boardPieces[1];
      winState[2] = boardPieces[2];
      winState[3] = boardPieces[3];
      setBoardPieces(winState);
      setIsWon(true);
      return;
    }
    else if(boardPieces[4] == boardPieces[5] && boardPieces[5] == boardPieces[6] && boardPieces[6] != ''){
      winState[4] = boardPieces[4];
      winState[5] = boardPieces[5];
      winState[6] = boardPieces[6];
      setBoardPieces(winState);
      setIsWon(true);
      return;
    }
    else if(boardPieces[7] == boardPieces[8] && boardPieces[8] == boardPieces[9] && boardPieces[9] != ''){
      winState[7] = boardPieces[7];
      winState[8] = boardPieces[8];
      winState[9] = boardPieces[9];
      setBoardPieces(winState);
      setIsWon(true);
      return;
    }
    else if(boardPieces[1] == boardPieces[4] && boardPieces[4] == boardPieces[7] && boardPieces[7] != ''){
      winState[1] = boardPieces[1];
      winState[4] = boardPieces[4];
      winState[7] = boardPieces[7];
      setBoardPieces(winState);
      setIsWon(true);
      return;
    }
    else if(boardPieces[2] == boardPieces[5] && boardPieces[5] == boardPieces[8] && boardPieces[8] != ''){
      winState[2] = boardPieces[2];
      winState[5] = boardPieces[5];
      winState[8] = boardPieces[8];
      setBoardPieces(winState);
      setIsWon(true);
      return;
    }
    else if(boardPieces[3] == boardPieces[6] && boardPieces[6] == boardPieces[9] && boardPieces[9] != ''){
      winState[3] = boardPieces[3];
      winState[6] = boardPieces[6];
      winState[9] = boardPieces[9];
      setBoardPieces(winState);
      setIsWon(true);
      return;
    }
    else if(boardPieces[1] == boardPieces[5] && boardPieces[5] == boardPieces[9] && boardPieces[9] != ''){
      winState[1] = boardPieces[1];
      winState[5] = boardPieces[5];
      winState[9] = boardPieces[9];
      setBoardPieces(winState);
      setIsWon(true);
      return;
    }
    else if(boardPieces[3] == boardPieces[5] && boardPieces[5] == boardPieces[7] && boardPieces[7] != ''){
      winState[3] = boardPieces[3];
      winState[5] = boardPieces[5];
      winState[7] = boardPieces[7];
      setBoardPieces(winState);
      setIsWon(true);
      return;
    }
  }
  return (
    <div className='relative'>

        {/* style the vertical grid  */}
      <div className='absolute top-0 left-0 w-full aspect-square grid grid-cols-3 grid-rows-1 grid-flow-col  gap-3' >
        <div className='relative bg-transparen'>
          <div className='absolute top-[0%] -right-3 w-3 bg-gray-300 h-[100%] rounded-md'></div>
        </div>
        <div className='relative bg-transparen'>
          <div className='absolute top-[0%] -right-3 w-3 bg-gray-300 h-[100%] rounded-md'></div>
        </div>
      </div>

        {/* style the horizontal grid  */}
      <div className='absolute top-0 left-0 w-full aspect-square grid grid-cols-1 grid-rows-3 grid-flow-row  gap-3' >
        <div className='relative bg-transparen'>
          <div className='absolute left-[0%] -bottom-3 h-3 bg-gray-300 w-[100%] rounded-md'></div>
        </div>
        <div className='relative bg-transparen'>
          <div className='absolute left-[0%] -bottom-3 h-3 bg-gray-300 w-[100%] rounded-md'></div>
        </div>
      </div>

      <div className='absolute top-0 left-0  w-full aspect-square grid grid-cols-3 grid-rows-3 gap-3'>
        {
          [1,2,3,4,5,6,7,8,9].map( (pos,index)=> <Peice isXturn={isXturn} setIsXturn={setIsXturn} key={pos} pos={pos} onUpdateCard={onUpdateCard} cardValue={isWon?boardPieces[pos]:undefined}/>)
        }
      </div>
    </div>
  )
}

export default Board