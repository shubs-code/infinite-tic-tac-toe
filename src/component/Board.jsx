import React from 'react'

const Board = () => {
  return (
    <div className='relative'>
      <div className='absolute top-0 left-0  w-full aspect-square grid grid-cols-3 grid-rows-3 gap-3'>
        <div className='bg-blue-50 m-1 rounded-md'> </div>
        <div className='bg-blue-50 m-1 rounded-md'> </div>
        <div className='bg-blue-50 m-1 rounded-md'> </div>

        <div className='bg-blue-50 m-1 rounded-md'> </div>
        <div className='bg-blue-50 m-1 rounded-md'> </div>
        <div className='bg-blue-50 m-1 rounded-md'> </div>

        <div className='bg-blue-50 m-1 rounded-md'> </div>
        <div className='bg-blue-50 m-1 rounded-md'> </div>
        <div className='bg-blue-50 m-1 rounded-md'> </div>
        {/* <div className="absolute top-0 left-1/3 h-[80%] bg-yellow-300 rounded-md -translate-x-2 translate-y-[10%] w-2  flex flex-col"></div>
        <div className="absolute top-0 left-2/3 h-[80%] bg-yellow-300 rounded-md -translate-x-1 translate-y-[10%] w-2  flex flex-col"></div> */}
      </div>

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

    </div>
  )
}

export default Board