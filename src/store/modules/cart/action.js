export const addToCart = (product) => {
  return { type: "@cart/ADD", product };
};

export const removeFromCart = (list) => {
  return { type: "@cart/REMOVE", list };
};
