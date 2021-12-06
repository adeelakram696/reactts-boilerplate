import React from 'react';<% if (ui_library === 'material') { %>
import Button from '@material-ui/core/Button';<% } if (ui_library === 'ant') { %>
import { Button } from 'antd';<% } %>  
import PropTypes from 'prop-types';
import './style.css';

const ButtonWrap = (props) => {
  const { value, children } = props;
  return (
    <Button
      {...props}
      className="button-class"
    >
      {children}
      {value || 'Button'}
    </Button>
  );
};

ButtonWrap.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}
export default ButtonWrap;
