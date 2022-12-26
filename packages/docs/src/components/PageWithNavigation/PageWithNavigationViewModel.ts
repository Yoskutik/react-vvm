import { ViewModel } from '@yoskutik/react-vvm';
import { action, computed, observable } from 'mobx';

type THeading = {
  id: string;
  text: string;
  level: number;
};

export class PageWithNavigationViewModel extends ViewModel {
  private readonly idToHeading: Record<string, HTMLDivElement> = {};

  private animatedInfo: {
    heading: HTMLDivElement,
    timeout: number,
  };

  @observable.shallow readonly headingsOrdered: THeading[] = [];

  @observable.shallow private readonly visibleHeaders = new Set<string>();

  @computed get headingIds() {
    return new Set(this.headingsOrdered.map(it => it.id));
  }

  @computed get firstVisibleHeader(): string {
    return this.headingsOrdered.find(it => this.visibleHeaders.has(it.id))?.id;
  }

  @action addHeader = (id: string, level: number, el: HTMLDivElement) => {
    // eslint-disable-next-line no-console
    this.headingIds.has(id) && console.error(`Id already exists: ${id}`);
    this.headingsOrdered.push({ id, level, text: el.textContent });
    this.idToHeading[id] = el;
  };

  @action toggleHeaderVisibility = (id: string, visible: boolean) => {
    this.visibleHeaders[visible ? 'add' : 'delete'](id);
  };

  scrollToHeading = (id: string) => {
    if (this.animatedInfo) {
      clearTimeout(this.animatedInfo.timeout);
      this.animatedInfo.heading.classList.remove('animated');
    }

    const heading = this.idToHeading[id];
    const { top } = heading.parentElement.getBoundingClientRect();
    window.scrollBy({ behavior: 'smooth', top: top - 64 - 8 });
    heading.classList.add('animated');

    this.animatedInfo = {
      heading,
      timeout: (
        setTimeout(() => {
          heading.classList.remove('animated');
          this.animatedInfo = undefined;
        }, 2_500) as any
      ),
    };
  };
}
