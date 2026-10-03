import type { Filter } from "./types";

interface TodoFilterProps {
  filter: Filter;
  onChange: (filter: Filter) => void;
} //filter리터럴 유니온에 없는 값넣으면 오류 생성

function filterLabel(filter: Filter) {
  if (filter === "active") return "진행중";
  if (filter === "done") return "완료";
  return "전체";
}// 라벨에 따라 분류된 문자열 반환

function TodoFilter({ filter, onChange }: TodoFilterProps) {
  return (
    <div className="todo-filter">
      <div className="filter-buttons">
        <button
          type="button"
          className={filter === "all" ? "is-active" : undefined}
          onClick={() => onChange("all")}
        >
          전체
        </button>
        <button
          type="button"
          className={filter === "active" ? "is-active" : undefined}
          onClick={() => onChange("active")}
        >
          진행중
        </button>
        <button
          type="button"
          className={filter === "done" ? "is-active" : undefined}
          onClick={() => onChange("done")}
        >
          완료
        </button>
      </div>
      <span>현재 필터: {filterLabel(filter)}</span>
    </div>
  );
}

export default TodoFilter;
