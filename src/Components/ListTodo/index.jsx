import React from 'react'

const ListTodo=({todos})=>{
  return (
    <div className='row p-2'>
      {todos.map((todo,index)=> (
        <div key={todo.id} className='col-12'>{index+1}-{todo.text}</div>
      ))}
    </div>
  )
}

export default ListTodo
