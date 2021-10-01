import {
  AppBar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { ShoppingCart, Home } from "@material-ui/icons";
import Toolbar from "@material-ui/core/Toolbar";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();
  const products = useSelector((store) => store.cart);
  const history = useHistory();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variante="h6" className={classes.title} color="inherit">
            <img
              src={"https://kenzie.com.br/images/logoblue.svg"}
              alt="Commerce.js"
              height="25px"
              className={classes.image}
            />
            KenzieShop
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton arial-label="Home" color="inherit">
              <Home onClick={() => history.push("/")} />
            </IconButton>
            <IconButton arial-label="Show Cart items" color="inherit">
              <Badge badgeContent={products.length} color="secondary">
                <ShoppingCart onClick={() => history.push("/cart")} />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
