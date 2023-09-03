import React from "react";
import { useLocalStorage } from "./useLocalStronge";


function useTodos (){

    const {
        item: todos, 
        saveItem: saveTodos,
        sincronizeItem: sincronizeTodos,
        loading,
        error,
      } = useLocalStorage('ToDo&ToDo_V1', []);
    
      const [searchValue, setSearchValue] = React.useState ('');
    
      const [openModal, setOpenModal] = React.useState (false);
      

      const completedTodos = todos.filter(
        todo => !!todo.completed
        ).length;
      const totalTodos = todos.length;
    
      // React.useEffect(() => {
      //   console.log('looog 2');
      // });
    
    
      const searchTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
    
          return todoText.includes(searchText);
        //Otra forma de pasar las mayusculas a minisculas para que la busqueda no sea interrumpida.  
        // return todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase()); 
        }
      );

    const addTodo = (text) => {
      const newTodos = [...todos]; 
      newTodos.push({
        text,
        completed: false,
      })
      saveTodos(newTodos);
    }
    
    const completeTodo = (text) =>{
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      if(newTodos[todoIndex].completed === true) {
        newTodos[todoIndex].completed = false;
      }else {
        newTodos[todoIndex].completed = true;
      }
      saveTodos(newTodos);
    };
    
    const deleteTodo = (text) =>{
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );   
      newTodos.splice(todoIndex,1);
      saveTodos(newTodos);
    };
    return( 
        {
          loading,
          error,
          completedTodos,
          totalTodos,
          searchValue,
          setSearchValue,
          searchTodos,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal,
          addTodo,
          sincronizeTodos
        }
     );
}

export { useTodos };


// localStorage.removeItem('ToDo&ToDo_V1');
// const defaultTodos = [
//     { text: 'Tomar agua', completed: false},
//     { text: 'Leer', completed: true},
//     { text: 'Entrenar', completed: false},
//     { text: 'Limpiar', completed: false},
//     { text: 'Usar estados devrivados', completed: true}
// ];

// localStorage.setItem('ToDo&ToDo_V1', JSON.stringify(defaultTodos));