import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import Newsletter from '../components/Newsletter.js'

function Copyright() {
  return (
    <Typography variant="body2">
      {'Copyright © '}
      <Link color="inherit" href="https://g01.labagh.pl/">
        Coronavirus COVID-19 statistics
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: "#141619",
    position: 'relative'
  },
  heart: {
    color: "#CB515F",
    fontSize: "20px",
  },
  gitHubLink: {
    color: '#F4AC64'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography>
            Made with <FavoriteTwoToneIcon className={classes.heart} /> by 
            &nbsp;
            <Link className={classes.gitHubLink} color="inherit" 
              href="https://github.com/Smendowski"> Smendowski</Link>
            &nbsp;
            <Link className={classes.gitHubLink} color="inherit" 
              href="https://github.com/mmuravytskyi"> Muravytskyi</Link>
            &nbsp;
            <Link className={classes.gitHubLink}  color="inherit" 
              href="https://github.com/KrzysztofSkos"> Skoś</Link>
          </Typography>
          <Copyright />
        </Container>
        <Newsletter />
      </footer>
    </div>
  );
}

export default Footer;