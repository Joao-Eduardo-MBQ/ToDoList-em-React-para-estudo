import React from 'react'

const todo = ({todo, deletetodo, completetodo}) => {
  return (
    <div>
        <div 
        className = "todo"
        style={{textDecoration: todo.completed ? 'line-through' : '', textDecorationThickness: "3px"}}
        >
          <div classNmae = "content">
            <p>{todo.text}</p>
            <p className='category'>({todo.category})</p>
          </div>
          <button className='delete' onClick={()=>deletetodo(todo.id)}>Delete</button>
          <button className='complete' onClick={()=>completetodo(todo.id)}>
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
        </div>      
    </div>
  )
}

export default todo
