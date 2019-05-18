// Local storage CRUD functions
const store = () => {
  
  const getItem = (key) => {
    return window.localStorage.getItem(key);    
  };

  const create = (key, value) => {
    return window.localStorage.setItem(key, value);    
  };

  const update = (key, value) => {
    return window.localStorage.setItem(key, value);    
  };

  const rm = (key) => {
    return window.localStorage.removeItem(key);    
  };

  const clearAll = () => {
    return window.localStorage.clear();    
  };

  return { getItem, create, update, rm, clearAll };
};

const ls = store();