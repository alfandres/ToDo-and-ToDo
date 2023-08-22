import React from 'react';

import { useTodos } from './useTodos';

import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';

import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';

import { CreateTodoButton } from '../CreateTodoButton';
import { TodoFrom } from '../TodoFrom';

import { Modal } from '../Modal';


function App() {

  const {
    loading,
    error,
    searchTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo
  } = useTodos();

  return ( 
    <React.Fragment>
      <TodoHeader>
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
        />      
      </TodoHeader>
      
      
        <TodoList>
        {loading && <TodosLoading/>}
        {error && <TodosError/>}
        {(!loading && searchTodos.length === 0) && <EmptyTodos/>}

        {searchTodos.map( todo => (
            <TodoItem 
            key = {todo.text} 
            text = {todo.text}
            completed = {todo.completed} 
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
            />
        ))}
        </TodoList>
      
      <CreateTodoButton
        setOpenModal={ setOpenModal }
      />

      {openModal && (
        <Modal>
          <TodoFrom 
          addTodo ={addTodo} 
          setOpenModal ={setOpenModal}
          />
        </Modal>
      )}
      
    </React.Fragment>
  );
}

export default App;