const routes = (handler) => [
  {
    method: 'POST',
    path: '/users',
    handler: handler.postUserHandler.bind(handler),
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: handler.getUserByIdHandler.bind(handler),
  },
  {
    method: 'GET',
    path: '/users',
    handler: handler.getUsersByUsernameHandler.bind(handler),
  },
];

module.exports = routes;
