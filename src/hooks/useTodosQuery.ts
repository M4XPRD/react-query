import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '../services/todos';
import { TodoState } from '../types/todo';

const useTodosQuery = (state: TodoState) => useQuery({
  queryFn: () => fetchTodos(state),
  queryKey: ['todos', state],
  staleTime: 1000 * 5,
});

export default useTodosQuery;
