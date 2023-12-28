import getBuffer from '../getbuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('to string', () => {
  const buffer = getBuffer();
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  const converterString = converter.toString();
  expect(converterString).toEqual(' {"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
