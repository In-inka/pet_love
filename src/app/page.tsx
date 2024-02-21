'use client';
import AddTodoForm from '@/components/AddTodoForm/AddTodoForm';
import TodoList from '@/components/TodoList/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addTodo, deleteTodo } from '@/todoSlice';

export interface Todo {
  id: number;
  text: string;
}

const Home: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  return (
    <main className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-2 bg-graphite">
      <h1>Todo List</h1>
      <AddTodoForm onAdd={text => dispatch(addTodo(text))} />
      <TodoList todo={todos} OnDelete={id => dispatch(deleteTodo(id))} />
    </main>
  );
};

export default Home;
