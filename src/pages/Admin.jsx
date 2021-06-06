import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Navbar from '../components/Navbar';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}

function Row(props) {
  const { order } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {order.name}
        </TableCell>
        <TableCell align="right">+375296566326</TableCell>
        <TableCell align="right">Молодежная 69</TableCell>
        <TableCell align="right">13 руб.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Order
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Имя</TableCell>
                    <TableCell>Цена</TableCell>
                    <TableCell align="right">Объем</TableCell>
                    <TableCell align="right">тип</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.values(order.items).map((item) =>
                    Object.values(item).map((item) =>
                      Object.values(item).map((item) => (
                        <TableRow>
                          <TableCell component="th" scope="row">
                            {item.name}
                          </TableCell>
                          <TableCell>{item.price}</TableCell>
                          <TableCell align="right">{item.size}</TableCell>
                          <TableCell align="right">{item.type}</TableCell>
                        </TableRow>
                      )),
                    ),
                  )}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

function Admin() {
  const obj = useSelector(({ orders }) => orders);
  const isSignUp = useSelector(({ admin }) => admin.isSignUp);
  console.log(obj, isSignUp);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <Navbar />
          {isSignUp ? (
            <TableRow>
              <TableCell />
              <TableCell>Имя заказчика</TableCell>
              <TableCell align="right">Телефон</TableCell>
              <TableCell align="right">Адрес</TableCell>
              <TableCell align="right">Сумма</TableCell>
            </TableRow>
          ) : null}
        </TableHead>
        <TableBody>
          {isSignUp && obj.orders && obj.orders.map((order) => <Row order={order} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Admin;
