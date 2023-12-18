import { List, Spinner } from '@chakra-ui/react';
import TodoItem from './TodoItem';
import useTodosQuery from '../hooks/useTodosQuery';

const TodoList = () => {
  const { data, isLoading, isSuccess } = useTodosQuery();

  if (isLoading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }
  return (
    <List>
      {isSuccess && data.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </List>
  );
};

export default TodoList;