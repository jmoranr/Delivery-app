import { Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={30}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'black', to: 'green' }}>
          Delivery App
        </Text>
        <Text c="dimmed" ta="right" size="lg" maw={580} mx="auto" mt="xs" mb="md">
          By Jesús Morán
        </Text>
      </Title>
    </>
  );
}
