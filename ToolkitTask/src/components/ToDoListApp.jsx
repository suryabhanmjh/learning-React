// src/components/ToDoListApp.jsx
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleStatus, editTodo } from '../features/todo/todoSlice';

const ToDoListApp = () => {
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddOrEdit = () => {
    if (!input.trim()) return;
    if (editId) {
      dispatch(editTodo({ id: editId, text: input }));
      setEditId(null);
    } else {
      dispatch(addTodo(input));
    }
    setInput("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>ToDo List App</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
        style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
      />
      <button onClick={handleAddOrEdit} style={{ padding: "8px 16px" }}>
        {editId ? "Update" : "Add"}
      </button>
      <ul style={{ marginTop: 20 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: 10 }}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                marginRight: 10
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(toggleStatus(todo.id))} style={btnStyle}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button
              onClick={() => {
                setInput(todo.text);
                setEditId(todo.id);
              }}
              style={btnStyle}
            >
              Edit
            </button>
            <button onClick={() => dispatch(deleteTodo(todo.id))} style={btnStyle}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const btnStyle = { marginLeft: "5px", padding: "4px 10px" };
export default ToDoListApp;
