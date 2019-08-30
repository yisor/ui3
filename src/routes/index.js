const routes = [
  {
    path: '/',
    onEnter: (nextState, replace) => { },
    getComponent(nextState, cb) {
      import('../layouts/AppLayout').then((module) => {
        cb(null, module.default);
      });
    },
    indexRoute: {
      getComponent(location, cb) {
        import('../pages/home/IndexPage').then(module => {
          cb(null, module.default);
        });
      }
    },
  },
  {
    path: '/user',
    onEnter: (nextState, replace) => { },
    getComponent(nextState, cb) {
      import('../pages/user/UserPage').then((module) => {
        cb(null, module.default);
      });
    },
  },
];

export default routes;
