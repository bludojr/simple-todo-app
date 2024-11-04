import React from 'react'
import BookHook from './BookHook'
import TodoItems from './TodoItems'

const TodoFrame = () => {
  return (
    <>
        <div className='mx-auto mt-[32px] w-[328px] h-[616px] bg-white rounded-[16px] backdrop-blur-lg'>
          <BookHook/>
          <TodoItems/>
        </div>
        <div className='mx-auto w-[301px] h-[8px] bg-gradient-to-l from-[#FFFFFF99] to-[#FFFFFF33] rounded-b-[12px] backdrop-blur-lg' ></div>
        <div className='mx-auto w-[285px] h-[8px] bg-gradient-to-l from-[#FFFFFF99] to-[#FFFFFF33] rounded-b-[12px] backdrop-blur-lg' ></div>
        <div className='mx-auto w-[272px] h-[8px] bg-gradient-to-l from-[#FFFFFF99] to-[#FFFFFF33] rounded-b-[12px] backdrop-blur-lg' ></div>

    </>
  )
}

export default TodoFrame


