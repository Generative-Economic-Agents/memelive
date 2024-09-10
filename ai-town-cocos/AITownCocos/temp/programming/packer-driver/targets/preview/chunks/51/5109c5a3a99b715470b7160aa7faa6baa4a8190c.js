System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListDeadLetterSourceQueues: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'queueUrls'
          },
          ListQueues: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'QueueUrls'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=5109c5a3a99b715470b7160aa7faa6baa4a8190c.js.map