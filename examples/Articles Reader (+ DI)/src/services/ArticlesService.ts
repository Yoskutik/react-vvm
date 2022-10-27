import { singleton } from 'tsyringe';
import { action, autorun, observable } from 'mobx';
import { SnackService } from './SnackService';

export type TArticle = {
  id: string;
  title: string;
};

/**
 * Every Service is supposed to be a singleton class.
 */
@singleton()
export class ArticlesService {
  @observable readCount = 0;

  @observable collectStatistics = true;

  @observable.shallow readIds = new Set<string>();

  constructor(private snackService: SnackService) {
    autorun(() => {
      this.readIds.size > 0 && this.readIds.size % 10 === 0
        && this.snackService.make(`You've already read ${this.readIds.size} different articles.`);
    });

    autorun(() => {
      this.readCount > 0 && this.readCount % 10 === 0
        && this.snackService.make(`You've already pressed "Read" button ${this.readCount} times.`);
    });
  }

  @action read = (article: TArticle): void => {
    !this.readIds.has(article.id) && this.snackService.make(`You've read an article "${article.title}"`);
    if (!this.collectStatistics) return;
    this.readCount++;
    this.readIds.add(article.id);
  };
}
