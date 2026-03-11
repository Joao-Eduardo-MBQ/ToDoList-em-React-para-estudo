import React from 'react'

const Todo = ({todo, deletetodo, completetodo}) => {
  const hoje = new Date();
  const prazo = new Date(todo.prazo);
  const diferenca = prazo - hoje;
  const diasRestantes = Math.ceil(diferenca / (1000 * 60 * 60 * 24));

    let mensagem = "";
    let colortext = "";

  if (diasRestantes < 0) {
    mensagem = "A tarefa está atrasada!"; colortext= "#ef4444";
    todo.prazoF = "Atrasado";
  } else if (diasRestantes <= 3) {
    mensagem = "A tarefa vence em poucos dias!"; colortext= "#ff8e3d";
    todo.prazoF = "Perto de vencer";
  } else {
    mensagem = `A tarefa vence em ${diasRestantes} dias!`; colortext= "#10b981";
    todo.prazoF = "Longe de vencer";
  }

  return (
    <div>
        <div 
        className="todo"
        style={{textDecoration: todo.completed ? 'line-through' : '', textDecorationThickness: "3px"}}>
        
          <div className="content">
            <p>{todo.text}</p>
            <p className='category'>({todo.category})</p>
            <p className='prazo' style={{ color: colortext }}>
              Prazo: {todo.prazo} | {mensagem}
            </p>
          </div>
          <button className='delete' onClick={()=>deletetodo(todo.id)}>Delete</button>
          <button className='complete' onClick={()=>completetodo(todo.id)}>
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
        </div>      
    </div>
  )
}

export default Todo
