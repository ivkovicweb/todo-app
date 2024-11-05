import InputTaskComponent from './InputTaskComponent'
import AddedTaskComponent from './AddedTaskComponent'
import { useState } from 'react'

function WrapperComponent() {

    const [toDoItems, setToDoItems] = useState([])
    console.log(toDoItems);

    
  return (
    <div className='w-[1000px] h-auto bg-slate-500 flex flex-col my-20 p-5 rounded-xl'>
        {/* header */}
        <div className='flex justify-center h-[50px] items-center'>
            <h1 className='text-white text-4xl'>ToDo App</h1>
        </div>
        <div>
            <InputTaskComponent toDoItems={toDoItems} setToDoItems={setToDoItems}/>
        </div>
        {/* added tasks wrapper*/}
        <div className='flex justify-center'>
            <AddedTaskComponent toDoItems={toDoItems} setToDoItems={setToDoItems}/>
        </div>
    </div>
  )
}

export default WrapperComponent
