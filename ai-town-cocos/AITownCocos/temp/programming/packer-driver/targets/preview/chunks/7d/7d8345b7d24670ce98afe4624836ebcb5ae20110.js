System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-10-01',
          endpointPrefix: 'emr-containers',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon EMR Containers',
          serviceId: 'EMR containers',
          signatureVersion: 'v4',
          signingName: 'emr-containers',
          uid: 'emr-containers-2020-10-01'
        },
        operations: {
          CancelJobRun: {
            http: {
              method: 'DELETE',
              requestUri: '/virtualclusters/{virtualClusterId}/jobruns/{jobRunId}'
            },
            input: {
              type: 'structure',
              required: ['id', 'virtualClusterId'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'jobRunId'
                },
                virtualClusterId: {
                  location: 'uri',
                  locationName: 'virtualClusterId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                virtualClusterId: {}
              }
            }
          },
          CreateJobTemplate: {
            http: {
              requestUri: '/jobtemplates'
            },
            input: {
              type: 'structure',
              required: ['name', 'clientToken', 'jobTemplateData'],
              members: {
                name: {},
                clientToken: {
                  idempotencyToken: true
                },
                jobTemplateData: {
                  shape: 'S7'
                },
                tags: {
                  shape: 'Sx'
                },
                kmsKeyArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                name: {},
                arn: {},
                createdAt: {
                  shape: 'S13'
                }
              }
            }
          },
          CreateManagedEndpoint: {
            http: {
              requestUri: '/virtualclusters/{virtualClusterId}/endpoints'
            },
            input: {
              type: 'structure',
              required: ['name', 'virtualClusterId', 'type', 'releaseLabel', 'executionRoleArn', 'clientToken'],
              members: {
                name: {},
                virtualClusterId: {
                  location: 'uri',
                  locationName: 'virtualClusterId'
                },
                type: {},
                releaseLabel: {},
                executionRoleArn: {},
                certificateArn: {
                  deprecated: true,
                  deprecatedMessage: 'Customer provided certificate-arn is deprecated and would be removed in future.'
                },
                configurationOverrides: {
                  shape: 'S19'
                },
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                name: {},
                arn: {},
                virtualClusterId: {}
              }
            }
          },
          CreateSecurityConfiguration: {
            http: {
              requestUri: '/securityconfigurations'
            },
            input: {
              type: 'structure',
              required: ['clientToken', 'name', 'securityConfigurationData'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                name: {},
                securityConfigurationData: {
                  shape: 'S1l'
                },
                tags: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                name: {},
                arn: {}
              }
            }
          },
          CreateVirtualCluster: {
            http: {
              requestUri: '/virtualclusters'
            },
            input: {
              type: 'structure',
              required: ['name', 'containerProvider', 'clientToken'],
              members: {
                name: {},
                containerProvider: {
                  shape: 'S20'
                },
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'Sx'
                },
                securityConfigurationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                name: {},
                arn: {}
              }
            }
          },
          DeleteJobTemplate: {
            http: {
              method: 'DELETE',
              requestUri: '/jobtemplates/{templateId}'
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'templateId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {}
              }
            }
          },
          DeleteManagedEndpoint: {
            http: {
              method: 'DELETE',
              requestUri: '/virtualclusters/{virtualClusterId}/endpoints/{endpointId}'
            },
            input: {
              type: 'structure',
              required: ['id', 'virtualClusterId'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'endpointId'
                },
                virtualClusterId: {
                  location: 'uri',
                  locationName: 'virtualClusterId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                virtualClusterId: {}
              }
            }
          },
          DeleteVirtualCluster: {
            http: {
              method: 'DELETE',
              requestUri: '/virtualclusters/{virtualClusterId}'
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'virtualClusterId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {}
              }
            }
          },
          DescribeJobRun: {
            http: {
              method: 'GET',
              requestUri: '/virtualclusters/{virtualClusterId}/jobruns/{jobRunId}'
            },
            input: {
              type: 'structure',
              required: ['id', 'virtualClusterId'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'jobRunId'
                },
                virtualClusterId: {
                  location: 'uri',
                  locationName: 'virtualClusterId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                jobRun: {
                  shape: 'S2e'
                }
              }
            }
          },
          DescribeJobTemplate: {
            http: {
              method: 'GET',
              requestUri: '/jobtemplates/{templateId}'
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'templateId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                jobTemplate: {
                  shape: 'S2o'
                }
              }
            }
          },
          DescribeManagedEndpoint: {
            http: {
              method: 'GET',
              requestUri: '/virtualclusters/{virtualClusterId}/endpoints/{endpointId}'
            },
            input: {
              type: 'structure',
              required: ['id', 'virtualClusterId'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'endpointId'
                },
                virtualClusterId: {
                  location: 'uri',
                  locationName: 'virtualClusterId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                endpoint: {
                  shape: 'S2s'
                }
              }
            }
          },
          DescribeSecurityConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/securityconfigurations/{securityConfigurationId}'
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'securityConfigurationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                securityConfiguration: {
                  shape: 'S2z'
                }
              }
            }
          },
          DescribeVirtualCluster: {
            http: {
              method: 'GET',
              requestUri: '/virtualclusters/{virtualClusterId}'
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'virtualClusterId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualCluster: {
                  shape: 'S32'
                }
              }
            }
          },
          GetManagedEndpointSessionCredentials: {
            http: {
              requestUri: '/virtualclusters/{virtualClusterId}/endpoints/{endpointId}/credentials'
            },
            input: {
              type: 'structure',
              required: ['executionRoleArn', 'credentialType', 'endpointIdentifier', 'virtualClusterIdentifier'],
              members: {
                endpointIdentifier: {
                  location: 'uri',
                  locationName: 'endpointId'
                },
                virtualClusterIdentifier: {
                  location: 'uri',
                  locationName: 'virtualClusterId'
                },
                executionRoleArn: {},
                credentialType: {},
                durationInSeconds: {
                  type: 'integer'
                },
                logContext: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                credentials: {
                  type: 'structure',
                  members: {
                    token: {
                      type: 'string',
                      sensitive: true
                    }
                  },
                  union: true
                },
                expiresAt: {
                  shape: 'S13'
                }
              }
            }
          },
          ListJobRuns: {
            http: {
              method: 'GET',
              requestUri: '/virtualclusters/{virtualClusterId}/jobruns'
            },
            input: {
              type: 'structure',
              required: ['virtualClusterId'],
              members: {
                virtualClusterId: {
                  location: 'uri',
                  locationName: 'virtualClusterId'
                },
                createdBefore: {
                  shape: 'S13',
                  location: 'querystring',
                  locationName: 'createdBefore'
                },
                createdAfter: {
                  shape: 'S13',
                  location: 'querystring',
                  locationName: 'createdAfter'
                },
                name: {
                  location: 'querystring',
                  locationName: 'name'
                },
                states: {
                  location: 'querystring',
                  locationName: 'states',
                  type: 'list',
                  member: {}
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                jobRuns: {
                  type: 'list',
                  member: {
                    shape: 'S2e'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListJobTemplates: {
            http: {
              method: 'GET',
              requestUri: '/jobtemplates'
            },
            input: {
              type: 'structure',
              members: {
                createdAfter: {
                  shape: 'S13',
                  location: 'querystring',
                  locationName: 'createdAfter'
                },
                createdBefore: {
                  shape: 'S13',
                  location: 'querystring',
                  locationName: 'createdBefore'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                templates: {
                  type: 'list',
                  member: {
                    shape: 'S2o'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListManagedEndpoints: {
            http: {
              method: 'GET',
              requestUri: '/virtualclusters/{virtualClusterId}/endpoints'
            },
            input: {
              type: 'structure',
              required: ['virtualClusterId'],
              members: {
                virtualClusterId: {
                  location: 'uri',
                  locationName: 'virtualClusterId'
                },
                createdBefore: {
                  shape: 'S13',
                  location: 'querystring',
                  locationName: 'createdBefore'
                },
                createdAfter: {
                  shape: 'S13',
                  location: 'querystring',
                  locationName: 'createdAfter'
                },
                types: {
                  location: 'querystring',
                  locationName: 'types',
                  type: 'list',
                  member: {}
                },
                states: {
                  location: 'querystring',
                  locationName: 'states',
                  type: 'list',
                  member: {}
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                endpoints: {
                  type: 'list',
                  member: {
                    shape: 'S2s'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSecurityConfigurations: {
            http: {
              method: 'GET',
              requestUri: '/securityconfigurations'
            },
            input: {
              type: 'structure',
              members: {
                createdAfter: {
                  shape: 'S13',
                  location: 'querystring',
                  locationName: 'createdAfter'
                },
                createdBefore: {
                  shape: 'S13',
                  location: 'querystring',
                  locationName: 'createdBefore'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                securityConfigurations: {
                  type: 'list',
                  member: {
                    shape: 'S2z'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'Sx'
                }
              }
            }
          },
          ListVirtualClusters: {
            http: {
              method: 'GET',
              requestUri: '/virtualclusters'
            },
            input: {
              type: 'structure',
              members: {
                containerProviderId: {
                  location: 'querystring',
                  locationName: 'containerProviderId'
                },
                containerProviderType: {
                  location: 'querystring',
                  locationName: 'containerProviderType'
                },
                createdAfter: {
                  shape: 'S13',
                  location: 'querystring',
                  locationName: 'createdAfter'
                },
                createdBefore: {
                  shape: 'S13',
                  location: 'querystring',
                  locationName: 'createdBefore'
                },
                states: {
                  location: 'querystring',
                  locationName: 'states',
                  type: 'list',
                  member: {}
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                eksAccessEntryIntegrated: {
                  location: 'querystring',
                  locationName: 'eksAccessEntryIntegrated',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualClusters: {
                  type: 'list',
                  member: {
                    shape: 'S32'
                  }
                },
                nextToken: {}
              }
            }
          },
          StartJobRun: {
            http: {
              requestUri: '/virtualclusters/{virtualClusterId}/jobruns'
            },
            input: {
              type: 'structure',
              required: ['virtualClusterId', 'clientToken'],
              members: {
                name: {},
                virtualClusterId: {
                  location: 'uri',
                  locationName: 'virtualClusterId'
                },
                clientToken: {
                  idempotencyToken: true
                },
                executionRoleArn: {},
                releaseLabel: {},
                jobDriver: {
                  shape: 'Sl'
                },
                configurationOverrides: {
                  shape: 'S19'
                },
                tags: {
                  shape: 'Sx'
                },
                jobTemplateId: {},
                jobTemplateParameters: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                retryPolicyConfiguration: {
                  shape: 'S2j'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                name: {},
                arn: {},
                virtualClusterId: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                tags: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                tagKeys: {
                  location: 'querystring',
                  locationName: 'tagKeys',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S7: {
            type: 'structure',
            required: ['executionRoleArn', 'releaseLabel', 'jobDriver'],
            members: {
              executionRoleArn: {},
              releaseLabel: {},
              configurationOverrides: {
                type: 'structure',
                members: {
                  applicationConfiguration: {
                    shape: 'Sb'
                  },
                  monitoringConfiguration: {
                    type: 'structure',
                    members: {
                      persistentAppUI: {},
                      cloudWatchMonitoringConfiguration: {
                        type: 'structure',
                        members: {
                          logGroupName: {},
                          logStreamNamePrefix: {}
                        }
                      },
                      s3MonitoringConfiguration: {
                        type: 'structure',
                        members: {
                          logUri: {}
                        }
                      }
                    }
                  }
                }
              },
              jobDriver: {
                shape: 'Sl'
              },
              parameterConfiguration: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  members: {
                    type: {},
                    defaultValue: {}
                  }
                }
              },
              jobTags: {
                shape: 'Sx'
              }
            }
          },
          Sb: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['classification'],
              members: {
                classification: {},
                properties: {
                  type: 'map',
                  key: {},
                  value: {},
                  sensitive: true
                },
                configurations: {
                  shape: 'Sb'
                }
              }
            }
          },
          Sl: {
            type: 'structure',
            members: {
              sparkSubmitJobDriver: {
                type: 'structure',
                required: ['entryPoint'],
                members: {
                  entryPoint: {
                    shape: 'Sn'
                  },
                  entryPointArguments: {
                    type: 'list',
                    member: {
                      type: 'string',
                      sensitive: true
                    }
                  },
                  sparkSubmitParameters: {
                    type: 'string',
                    sensitive: true
                  }
                }
              },
              sparkSqlJobDriver: {
                type: 'structure',
                members: {
                  entryPoint: {
                    shape: 'Sn'
                  },
                  sparkSqlParameters: {
                    type: 'string',
                    sensitive: true
                  }
                }
              }
            }
          },
          Sn: {
            type: 'string',
            sensitive: true
          },
          Sx: {
            type: 'map',
            key: {},
            value: {}
          },
          S13: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S19: {
            type: 'structure',
            members: {
              applicationConfiguration: {
                shape: 'Sb'
              },
              monitoringConfiguration: {
                type: 'structure',
                members: {
                  persistentAppUI: {},
                  cloudWatchMonitoringConfiguration: {
                    type: 'structure',
                    required: ['logGroupName'],
                    members: {
                      logGroupName: {},
                      logStreamNamePrefix: {}
                    }
                  },
                  s3MonitoringConfiguration: {
                    type: 'structure',
                    required: ['logUri'],
                    members: {
                      logUri: {}
                    }
                  },
                  containerLogRotationConfiguration: {
                    type: 'structure',
                    required: ['rotationSize', 'maxFilesToKeep'],
                    members: {
                      rotationSize: {},
                      maxFilesToKeep: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            }
          },
          S1l: {
            type: 'structure',
            members: {
              authorizationConfiguration: {
                type: 'structure',
                members: {
                  lakeFormationConfiguration: {
                    type: 'structure',
                    members: {
                      authorizedSessionTagValue: {},
                      secureNamespaceInfo: {
                        type: 'structure',
                        members: {
                          clusterId: {},
                          namespace: {}
                        }
                      },
                      queryEngineRoleArn: {}
                    }
                  },
                  encryptionConfiguration: {
                    type: 'structure',
                    members: {
                      inTransitEncryptionConfiguration: {
                        type: 'structure',
                        members: {
                          tlsCertificateConfiguration: {
                            type: 'structure',
                            members: {
                              certificateProviderType: {},
                              publicCertificateSecretArn: {},
                              privateCertificateSecretArn: {}
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S20: {
            type: 'structure',
            required: ['type', 'id'],
            members: {
              type: {},
              id: {},
              info: {
                type: 'structure',
                members: {
                  eksInfo: {
                    type: 'structure',
                    members: {
                      namespace: {}
                    }
                  }
                },
                union: true
              }
            }
          },
          S2e: {
            type: 'structure',
            members: {
              id: {},
              name: {},
              virtualClusterId: {},
              arn: {},
              state: {},
              clientToken: {},
              executionRoleArn: {},
              releaseLabel: {},
              configurationOverrides: {
                shape: 'S19'
              },
              jobDriver: {
                shape: 'Sl'
              },
              createdAt: {
                shape: 'S13'
              },
              createdBy: {},
              finishedAt: {
                shape: 'S13'
              },
              stateDetails: {},
              failureReason: {},
              tags: {
                shape: 'Sx'
              },
              retryPolicyConfiguration: {
                shape: 'S2j'
              },
              retryPolicyExecution: {
                type: 'structure',
                required: ['currentAttemptCount'],
                members: {
                  currentAttemptCount: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S2j: {
            type: 'structure',
            required: ['maxAttempts'],
            members: {
              maxAttempts: {
                type: 'integer'
              }
            }
          },
          S2o: {
            type: 'structure',
            required: ['jobTemplateData'],
            members: {
              name: {},
              id: {},
              arn: {},
              createdAt: {
                shape: 'S13'
              },
              createdBy: {},
              tags: {
                shape: 'Sx'
              },
              jobTemplateData: {
                shape: 'S7'
              },
              kmsKeyArn: {},
              decryptionError: {}
            }
          },
          S2s: {
            type: 'structure',
            members: {
              id: {},
              name: {},
              arn: {},
              virtualClusterId: {},
              type: {},
              state: {},
              releaseLabel: {},
              executionRoleArn: {},
              certificateArn: {
                deprecated: true,
                deprecatedMessage: 'Customer provided certificate-arn is deprecated and would be removed in future.'
              },
              certificateAuthority: {
                type: 'structure',
                members: {
                  certificateArn: {},
                  certificateData: {}
                }
              },
              configurationOverrides: {
                shape: 'S19'
              },
              serverUrl: {},
              createdAt: {
                shape: 'S13'
              },
              securityGroup: {},
              subnetIds: {
                type: 'list',
                member: {}
              },
              stateDetails: {},
              failureReason: {},
              tags: {
                shape: 'Sx'
              }
            }
          },
          S2z: {
            type: 'structure',
            members: {
              id: {},
              name: {},
              arn: {},
              createdAt: {
                shape: 'S13'
              },
              createdBy: {},
              securityConfigurationData: {
                shape: 'S1l'
              },
              tags: {
                shape: 'Sx'
              }
            }
          },
          S32: {
            type: 'structure',
            members: {
              id: {},
              name: {},
              arn: {},
              state: {},
              containerProvider: {
                shape: 'S20'
              },
              createdAt: {
                shape: 'S13'
              },
              tags: {
                shape: 'Sx'
              },
              securityConfigurationId: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=7d8345b7d24670ce98afe4624836ebcb5ae20110.js.map