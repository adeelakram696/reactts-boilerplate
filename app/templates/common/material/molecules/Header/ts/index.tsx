import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';<% if (casl_react_package && ui_library == 'material') { %>
import Button from '@material-ui/core/Button';<% } %><% if (casl_react_package) { %>
import { useAbility } from '@casl/react';
import { AbilityContext } from 'app/atoms';<% } %>

export const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },<% if (casl_react_package) { %>
  subjectButton: {
    marginRight: '2%',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },<% } %>
}));
interface HeaderProps {
  handleDrawerOpen: () => void;
  open: boolean;
}
export const Header = (props: HeaderProps): ReactElement => {
  const { open, handleDrawerOpen } = props;
  const classes = useStyles();<% if (casl_react_package) { %>
  const ability = useAbility(AbilityContext);<% } %>

  return (
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Dashboard
        </Typography><% if (casl_react_package) { %>
        <Button variant="contained" color="secondary" className={classes.subjectButton} disabled={ability.can('manage', 'User')}>
          Test Button
        </Button><% } %>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
