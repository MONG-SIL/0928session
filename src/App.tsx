import { useState } from "react";
import type { Filter, Todo } from "./types";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoFilter from "./TodoFilter";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const addTodo = (text: string) => { //함수의 매개변수는 추론이 안되니까 직접 적음
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const toggleTodo = (id: number) => { //추론이 안되니까 직접 적음
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const removeTodo = (id: number) => {//추론이 안되니까 직접 적음
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const visibleTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "done") return todo.done;
    return true;
  });

  const selectedTodo = todos.find((todo) => todo.id === selectedId);

  return (
    <div className="app">
      <header className="app-header">
        <h1>할 일 목록</h1>
        <p>아 오늘 뭐하지</p>
      </header>

      <TodoInput onAdd={addTodo} />
      <TodoFilter filter={filter} onChange={setFilter} />

      {visibleTodos.length === 0 ? (
        <p className="empty">표시할 할 일이 없어요</p>
      ) : (
        <ul className="todo-list">
          {visibleTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              selected={todo.id === selectedId}
              onToggle={toggleTodo}
              onRemove={removeTodo}
              onSelect={setSelectedId}
            />
          ))}
        </ul>
      )}

      <p className="selected">
        선택한 할 일: {selectedTodo !== undefined ? selectedTodo.text : "없음"}
      </p>
    </div>
  );
}

export default App;
