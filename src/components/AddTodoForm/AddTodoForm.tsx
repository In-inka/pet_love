import React, { FC, FormEvent, useState } from 'react';

interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddClick = (e: FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return; // Prevent adding empty todos
    onAdd(newTodo);
    setNewTodo('');
  };

  return (
    <div className="max-w-[600px] mb-[5px] ">
      <input
        className=" w-[350px] border border-gray-300 px-3 py-2 rounded-md w-64 mr-2 focus:outline-none focus:border-blue-500 bg-white text-gray-800"
        type="text"
        placeholder="New todo"
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
      />
      <button
        className="w-[94px] bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition-colors"
        onClick={handleAddClick}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodoForm;
