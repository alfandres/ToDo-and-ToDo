import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoFrom.css';


function TodoFrom( ){

    const {
        addTodo,
        setOpenModal,
    } = React.useContext (TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return(
        <form onSubmit = {onSubmit} >
            <label>Escribe tu nuevo ToDo</label>
            <textarea 
                placeholder="Comprar frutas"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoFrom-buttonContainer">
            <button 
                type="button"
                onClick={onCancel}
                className="TodoFrom-button ">
                    <span className="button_top TodoFrom-button--cancel"> Cancelar</span>
            </button>

            <button 
                type="submit"
                className="TodoFrom-button">
                    <span className="button_top TodoFrom-button--add"> Añadir</span>
            </button>
            </div>
        </form>
    )

}

export { TodoFrom };