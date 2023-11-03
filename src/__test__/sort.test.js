import { orderByProps } from '../js/sort';

test('Должен сортировать свойства объекта в указанном порядке', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
  const order = ['name', 'level'];
  const result = orderByProps(obj, order);

  expect(result).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

test('Должен сортировать свойства объекта в алфавитном порядке, если они не находятся в массиве заказов', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
  const order = ['level', 'armor'];
  const result = orderByProps(obj, order);

  expect(result).toEqual([
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'name', value: 'мечник' },
  ]);
});

