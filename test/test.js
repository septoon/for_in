import filterObject from '../src/js/app';

test('with my values', () => {
  const characters = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const answer = filterObject(characters, ['name', 'health']);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'health', value: 10 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'level', value: 2 },
  ];

  expect(answer).toEqual(expected);
});

test('without my values', () => {
  const characters = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const answer = filterObject(characters);
  const expected = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];

  expect(answer).toEqual(expected);
});

test('with my all values', () => {
  const characters = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const answer = filterObject(characters, ['name', 'health', 'defence', 'level', 'attack']);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'health', value: 10 },
    { key: 'defence', value: 40 },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
  ];

  expect(answer).toEqual(expected);
});
