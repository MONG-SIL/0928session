import { useState, type ChangeEvent } from "react";

interface TodoInputProps {
  onAdd: (text: string) => void; //함수의 매개변수는 추론이 안되니까 직접 적음
}

function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };//ChangeEvent는 이벤트 핸들러의 매개변수 타입을 정의해줌

  const handleClick = () => {
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  };

  return (
    <div className="todo-input">
      <input value={text} onChange={handleChange} placeholder="할 일 입력" />
      <button type="button" onClick={handleClick}>
        추가
      </button>
    </div>
  );
}

export default TodoInput;
