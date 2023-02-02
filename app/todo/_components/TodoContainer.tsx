'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

interface Props {
  id: number;
  title: string;
  completed: boolean;
}

const Todo = (todo: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const { id, completed, title } = todo;

  // Create inline loading UI
  const isMutating = isFetching || isPending;

  async function handleChange() {
    setIsFetching(true);
    // Mutate external data source
    await fetch(`https://api.example.com/todo/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ completed: !completed }),
    });
    setIsFetching(false);

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  }

  return (
    <li style={{ opacity: !isMutating ? 1 : 0.7 }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleChange}
        disabled={isPending}
      />
      {title}
    </li>
  );
};

export default Todo;
