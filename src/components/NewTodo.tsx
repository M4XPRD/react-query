import { Stack, Input, Button } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { createTodo } from '../services/todos';

const NewTodo = () => {
  const [title, setTitle] = useState('');
  const client = useQueryClient();
  const { mutate: create } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['todos', 'all'] });
    },
  });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (title) {
      create(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack direction="row">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New todo..."
        />
        <Button type="submit">Add todo</Button>
      </Stack>
    </form>
  );
};

export default NewTodo;
