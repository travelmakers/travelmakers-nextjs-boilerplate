import Todo from './_components/TodoContainer';

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

async function getTodos() {
  const res = await fetch('http://localhost:3000/api/todos');
  const todos: TodoProps[] = await res.json();
  return todos;
}

const Page = async () => {
  const todos = await getTodos();
  return (
    <ul>
      <li>test</li>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
export default Page;
