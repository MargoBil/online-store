export const onAddProductToOrders = (orders, setTotalCost, setOrders) => {
  const {price, id, name} = orders;
  const ordersItemSсhema = {
    id: id,
    name: name,
    cost: price,
    count: 0,
  };
  setTotalCost(prev => prev + price);
  setOrders(prev => {
    ordersItemSсhema.count += 1;
    const isExistSameOrder = prev.find(item => item.id === id);
    if (isExistSameOrder !== undefined) {
      isExistSameOrder.count += 1;
      isExistSameOrder.cost = isExistSameOrder.cost * 2;
      return [...prev];
    }
    return [...prev, ordersItemSсhema];
  });
};
