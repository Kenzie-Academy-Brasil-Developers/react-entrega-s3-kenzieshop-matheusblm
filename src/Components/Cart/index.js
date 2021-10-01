import { useSelector } from "react-redux";
import CardProduct from "../CardProduct";
import { Grid, Typography, Box } from "@material-ui/core";
function Cart() {
  const products = useSelector((store) => store.cart);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
        <Grid
          container
          flexDirection={"column"}
          spacing={1}
          marginTop="80px"
          ml={0}
          flexShrink="6"
        >
          <Typography variant="h5" mr={2} alignSelf="center">
            Preco Total:{" "}
            {products
              .reduce((acc, vl) => {
                return acc + vl.price;
              }, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </Typography>
          <Typography variant="h5" mr={2} alignSelf="center"></Typography>
        </Grid>

        <Grid container justify="center" spacing={4} marginTop="70px">
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CardProduct key={product.id} product={product} remove />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Cart;
