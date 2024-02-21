import { Todo } from '@/todoSlice';
import React from 'react';

interface TodoListProps {
  todo: Todo[];
  OnDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todo, OnDelete }) => {
  return (
    <div className="max-w-[450px] bg-white shadow-md overflow-hidden rounded-md">
      <ul className="divide-y divide-gray-200">
        {todo.map(({ id, text }) => {
          return (
            <li key={id} className="px-2 py-2 sm:px-2  ">
              <div className="flex items-center justify-between">
                <p className="text-gray-800">{text}</p>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                  type="button"
                  onClick={() => OnDelete(id)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
