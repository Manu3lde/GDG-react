import React, { useState } from "react";
import "./App.css";

// --- TodoItem Component ---
const TodoItem = ({ todo, toggleComplete }) => {
  return (
    <div>
      {todo.text}
      <button onClick={() => toggleComplete(todo.id)}>
        {todo.completed ? "↩️" : "✅"}
      </button>
    </div>
  );
};

// --- App Component (Main Logic) ---
const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Handle form submission event
  const handleAddTodo = event => {
    // Prevent the default browser page reload behavior
    event.preventDefault();

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput(""); // Clear input field after submission
  };

  // Toggle todo completion status function
  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container">
      <h1>Minimal Todo App</h1>

      {/* Input Form using standard <form> tag */}
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>

      {/* Todo List */}
      <div className="TodoList">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
      </div>
    </div>
  );
};

export default App;
