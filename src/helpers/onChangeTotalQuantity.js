export const onChangeTotalQuantity = orders => orders.reduce((acc, item) => acc + item.count, 0);
