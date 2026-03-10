import React from 'react'

const Filter = ({ filter, setFilter }) => {
  return (
    <div className='filter'> 
      <h2>Filtrar por categoria</h2>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">Todas</option>
        <option value="Learning">Learning</option>
        <option value="Projects">Projects</option>
        <option value="Personal">Personal</option>
      </select>

    </div>
  )
}

export default Filter