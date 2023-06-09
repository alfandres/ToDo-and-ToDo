import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI ({ 
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchTodos,
    completeTodo,
    deleteTodo,
}) {
    return(
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
        {loading && <p>Cargando...</p>}
        {error && <p>Error</p>}
        {(!loading && searchTodos.length === 0) && <p>¡Crea tu primer ToDo!</p>}

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

      <CreateTodoButton/>
    </>
    );
    };

export { AppUI };