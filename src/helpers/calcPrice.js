export const calcSubPrice = (product1) => {
  return product1.count * product1.price;
};

export const calcTotalPrice = (cart) => {
  let sum = 0;
  cart.products.forEach((item) => {
    sum += item.subPrice;
  });
  return sum;
};
