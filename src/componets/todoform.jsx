import React from 'react'

const Todoform = ({ addtodo }) => {

  const [value, setValue] = React.useState('');
  const [category, setCategory] = React.useState('Learning');
  
  const handleSubmit = (e) => {

    e.preventDefault();
    if(!value || !category) return;
    console.log('Tarefa:', value, 'Categoria:', category);
    addtodo(value, category);
    setValue('');

  }
    
 return  (
    <div className='form'>
        <h2>Adicionar nova tarefa</h2>
        <form onSubmit={handleSubmit}>

          <input 
          type="text" 
          placeholder='Nova tarefa'
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
          />

          <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}>

            <option value="Learning">Learning</option>
            <option value="Projects">Projects</option>
            <option value="Personal">Personal</option>

          </select>

          <button type='submit'>Adicionar</button>
        </form>
    </div>
  )
};

export default Todoform
