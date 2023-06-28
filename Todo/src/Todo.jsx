import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import './App.css';

const Todo = () => {
  const getLocalItems = () => {
    let list = localStorage.getItem('lists');
    if (list) {
      return JSON.parse(localStorage.getItem('lists'));
    } else {
      return [];
    }
  };

  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState(getLocalItems());
  const [updatedText, setUpdatedText] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [completed, setCompleted] = useState([]);

  const addItem = () => {
    if (!inputData) {
      alert("Empty Value Can't be added to TODO");
    } else {
      setItems([...items, inputData]);
      setCompleted([...completed, false]);
      setInputData('');
    }
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((element, ind) => ind !== id);
    const updatedCompleted = completed.filter((element, ind) => ind !== id);
    setItems(updatedItems);
    setCompleted(updatedCompleted);
    setUpdatedText('');
    setEditIndex(-1);
  };

  const updateItem = (id) => {
    const updatedItems = items.map((element, ind) =>
      ind === id ? updatedText : element
    );
    setItems(updatedItems);
    setUpdatedText('');
    setEditIndex(-1);
  };

  const startEditing = (id) => {
    setUpdatedText(items[id]);
    setEditIndex(id);
  };

  const cancelEditing = () => {
    setUpdatedText('');
    setEditIndex(-1);
  };

  const toggleCompletion = (id) => {
    const updatedCompleted = completed.map((element, ind) =>
      ind === id ? !element : element
    );
    setCompleted(updatedCompleted);
  };

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(items));
  }, [items]);

  const countCompleted = completed.filter((item) => item).length;

  return (
    <div className="container">

      <h2>To Do List</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add Items"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button className="btn btn-primary" type="button" onClick={addItem}>
          Add
        </button>
      </div>
      <div className="list-group">
        {items.map((element, index) => (
          <TodoItem
            key={index}
            index={index}
            item={element}
            completed={completed[index]}
            editIndex={editIndex}
            updatedText={updatedText}
            removeItem={removeItem}
            updateItem={updateItem}
            startEditing={startEditing}
            cancelEditing={cancelEditing}
            toggleCompletion={toggleCompletion}
            setUpdatedText={setUpdatedText}
            setEditIndex={setEditIndex}
          />
        ))}
      </div>
      <p>Completed items: {countCompleted}</p>
    </div>
  );
};

export default Todo;
