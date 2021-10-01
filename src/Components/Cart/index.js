import { useSelector } from "react-redux";
import CardProduct from "../CardProduct";
import { Grid, Typography } from "@material-ui/core";
function Cart() {
  const products = useSelector((store) => store.cart);

  return (
    <>
      <Typography variant="h5" marginTop="70px">
        Seu carrinho de compra:
      </Typography>
      <Grid container justify="center" spacing={4} marginTop="70px">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardProduct key={product.id} product={product} remove />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Cart;
