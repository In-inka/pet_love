'use client';
import AddTodoForm from '@/components/Form/AddTodoForm';
import TodoList from '@/components/TodoList/TodoList';
import { useEffect, useState } from 'react';

export interface Todo {
  id: number;
  text: string;
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (id: number) => {
    const newTodo = todos.filter(todo => todo.id !== id);
    setTodos(newTodo);
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(prevTodos => [...prevTodos, ...JSON.parse(storedTodos)]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log('Saved todos to localStorage:', todos);
  }, [todos]);
  return (
    <main className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-2 bg-graphite">
      <h1>Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      <TodoList todo={todos} OnDelete={deleteTodo} />
    </main>
  );
};

export default Home;
