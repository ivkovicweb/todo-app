import React from 'react'
import { useState } from 'react'



function InputTaskComponent({toDoItems, setToDoItems}) {

    const [currentToDo, setCurrentToDo] = useState('')


    function handleCurrentToDo(event){
        // console.log(currentToDo)
        setCurrentToDo(event.target.value)
    }
    function handleToDo(){
        if(currentToDo){
            setToDoItems([...toDoItems, {title:currentToDo, id: new Date().getTime()}])
            setCurrentToDo('')
        }else{
            
        } 
    }

  return (
    <div className='w-full flex justify-evenly h-[100px] items-center'>
        <input 
            type="text" 
            name="" id="" 
            className='w-[500px] px-4 py-2 rounded-xl h-min' placeholder='Add your task...'
            value={currentToDo}
            onChange={handleCurrentToDo}
        />
      <button 
            className='px-4 py-2 border border-white rounded-xl text-white h-min'
            onClick={handleToDo}
            >Add Task</button>
    </div>
  )
}

export default InputTaskComponent
