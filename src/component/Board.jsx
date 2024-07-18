import React from 'react'

const Board = () => {
  return (
    <div className='relative bg-red-100 w-full aspect-square grid grid-cols-3 grid-rows-3 gap-4'>
        <div className='bg-red-200'>hey</div>
        <div className='bg-red-200'>hey</div>
        <div className='bg-red-200'>hey</div>

        <div className='bg-red-200'>hey</div>
        <div className='bg-red-200'>hey</div>
        <div className='bg-red-200'>hey</div>

        <div className='bg-red-200'>hey</div>
        <div className='bg-red-200'>hey</div>
        <div className='bg-red-200'>hey</div>
        <div className="absolute top-0 left-1/3 h-[80%] bg-yellow-300 rounded-md -translate-x-2 translate-y-[10%] w-2  flex flex-col"></div>
        <div className="absolute top-0 left-2/3 h-[80%] bg-yellow-300 rounded-md -translate-x-1 translate-y-[10%] w-2  flex flex-col"></div>

    </div>
  )
}

export default Board