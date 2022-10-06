import { FC, ComponentClass, ReactNode, Fragment } from 'react';
import { Constructable } from './types';
import { ViewModel } from './ViewModel';

type TConfiguration = {
  vmFactory?: <T extends ViewModel>(VM: Constructable<T>) => T,
  Wrapper?: FC<{ children: ReactNode }> | ComponentClass<{ children: ReactNode }>,
};

export const configuration: TConfiguration = {
  vmFactory: VM => new VM(),
  Wrapper: Fragment,
};

export const configure = (config: TConfiguration) => {
  Object.assign(configuration, config);
};
