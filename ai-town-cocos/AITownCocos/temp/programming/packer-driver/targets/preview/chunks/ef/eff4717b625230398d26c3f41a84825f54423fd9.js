System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-06-30',
          endpointPrefix: 'migrationhub-config',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'AWS Migration Hub Config',
          serviceId: 'MigrationHub Config',
          signatureVersion: 'v4',
          signingName: 'mgh',
          targetPrefix: 'AWSMigrationHubMultiAccountService',
          uid: 'migrationhub-config-2019-06-30'
        },
        operations: {
          CreateHomeRegionControl: {
            input: {
              type: 'structure',
              required: ['HomeRegion', 'Target'],
              members: {
                HomeRegion: {},
                Target: {
                  shape: 'S3'
                },
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                HomeRegionControl: {
                  shape: 'S8'
                }
              }
            }
          },
          DeleteHomeRegionControl: {
            input: {
              type: 'structure',
              required: ['ControlId'],
              members: {
                ControlId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeHomeRegionControls: {
            input: {
              type: 'structure',
              members: {
                ControlId: {},
                HomeRegion: {},
                Target: {
                  shape: 'S3'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                HomeRegionControls: {
                  type: 'list',
                  member: {
                    shape: 'S8'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetHomeRegion: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                HomeRegion: {}
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'structure',
            required: ['Type'],
            members: {
              Type: {},
              Id: {}
            }
          },
          S8: {
            type: 'structure',
            members: {
              ControlId: {},
              HomeRegion: {},
              Target: {
                shape: 'S3'
              },
              RequestedTime: {
                type: 'timestamp'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=eff4717b625230398d26c3f41a84825f54423fd9.js.map