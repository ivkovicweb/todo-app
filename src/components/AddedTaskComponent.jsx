import React from 'react'
import { RiDeleteBin2Fill, RiH2 } from "react-icons/ri";


function AddedTaskComponent({toDoItems, setToDoItems}) {


    function removeToDo(id){
        // console.log(id)
        let removeToDo = toDoItems.filter((todo) => todo.id !== id)
        setToDoItems(removeToDo)
    }

  return (
    <div className='flex flex-col gap-5 w-full'>
        {toDoItems.length > 0 ? toDoItems.map((todo) => {
            return <div key={todo.id} className='bg-slate-800 p-2 rounded-lg flex justify-between items-center text-wrap w-full'>
                <h1 className='text-white text-xl'>{todo.title}</h1>
                <RiDeleteBin2Fill className='cursor-pointer' size={32} color='red' onClick={() => removeToDo(todo.id)}/>
            </div>
        }) : <h2 className='text-center text-2xl text-green-400'>You don't have any task today!</h2>}
    </div>
  )
}

export default AddedTaskComponent
