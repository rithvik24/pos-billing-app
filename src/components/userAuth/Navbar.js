import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import {AppBar,Toolbar,Button,Typography,IconButton,useScrollTrigger,Slide,Tooltip} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, Route, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../../App.css";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Account from "./Account";
import { logoutUser } from "../../actions/userActions";
import CustomersContainer from "../customers/CustomersContainer";
import ProductsContainer from "../Products/ProductsContainer";
import BillsContainer from "../bills/BillsContainer";
import ShowBill from "../bills/ShowBill";
import PrivateRoute from "../../helpers/PrivateRoute";
import { navBarLinkBtn, navBarTypoGraphy } from "../../helpers/styleHelpers";
import { asyncGetUser } from '../../actions/userActions'
import { asyncGetCustomers } from '../../actions/customersActions'
import { asyncGetBills } from '../../actions/billsActions'
import { asyncGetPorducts } from '../../actions/productsActions'

const Navbar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  const token = localStorage.getItem('token')

  function HideOnScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
      dispatch(asyncGetUser())
      dispatch(asyncGetCustomers())
      dispatch(asyncGetPorducts())
      dispatch(asyncGetBills())
    }
  }, [token,dispatch]);

  const handleAfterLogOut = () => {
    localStorage.removeItem("token");
    handleIsLoggedIn();
  };

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Logout'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logoutUser(handleAfterLogOut));
      }
    })
  };

  const handleIsLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: "#00b8d4",
            height: "75px",
            justifyContent: "center",
          }}
        >
          <Toolbar>
            <Button
              variant="text"
              sx={{ ...navBarLinkBtn, marginRight: "30px", left: "90px"}}
            >
              <Link className="link" to="/">
                <Typography variant='h1' sx = {navBarTypoGraphy}>
                  Home
                </Typography>
              </Link>
            </Button>
            {isLoggedIn ? (
              <>
                <Tooltip title='User Profile'>
                  <IconButton
                    variant="text"
                    sx={{ color: "black", marginRight: "30px", right: "110px" }}
                  >
                    <Link id="textColor" className="link" to="/account">
                      <AccountCircleIcon sx={{ fontSize: "2.5rem", color: "black" }}/>
                    </Link>
                  </IconButton>
                </Tooltip>
                <Button
                  variant="text"
                  sx={{...navBarLinkBtn,marginRight: "30px"}}
                >
                  <Link className="link" to="/customers">
                    <Typography variant='h1' sx = {navBarTypoGraphy}>
                    Customers
                    </Typography>
                  </Link>
                </Button>
                <Button
                  variant="text"
                  sx={{...navBarLinkBtn,marginRight: "30px"}}
                >
                  <Link className="link" to="/products">
                    <Typography variant='h1' sx = {navBarTypoGraphy}>
                      Products
                    </Typography>
                  </Link>
                </Button>
                <Button
                  variant="text"
                  sx={{...navBarLinkBtn, marginRight: "30px"}}
                >
                  <Link className="link" to="/billing">
                    <Typography variant='h1' sx = {navBarTypoGraphy}>
                      Billing
                    </Typography>
                  </Link>
                </Button>
                <Button variant="text" sx={{...navBarLinkBtn,left: "690px"}}>
                  <Link
                    className="link"
                    to={`${props.location.pathname}`}
                    onClick={handleLogout}
                  >
                    <Typography variant='h1' sx = {navBarTypoGraphy}>
                      Logout
                    </Typography>
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="text" sx={{...navBarLinkBtn,left: "80px"}}>
                  <Link className="link" to="/register">
                  <Typography variant='h1' sx = {navBarTypoGraphy}>
                    Register
                  </Typography>
                  </Link>
                </Button>
                <Button variant="text" sx={{...navBarLinkBtn,left: "100px"}}>
                  <Link className="link" to="/login">
                  <Typography variant='h1' sx = {navBarTypoGraphy}>
                      Login
                  </Typography>
                  </Link>
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Route path="/" component={Home} exact={true} />
      <Route path="/register" component={Register} />
      <Route
        path="/login"
        render={(props) => {
          return <Login {...props} handleIsLoggedIn={handleIsLoggedIn} />;
        }}
      />
      <PrivateRoute path="/account" component={Account} exact={true} />
      <PrivateRoute path="/customers" component={CustomersContainer} />
      <PrivateRoute path="/products" component={ProductsContainer} />
      <PrivateRoute path="/billing" component={BillsContainer} exact={true} />
      <PrivateRoute path="/billing/:id" component={ShowBill} />
    </>
  );
};

export default withRouter(Navbar);
