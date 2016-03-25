import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  office: faker.commerce.department,
  sales_rep: faker.name.findName,
  total: faker.commerce.price,
  year_2010: faker.commerce.price,
  year_2011: faker.commerce.price,
  year_2012: faker.commerce.price,
  year_2013: faker.commerce.price,
  year_2014: faker.commerce.price,
  year_2015: faker.commerce.price,
  year_2016: faker.commerce.price
});
