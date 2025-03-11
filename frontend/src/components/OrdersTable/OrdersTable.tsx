import { useEffect, useState } from 'react';
import { IconCheck } from '@tabler/icons-react';
import { ActionIcon, Group, Table, TextInput } from '@mantine/core';
import OrdersApiService from '../../services/orders.api.service';
import classes from './OrdersTable.module.css';
import Order from '@/models/orders.model';

const ordersApiService: OrdersApiService = new OrdersApiService();
const defaultStartingDate: string = '2025-03-01';
const defaultEndingDate: string = '2025-03-31';

export function OrdersTable() {
  const [ordersList, setOrdersList] = useState<Order[]>([]);
  const [startingDate, setStartingDate] = useState<string>(defaultStartingDate);
  const [endingDate, setEndingDate] = useState<string>(defaultEndingDate);
  useEffect(() => {
    fetchOrdersList();
  }, []);
  
  async function fetchOrdersList(): Promise<void> {
    try {
      const response: any = await ordersApiService.getOrdersByDateRange(startingDate, endingDate);
      if (response?.data?.data) {
        const ordersList: Order[] = response.data.data;
        setOrdersList(ordersList);
      }
    } catch (error: any) {
      console.error(error?.response?.data?.msg);
    }
  }
  const rows: any = ordersList.map((order: any, index: number) => (
    <Table.Tr key={index}>
      <Table.Td>{order.customerName}</Table.Td>
      <Table.Td>{order.deliveryAddress}</Table.Td>
      <Table.Td>{order.totalPrice}</Table.Td>
      <Table.Td>{order.orderStatus}</Table.Td>
      <Table.Td>{order.createdAt.split('T')[0]}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <Group className={classes.dateInputs}>
        <TextInput
          value={startingDate}
          label="From date (yyyy-mm-dd)"
          placeholder="Date input"
          onChange={(event) => setStartingDate(event.currentTarget.value)}
        />
        <TextInput
          value={endingDate}
          label="to date (yyyy-mm-dd)"
          placeholder="Date input"
          onChange={(event) => setEndingDate(event.currentTarget.value)}
        />
        <ActionIcon
          onClick={fetchOrdersList}
          className={classes.checkButton}
          variant="filled"
          radius="lg"
        >
          <IconCheck style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
      </Group>
      <Table mt={15} my={50} maw={900} style={{ margin: 'auto' }}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Customer name</Table.Th>
            <Table.Th>Delivery address</Table.Th>
            <Table.Th>Total price</Table.Th>
            <Table.Th>Order status</Table.Th>
            <Table.Th>Created at</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
}
