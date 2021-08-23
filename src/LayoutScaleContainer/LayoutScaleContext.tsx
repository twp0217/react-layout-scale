import React from 'react';
import { LayoutScaleContextProps } from './interface';

const LayoutScaleContext = React.createContext<
  LayoutScaleContextProps | undefined
>(undefined);

export default LayoutScaleContext;
