import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectDirection } from './ducks/selectors';

const Direction = (props) => {
  const direction = useSelector(selectDirection);
  const { children } = props;
  return <div dir={direction}>{children}</div>;
};

Direction.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Direction;
