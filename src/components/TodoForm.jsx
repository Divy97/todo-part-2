import { useState } from "react";

const TodoForm = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const handlSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random(), todo: text, checked: false },
    ]);
    setText("");
  };

  const deleteTodo = (id) => {
    console.log(text);
    setTodos(todos.filter((todo) => todo.id !== id));
    setText("");
  };

  console.log(todos);
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter a Todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" onClick={handlSubmit}>
        submit
      </button>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <li>{todo.todo}</li>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoForm;
