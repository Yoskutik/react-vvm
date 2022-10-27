import { singleton } from 'tsyringe';

/**
 * Every Service is supposed to be a singleton class.
 */
@singleton()
export class ArticleTitleGenerator {
  private readonly beforeTitles = [
    'Robert Downey Jr.',
    'Kim Kardashian',
    'Dwayne Johnson',
    'LeBron James',
    'Kylie Jenner',
    'Bill Gates',
    'Jeff Bezos',
    'Elon Musk',
  ];

  private readonly middleTitles = [
    'has found the most expensive treasure - ',
    'has written the greatest poem about',
    'has started to live with',
    'was bamboozled by',
    'has bought',
  ];

  private readonly afterTitles = [
    'a half a lamborghini',
    'a huge hole',
    'a trash can',
    'a lego man',
  ];

  private getOneFrom = (arr: string[]): string => arr[Math.round(Math.random() * (arr.length) - 0.5)];

  make = (): string => {
    const before = this.getOneFrom(this.beforeTitles);
    const middle = this.getOneFrom(this.middleTitles);
    const after = this.getOneFrom(this.afterTitles);
    return `${before} ${middle} ${after}.`;
  };
}
