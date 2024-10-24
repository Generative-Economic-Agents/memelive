System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          ClusterActive: {
            delay: 30,
            operation: 'DescribeCluster',
            maxAttempts: 40,
            acceptors: [{
              expected: 'DELETING',
              matcher: 'path',
              state: 'failure',
              argument: 'cluster.status'
            }, {
              expected: 'FAILED',
              matcher: 'path',
              state: 'failure',
              argument: 'cluster.status'
            }, {
              expected: 'ACTIVE',
              matcher: 'path',
              state: 'success',
              argument: 'cluster.status'
            }]
          },
          ClusterDeleted: {
            delay: 30,
            operation: 'DescribeCluster',
            maxAttempts: 40,
            acceptors: [{
              expected: 'ACTIVE',
              matcher: 'path',
              state: 'failure',
              argument: 'cluster.status'
            }, {
              expected: 'CREATING',
              matcher: 'path',
              state: 'failure',
              argument: 'cluster.status'
            }, {
              expected: 'PENDING',
              matcher: 'path',
              state: 'failure',
              argument: 'cluster.status'
            }, {
              expected: 'ResourceNotFoundException',
              matcher: 'error',
              state: 'success'
            }]
          },
          NodegroupActive: {
            delay: 30,
            operation: 'DescribeNodegroup',
            maxAttempts: 80,
            acceptors: [{
              expected: 'CREATE_FAILED',
              matcher: 'path',
              state: 'failure',
              argument: 'nodegroup.status'
            }, {
              expected: 'ACTIVE',
              matcher: 'path',
              state: 'success',
              argument: 'nodegroup.status'
            }]
          },
          NodegroupDeleted: {
            delay: 30,
            operation: 'DescribeNodegroup',
            maxAttempts: 40,
            acceptors: [{
              expected: 'DELETE_FAILED',
              matcher: 'path',
              state: 'failure',
              argument: 'nodegroup.status'
            }, {
              expected: 'ResourceNotFoundException',
              matcher: 'error',
              state: 'success'
            }]
          },
          AddonActive: {
            delay: 10,
            operation: 'DescribeAddon',
            maxAttempts: 60,
            acceptors: [{
              expected: 'CREATE_FAILED',
              matcher: 'path',
              state: 'failure',
              argument: 'addon.status'
            }, {
              expected: 'DEGRADED',
              matcher: 'path',
              state: 'failure',
              argument: 'addon.status'
            }, {
              expected: 'ACTIVE',
              matcher: 'path',
              state: 'success',
              argument: 'addon.status'
            }]
          },
          AddonDeleted: {
            delay: 10,
            operation: 'DescribeAddon',
            maxAttempts: 60,
            acceptors: [{
              expected: 'DELETE_FAILED',
              matcher: 'path',
              state: 'failure',
              argument: 'addon.status'
            }, {
              expected: 'ResourceNotFoundException',
              matcher: 'error',
              state: 'success'
            }]
          },
          FargateProfileActive: {
            delay: 10,
            operation: 'DescribeFargateProfile',
            maxAttempts: 60,
            acceptors: [{
              expected: 'CREATE_FAILED',
              matcher: 'path',
              state: 'failure',
              argument: 'fargateProfile.status'
            }, {
              expected: 'ACTIVE',
              matcher: 'path',
              state: 'success',
              argument: 'fargateProfile.status'
            }]
          },
          FargateProfileDeleted: {
            delay: 30,
            operation: 'DescribeFargateProfile',
            maxAttempts: 60,
            acceptors: [{
              expected: 'DELETE_FAILED',
              matcher: 'path',
              state: 'failure',
              argument: 'fargateProfile.status'
            }, {
              expected: 'ResourceNotFoundException',
              matcher: 'error',
              state: 'success'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=cb1c32a0a93187dffeed2d6cd4e3b20c68f019a5.js.map