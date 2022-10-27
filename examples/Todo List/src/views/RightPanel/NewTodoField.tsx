import { useState, VFC } from 'react';
import { HBox } from '@components';

export const NewTodoField: VFC<{ onAdd: (title: string) => void }> = ({ onAdd }) => {
  const [value, setValue] = useState('');

  const onClick = () => {
    onAdd(value);
    setValue('');
  };

  return (
    <HBox style={{ marginBottom: 10 }}>
      <input
        onChange={evt => setValue(evt.target.value)}
        placeholder="Enter new Todo"
        style={{ marginRight: 10 }}
        value={value}
      />
      <button onClick={onClick} disabled={!value}>
        Add
      </button>
    </HBox>
  );
};
