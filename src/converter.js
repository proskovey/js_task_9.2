import getBuffer from './getbuffer';

export default class ArrayBufferConverter {
  load() {
    return getBuffer();
  }

  toString() {
    const buffer = this.load();
    const bufferView = new Uint16Array(buffer);
    let str = '';
    for (let i = 0; i < bufferView.length; i += 1) {
      str += String.fromCharCode(bufferView[i]);
    }
    return str;
  }
}
