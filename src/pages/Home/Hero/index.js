import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from 'components/Typography';
import Container from '@material-ui/core/Container';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Button from 'components/Button';
import { Link as RouterLink } from 'react-router-dom';
import HeroImg from './hero.jpg';
import './hero.css';
import LazyLoad from 'react-lazyload';

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: theme.palette.primary,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '50vh',
      minHeight: 500,
      maxHeight: 1300
    }
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.3,
    zIndex: -1
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2
  },
  arrowDown: {
    fontSize: 64,
    position: 'absolute',
    bottom: theme.spacing(4)
  },
  button: {
    minWidth: 200
  },
  more: {
    marginTop: theme.spacing(2)
  },
  aide: {
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      bottom: theme.spacing(20)
    }
  }
});

function Hero(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.backdrop} />
        <div className={clsx(classes.background, 'hero')} />
        <LazyLoad>
          <img src={HeroImg} style={{ display: 'none' }} alt="hero" />
        </LazyLoad>
        <Paper>
          <Typography
            color="inherit"
            align="center"
            variant="h2"
            marked="center"
          >
            {`Permis de construire facile`}
          </Typography>
        </Paper>
        <Paper>
          <Typography color="inherit" align="center" variant="h5">
            {`Déposez et gérez votre déclaration préalable de travaux en toute simplicité.`}
          </Typography>
        </Paper>
        <div className={classes.aide}>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            component={RouterLink}
            to="/aide"
          >
            {'Découvrez comment'}
          </Button>
        </div>
        <Paper>
          <ExpandMore className={classes.arrowDown} />
        </Paper>
      </Container>
    </section>
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hero);
