import { useSelector } from "react-redux";
import Card from "../Card";

function ForSell() {
  const products = useSelector((store) => store.products);

  return (
    <>
      <span>Vitrine</span>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </>
  );
}

export default ForSell;
