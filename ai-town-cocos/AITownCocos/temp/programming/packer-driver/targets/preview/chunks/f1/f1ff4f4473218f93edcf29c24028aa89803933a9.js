System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          BotAvailable: {
            delay: 10,
            operation: 'DescribeBot',
            maxAttempts: 35,
            description: 'Wait until a bot is available',
            acceptors: [{
              expected: 'Available',
              matcher: 'path',
              state: 'success',
              argument: 'botStatus'
            }, {
              expected: 'Deleting',
              matcher: 'path',
              state: 'failure',
              argument: 'botStatus'
            }, {
              expected: 'Failed',
              matcher: 'path',
              state: 'failure',
              argument: 'botStatus'
            }, {
              expected: 'Inactive',
              matcher: 'path',
              state: 'failure',
              argument: 'botStatus'
            }]
          },
          BotAliasAvailable: {
            delay: 10,
            operation: 'DescribeBotAlias',
            maxAttempts: 35,
            description: 'Wait until a bot alias is available',
            acceptors: [{
              expected: 'Available',
              matcher: 'path',
              state: 'success',
              argument: 'botAliasStatus'
            }, {
              expected: 'Failed',
              matcher: 'path',
              state: 'failure',
              argument: 'botAliasStatus'
            }, {
              expected: 'Deleting',
              matcher: 'path',
              state: 'failure',
              argument: 'botAliasStatus'
            }]
          },
          BotExportCompleted: {
            delay: 10,
            operation: 'DescribeExport',
            maxAttempts: 35,
            description: 'Wait until a bot has been exported',
            acceptors: [{
              expected: 'Completed',
              matcher: 'path',
              state: 'success',
              argument: 'exportStatus'
            }, {
              expected: 'Deleting',
              matcher: 'path',
              state: 'failure',
              argument: 'exportStatus'
            }, {
              expected: 'Failed',
              matcher: 'path',
              state: 'failure',
              argument: 'exportStatus'
            }]
          },
          BotImportCompleted: {
            delay: 10,
            operation: 'DescribeImport',
            maxAttempts: 35,
            description: 'Wait until a bot has been imported',
            acceptors: [{
              expected: 'Completed',
              matcher: 'path',
              state: 'success',
              argument: 'importStatus'
            }, {
              expected: 'Deleting',
              matcher: 'path',
              state: 'failure',
              argument: 'importStatus'
            }, {
              expected: 'Failed',
              matcher: 'path',
              state: 'failure',
              argument: 'importStatus'
            }]
          },
          BotLocaleBuilt: {
            delay: 10,
            operation: 'DescribeBotLocale',
            maxAttempts: 35,
            description: 'Wait until a bot locale is built',
            acceptors: [{
              expected: 'Built',
              matcher: 'path',
              state: 'success',
              argument: 'botLocaleStatus'
            }, {
              expected: 'Deleting',
              matcher: 'path',
              state: 'failure',
              argument: 'botLocaleStatus'
            }, {
              expected: 'Failed',
              matcher: 'path',
              state: 'failure',
              argument: 'botLocaleStatus'
            }, {
              expected: 'NotBuilt',
              matcher: 'path',
              state: 'failure',
              argument: 'botLocaleStatus'
            }]
          },
          BotLocaleExpressTestingAvailable: {
            delay: 10,
            operation: 'DescribeBotLocale',
            maxAttempts: 35,
            description: 'Wait until a bot locale build is ready for express testing',
            acceptors: [{
              expected: 'Built',
              matcher: 'path',
              state: 'success',
              argument: 'botLocaleStatus'
            }, {
              expected: 'ReadyExpressTesting',
              matcher: 'path',
              state: 'success',
              argument: 'botLocaleStatus'
            }, {
              expected: 'Deleting',
              matcher: 'path',
              state: 'failure',
              argument: 'botLocaleStatus'
            }, {
              expected: 'Failed',
              matcher: 'path',
              state: 'failure',
              argument: 'botLocaleStatus'
            }, {
              expected: 'NotBuilt',
              matcher: 'path',
              state: 'failure',
              argument: 'botLocaleStatus'
            }]
          },
          BotVersionAvailable: {
            delay: 10,
            operation: 'DescribeBotVersion',
            maxAttempts: 35,
            description: 'Wait until a bot version is available',
            acceptors: [{
              expected: 'Available',
              matcher: 'path',
              state: 'success',
              argument: 'botStatus'
            }, {
              expected: 'Deleting',
              matcher: 'path',
              state: 'failure',
              argument: 'botStatus'
            }, {
              expected: 'Failed',
              matcher: 'path',
              state: 'failure',
              argument: 'botStatus'
            }, {
              state: 'retry',
              matcher: 'status',
              expected: 404
            }]
          },
          BotLocaleCreated: {
            delay: 10,
            operation: 'DescribeBotLocale',
            maxAttempts: 35,
            description: 'Wait unit a bot locale is created',
            acceptors: [{
              expected: 'Built',
              matcher: 'path',
              state: 'success',
              argument: 'botLocaleStatus'
            }, {
              expected: 'ReadyExpressTesting',
              matcher: 'path',
              state: 'success',
              argument: 'botLocaleStatus'
            }, {
              expected: 'NotBuilt',
              matcher: 'path',
              state: 'success',
              argument: 'botLocaleStatus'
            }, {
              expected: 'Deleting',
              matcher: 'path',
              state: 'failure',
              argument: 'botLocaleStatus'
            }, {
              expected: 'Failed',
              matcher: 'path',
              state: 'failure',
              argument: 'botLocaleStatus'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f1ff4f4473218f93edcf29c24028aa89803933a9.js.map