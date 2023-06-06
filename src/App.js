import logo from './platzi.webp';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const defaultTodos = [
    { text: 'Tomar agua', completed: false},
    { text: 'Leer', completed: true},
    { text: 'Entrenar', completed: false},
    { text: 'Limpiar', completed: false},
    { text: 'Usar estados devrivados', completed: true}
];

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState ('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
    ).length;
  const totalTodos = todos.length;

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
    (todo) => todo.text == text
  );   
  newTodos[todoIndex].completed = true;
  setTodos(newTodos);
};

const deleteTodo = (text) =>{
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text == text
  );   
  newTodos.splice(todoIndex,1);
  setTodos(newTodos);
};


  return (
    <>
      
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}

      />
      
      <TodoList>
        {searchTodos.map( todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed= {todo.completed} 
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
            />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </>
  );
}

export default App;