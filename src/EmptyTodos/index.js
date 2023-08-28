import React from 'react';
import './EmptyTodos.css';

function EmptyTodos() {

    return (
      <div className='Empty-Todos'>
        <h2 className='subTitulo'>Nos hay Tareas que realizar 🤔</h2>

        <p>Crea tu primer ToDo...</p>
      </div>
    );
  }

  export { EmptyTodos };