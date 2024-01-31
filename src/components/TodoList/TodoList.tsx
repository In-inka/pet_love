import { Todo } from '@/app/page';
import React from 'react';
interface TodoListProps {
  todo: Todo[];
  OnDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todo, OnDelete }) => {
  return (
    <div>
      <ul>
        {todo.map(({ id, text }) => {
          return (
            <li key={id}>
              <p>{text}</p>
              <button type="button" onClick={() => OnDelete(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
