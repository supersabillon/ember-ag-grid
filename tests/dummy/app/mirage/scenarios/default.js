export default function(server) {
  server.createList('category', 500);
  server.createList('department', 30);
  server.createList('material', 50);
  server.createList('contacts', 1000);
}

