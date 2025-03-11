// First command. It creates the database deliveryDB
use deliveryDB

// Second command. It creates the collection orders with the data
db.orders.insertMany ([
  {
    customerName: 'Jesus',
    deliveryAddress: 'Av Fuenlabrada',
    totalPrice: 20,
    orderStatus: 'PENDING',
    createdAt: '2025-03-01'
  },
  {
    customerName: 'Pablo',
    deliveryAddress: 'Cl Gran Via',
    totalPrice: 15,
    orderStatus: 'ON_THE_WAY',
    createdAt: '2025-03-05'
  },
  {
    customerName: 'Blanca',
    deliveryAddress: 'Cl del Sol',
    totalPrice: 13,
    orderStatus: 'DELIVERED',
    createdAt: '2025-03-08'
  },
  {
    customerName: 'Maria',
    deliveryAddress: 'C1 Mayor',
    totalPrice: 24,
    orderStatus: 'PENDING',
    createdAt: '2025-03-10'
  },
  {
    customerName: 'Carlos',
    deliveryAddress: 'Av San Blas',
    totalPrice: 29,
    orderStatus: 'DELIVERED',
    createdAt: '2025-03-15'
  },
  {
    customerName: 'Marta',
    deliveryAddress: 'Av Delicias',
    totalPrice: 19,
    orderStatus: 'ON_THE_WAY',
    createdAt: '2025-03-20'
  }
])
