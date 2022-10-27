import { VFC } from 'react';
import { childView } from '@yoskutik/react-vvm';
import { HBox, VBox } from '@components';
import type { AppViewModel } from '../App';

const Button: VFC<{ text: string; onClick: () => void }> = ({ text, onClick }) => (
  <button onClick={() => onClick()} style={{ marginRight: 10 }}>
    {text}
  </button>
);

/**
 * This is a ChildView. The closest View in the React's DOM is App, which means that ChosenItem's viewModel
 * must be AppViewModel
 */
export const ChosenItem = childView<AppViewModel>()(({ viewModel }) => {
  const item = viewModel.chosenTodo;
  if (!item) return null;

  const onDoneClick = () => {
    item.done = !item.done;
  };

  const oRemoveClick = () => viewModel.removeTodo(item.id);

  return (
    <VBox>
      <div className={`list__item ${item.done ? 'done' : ''}`}>{item.title}</div>
      <HBox style={{ marginTop: 5 }}>
        <Button text={item.done ? 'Undone' : 'Done'} onClick={onDoneClick} />
        <Button text="Remove" onClick={oRemoveClick} />
      </HBox>
    </VBox>
  );
});
