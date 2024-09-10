System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListMeshes: {
            input_token: 'nextToken',
            limit_key: 'limit',
            output_token: 'nextToken',
            result_key: 'meshes'
          },
          ListRoutes: {
            input_token: 'nextToken',
            limit_key: 'limit',
            output_token: 'nextToken',
            result_key: 'routes'
          },
          ListVirtualNodes: {
            input_token: 'nextToken',
            limit_key: 'limit',
            output_token: 'nextToken',
            result_key: 'virtualNodes'
          },
          ListVirtualRouters: {
            input_token: 'nextToken',
            limit_key: 'limit',
            output_token: 'nextToken',
            result_key: 'virtualRouters'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=0310aca95959148be29e3c25d98ecfd48cdb38fa.js.map