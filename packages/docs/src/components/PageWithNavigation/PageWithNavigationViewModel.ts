import { ViewModel } from '@yoskutik/react-vvm';
import { action, computed, observable } from 'mobx';

export class PageWithNavigationViewModel extends ViewModel {
  private readonly idToHeading: Record<string, HTMLDivElement> = {};

  private animatedInfo: {
    heading: HTMLDivElement,
    timeout: number,
  };

  @observable.shallow private readonly headersOrdered: string[] = [];

  @observable.shallow private readonly visibleHeaders = new Set<string>();

  @computed get firstVisibleHeader(): string {
    return this.headersOrdered.find(it => this.visibleHeaders.has(it));
  }

  @action addHeader = (id: string, el: HTMLDivElement) => {
    this.headersOrdered.push(id);
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
    window.scrollBy({ behavior: 'smooth', top: top - 64 });
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
