import React from "react";
import './TodoFrom.css';

function TodoFrom( ){

    return(
        <form onSubmit = {(event) => {
             event.preventDefault();
        }}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea 
                placeholder="Comprar frutas"
            />
            <div className="TodoFrom-buttonContainer">
            <button 
                type="submit"
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