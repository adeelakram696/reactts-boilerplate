import React, { useEffect, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';<% if (ui_library == 'material') { %>
import { CircularProgress } from '@material-ui/core';<% } %><% if (ui_library == 'ant') { %>
import { Spin } from 'antd';<% } %>
import { injectReducer } from 'store';
import { updateAbility } from 'app/atoms';
import { fetchPermissions } from 'app/modules/Permission/ducks/slice';
import { reducer, sliceKey } from './ducks/slice';
import { PermissionPropTypes } from './ducks/types';
import { selectPermission } from './ducks/selectors';

const Permissions: React.FC<PermissionPropTypes> = (props: PermissionPropTypes): ReactElement => {
  injectReducer({ key: sliceKey, reducer });
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

  return <> {render} </>;
};

export default Permissions;
