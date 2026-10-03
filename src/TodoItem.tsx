import type { Todo } from "./types";

interface TodoItemProps {
  todo: Todo; 
  selected: boolean;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
  onSelect: (id: number) => void; //함수의 매개변수는 추론이 안되니까 직접 적음
}

function TodoItem({ todo, selected, onToggle, onRemove, onSelect }: TodoItemProps) {
  const itemClass = [
    "todo-item",
    todo.done ? "is-done" : "",  // todo.done이 true면 is-done 클래스 추가
    selected ? "is-selected" : "", //selected가 true면 is-selected 클래스 추가
  ]
    .filter((name) => name !== "") //name이 빈 문자열이 아닌 경우에만 필터링
    .join(" "); //name을 공백으로 구분하여 문자열로 변환

  return (
    <li className={itemClass}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <span className="todo-text" onClick={() => onSelect(todo.id)}>
        {todo.text}
      </span>
      <button type="button" className="delete" onClick={() => onRemove(todo.id)}>
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
