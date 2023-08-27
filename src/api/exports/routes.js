const routes = (handler) => [
  {
    method: 'POST',
    path: '/export/notes',
    handler: handler.postExportNotesHandler.bind(handler),
    options: {
      auth: 'notesapp_jwt',
    },
  },
];

module.exports = routes;
