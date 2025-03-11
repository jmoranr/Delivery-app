import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { OrdersTable } from '../components/OrdersTable/OrdersTable';

export function HomePage() {
  return (
    <>
      <Welcome />
      <OrdersTable />
      <ColorSchemeToggle />
    </>
  );
}
