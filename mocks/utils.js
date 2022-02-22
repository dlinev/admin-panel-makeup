const _STATUS = "Выполнен";
const getOrderByStatus = (orders, valueStatus) =>
  orders.filter((order) => order.orderStatus === valueStatus);

alert(
  'Записей со статусом "' +
    _STATUS +
    '" - ' +
    //    getOrderByStatus(JSON.parse(ordersJson), _STATUS).length
    getOrderByStatus(orders, _STATUS).length
);
