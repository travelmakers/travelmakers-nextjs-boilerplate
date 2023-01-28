import Todo from './todo';

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

const getTodos = async () => {
  const res = await fetch('http://localhost:3000/api/todos');
  const todos: TodoProps[] = await res.json();
  return todos;
};

export default async function Page() {
  const todos = await getTodos();
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
