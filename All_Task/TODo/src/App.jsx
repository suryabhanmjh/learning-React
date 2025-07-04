import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo } from './todoSlice'

const App = () => {
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleEditSave = (id) => {
    dispatch({ type: 'todos/editTodo', payload: { id, text: editText } });
    setEditId(null);
    setEditText('');
  };

  const handleEditCancel = () => {
    setEditId(null);
    setEditText('');
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Todo List</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new todo"
          />
          <button type="submit" className="btn btn-primary">
            Add Todo
          </button>
        </div>
      </form>
      <ul className="list-group">
        {todos.map((todo, idx) => (
          <li 
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <span className="badge bg-secondary me-2">{idx + 1}</span>
              <input
                type="checkbox"
                className="form-check-input me-2"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              {editId === todo.id ? (
                <>
                  <input
                    type="text"
                    className="form-control d-inline-block"
                    style={{ width: 'auto' }}
                    value={editText}
                    onChange={e => setEditText(e.target.value)}
                  />
                  <button
                    className="btn btn-success btn-sm ms-2"
                    onClick={() => handleEditSave(todo.id)}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-secondary btn-sm ms-2"
                    onClick={handleEditCancel}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.text}
                  </span>
                </>
              )}
            </div>
            <div>
              {editId !== todo.id && (
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => handleEdit(todo)}
                >
                  Edit
                </button>
              )}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App