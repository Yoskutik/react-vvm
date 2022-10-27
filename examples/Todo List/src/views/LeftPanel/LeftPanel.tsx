import { memo, useState } from 'react';
import { VBox } from '@components';
import { SearchTodoField } from './SearchTodoField';
import { List } from './List';

/**
 * LeftPanel is a plain functional component, which controls the state of the search string.
 */
export const LeftPanel = memo(() => {
  const [searchText, setSearchText] = useState('');

  return (
    <VBox style={{ marginRight: 10 }}>
      <SearchTodoField value={searchText} onChange={setSearchText} />
      <List searchText={searchText} />
    </VBox>
  );
});
