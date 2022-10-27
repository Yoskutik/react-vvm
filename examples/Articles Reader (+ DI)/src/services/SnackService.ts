import { action, observable } from 'mobx';
import { singleton } from 'tsyringe';

export type TToast = {
  id: string;
  text: string;
};

/**
 * Every Service is supposed to be a singleton class.
 */
@singleton()
export class SnackService {
  @observable.shallow data: TToast[] = [];

  @action make = (text: string): void => {
    this.data.push({ id: Math.random().toString(), text });
  };
}
