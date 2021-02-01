import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '2vh',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: "#F1A961",
    [theme.breakpoints.down("xs")]:{
        flexGrow: 1,
        float: 'none',
    }
  },
  headerOptions: {
      display: 'flex',
      flex: 1,
  },
  headerItem: {
      padding: 10,
      width: '60vw',
      float: 'left',
      marginLeft: 10,
      marginBottom: 'auto',
      marginTop: 'auto',
      textAlign: 'left'
  },
  navbar: {
      backgroundColor: '#0E0E0E',
  },
  button: {
    marginLeft: "1rem",
    backgroundColor: "#FFFFFF",
  }
}));

const Header = props => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleMenuButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="dynamic">
        <Toolbar>
          <Button onClick={() => handleMenuButtonClick('/')}>
            <Typography align="left" variant="h4" className={classes.title}>
                Covid-19 Statistics
            </Typography>
          </Button>
          
            <div>
              { isMobile ? (
                  <>
                    <IconButton 
                     edge="start" 
                     className={classes.menuButton} 
                     color="inherit" 
                     aria-label="menu"
                     onClick={handleMenu}>
                     <MenuIcon />
                    </IconButton>
    
                    <Menu
                     id="menu-appbar"
                     anchorEl={anchorEl}
                     anchorOrigin={{
                         vertical: 'top',
                         horizontal: 'right',
                     }}
                     keepMounted
                     transformOrigin={{
                         vertical: 'top',
                         horizontal: 'right',
                     }}
                     open={open}
                     onClose={() => setAnchorEl(null)}
                     >
                     <MenuItem onClick={() => handleMenuClick('/global-map-total-cases')}>Total</MenuItem>
                     <MenuItem onClick={() => handleMenuClick('/global-map-active-cases')}>Active</MenuItem>
                     <MenuItem onClick={() => handleMenuClick('/global-map-recovered')}>Recovered</MenuItem>
                     <MenuItem onClick={() => handleMenuClick('/global-map-death')}>Deaths</MenuItem>
                     <MenuItem onClick={() => handleMenuClick('/graphs')}>Graphs</MenuItem>
                    </Menu>
                </>
              ) : (
                <div className={classes.headerOptions}>
                    <div className={classes.headerItem}>
                        <Button className={classes.button} variant="contained" onClick={() => handleMenuButtonClick('/global-map-total-cases')}>Total</Button>
                        <Button className={classes.button} variant="contained" onClick={() => handleMenuButtonClick('/global-map-active-cases')}>Active</Button>
                        <Button className={classes.button} variant="contained" onClick={() => handleMenuButtonClick('/global-map-recovered')}>Recovered</Button>
                        <Button className={classes.button} variant="contained" onClick={() => handleMenuButtonClick('/global-map-death')}>Deaths</Button>
                        <Button className={classes.button} variant="contained" onClick={() => handleMenuButtonClick('/graphs')}>Graphs</Button>
                    </div>
                </div>
                
              )}
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header);