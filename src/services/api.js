import { create } from 'apisauce';

export default create({
  baseURL: 'http://www.mocky.io/v2',
  headers: {
    'Content-Type': 'application/json',
  },
});
