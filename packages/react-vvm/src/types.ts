import { FC, RefAttributes } from 'react';

export type Constructable<T> = new (...args: any[]) => T;

export type ViewWithRef<T, R = unknown> = FC<R & RefAttributes<T>>;
