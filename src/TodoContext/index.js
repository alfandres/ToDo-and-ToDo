import React from "react";
import { useLocalStorage } from "./useLocalStronge";

const TodoContext = React.createContext();

function TodoProvider ( {children} ){

    const {
        item: todos, 
        saveItem: saveTodos,
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
    
    const completeTodo = (text) =>{
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );   
      newTodos[todoIndex].completed = true;
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
        <TodoContext.Provider value={{
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
        }}>
            {children}
          </TodoContext.Provider>
     );
}

export { TodoContext, TodoProvider };


// localStorage.removeItem('ToDo&ToDo_V1');
// const defaultTodos = [
//     { text: 'Tomar agua', completed: false},
//     { text: 'Leer', completed: true},
//     { text: 'Entrenar', completed: false},
//     { text: 'Limpiar', completed: false},
//     { text: 'Usar estados devrivados', completed: true}
// ];

// localStorage.setItem('ToDo&ToDo_V1', JSON.stringify(defaultTodos));