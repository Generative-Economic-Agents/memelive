System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-11-01',
          endpointPrefix: 'opsworks-cm',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'OpsWorksCM',
          serviceFullName: 'AWS OpsWorks CM',
          serviceId: 'OpsWorksCM',
          signatureVersion: 'v4',
          signingName: 'opsworks-cm',
          targetPrefix: 'OpsWorksCM_V2016_11_01',
          uid: 'opsworkscm-2016-11-01'
        },
        operations: {
          AssociateNode: {
            input: {
              type: 'structure',
              required: ['ServerName', 'NodeName', 'EngineAttributes'],
              members: {
                ServerName: {},
                NodeName: {},
                EngineAttributes: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NodeAssociationStatusToken: {}
              }
            }
          },
          CreateBackup: {
            input: {
              type: 'structure',
              required: ['ServerName'],
              members: {
                ServerName: {},
                Description: {},
                Tags: {
                  shape: 'Sc'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Backup: {
                  shape: 'Sh'
                }
              }
            }
          },
          CreateServer: {
            input: {
              type: 'structure',
              required: ['Engine', 'ServerName', 'InstanceProfileArn', 'InstanceType', 'ServiceRoleArn'],
              members: {
                AssociatePublicIpAddress: {
                  type: 'boolean'
                },
                CustomDomain: {},
                CustomCertificate: {},
                CustomPrivateKey: {
                  type: 'string',
                  sensitive: true
                },
                DisableAutomatedBackup: {
                  type: 'boolean'
                },
                Engine: {},
                EngineModel: {},
                EngineVersion: {},
                EngineAttributes: {
                  shape: 'S4'
                },
                BackupRetentionCount: {
                  type: 'integer'
                },
                ServerName: {},
                InstanceProfileArn: {},
                InstanceType: {},
                KeyPair: {},
                PreferredMaintenanceWindow: {},
                PreferredBackupWindow: {},
                SecurityGroupIds: {
                  shape: 'Sn'
                },
                ServiceRoleArn: {},
                SubnetIds: {
                  shape: 'Sn'
                },
                Tags: {
                  shape: 'Sc'
                },
                BackupId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Server: {
                  shape: 'Sz'
                }
              }
            }
          },
          DeleteBackup: {
            input: {
              type: 'structure',
              required: ['BackupId'],
              members: {
                BackupId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteServer: {
            input: {
              type: 'structure',
              required: ['ServerName'],
              members: {
                ServerName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeAccountAttributes: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                Attributes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Maximum: {
                        type: 'integer'
                      },
                      Used: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeBackups: {
            input: {
              type: 'structure',
              members: {
                BackupId: {},
                ServerName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Backups: {
                  type: 'list',
                  member: {
                    shape: 'Sh'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeEvents: {
            input: {
              type: 'structure',
              required: ['ServerName'],
              members: {
                ServerName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ServerEvents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      ServerName: {},
                      Message: {},
                      LogUrl: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeNodeAssociationStatus: {
            input: {
              type: 'structure',
              required: ['NodeAssociationStatusToken', 'ServerName'],
              members: {
                NodeAssociationStatusToken: {},
                ServerName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NodeAssociationStatus: {},
                EngineAttributes: {
                  shape: 'S4'
                }
              }
            }
          },
          DescribeServers: {
            input: {
              type: 'structure',
              members: {
                ServerName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Servers: {
                  type: 'list',
                  member: {
                    shape: 'Sz'
                  }
                },
                NextToken: {}
              }
            }
          },
          DisassociateNode: {
            input: {
              type: 'structure',
              required: ['ServerName', 'NodeName'],
              members: {
                ServerName: {},
                NodeName: {},
                EngineAttributes: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NodeAssociationStatusToken: {}
              }
            }
          },
          ExportServerEngineAttribute: {
            input: {
              type: 'structure',
              required: ['ExportAttributeName', 'ServerName'],
              members: {
                ExportAttributeName: {},
                ServerName: {},
                InputAttributes: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EngineAttribute: {
                  shape: 'S5'
                },
                ServerName: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sc'
                },
                NextToken: {}
              }
            }
          },
          RestoreServer: {
            input: {
              type: 'structure',
              required: ['BackupId', 'ServerName'],
              members: {
                BackupId: {},
                ServerName: {},
                InstanceType: {},
                KeyPair: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Server: {
                  shape: 'Sz'
                }
              }
            }
          },
          StartMaintenance: {
            input: {
              type: 'structure',
              required: ['ServerName'],
              members: {
                ServerName: {},
                EngineAttributes: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Server: {
                  shape: 'Sz'
                }
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'Sc'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {},
                TagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateServer: {
            input: {
              type: 'structure',
              required: ['ServerName'],
              members: {
                DisableAutomatedBackup: {
                  type: 'boolean'
                },
                BackupRetentionCount: {
                  type: 'integer'
                },
                ServerName: {},
                PreferredMaintenanceWindow: {},
                PreferredBackupWindow: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Server: {
                  shape: 'Sz'
                }
              }
            }
          },
          UpdateServerEngineAttributes: {
            input: {
              type: 'structure',
              required: ['ServerName', 'AttributeName'],
              members: {
                ServerName: {},
                AttributeName: {},
                AttributeValue: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Server: {
                  shape: 'Sz'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'list',
            member: {
              shape: 'S5'
            }
          },
          S5: {
            type: 'structure',
            members: {
              Name: {},
              Value: {
                type: 'string',
                sensitive: true
              }
            }
          },
          Sc: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          Sh: {
            type: 'structure',
            members: {
              BackupArn: {},
              BackupId: {},
              BackupType: {},
              CreatedAt: {
                type: 'timestamp'
              },
              Description: {},
              Engine: {},
              EngineModel: {},
              EngineVersion: {},
              InstanceProfileArn: {},
              InstanceType: {},
              KeyPair: {},
              PreferredBackupWindow: {},
              PreferredMaintenanceWindow: {},
              S3DataSize: {
                deprecated: true,
                type: 'integer'
              },
              S3DataUrl: {
                deprecated: true
              },
              S3LogUrl: {},
              SecurityGroupIds: {
                shape: 'Sn'
              },
              ServerName: {},
              ServiceRoleArn: {},
              Status: {},
              StatusDescription: {},
              SubnetIds: {
                shape: 'Sn'
              },
              ToolsVersion: {},
              UserArn: {}
            }
          },
          Sn: {
            type: 'list',
            member: {}
          },
          Sz: {
            type: 'structure',
            members: {
              AssociatePublicIpAddress: {
                type: 'boolean'
              },
              BackupRetentionCount: {
                type: 'integer'
              },
              ServerName: {},
              CreatedAt: {
                type: 'timestamp'
              },
              CloudFormationStackArn: {},
              CustomDomain: {},
              DisableAutomatedBackup: {
                type: 'boolean'
              },
              Endpoint: {},
              Engine: {},
              EngineModel: {},
              EngineAttributes: {
                shape: 'S4'
              },
              EngineVersion: {},
              InstanceProfileArn: {},
              InstanceType: {},
              KeyPair: {},
              MaintenanceStatus: {},
              PreferredMaintenanceWindow: {},
              PreferredBackupWindow: {},
              SecurityGroupIds: {
                shape: 'Sn'
              },
              ServiceRoleArn: {},
              Status: {},
              StatusReason: {},
              SubnetIds: {
                shape: 'Sn'
              },
              ServerArn: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=7c79c31984e9384c5d82653f17d5cd8c4064ecfd.js.map