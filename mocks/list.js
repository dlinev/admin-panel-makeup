const orders = [
  {
    orderId: "1270989",
    orderDate: "15.02.2021, 18:00",
    orderStatus: "Новый",
    orderCount: "6",
    orderSum: "1010907",
    orderClient: "Чернышев Филипп Семёнович",
  },

  {
    orderId: "2353474",
    orderDate: "12.03.2021, 05:15",
    orderStatus: "Новый",
    orderCount: "2",
    orderSum: "98003",
    orderClient: "Филиппов Степан Васильевич",
  },

  {
    orderId: "1103397",
    orderDate: "03.02.2021, 08:04",
    orderStatus: "Рассчет",
    orderCount: "5",
    orderSum: "3800",
    orderClient: "Тихонова Алина Давидовна",
  },

  {
    orderId: "6924662",
    orderDate: "21.01.2021, 13:32",
    orderStatus: "Выполнен",
    orderCount: "1",
    orderSum: "5700",
    orderClient: "Александрова Юлия Никитична",
  },

  {
    orderId: "2200086",
    orderDate: "19.01.2021, 10:28",
    orderStatus: "Отменен",
    orderCount: "-",
    orderSum: "-",
    orderClient: "Андрей",
  },

  {
    orderId: "2842064",
    orderDate: "04.01.2021, 12:12",
    orderStatus: "Отложен",
    orderCount: "1",
    orderSum: "20500",
    orderClient: "Судакова Анастасия Ильинична",
  },

  {
    orderId: "1730071",
    orderDate: "17.12.2020, 22:45",
    orderStatus: "Выполнен",
    orderCount: "1",
    orderSum: "1399",
    orderClient: "Зверева Арина Николаевна",
  },

  {
    orderId: "7987376",
    orderDate: "07.12.2020, 08:57",
    orderStatus: "Выполнен",
    orderCount: "3",
    orderSum: "117810",
    orderClient: "Карташов Максим Кириллович",
  },

  {
    orderId: "1373265",
    orderDate: "15.11.2020, 14:26",
    orderStatus: "Выполнен",
    orderCount: "1",
    orderSum: "17008",
    orderClient: "Васильев Вадим Даниилович",
  },

  {
    orderId: "1311100",
    orderDate: "07.11.2020, 18:52",
    orderStatus: "Отменен",
    orderCount: "-",
    orderSum: "-",
    orderClient: "София",
  },
];

const ordersJson = `
    [
    {
      "orderId": "1270989",
      "orderDate": "15.02.2021, 18:00",
      "orderStatus": "Новый",
      "orderCount": "6",
      "orderSum": "1010907",
      "orderClient": "Чернышев Филипп Семёнович"
    },
  
    {
      "orderId": "2353474",
      "orderDate": "12.03.2021, 05:15",
      "orderStatus": "Новый",
      "orderCount": "2",
      "orderSum": "98003",
      "orderClient": "Филиппов Степан Васильевич"
    },
  
    {
      "orderId": "1103397",
      "orderDate": "03.02.2021, 08:04",
      "orderStatus": "Рассчет",
      "orderCount": "5",
      "orderSum": "3800",
      "orderClient": "Тихонова Алина Давидовна"
    },
  
    {
      "orderId": "6924662",
      "orderDate": "21.01.2021, 13:32",
      "orderStatus": "Выполнен",
      "orderCount": "1",
      "orderSum": "5700",
      "orderClient": "Александрова Юлия Никитична"
    },
  
    {
      "orderId": "2200086",
      "orderDate": "19.01.2021, 10:28",
      "orderStatus": "Отменен",
      "orderCount": "-",
      "orderSum": "-",
      "orderClient": "Андрей"
    },
  
    {
      "orderId": "2842064",
      "orderDate": "04.01.2021, 12:12",
      "orderStatus": "Отложен",
      "orderCount": "1",
      "orderSum": "20500",
      "orderClient": "Судакова Анастасия Ильинична"
    },
  
    {
      "orderId": "1730071",
      "orderDate": "17.12.2020, 22:45",
      "orderStatus": "Выполнен",
      "orderCount": "1",
      "orderSum": "1399",
      "orderClient": "Зверева Арина Николаевна"
    },
  
    {
      "orderId": "7987376",
      "orderDate": "07.12.2020, 08:57",
      "orderStatus": "Выполнен",
      "orderCount": "3",
      "orderSum": "117810",
      "orderClient": "Карташов Максим Кириллович"
    },
  
    {
      "orderId": "1373265",
      "orderDate": "15.11.2020, 14:26",
      "orderStatus": "Выполнен",
      "orderCount": "1",
      "orderSum": "17008",
      "orderClient": "Васильев Вадим Даниилович"
    },
  
    {
      "orderId": "1311100",
      "orderDate": "07.11.2020, 18:52",
      "orderStatus": "Отменен",
      "orderCount": "-",
      "orderSum": "-",
      "orderClient": "София"
    }
]`;
