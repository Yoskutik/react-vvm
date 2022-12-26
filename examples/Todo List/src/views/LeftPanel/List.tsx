import { computed, action } from 'mobx';
import { view, ViewModel } from '@yoskutik/react-vvm';
import { VBox } from '@components';
import type { TTodoItem, AppViewModel } from '../App';

type ListProps = {
  searchText?: string;
};

/**
 * This is a ViewModel of the List component.
 * The View is located somewhere inside App, which means, that ListViewModel's parent is AppViewModel.
 *
 * The main aim of this ViewModel is to take the list of all possible todos from parent ViewModel, the
 * value of the search string, and create new filtered array. And it's all automatically done with one call
 * of autorun.
 */
class ListViewModel extends ViewModel<AppViewModel, ListProps> {
  @computed get filteredData(): TTodoItem[] {
    return (
      this.parent?.todos.filter(it => (
        !this.viewProps?.searchText || it.title.toLowerCase().includes(this.viewProps.searchText)
      )) || []
    );
  }

  @action onItemClick = (id: string) => {
    this.parent.chosenTodo = this.parent.todos.find(it => it.id === id);
  };
}

export const List = view(ListViewModel)<ListProps>(({ viewModel }) => (
  <VBox cls="list">
    {viewModel.filteredData.length ? (
      viewModel.filteredData.map(it => (
        <div
          className={`list__item ${it.done ? 'done' : ''} ${viewModel.parent.chosenTodo?.id === it.id ? 'chosen' : ''}`}
          onClick={() => viewModel.onItemClick(it.id)}
          key={it.id}
        >
          {it.title}
        </div>
      ))
    ) : (
      <div className="list__item">No items in todo list</div>
    )}
  </VBox>
));
