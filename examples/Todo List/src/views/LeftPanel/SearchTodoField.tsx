import { VFC } from 'react';
import { HBox } from '@components';

export const SearchTodoField: VFC<{
  value: string;
  onChange: (title: string) => void;
}> = ({ value, onChange }) => (
  <HBox>
    <input
      value={value}
      onChange={evt => onChange(evt.target.value)}
      placeholder="Search"
      className="search-field"
    />
  </HBox>
);
