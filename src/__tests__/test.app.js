import ArrayBufferConverter from '../converter';

test('to string', () => {
  const arr = new ArrayBufferConverter();
  expect(arr.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
