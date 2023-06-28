import React from 'react';
import './App.css';

const TodoItem = ({
  index,
  item,
  completed,
  editIndex,
  updatedText,
  removeItem,
  updateItem,
  startEditing,
  cancelEditing,
  toggleCompletion,
  setUpdatedText,
  setEditIndex,
}) => {
  return (
    <div className={`list-group-item ${completed ? 'completed' : ''}`}>
      {editIndex === index ? (
        <input
          type="text"
          className="form-control"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
        />
      ) : (
        <div className="item-text">{item}</div>
      )}
      <div className="buttons">
        <button className="btn btn-danger" onClick={() => removeItem(index)}>
          Delete
        </button>
        {editIndex === index ? (
          <>
            <button className="btn btn-primary" onClick={() => updateItem(index)}>
              Save
            </button>
            <button className="btn btn-secondary" onClick={cancelEditing}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-primary" onClick={() => startEditing(index)}>
              Edit
            </button>
            <button
              className={`btn ${completed ? 'btn-warning' : 'btn-success'}`}
              onClick={() => toggleCompletion(index)}
            >
              {completed ? 'Mark Undone' : 'Mark Done'}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
