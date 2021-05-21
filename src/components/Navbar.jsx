import Button from './Button';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Login from './LoginS/Login';
import { makeStyles } from '@material-ui/core/styles';

function Navbar() {
  // const { items } = useSelector(({ cart }) => cart);

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const onClickAdmin = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <Login onClose={handleClose} />
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
      <div className="container">
        <div className="header__logo">
          <img
            width="100"
            src="https://logos.mybrandnewlogo.com/logos/AzLMN217njtQP5kkrm5J/images/logo-40r0ZDzwj9h272yWMJDpFEPr5XJ0.png"
            alt="Coffe logo"
          />
          <div>
            <h1>React Coffe</h1>
            <p>the best cofee in the world!</p>
          </div>
        </div>
        <div></div>

        <div className="header__cart">
          <Grid>
            {/* <Link to="/"> */}
            <Button onClick={onClickAdmin} className="button--cart">
              Login
            </Button>
            {/* </Link> */}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
