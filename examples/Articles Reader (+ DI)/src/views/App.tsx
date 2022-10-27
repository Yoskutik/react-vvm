import { ChildViewComponent, view, ViewModel } from '@yoskutik/react-vvm';
import { injectable } from 'tsyringe';
import { action, observable } from 'mobx';
import { HBox, ToastsContainer } from '@components';
import { TArticle, ArticleTitleGenerator } from '@services';
import { Articles } from './Articles';
import { Statistics } from './Statistics';
import '../Style.scss';

/**
 * Every ViewModel is supposed to be a transient class.
 */
@injectable()
export class AppViewModel extends ViewModel {
  @observable.shallow readonly data: TArticle[] = Array(20).fill(null).map(() => (
    { id: Math.random().toString(), title: this.articleTitleGenerator.make() }
  ));

  // This class is injected automatically by container.resolved, that is called in the view function
  // It is injected by class
  constructor(private articleTitleGenerator: ArticleTitleGenerator) {
    super();
  }

  @action createExtraArticle = () => {
    this.data.push({ id: Math.random().toString(), title: this.articleTitleGenerator.make() });
  };
}

class SomeViewModel extends ViewModel {
  asd = 123;
}

type ChildViewProps = {
  asd: number;
};

class ChildView extends ChildViewComponent<SomeViewModel, ChildViewProps> {
  render() {
    return <div>{this.props.asd}</div>
  }
}

const SomeView = view(SomeViewModel)((props: ChildViewProps) => <ChildView {...props} />);

export const App = view(AppViewModel)(() => (
  <HBox>
    <Articles/>
    <Statistics/>
    <ToastsContainer/>
    <SomeView asd={1213} />
  </HBox>
));
