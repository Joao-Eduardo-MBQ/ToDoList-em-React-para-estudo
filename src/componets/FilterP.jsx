import React from 'react'

const FilterP = ({ filterp, setFilterp }) => {
  return (
    <div className='filter'> 
      <h2>Filtrar por prazo</h2>

      <select
        value={filterp}
        onChange={(e) => setFilterp(e.target.value)}
      >
        <option value="">Todas</option>
        <option value="Atrasado">Atrasado</option>
        <option value="Perto de vencer">Perto de vencer</option>
        <option value="Longe de vencer">Longe de vencer</option>
      </select>

    </div>
  )
}

export default FilterP