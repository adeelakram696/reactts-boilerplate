import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { injectReducer } from 'store';
import { reducer, sliceKey } from './ducks/slice';
import { selectDirection } from './ducks/selectors';
import { DirectionProps } from './ducks/types';

const Direction = (props: DirectionProps): ReactElement => {
  injectReducer({ key: sliceKey, reducer });
  const direction = useSelector(selectDirection);
  const { children } = props;
  return <div dir={direction}>{children}</div>;
};

export default Direction;
