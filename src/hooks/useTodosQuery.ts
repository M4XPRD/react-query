import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '../services/todos';

const useTodosQuery = () => useQuery({
  queryFn: () => fetchTodos('all'),
  queryKey: ['todos', 'all'],
});

export default useTodosQuery;
