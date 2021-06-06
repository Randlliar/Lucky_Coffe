import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Input from 'module';
import Link from '@material-ui/core/Link';

import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import emailjs from 'emailjs-com';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

export default function ContactUs(props) {
  const classes = useStyles();
  const [name, setName] = React.useState('');

  function sendEmail(e) {
    e.preventDefault();
    props.setOrdersList(name);
    props.onClose();
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
        <Typography component="h1" variant="h5">
          Подтвердите свой заказ.
        </Typography>
        <form className={classes.form} onSubmit={sendEmail} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            fullWidth
            name="Name"
            label="Имя"
            name="name"
            id="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="adress"
            label="Адрес доставки"
            name="adress"
            autoComplete="adress"
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="number"
            label="Мобильный телефон"
            name="number"
            placeholder="+375(xx)xxx-xx-xx"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Отправить
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
