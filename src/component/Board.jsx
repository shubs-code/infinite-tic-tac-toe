import React, { useState } from 'react'
import Peice from './Peice'

const Board = () => {
  const [isXturn, setIsXturn] = useState(true);
  
  return (
    <div className='relative'>

        {/* style the vertical grid  */}
      <div className='absolute top-0 left-0 w-full aspect-square grid grid-cols-3 grid-rows-1 grid-flow-col  gap-3' >
        <div className='relative bg-transparen'>
          <div className='absolute top-[0%] -right-3 w-3 bg-gray-950 h-[100%] rounded-md'></div>
        </div>
        <div className='relative bg-transparen'>
          <div className='absolute top-[0%] -right-3 w-3 bg-gray-950 h-[100%] rounded-md'></div>
        </div>
      </div>

        {/* style the horizontal grid  */}
      <div className='absolute top-0 left-0 w-full aspect-square grid grid-cols-1 grid-rows-3 grid-flow-row  gap-3' >
        <div className='relative bg-transparen'>
          <div className='absolute left-[0%] -bottom-3 h-3 bg-gray-950 w-[100%] rounded-md'></div>
        </div>
        <div className='relative bg-transparen'>
          <div className='absolute left-[0%] -bottom-3 h-3 bg-gray-950 w-[100%] rounded-md'></div>
        </div>
      </div>

      <div className='absolute top-0 left-0  w-full aspect-square grid grid-cols-3 grid-rows-3 gap-3'>
        {
          [1,2,3,4,5,6,7,8,9].map( (pos,index)=> <Peice isXturn={isXturn} setIsXturn={setIsXturn} key={pos}/>)
        }
      </div>
    </div>
  )
}

export default Board