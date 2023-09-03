import './CreateTodoButton.css';

function CreateTodoButton( { setOpenModal, loading } ){

    return(
      <button className={`CreateTodoButton ${!!loading && "CreateTodoButton---loading"}`}
      onClick={
        () => {
          setOpenModal( state => !state);
        }
      }
      >+</button>
    );
  }

  export{CreateTodoButton};