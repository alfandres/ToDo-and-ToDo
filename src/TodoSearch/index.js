import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue, loading}) {

    return (
      <input 
        placeholder="Buscador de ToDos" 
        className="TodoSearch"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        disabled={loading}
      /> 
    );
  }

  export { TodoSearch };