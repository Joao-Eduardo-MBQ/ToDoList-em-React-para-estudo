import { useState } from 'react'
import './App.css'
import Todo from './componets/todo.jsx'
import Todoform from './componets/todoform.jsx'
import LightMode from './componets/litghmode.jsx'
import Search from './componets/search.jsx'
import Filter from './componets/filter.jsx'
import FilterP from './componets/FilterP.jsx'

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('');
  const [filterp, setFilterp] = useState('');
  
  const addtodo = (text, category, prazo, prazoF) => {
    const newtodo = [
      ...todos,
      {
        id: todos.length + 1,
        text,
        category,
        prazo,
        prazoF,
        completed: false
      }
    ]

    setTodos(newtodo);
  }

  const deletetodo = (id) => {
    const newtodo = [...todos].filter((todo) => 
      todo.id !== id
    );
    setTodos(newtodo);
  }

  const completetodo = (id) => {
    const newtodo = [...todos].map((todo) => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    );
    setTodos(newtodo);
  }

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      <LightMode 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="container">

        <h1>Lista de Tarefas</h1>

        <Todoform addtodo={addtodo}/>
        
        <div className="controls">
          <Search search={search} setSearch={setSearch} />
          <Filter filter={filter} setFilter={setFilter} />
          <FilterP filterp={filterp} setFilterp={setFilterp} />
        </div>

        <hr className="linha" />

        <div className='todo-list'>
          {todos
            .filter((todo) =>
              todo.text.toLowerCase().includes(search) &&
              (filter === '' || todo.category === filter) &&
              (filterp === '' || todo.prazoF === filterp)
            )
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                deletetodo={deletetodo}
                completetodo={completetodo}
              />
          ))}
        </div>

      </div>

    </div>
  );
}

export default App;