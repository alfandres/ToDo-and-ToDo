import React from 'react';
import './EmptySearchResults.css';

function EmptySearchResults({searchText}) {
    
    return (
      <div className='Empty-Search-Results'>
        <p>No hay resultados para {searchText}</p>
      </div>
    );
  }

  export { EmptySearchResults };