import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';<% if (ui_library == 'material') { %>
import { CircularProgress } from '@material-ui/core';<% } %><% if (ui_library == 'ant') { %>
import { Spin } from 'antd';<% } %>
import { updateAbility } from 'app/atoms';
import { fetchPermissions } from 'app/modules/Permission/ducks/slice';
import { selectPermission } from './ducks/selectors';

const Permissions = (props) => {
  const { children } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPermissions());
  }, []);

  const permissions = useSelector(selectPermission);

  let render = null;
  if (permissions.data) {
    updateAbility(permissions.data);
    render = children;
  }
  if (permissions.loading) {<% if (ui_library == 'ant') { %>
    render = <Spin spinning={permissions.loading} />;<% } %><% if (ui_library == 'material') { %>
    render = <CircularProgress size={100} />;<% } %>
  }

  return (
    <div>
      <>{render}</>
    </div>
  );
};

Permissions.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Permissions;
