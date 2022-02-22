const getOrderByStatus = (orders, valueStatus) =>
  orders.filter((order) => order.orderStatus === valueStatus);

console.log(getOrderByStatus(ordersJson, "Выполнен"));
