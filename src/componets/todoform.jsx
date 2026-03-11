import React from 'react'

const Todoform = ({ addtodo }) => {

  const [value, setValue] = React.useState('');
  const [category, setCategory] = React.useState('Learning');
  const [prazo, setPrazo] = React.useState('');
  
  const handleSubmit = (e) => {

    e.preventDefault();
    if(!value || !category || !prazo) return;
    console.log('Tarefa:', value, 'Categoria:', category, 'Prazo:', prazo);
    addtodo(value, category, prazo);
    setValue('');
    setPrazo('');
  }
    
 return  (
    <div className='form'>
        <h2>Adicionar nova tarefa </h2>
        <form onSubmit={handleSubmit}>

          <input 
          type="text" 
          placeholder='Nova tarefa'
          value={value}
          className='nome' 
          onChange={(e) => setValue(e.target.value)} 
          />

          <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}>

            <option value="Learning">Learning</option>
            <option value="Projects">Projects</option>
            <option value="Personal">Personal</option>

          </select>

          <input 
          value = {prazo}
          onChange = {(e) => setPrazo(e.target.value)} 
          type="date" 
          className='prazo-input' 
          />

          <button type='submit'>Adicionar</button>
        </form>
    </div>
  )
};

export default Todoform
