import { useState } from "react";
import { Form } from "./Form";
import { TodoList } from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodos(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function updateTodos(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodos(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <Form onSubmit={addTodos} />
      <h2>TODOS LIST</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoList
              {...todo}
              key={todo.id}
              updateT={updateTodos}
              deleteT={deleteTodos}
            />
          );
        })}
      </ul>
    </>
  );
}

export default App;
