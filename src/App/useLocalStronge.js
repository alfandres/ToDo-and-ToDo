import React from "react";

function useLocalStorage(itemName, initialValue) {

  const [item,setItem] = React.useState(initialValue);
  const [storageChange, setStorageChange] = React.useState(false);
  const [loading,setLoading] = React.useState(true);
  const [error,setError] = React.useState(false);

  window.addEventListener('storage', (change) => {
    if(change.key === 'ToDo&ToDo_V1') {
        console.log('hubo cambios en ToDo&ToDo_V1');
        setStorageChange(true);
    }

  });

  React.useEffect(() => {
    setLoading(true);
    setStorageChange(false);
    setTimeout(() => {
      try{        
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        };
        setItem(parsedItem);
        setLoading(false);
      }catch(error){ 
        setError(true);
      }
    },3000)
  },[storageChange]);
  
    function saveItem(newItem) {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
  
    return {
    item,
    saveItem,
    loading,
    error,
  };
};

export { useLocalStorage };