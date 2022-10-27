import { FC } from 'react';
import { injectable } from 'tsyringe';
import { action } from 'mobx';
import { view, ViewModel } from '@yoskutik/react-vvm';
import { HBox, VBox } from '@components';
import { ArticlesService } from '@services';
import type { AppViewModel } from './App';

@injectable()
class StatisticsViewModel extends ViewModel<AppViewModel> {
  constructor(public readonly service: ArticlesService) {
    super();
  }

  @action onCheckChange = () => {
    this.service.collectStatistics = !this.service.collectStatistics;
  };

  onCreateExtra = () => this.parent.createExtraArticle();
}

const Item: FC<{ title: string, value: string | number }> = ({ title, value }) => (
  <HBox cls="statistics__item">
    <div className="statistics__item_title">{title}:</div>
    <div className="statistics__item_value">{value}</div>
  </HBox>
);

export const Statistics = view(StatisticsViewModel)(({ viewModel }) => (
  <VBox cls="statistics">
    <h2 className="statistics__title">Statistics</h2>
    <Item title="Amount of read articles" value={viewModel.service.readIds.size}/>
    <Item title="Amount of readings" value={viewModel.service.readCount}/>
    <label style={{ marginTop: 8 }}>
      <input type="checkbox" checked={viewModel.service.collectStatistics} onChange={viewModel.onCheckChange}/>
      Collect statistics
    </label>

    <button onClick={viewModel.onCreateExtra} style={{ marginTop: 24 }}>
      Create extra article
    </button>
  </VBox>
));
