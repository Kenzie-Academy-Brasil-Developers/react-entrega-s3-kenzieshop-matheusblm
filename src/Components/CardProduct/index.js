import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";
import { AddShoppingCart, Delete } from "@material-ui/icons";
import useStyles from "./styles";

const CardProduct = ({ product, remove = false }) => {
  const { id, name, price, image } = product;
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Card className={classes.rot}>
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5" ml={3}>
            {price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </Typography>
        </div>
        <CardActions disableSpacing className={classes.CardActions}>
          {remove ? (
            <IconButton aria-label="Remove from  Cart">
              <Delete onClick={() => dispatch(removeFromCartThunk(id))} />
            </IconButton>
          ) : (
            <IconButton aria-label="Add to Cart">
              <AddShoppingCart
                onClick={() => dispatch(addToCartThunk(product))}
              />
            </IconButton>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default CardProduct;
