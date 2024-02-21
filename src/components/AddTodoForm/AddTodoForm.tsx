'use client';
import React, { FC, FormEvent, useState } from 'react';
interface AddTodoFormProps {
  onAdd: (text: string) => void;
}
const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState<string>('');
  const handleAddClick = (e: FormEvent) => {
    e.preventDefault();
    onAdd(newTodo);
    setNewTodo('');
  };
  return (
    <div>
      <input
        type="text"
        placeholder="New todo"
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default AddTodoForm;
