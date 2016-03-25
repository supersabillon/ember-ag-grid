export default function() {

  this.get('/categories', db => {
    return db.categories;
  });

  this.get('/departments', db => {
    return db.departments;
  });

  this.get('/materials', db => {
    return db.materials;
  });
  
  this.get('/contacts', db => {
    return db.contacts;
  });

}