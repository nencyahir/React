import React, { useReducer } from 'react';

const initialState = {
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const updatedTodosAdd = [...state.todos, action.payload];
      return {
        ...state,
        todos: updatedTodosAdd,
      };

    case 'REMOVE_TODO':
      const updatedTodosRemove = state.todos.filter((todo) => todo.id !== action.payload);
      return {
        ...state,
        todos: updatedTodosRemove,
      };

    case 'EDIT_TODO':
      const updatedTodosEdit = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            text: action.payload.text,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodosEdit,
      };

    default:
      return state;
  }
}


function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (todo) => {
    dispatch({ type: 'ADD_TODO', payload: todo });
  };

  const removeTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };


  const editTodo = (id) => {
    const updatedTodos = state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isEditing: true,
          updatedText: todo.text,
        };
      }
      return todo;
    });
    dispatch({ type: 'EDIT_TODO', payload: updatedTodos });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const todoText = e.target.todo.value;
    const newTodo = {
      id: new Date().getTime(),
      text: todoText,
    };
    addTodo(newTodo);
    e.target.reset();
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" placeholder="Add a new todo" />
        <button type="submit">Add</button>
      </form>
      
<ul>
  {state.todos.map((todo) => (
    <li key={todo.id}>
      {todo.isEditing ? (
        <form onSubmit={(e) => handleEditSubmit(e, todo.id)}>
          <input
            type="text"
            value={todo.updatedText}
            onChange={(e) => handleEditInputChange(e, todo.id)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
          <button onClick={() => editTodo(todo.id)}>Edit</button>
        </>
      )}
    </li>
  ))}
</ul>

    </div>
  );
}

export default TodoList;
