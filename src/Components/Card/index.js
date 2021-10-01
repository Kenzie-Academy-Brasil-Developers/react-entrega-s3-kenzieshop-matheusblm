import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";

const Card = ({ product, remove = false }) => {
  const { id, name, price } = product;
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{name}</h3>
      <h3>{price}</h3>
      {remove ? (
        <button onClick={() => dispatch(addToCartThunk(id))}>
          Remover item do carrinho
        </button>
      ) : (
        <button onClick={() => dispatch(removeFromCartThunk(product))}>
          Adicionar item no carrinho
        </button>
      )}
    </div>
  );
};

export default Card;
