System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-01-01',
          endpointPrefix: 'backup-gateway',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceFullName: 'AWS Backup Gateway',
          serviceId: 'Backup Gateway',
          signatureVersion: 'v4',
          signingName: 'backup-gateway',
          targetPrefix: 'BackupOnPremises_v20210101',
          uid: 'backup-gateway-2021-01-01'
        },
        operations: {
          AssociateGatewayToServer: {
            input: {
              type: 'structure',
              required: ['GatewayArn', 'ServerArn'],
              members: {
                GatewayArn: {},
                ServerArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayArn: {}
              }
            }
          },
          CreateGateway: {
            input: {
              type: 'structure',
              required: ['ActivationKey', 'GatewayDisplayName', 'GatewayType'],
              members: {
                ActivationKey: {},
                GatewayDisplayName: {},
                GatewayType: {},
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayArn: {}
              }
            }
          },
          DeleteGateway: {
            input: {
              type: 'structure',
              required: ['GatewayArn'],
              members: {
                GatewayArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayArn: {}
              }
            },
            idempotent: true
          },
          DeleteHypervisor: {
            input: {
              type: 'structure',
              required: ['HypervisorArn'],
              members: {
                HypervisorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                HypervisorArn: {}
              }
            },
            idempotent: true
          },
          DisassociateGatewayFromServer: {
            input: {
              type: 'structure',
              required: ['GatewayArn'],
              members: {
                GatewayArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayArn: {}
              }
            }
          },
          GetBandwidthRateLimitSchedule: {
            input: {
              type: 'structure',
              required: ['GatewayArn'],
              members: {
                GatewayArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BandwidthRateLimitIntervals: {
                  shape: 'Sm'
                },
                GatewayArn: {}
              }
            }
          },
          GetGateway: {
            input: {
              type: 'structure',
              required: ['GatewayArn'],
              members: {
                GatewayArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Gateway: {
                  type: 'structure',
                  members: {
                    GatewayArn: {},
                    GatewayDisplayName: {},
                    GatewayType: {},
                    HypervisorId: {},
                    LastSeenTime: {
                      type: 'timestamp'
                    },
                    MaintenanceStartTime: {
                      type: 'structure',
                      required: ['HourOfDay', 'MinuteOfHour'],
                      members: {
                        DayOfMonth: {
                          type: 'integer'
                        },
                        DayOfWeek: {
                          type: 'integer'
                        },
                        HourOfDay: {
                          type: 'integer'
                        },
                        MinuteOfHour: {
                          type: 'integer'
                        }
                      }
                    },
                    NextUpdateAvailabilityTime: {
                      type: 'timestamp'
                    },
                    VpcEndpoint: {}
                  }
                }
              }
            }
          },
          GetHypervisor: {
            input: {
              type: 'structure',
              required: ['HypervisorArn'],
              members: {
                HypervisorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Hypervisor: {
                  type: 'structure',
                  members: {
                    Host: {},
                    HypervisorArn: {},
                    KmsKeyArn: {},
                    LastSuccessfulMetadataSyncTime: {
                      type: 'timestamp'
                    },
                    LatestMetadataSyncStatus: {},
                    LatestMetadataSyncStatusMessage: {},
                    LogGroupArn: {},
                    Name: {},
                    State: {}
                  }
                }
              }
            }
          },
          GetHypervisorPropertyMappings: {
            input: {
              type: 'structure',
              required: ['HypervisorArn'],
              members: {
                HypervisorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                HypervisorArn: {},
                IamRoleArn: {},
                VmwareToAwsTagMappings: {
                  shape: 'S1d'
                }
              }
            }
          },
          GetVirtualMachine: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VirtualMachine: {
                  type: 'structure',
                  members: {
                    HostName: {},
                    HypervisorId: {},
                    LastBackupDate: {
                      type: 'timestamp'
                    },
                    Name: {},
                    Path: {},
                    ResourceArn: {},
                    VmwareTags: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          VmwareCategory: {},
                          VmwareTagDescription: {},
                          VmwareTagName: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          ImportHypervisorConfiguration: {
            input: {
              type: 'structure',
              required: ['Host', 'Name'],
              members: {
                Host: {},
                KmsKeyArn: {},
                Name: {},
                Password: {
                  shape: 'S1p'
                },
                Tags: {
                  shape: 'S9'
                },
                Username: {
                  shape: 'S1q'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                HypervisorArn: {}
              }
            }
          },
          ListGateways: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Gateways: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      GatewayArn: {},
                      GatewayDisplayName: {},
                      GatewayType: {},
                      HypervisorId: {},
                      LastSeenTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListHypervisors: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Hypervisors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Host: {},
                      HypervisorArn: {},
                      KmsKeyArn: {},
                      Name: {},
                      State: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'S9'
                }
              }
            }
          },
          ListVirtualMachines: {
            input: {
              type: 'structure',
              members: {
                HypervisorArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                VirtualMachines: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      HostName: {},
                      HypervisorId: {},
                      LastBackupDate: {
                        type: 'timestamp'
                      },
                      Name: {},
                      Path: {},
                      ResourceArn: {}
                    }
                  }
                }
              }
            }
          },
          PutBandwidthRateLimitSchedule: {
            input: {
              type: 'structure',
              required: ['BandwidthRateLimitIntervals', 'GatewayArn'],
              members: {
                BandwidthRateLimitIntervals: {
                  shape: 'Sm'
                },
                GatewayArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayArn: {}
              }
            },
            idempotent: true
          },
          PutHypervisorPropertyMappings: {
            input: {
              type: 'structure',
              required: ['HypervisorArn', 'IamRoleArn', 'VmwareToAwsTagMappings'],
              members: {
                HypervisorArn: {},
                IamRoleArn: {},
                VmwareToAwsTagMappings: {
                  shape: 'S1d'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                HypervisorArn: {}
              }
            },
            idempotent: true
          },
          PutMaintenanceStartTime: {
            input: {
              type: 'structure',
              required: ['GatewayArn', 'HourOfDay', 'MinuteOfHour'],
              members: {
                DayOfMonth: {
                  type: 'integer'
                },
                DayOfWeek: {
                  type: 'integer'
                },
                GatewayArn: {},
                HourOfDay: {
                  type: 'integer'
                },
                MinuteOfHour: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayArn: {}
              }
            }
          },
          StartVirtualMachinesMetadataSync: {
            input: {
              type: 'structure',
              required: ['HypervisorArn'],
              members: {
                HypervisorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                HypervisorArn: {}
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceARN: {}
              }
            }
          },
          TestHypervisorConfiguration: {
            input: {
              type: 'structure',
              required: ['GatewayArn', 'Host'],
              members: {
                GatewayArn: {},
                Host: {},
                Password: {
                  shape: 'S1p'
                },
                Username: {
                  shape: 'S1q'
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
              required: ['ResourceARN', 'TagKeys'],
              members: {
                ResourceARN: {},
                TagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceARN: {}
              }
            }
          },
          UpdateGatewayInformation: {
            input: {
              type: 'structure',
              required: ['GatewayArn'],
              members: {
                GatewayArn: {},
                GatewayDisplayName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayArn: {}
              }
            }
          },
          UpdateGatewaySoftwareNow: {
            input: {
              type: 'structure',
              required: ['GatewayArn'],
              members: {
                GatewayArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayArn: {}
              }
            }
          },
          UpdateHypervisor: {
            input: {
              type: 'structure',
              required: ['HypervisorArn'],
              members: {
                Host: {},
                HypervisorArn: {},
                LogGroupArn: {},
                Name: {},
                Password: {
                  shape: 'S1p'
                },
                Username: {
                  shape: 'S1q'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                HypervisorArn: {}
              }
            }
          }
        },
        shapes: {
          S9: {
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
          Sm: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['DaysOfWeek', 'EndHourOfDay', 'EndMinuteOfHour', 'StartHourOfDay', 'StartMinuteOfHour'],
              members: {
                AverageUploadRateLimitInBitsPerSec: {
                  type: 'long'
                },
                DaysOfWeek: {
                  type: 'list',
                  member: {
                    type: 'integer'
                  }
                },
                EndHourOfDay: {
                  type: 'integer'
                },
                EndMinuteOfHour: {
                  type: 'integer'
                },
                StartHourOfDay: {
                  type: 'integer'
                },
                StartMinuteOfHour: {
                  type: 'integer'
                }
              }
            }
          },
          S1d: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['AwsTagKey', 'AwsTagValue', 'VmwareCategory', 'VmwareTagName'],
              members: {
                AwsTagKey: {},
                AwsTagValue: {},
                VmwareCategory: {},
                VmwareTagName: {}
              }
            }
          },
          S1p: {
            type: 'string',
            sensitive: true
          },
          S1q: {
            type: 'string',
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f94b3acdd182515dfb01fba843719c05aac1ba07.js.map