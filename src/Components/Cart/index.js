import { useSelector } from "react-redux";
import Card from "../Card";

function Cart() {
  const products = useSelector((store) => store.cart);

  return (
    <>
      <span>Carrinho de compras</span>
      {products.map((product) => (
        <Card key={product.id} product={product} remove />
      ))}
    </>
  );
}

export default Cart;
