import { Checkbox, ListItem, Stack } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Todo } from '../types/todo';
import { toggleTodoStatus } from '../services/todos';

const TodoItem = ({ completed, id, title }: Todo) => {
  const client = useQueryClient();

  const { mutate: toggle } = useMutation({
    mutationFn: () => toggleTodoStatus(id, !completed),
    onSuccess: () => client.invalidateQueries({ queryKey: ['todos'] }),
  });

  return (
    <ListItem>
      <Stack spacing={4} direction="row" onClick={() => toggle()}>
        <Checkbox isChecked={completed}>{title}</Checkbox>
      </Stack>
    </ListItem>
  );
};
export default TodoItem;
