import AES from 'crypto-js/aes';
import { enc } from 'crypto-js';

const thing = 'const theThing = theOtherThing';

export const crypt = (text) => AES.encrypt(text, thing).toString();

export const uncrypt = (text) => {
  const bytes = AES.decrypt(text, thing);
  return bytes.toString(enc.Utf8);
};
