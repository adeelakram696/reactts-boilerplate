import React from 'react';
import PropTypes from 'prop-types';
import { ConfigProvider } from 'antd';
import { useSelector } from 'react-redux';
import { selectDirection } from './ducks/selectors';

const Direction = (props) => {
  const direction = useSelector(selectDirection);
  const { children } = props;
  return <ConfigProvider direction={direction}>{children}</ConfigProvider>;
};
Direction.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Direction;
