import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  material: faker.commerce.productMaterial,
  type: faker.commerce.productAdjective,
  jan: faker.commerce.price,
  feb: faker.commerce.price,
  mar: faker.commerce.price,
  apr: faker.commerce.price,
  may: faker.commerce.price,
  jun: faker.commerce.price,
  jul: faker.commerce.price,
  aug: faker.commerce.price,
  sep: faker.commerce.price,
  oct: faker.commerce.price,
  nov: faker.commerce.price,
  dec: faker.commerce.price
});
