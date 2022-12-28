import { createContext, RefObject, useContext } from 'react';

type TTitle = {
  ref: RefObject<HTMLDivElement>;
  parent?: TTitle;
};

export type TPageBlockContext = {
  level: 1 | 2 | 3;
  title?: TTitle;
};

const PageBlockContext = createContext<TPageBlockContext>({ level: 1 });

export const PageBlockContextProvider = PageBlockContext.Provider;

export const usePageBlockContext = (forceLevel?: 1 | 2 | 3) => {
  const value = useContext(PageBlockContext);
  forceLevel && (value.level = forceLevel);
  return value;
};
