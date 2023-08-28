import React from 'react';
import './TodoCounter.css';


function TodoCounter({totalTodos, completedTodos, loading}){


    return(
      <h1 className={`TodoCounter ${!!loading && "TodoSearch---loading"}`}>
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
      </h1>
    );
  }

  export{TodoCounter};