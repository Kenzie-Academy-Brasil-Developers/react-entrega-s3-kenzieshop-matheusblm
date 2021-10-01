import { useSelector } from "react-redux";
import CardProduct from "../CardProduct";
import { Grid } from "@material-ui/core";

function ForSell() {
  const products = useSelector((store) => store.products);

  return (
    <>
      <Grid container justify="center" spacing={4} marginTop="70px">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardProduct key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ForSell;
