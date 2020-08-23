import ip from '../images/ip.jpg';
import ss from '../images/ss.jpeg';
import op from '../images/oppo.jpg';
import xi from '../images/xiaomi.jpg';

var initState = [
  {
    id: 1,
    name: 'iPhone 11',
    image: ip,
    rating: 2,
    description: 'Made in American',
    price: 20000000
  },
  {
    id: 2,
    name: 'SAMSUNG GALAXY',
    image: ss,
    rating: 3,
    description: 'Made in Korea',
    price: 15000000
  },
  {
    id: 3,
    name: 'OPPO F5',
    image: op,
    rating: 4,
    description: 'Made in China',
    price: 19000000
  },
  {
    id: 4,
    name: 'Xiaomi Redme',
    image: xi,
    rating: 5,
    description: 'Made in China',
    price: 11000000
  }
]
var products = (state = initState, action) => {
  switch(action.type) {
    default:
      return [...state]
  }
};

export default products;