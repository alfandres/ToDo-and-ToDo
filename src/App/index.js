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
import { EmptySearchResults } from '../EmptySearchResults'

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
      <TodoHeader loading={loading} >
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          //loading={loading}
        />
        <TodoSearch
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
         // loading={loading}
        />      
      </TodoHeader>
      
      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchTodos={searchTodos}
        onError={() => <TodosError/>}
        onLoading={() => <TodosLoading/>}
        onEmptyTodos={() => <EmptyTodos/>}
        onEmptySearchResults={() => <EmptySearchResults searchText={searchValue}/>}

        render={todo => (
          <TodoItem 
            key = {todo.text} 
            text = {todo.text}
            completed = {todo.completed} 
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
          />
        )}
      >

        {/* {todo => (
          <TodoItem 
            key = {todo.text} 
            text = {todo.text}
            completed = {todo.completed} 
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
            
          />
        )} */}

      </TodoList>
      
      {/* <TodoList>
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
      </TodoList>  */}
      
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          <TodoFrom 
            addTodo={addTodo} 
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
      
    </React.Fragment>
  );
}

export default App;