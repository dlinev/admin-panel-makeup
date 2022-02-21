const getOrderByStatus = function (orders, valueStatus) {
  return orders.filter((order) => {
    return order.orderStatus === valueStatus;
  });
};

console.log(getOrderByStatus(JSON.parse(ordersJson), "Выполнен"));
