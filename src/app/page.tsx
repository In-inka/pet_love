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
    <main className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4 ">Todo List</h1>
        <AddTodoForm onAdd={text => dispatch(addTodo(text))} />
        <TodoList todo={todos} OnDelete={id => dispatch(deleteTodo(id))} />
      </div>
    </main>
  );
};

export default Home;
