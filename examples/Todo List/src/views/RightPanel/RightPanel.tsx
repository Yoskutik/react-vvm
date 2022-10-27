import { memo, VFC } from 'react';
import { VBox } from '@components';
import { NewTodoField } from './NewTodoField';
import { ChosenItem } from './ChosenItem';

export const RightPanel: VFC<{ onAdd: (title: string) => void }> = memo(({ onAdd }) => (
  <VBox>
    <NewTodoField onAdd={onAdd} />
    <ChosenItem />
  </VBox>
));
