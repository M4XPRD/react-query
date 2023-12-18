import { Todo, TodoState } from '../types/todo';

const BASE = 'http://localhost:3004/todos';

export const fetchTodos = async (state: TodoState = 'all'): Promise<Todo[]> => {
  const queries = state === 'all' ? '' : `?completed=${state === 'completed'}`;

  const res = await fetch(`${BASE}/${queries}`);

  if (!res.ok) {
    throw new Error('Failed to fetch todos!');
  }

  return res.json();
};

export const toggleTodoStatus = async (todoId: number, completed: boolean) => {
  const res = await fetch(`${BASE}/${todoId}`, {
    method: 'PATCH',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
};

export const createTodo = async (title: string) => {
  const res = await fetch(BASE, {
    method: 'POST',
    body: JSON.stringify({ title, completed: false }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
};
