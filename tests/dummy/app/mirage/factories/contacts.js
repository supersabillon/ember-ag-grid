import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  prefix: faker.name.prefix,
  name: faker.name.firstName,
  last_name: faker.name.lastName,
  job : faker.name.jobTitle,
  email: faker.internet.email,
  username: faker.internet.userName,
  phone: faker.phone.phoneNumberFormat,
  website: faker.internet.domainName,
  address: faker.address.streetAddress,
  city: faker.address.city,
  state: faker.address.stateAbbr
});
