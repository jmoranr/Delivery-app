// First command. It creates the database deliveryDB
use deliveryDB

// Second command. It creates the collection orders with the data
db.orders.insertMany ([
  {
    customerName: 'Jesus',
    deliveryAddress: 'Av Fuenlabrada',
    totalPrice: 20,
    orderStatus: 'PENDING',
    createdAt: new Date("2025-03-01T00:00:00.000+00:00")
  },
  {
    customerName: 'Pablo',
    deliveryAddress: 'Cl Gran Via',
    totalPrice: 15,
    orderStatus: 'ON_THE_WAY',
    createdAt: new Date("2025-03-05T00:00:00.000+00:00")
  },
  {
    customerName: 'Blanca',
    deliveryAddress: 'Cl del Sol',
    totalPrice: 13,
    orderStatus: 'DELIVERED',
    createdAt: new Date("2025-03-08T00:00:00.000+00:00")
  },
  {
    customerName: 'Maria',
    deliveryAddress: 'C1 Mayor',
    totalPrice: 24,
    orderStatus: 'PENDING',
    createdAt: new Date("2025-03-10T00:00:00.000+00:00")
  },
  {
    customerName: 'Carlos',
    deliveryAddress: 'Av San Blas',
    totalPrice: 29,
    orderStatus: 'DELIVERED',
    createdAt: new Date("2025-03-15T00:00:00.000+00:00")
  },
  {
    customerName: 'Marta',
    deliveryAddress: 'Av Delicias',
    totalPrice: 19,
    orderStatus: 'ON_THE_WAY',
    createdAt: new Date("2025-03-20T00:00:00.000+00:00")
  },
])
