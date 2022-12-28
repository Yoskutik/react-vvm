import { injectable } from 'tsyringe';
import { computed } from 'mobx';
import { childView, view, ViewModel } from '@yoskutik/react-vvm';
import { HBox, VBox } from '@components';
import { ArticlesService, TArticle } from '@services';
import type { AppViewModel } from './App';

type ArticleProps = {
  data: TArticle;
};

@injectable()
class ArticlesViewModel extends ViewModel<AppViewModel, ArticleProps> {
  @computed get read(): boolean {
    return this.articlesService.readIds.has(this.viewProps?.data.id);
  }

  constructor(public articlesService: ArticlesService) {
    super();
  }

  onRead = () => this.articlesService.read(this.viewProps.data);
}

const Article = view(ArticlesViewModel)<ArticleProps>(({ viewModel, data }) => (
  <VBox cls={`article ${viewModel.read ? 'read' : ''}`} key={Math.random()} justify="space-between">
    <h2 className="article__title">{data.title}</h2>
    <button className="article__btn" onClick={viewModel.onRead}>
      Read
    </button>
  </VBox>
));

export const Articles = childView<AppViewModel>()(({ viewModel }) => (
  <HBox wrap cls="articles">
    {viewModel.data.map(it => <Article data={it} key={it.id}/>)}
  </HBox>
));
