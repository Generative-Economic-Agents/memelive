System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2013-04-01',
          endpointPrefix: 'route53',
          globalEndpoint: 'route53.amazonaws.com',
          protocol: 'rest-xml',
          serviceAbbreviation: 'Route 53',
          serviceFullName: 'Amazon Route 53',
          serviceId: 'Route 53',
          signatureVersion: 'v4',
          uid: 'route53-2013-04-01'
        },
        operations: {
          ActivateKeySigningKey: {
            http: {
              requestUri: '/2013-04-01/keysigningkey/{HostedZoneId}/{Name}/activate'
            },
            input: {
              type: 'structure',
              required: ['HostedZoneId', 'Name'],
              members: {
                HostedZoneId: {
                  location: 'uri',
                  locationName: 'HostedZoneId'
                },
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ChangeInfo'],
              members: {
                ChangeInfo: {
                  shape: 'S5'
                }
              }
            }
          },
          AssociateVPCWithHostedZone: {
            http: {
              requestUri: '/2013-04-01/hostedzone/{Id}/associatevpc'
            },
            input: {
              locationName: 'AssociateVPCWithHostedZoneRequest',
              xmlNamespace: {
                uri: 'https://route53.amazonaws.com/doc/2013-04-01/'
              },
              type: 'structure',
              required: ['HostedZoneId', 'VPC'],
              members: {
                HostedZoneId: {
                  location: 'uri',
                  locationName: 'Id'
                },
                VPC: {
                  shape: 'Sa'
                },
                Comment: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ChangeInfo'],
              members: {
                ChangeInfo: {
                  shape: 'S5'
                }
              }
            }
          },
          ChangeCidrCollection: {
            http: {
              requestUri: '/2013-04-01/cidrcollection/{CidrCollectionId}'
            },
            input: {
              locationName: 'ChangeCidrCollectionRequest',
              xmlNamespace: {
                uri: 'https://route53.amazonaws.com/doc/2013-04-01/'
              },
              type: 'structure',
              required: ['Id', 'Changes'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'CidrCollectionId'
                },
                CollectionVersion: {
                  type: 'long'
                },
                Changes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['LocationName', 'Action', 'CidrList'],
                    members: {
                      LocationName: {},
                      Action: {},
                      CidrList: {
                        type: 'list',
                        member: {
                          locationName: 'Cidr'
                        }
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {}
              }
            }
          },
          ChangeResourceRecordSets: {
            http: {
              requestUri: '/2013-04-01/hostedzone/{Id}/rrset/'
            },
            input: {
              locationName: 'ChangeResourceRecordSetsRequest',
              xmlNamespace: {
                uri: 'https://route53.amazonaws.com/doc/2013-04-01/'
              },
              type: 'structure',
              required: ['HostedZoneId', 'ChangeBatch'],
              members: {
                HostedZoneId: {
                  location: 'uri',
                  locationName: 'Id'
                },
                ChangeBatch: {
                  type: 'structure',
                  required: ['Changes'],
                  members: {
                    Comment: {},
                    Changes: {
                      type: 'list',
                      member: {
                        locationName: 'Change',
                        type: 'structure',
                        required: ['Action', 'ResourceRecordSet'],
                        members: {
                          Action: {},
                          ResourceRecordSet: {
                            shape: 'Sv'
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ChangeInfo'],
              members: {
                ChangeInfo: {
                  shape: 'S5'
                }
              }
            }
          },
          ChangeTagsForResource: {
            http: {
              requestUri: '/2013-04-01/tags/{ResourceType}/{ResourceId}'
            },
            input: {
              locationName: 'ChangeTagsForResourceRequest',
              xmlNamespace: {
                uri: 'https://route53.amazonaws.com/doc/2013-04-01/'
              },
              type: 'structure',
              required: ['ResourceType', 'ResourceId'],
              members: {
                ResourceType: {
                  location: 'uri',
                  locationName: 'ResourceType'
                },
                ResourceId: {
                  location: 'uri',
                  locationName: 'ResourceId'
                },
                AddTags: {
                  shape: 'S1s'
                },
                RemoveTagKeys: {
                  type: 'list',
                  member: {
                    locationName: 'Key'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateCidrCollection: {
            http: {
              requestUri: '/2013-04-01/cidrcollection',
              responseCode: 201
            },
            input: {
              locationName: 'CreateCidrCollectionRequest',
              xmlNamespace: {
                uri: 'https://route53.amazonaws.com/doc/2013-04-01/'
              },
              type: 'structure',
              required: ['Name', 'CallerReference'],
              members: {
                Name: {},
                CallerReference: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Collection: {
                  type: 'structure',
                  members: {
                    Arn: {},
                    Id: {},
                    Name: {},
                    Version: {
                      type: 'long'
                    }
                  }
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                }
              }
            }
          },
          CreateHealthCheck: {
            http: {
              requestUri: '/2013-04-01/healthcheck',
              responseCode: 201
            },
            input: {
              locationName: 'CreateHealthCheckRequest',
              xmlNamespace: {
                uri: 'https://route53.amazonaws.com/doc/2013-04-01/'
              },
              type: 'structure',
              required: ['CallerReference', 'HealthCheckConfig'],
              members: {
                CallerReference: {},
                HealthCheckConfig: {
                  shape: 'S27'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['HealthCheck', 'Location'],
              members: {
                HealthCheck: {
                  shape: 'S2u'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                }
              }
            }
          },
          CreateHostedZone: {
            http: {
              requestUri: '/2013-04-01/hostedzone',
              responseCode: 201
            },
            input: {
              locationName: 'CreateHostedZoneRequest',
              xmlNamespace: {
                uri: 'https://route53.amazonaws.com/doc/2013-04-01/'
              },
              type: 'structure',
              required: ['Name', 'CallerReference'],
              members: {
                Name: {},
                VPC: {
                  shape: 'Sa'
                },
                CallerReference: {},
                HostedZoneConfig: {
                  shape: 'S3b'
                },
                DelegationSetId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['HostedZone', 'ChangeInfo', 'DelegationSet', 'Location'],
              members: {
                HostedZone: {
                  shape: 'S3e'
                },
                ChangeInfo: {
                  shape: 'S5'
                },
                DelegationSet: {
                  shape: 'S3g'
                },
                VPC: {
                  shape: 'Sa'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                }
              }
            }
          },
          CreateKeySigningKey: {
            http: {
              requestUri: '/2013-04-01/keysigningkey',
              responseCode: 201
            },
            input: {
              locationName: 'CreateKeySigningKeyRequest',
              xmlNamespace: {
                uri: 'https://route53.amazonaws.com/doc/2013-04-01/'
              },
              type: 'structure',
              required: ['CallerReference', 'HostedZoneId', 'KeyManagementServiceArn', 'Name', 'Status'],
              members: {
                CallerReference: {},
                HostedZoneId: {},
                KeyManagementServiceArn: {},
                Name: {},
                Status: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ChangeInfo', 'KeySigningKey', 'Location'],
              members: {
                ChangeInfo: {
                  shape: 'S5'
                },
                KeySigningKey: {
                  shape: 'S3m'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                }
              }
            }
          },
          CreateQueryLoggingConfig: {
            http: {
              requestUri: '/2013-04-01/queryloggingconfig',
              responseCode: 201
            },
            input: {
              locationName: 'CreateQueryLoggingConfigRequest',
              xmlNamespace: {
                uri: 'https://route53.amazonaws.com/doc/2013-04-01/'
              },
              type: 'structure',
              required: ['HostedZoneId', 'CloudWatchLogsLogGroupArn'],
              members: {
                HostedZoneId: {},
                CloudWatchLogsLogGroupArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['QueryLoggingConfig', 'Location'],
              members: {
                QueryLoggingConfig: {
                  shape: 'S3t'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                }
              }
            }
          },
          CreateReusableDelegationSet: {
            http: {
              requestUri: '/2013-04-01/delegationset',
              responseCode: 201
            },
            input: {
              locationName: 'CreateReusableDelegationSetRequest',
              xmlNamespace: {
                uri: 'https://route53.amazonaws.com/doc/2013-04-01/'
              },
              type: 'structure',
              required: ['CallerReference'],
              members: {
                CallerReference: {},
                HostedZoneId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['DelegationSet', 'Location'],
              members: {
                DelegationSet: {
                  shape: 'S3g'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                }
              }
            }
          },
          CreateTrafficPolicy: {
            http: {
              requestUri: '/2013-04-01/trafficpolicy',
              responseCode: 201
            },
            input: {
              locationName: 'CreateTrafficPolicyRequest',
              xmlNamespace: {
                uri: 'https://route53.amazonaws.com/doc/2013-04-01/'
              },
              type: 'structure',
              required: ['Name', 'Document'],
              members: {
                Name: {},
                Document: {},
                Comment: {}
              }
            },
            output: {
              type: 'structure',
              required: ['TrafficPolicy', 'Location'],
              members: {
                TrafficPolicy: {
                  shape: 'S42'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                }
              }
            }
          },
          CreateTrafficPolicyInstance: {
            http: {
              requestUri: '/2013-04-01/trafficpolicyinstance',
              responseCode: 201
            },
            input: {
              locationName: 'CreateTrafficPolicyInstanceRequest',
              xmlNamespace: {
                uri: 'https://route53.amazonaws.com/doc/2013-04-01/'
              },
              type: 'structure',
              required: ['HostedZoneId', 'Name', 'TTL', 'TrafficPolicyId', 'TrafficPolicyVersion'],
              members: {
                HostedZoneId: {},
                Name: {},
                TTL: {
                  type: 'long'
                },
                TrafficPolicyId: {},
                TrafficPolicyVersion: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TrafficPolicyInstance', 'Location'],
              members: {
                TrafficPolicyInstance: {
                  shape: 'S47'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                }
              }
            }
          },
          CreateTrafficPolicyVersion: {
            http: {
              requestUri: '/2013-04-01/trafficpolicy/{Id}',
              responseCode: 201
            },
            input: {
              locationName: 'CreateTrafficPolicyVersionRequest',
              xmlNamespace: {
                uri: 'https://route53.amazonaws.com/doc/2013-04-01/'
              },
              type: 'structure',
              required: ['Id', 'Document'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                Document: {},
                Comment: {}
              }
            },
            output: {
              type: 'structure',
              required: ['TrafficPolicy', 'Location'],
              members: {
                TrafficPolicy: {
                  shape: 'S42'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                }
              }
            }
          },
          CreateVPCAssociationAuthorization: {
            http: {
              requestUri: '/2013-04-01/hostedzone/{Id}/authorizevpcassociation'
            },
            input: {
              locationName: 'CreateVPCAssociationAuthorizationRequest',
              xmlNamespace: {
                uri: 'https://route53.amazonaws.com/doc/2013-04-01/'
              },
              type: 'structure',
              required: ['HostedZoneId', 'VPC'],
              members: {
                HostedZoneId: {
                  location: 'uri',
                  locationName: 'Id'
                },
                VPC: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['HostedZoneId', 'VPC'],
              members: {
                HostedZoneId: {},
                VPC: {
                  shape: 'Sa'
                }
              }
            }
          },
          DeactivateKeySigningKey: {
            http: {
              requestUri: '/2013-04-01/keysigningkey/{HostedZoneId}/{Name}/deactivate'
            },
            input: {
              type: 'structure',
              required: ['HostedZoneId', 'Name'],
              members: {
                HostedZoneId: {
                  location: 'uri',
                  locationName: 'HostedZoneId'
                },
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ChangeInfo'],
              members: {
                ChangeInfo: {
                  shape: 'S5'
                }
              }
            }
          },
          DeleteCidrCollection: {
            http: {
              method: 'DELETE',
              requestUri: '/2013-04-01/cidrcollection/{CidrCollectionId}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'CidrCollectionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteHealthCheck: {
            http: {
              method: 'DELETE',
              requestUri: '/2013-04-01/healthcheck/{HealthCheckId}'
            },
            input: {
              type: 'structure',
              required: ['HealthCheckId'],
              members: {
                HealthCheckId: {
                  location: 'uri',
                  locationName: 'HealthCheckId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteHostedZone: {
            http: {
              method: 'DELETE',
              requestUri: '/2013-04-01/hostedzone/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ChangeInfo'],
              members: {
                ChangeInfo: {
                  shape: 'S5'
                }
              }
            }
          },
          DeleteKeySigningKey: {
            http: {
              method: 'DELETE',
              requestUri: '/2013-04-01/keysigningkey/{HostedZoneId}/{Name}'
            },
            input: {
              type: 'structure',
              required: ['HostedZoneId', 'Name'],
              members: {
                HostedZoneId: {
                  location: 'uri',
                  locationName: 'HostedZoneId'
                },
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ChangeInfo'],
              members: {
                ChangeInfo: {
                  shape: 'S5'
                }
              }
            }
          },
          DeleteQueryLoggingConfig: {
            http: {
              method: 'DELETE',
              requestUri: '/2013-04-01/queryloggingconfig/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteReusableDelegationSet: {
            http: {
              method: 'DELETE',
              requestUri: '/2013-04-01/delegationset/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteTrafficPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/2013-04-01/trafficpolicy/{Id}/{Version}'
            },
            input: {
              type: 'structure',
              required: ['Id', 'Version'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                Version: {
                  location: 'uri',
                  locationName: 'Version',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteTrafficPolicyInstance: {
            http: {
              method: 'DELETE',
              requestUri: '/2013-04-01/trafficpolicyinstance/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteVPCAssociationAuthorization: {
            http: {
              requestUri: '/2013-04-01/hostedzone/{Id}/deauthorizevpcassociation'
            },
            input: {
              locationName: 'DeleteVPCAssociationAuthorizationRequest',
              xmlNamespace: {
                uri: 'https://route53.amazonaws.com/doc/2013-04-01/'
              },
              type: 'structure',
              required: ['HostedZoneId', 'VPC'],
              members: {
                HostedZoneId: {
                  location: 'uri',
                  locationName: 'Id'
                },
                VPC: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisableHostedZoneDNSSEC: {
            http: {
              requestUri: '/2013-04-01/hostedzone/{Id}/disable-dnssec'
            },
            input: {
              type: 'structure',
              required: ['HostedZoneId'],
              members: {
                HostedZoneId: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ChangeInfo'],
              members: {
                ChangeInfo: {
                  shape: 'S5'
                }
              }
            }
          },
          DisassociateVPCFromHostedZone: {
            http: {
              requestUri: '/2013-04-01/hostedzone/{Id}/disassociatevpc'
            },
            input: {
              locationName: 'DisassociateVPCFromHostedZoneRequest',
              xmlNamespace: {
                uri: 'https://route53.amazonaws.com/doc/2013-04-01/'
              },
              type: 'structure',
              required: ['HostedZoneId', 'VPC'],
              members: {
                HostedZoneId: {
                  location: 'uri',
                  locationName: 'Id'
                },
                VPC: {
                  shape: 'Sa'
                },
                Comment: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ChangeInfo'],
              members: {
                ChangeInfo: {
                  shape: 'S5'
                }
              }
            }
          },
          EnableHostedZoneDNSSEC: {
            http: {
              requestUri: '/2013-04-01/hostedzone/{Id}/enable-dnssec'
            },
            input: {
              type: 'structure',
              required: ['HostedZoneId'],
              members: {
                HostedZoneId: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ChangeInfo'],
              members: {
                ChangeInfo: {
                  shape: 'S5'
                }
              }
            }
          },
          GetAccountLimit: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/accountlimit/{Type}'
            },
            input: {
              type: 'structure',
              required: ['Type'],
              members: {
                Type: {
                  location: 'uri',
                  locationName: 'Type'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Limit', 'Count'],
              members: {
                Limit: {
                  type: 'structure',
                  required: ['Type', 'Value'],
                  members: {
                    Type: {},
                    Value: {
                      type: 'long'
                    }
                  }
                },
                Count: {
                  type: 'long'
                }
              }
            }
          },
          GetChange: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/change/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ChangeInfo'],
              members: {
                ChangeInfo: {
                  shape: 'S5'
                }
              }
            }
          },
          GetCheckerIpRanges: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/checkeripranges'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['CheckerIpRanges'],
              members: {
                CheckerIpRanges: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          GetDNSSEC: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/hostedzone/{Id}/dnssec'
            },
            input: {
              type: 'structure',
              required: ['HostedZoneId'],
              members: {
                HostedZoneId: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Status', 'KeySigningKeys'],
              members: {
                Status: {
                  type: 'structure',
                  members: {
                    ServeSignature: {},
                    StatusMessage: {}
                  }
                },
                KeySigningKeys: {
                  type: 'list',
                  member: {
                    shape: 'S3m'
                  }
                }
              }
            }
          },
          GetGeoLocation: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/geolocation'
            },
            input: {
              type: 'structure',
              members: {
                ContinentCode: {
                  location: 'querystring',
                  locationName: 'continentcode'
                },
                CountryCode: {
                  location: 'querystring',
                  locationName: 'countrycode'
                },
                SubdivisionCode: {
                  location: 'querystring',
                  locationName: 'subdivisioncode'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['GeoLocationDetails'],
              members: {
                GeoLocationDetails: {
                  shape: 'S5o'
                }
              }
            }
          },
          GetHealthCheck: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/healthcheck/{HealthCheckId}'
            },
            input: {
              type: 'structure',
              required: ['HealthCheckId'],
              members: {
                HealthCheckId: {
                  location: 'uri',
                  locationName: 'HealthCheckId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['HealthCheck'],
              members: {
                HealthCheck: {
                  shape: 'S2u'
                }
              }
            }
          },
          GetHealthCheckCount: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/healthcheckcount'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['HealthCheckCount'],
              members: {
                HealthCheckCount: {
                  type: 'long'
                }
              }
            }
          },
          GetHealthCheckLastFailureReason: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/healthcheck/{HealthCheckId}/lastfailurereason'
            },
            input: {
              type: 'structure',
              required: ['HealthCheckId'],
              members: {
                HealthCheckId: {
                  location: 'uri',
                  locationName: 'HealthCheckId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['HealthCheckObservations'],
              members: {
                HealthCheckObservations: {
                  shape: 'S5z'
                }
              }
            }
          },
          GetHealthCheckStatus: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/healthcheck/{HealthCheckId}/status'
            },
            input: {
              type: 'structure',
              required: ['HealthCheckId'],
              members: {
                HealthCheckId: {
                  location: 'uri',
                  locationName: 'HealthCheckId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['HealthCheckObservations'],
              members: {
                HealthCheckObservations: {
                  shape: 'S5z'
                }
              }
            }
          },
          GetHostedZone: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/hostedzone/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['HostedZone'],
              members: {
                HostedZone: {
                  shape: 'S3e'
                },
                DelegationSet: {
                  shape: 'S3g'
                },
                VPCs: {
                  shape: 'S67'
                }
              }
            }
          },
          GetHostedZoneCount: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/hostedzonecount'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['HostedZoneCount'],
              members: {
                HostedZoneCount: {
                  type: 'long'
                }
              }
            }
          },
          GetHostedZoneLimit: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/hostedzonelimit/{Id}/{Type}'
            },
            input: {
              type: 'structure',
              required: ['Type', 'HostedZoneId'],
              members: {
                Type: {
                  location: 'uri',
                  locationName: 'Type'
                },
                HostedZoneId: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Limit', 'Count'],
              members: {
                Limit: {
                  type: 'structure',
                  required: ['Type', 'Value'],
                  members: {
                    Type: {},
                    Value: {
                      type: 'long'
                    }
                  }
                },
                Count: {
                  type: 'long'
                }
              }
            }
          },
          GetQueryLoggingConfig: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/queryloggingconfig/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['QueryLoggingConfig'],
              members: {
                QueryLoggingConfig: {
                  shape: 'S3t'
                }
              }
            }
          },
          GetReusableDelegationSet: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/delegationset/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DelegationSet'],
              members: {
                DelegationSet: {
                  shape: 'S3g'
                }
              }
            }
          },
          GetReusableDelegationSetLimit: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/reusabledelegationsetlimit/{Id}/{Type}'
            },
            input: {
              type: 'structure',
              required: ['Type', 'DelegationSetId'],
              members: {
                Type: {
                  location: 'uri',
                  locationName: 'Type'
                },
                DelegationSetId: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Limit', 'Count'],
              members: {
                Limit: {
                  type: 'structure',
                  required: ['Type', 'Value'],
                  members: {
                    Type: {},
                    Value: {
                      type: 'long'
                    }
                  }
                },
                Count: {
                  type: 'long'
                }
              }
            }
          },
          GetTrafficPolicy: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/trafficpolicy/{Id}/{Version}'
            },
            input: {
              type: 'structure',
              required: ['Id', 'Version'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                Version: {
                  location: 'uri',
                  locationName: 'Version',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TrafficPolicy'],
              members: {
                TrafficPolicy: {
                  shape: 'S42'
                }
              }
            }
          },
          GetTrafficPolicyInstance: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/trafficpolicyinstance/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TrafficPolicyInstance'],
              members: {
                TrafficPolicyInstance: {
                  shape: 'S47'
                }
              }
            }
          },
          GetTrafficPolicyInstanceCount: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/trafficpolicyinstancecount'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['TrafficPolicyInstanceCount'],
              members: {
                TrafficPolicyInstanceCount: {
                  type: 'integer'
                }
              }
            }
          },
          ListCidrBlocks: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/cidrcollection/{CidrCollectionId}/cidrblocks'
            },
            input: {
              type: 'structure',
              required: ['CollectionId'],
              members: {
                CollectionId: {
                  location: 'uri',
                  locationName: 'CidrCollectionId'
                },
                LocationName: {
                  location: 'querystring',
                  locationName: 'location'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nexttoken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxresults'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                CidrBlocks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CidrBlock: {},
                      LocationName: {}
                    }
                  }
                }
              }
            }
          },
          ListCidrCollections: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/cidrcollection'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nexttoken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxresults'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                CidrCollections: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Id: {},
                      Name: {},
                      Version: {
                        type: 'long'
                      }
                    }
                  }
                }
              }
            }
          },
          ListCidrLocations: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/cidrcollection/{CidrCollectionId}'
            },
            input: {
              type: 'structure',
              required: ['CollectionId'],
              members: {
                CollectionId: {
                  location: 'uri',
                  locationName: 'CidrCollectionId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nexttoken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxresults'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                CidrLocations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LocationName: {}
                    }
                  }
                }
              }
            }
          },
          ListGeoLocations: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/geolocations'
            },
            input: {
              type: 'structure',
              members: {
                StartContinentCode: {
                  location: 'querystring',
                  locationName: 'startcontinentcode'
                },
                StartCountryCode: {
                  location: 'querystring',
                  locationName: 'startcountrycode'
                },
                StartSubdivisionCode: {
                  location: 'querystring',
                  locationName: 'startsubdivisioncode'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'maxitems'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['GeoLocationDetailsList', 'IsTruncated', 'MaxItems'],
              members: {
                GeoLocationDetailsList: {
                  type: 'list',
                  member: {
                    shape: 'S5o',
                    locationName: 'GeoLocationDetails'
                  }
                },
                IsTruncated: {
                  type: 'boolean'
                },
                NextContinentCode: {},
                NextCountryCode: {},
                NextSubdivisionCode: {},
                MaxItems: {}
              }
            }
          },
          ListHealthChecks: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/healthcheck'
            },
            input: {
              type: 'structure',
              members: {
                Marker: {
                  location: 'querystring',
                  locationName: 'marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'maxitems'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['HealthChecks', 'Marker', 'IsTruncated', 'MaxItems'],
              members: {
                HealthChecks: {
                  type: 'list',
                  member: {
                    shape: 'S2u',
                    locationName: 'HealthCheck'
                  }
                },
                Marker: {},
                IsTruncated: {
                  type: 'boolean'
                },
                NextMarker: {},
                MaxItems: {}
              }
            }
          },
          ListHostedZones: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/hostedzone'
            },
            input: {
              type: 'structure',
              members: {
                Marker: {
                  location: 'querystring',
                  locationName: 'marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'maxitems'
                },
                DelegationSetId: {
                  location: 'querystring',
                  locationName: 'delegationsetid'
                },
                HostedZoneType: {
                  location: 'querystring',
                  locationName: 'hostedzonetype'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['HostedZones', 'Marker', 'IsTruncated', 'MaxItems'],
              members: {
                HostedZones: {
                  shape: 'S7k'
                },
                Marker: {},
                IsTruncated: {
                  type: 'boolean'
                },
                NextMarker: {},
                MaxItems: {}
              }
            }
          },
          ListHostedZonesByName: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/hostedzonesbyname'
            },
            input: {
              type: 'structure',
              members: {
                DNSName: {
                  location: 'querystring',
                  locationName: 'dnsname'
                },
                HostedZoneId: {
                  location: 'querystring',
                  locationName: 'hostedzoneid'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'maxitems'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['HostedZones', 'IsTruncated', 'MaxItems'],
              members: {
                HostedZones: {
                  shape: 'S7k'
                },
                DNSName: {},
                HostedZoneId: {},
                IsTruncated: {
                  type: 'boolean'
                },
                NextDNSName: {},
                NextHostedZoneId: {},
                MaxItems: {}
              }
            }
          },
          ListHostedZonesByVPC: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/hostedzonesbyvpc'
            },
            input: {
              type: 'structure',
              required: ['VPCId', 'VPCRegion'],
              members: {
                VPCId: {
                  location: 'querystring',
                  locationName: 'vpcid'
                },
                VPCRegion: {
                  location: 'querystring',
                  locationName: 'vpcregion'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'maxitems'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nexttoken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['HostedZoneSummaries', 'MaxItems'],
              members: {
                HostedZoneSummaries: {
                  type: 'list',
                  member: {
                    locationName: 'HostedZoneSummary',
                    type: 'structure',
                    required: ['HostedZoneId', 'Name', 'Owner'],
                    members: {
                      HostedZoneId: {},
                      Name: {},
                      Owner: {
                        type: 'structure',
                        members: {
                          OwningAccount: {},
                          OwningService: {}
                        }
                      }
                    }
                  }
                },
                MaxItems: {},
                NextToken: {}
              }
            }
          },
          ListQueryLoggingConfigs: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/queryloggingconfig'
            },
            input: {
              type: 'structure',
              members: {
                HostedZoneId: {
                  location: 'querystring',
                  locationName: 'hostedzoneid'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nexttoken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxresults'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['QueryLoggingConfigs'],
              members: {
                QueryLoggingConfigs: {
                  type: 'list',
                  member: {
                    shape: 'S3t',
                    locationName: 'QueryLoggingConfig'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListResourceRecordSets: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/hostedzone/{Id}/rrset'
            },
            input: {
              type: 'structure',
              required: ['HostedZoneId'],
              members: {
                HostedZoneId: {
                  location: 'uri',
                  locationName: 'Id'
                },
                StartRecordName: {
                  location: 'querystring',
                  locationName: 'name'
                },
                StartRecordType: {
                  location: 'querystring',
                  locationName: 'type'
                },
                StartRecordIdentifier: {
                  location: 'querystring',
                  locationName: 'identifier'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'maxitems'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ResourceRecordSets', 'IsTruncated', 'MaxItems'],
              members: {
                ResourceRecordSets: {
                  type: 'list',
                  member: {
                    shape: 'Sv',
                    locationName: 'ResourceRecordSet'
                  }
                },
                IsTruncated: {
                  type: 'boolean'
                },
                NextRecordName: {},
                NextRecordType: {},
                NextRecordIdentifier: {},
                MaxItems: {}
              }
            }
          },
          ListReusableDelegationSets: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/delegationset'
            },
            input: {
              type: 'structure',
              members: {
                Marker: {
                  location: 'querystring',
                  locationName: 'marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'maxitems'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DelegationSets', 'Marker', 'IsTruncated', 'MaxItems'],
              members: {
                DelegationSets: {
                  type: 'list',
                  member: {
                    shape: 'S3g',
                    locationName: 'DelegationSet'
                  }
                },
                Marker: {},
                IsTruncated: {
                  type: 'boolean'
                },
                NextMarker: {},
                MaxItems: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/tags/{ResourceType}/{ResourceId}'
            },
            input: {
              type: 'structure',
              required: ['ResourceType', 'ResourceId'],
              members: {
                ResourceType: {
                  location: 'uri',
                  locationName: 'ResourceType'
                },
                ResourceId: {
                  location: 'uri',
                  locationName: 'ResourceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ResourceTagSet'],
              members: {
                ResourceTagSet: {
                  shape: 'S85'
                }
              }
            }
          },
          ListTagsForResources: {
            http: {
              requestUri: '/2013-04-01/tags/{ResourceType}'
            },
            input: {
              locationName: 'ListTagsForResourcesRequest',
              xmlNamespace: {
                uri: 'https://route53.amazonaws.com/doc/2013-04-01/'
              },
              type: 'structure',
              required: ['ResourceType', 'ResourceIds'],
              members: {
                ResourceType: {
                  location: 'uri',
                  locationName: 'ResourceType'
                },
                ResourceIds: {
                  type: 'list',
                  member: {
                    locationName: 'ResourceId'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ResourceTagSets'],
              members: {
                ResourceTagSets: {
                  type: 'list',
                  member: {
                    shape: 'S85',
                    locationName: 'ResourceTagSet'
                  }
                }
              }
            }
          },
          ListTrafficPolicies: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/trafficpolicies'
            },
            input: {
              type: 'structure',
              members: {
                TrafficPolicyIdMarker: {
                  location: 'querystring',
                  locationName: 'trafficpolicyid'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'maxitems'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TrafficPolicySummaries', 'IsTruncated', 'TrafficPolicyIdMarker', 'MaxItems'],
              members: {
                TrafficPolicySummaries: {
                  type: 'list',
                  member: {
                    locationName: 'TrafficPolicySummary',
                    type: 'structure',
                    required: ['Id', 'Name', 'Type', 'LatestVersion', 'TrafficPolicyCount'],
                    members: {
                      Id: {},
                      Name: {},
                      Type: {},
                      LatestVersion: {
                        type: 'integer'
                      },
                      TrafficPolicyCount: {
                        type: 'integer'
                      }
                    }
                  }
                },
                IsTruncated: {
                  type: 'boolean'
                },
                TrafficPolicyIdMarker: {},
                MaxItems: {}
              }
            }
          },
          ListTrafficPolicyInstances: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/trafficpolicyinstances'
            },
            input: {
              type: 'structure',
              members: {
                HostedZoneIdMarker: {
                  location: 'querystring',
                  locationName: 'hostedzoneid'
                },
                TrafficPolicyInstanceNameMarker: {
                  location: 'querystring',
                  locationName: 'trafficpolicyinstancename'
                },
                TrafficPolicyInstanceTypeMarker: {
                  location: 'querystring',
                  locationName: 'trafficpolicyinstancetype'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'maxitems'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TrafficPolicyInstances', 'IsTruncated', 'MaxItems'],
              members: {
                TrafficPolicyInstances: {
                  shape: 'S8g'
                },
                HostedZoneIdMarker: {},
                TrafficPolicyInstanceNameMarker: {},
                TrafficPolicyInstanceTypeMarker: {},
                IsTruncated: {
                  type: 'boolean'
                },
                MaxItems: {}
              }
            }
          },
          ListTrafficPolicyInstancesByHostedZone: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/trafficpolicyinstances/hostedzone'
            },
            input: {
              type: 'structure',
              required: ['HostedZoneId'],
              members: {
                HostedZoneId: {
                  location: 'querystring',
                  locationName: 'id'
                },
                TrafficPolicyInstanceNameMarker: {
                  location: 'querystring',
                  locationName: 'trafficpolicyinstancename'
                },
                TrafficPolicyInstanceTypeMarker: {
                  location: 'querystring',
                  locationName: 'trafficpolicyinstancetype'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'maxitems'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TrafficPolicyInstances', 'IsTruncated', 'MaxItems'],
              members: {
                TrafficPolicyInstances: {
                  shape: 'S8g'
                },
                TrafficPolicyInstanceNameMarker: {},
                TrafficPolicyInstanceTypeMarker: {},
                IsTruncated: {
                  type: 'boolean'
                },
                MaxItems: {}
              }
            }
          },
          ListTrafficPolicyInstancesByPolicy: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/trafficpolicyinstances/trafficpolicy'
            },
            input: {
              type: 'structure',
              required: ['TrafficPolicyId', 'TrafficPolicyVersion'],
              members: {
                TrafficPolicyId: {
                  location: 'querystring',
                  locationName: 'id'
                },
                TrafficPolicyVersion: {
                  location: 'querystring',
                  locationName: 'version',
                  type: 'integer'
                },
                HostedZoneIdMarker: {
                  location: 'querystring',
                  locationName: 'hostedzoneid'
                },
                TrafficPolicyInstanceNameMarker: {
                  location: 'querystring',
                  locationName: 'trafficpolicyinstancename'
                },
                TrafficPolicyInstanceTypeMarker: {
                  location: 'querystring',
                  locationName: 'trafficpolicyinstancetype'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'maxitems'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TrafficPolicyInstances', 'IsTruncated', 'MaxItems'],
              members: {
                TrafficPolicyInstances: {
                  shape: 'S8g'
                },
                HostedZoneIdMarker: {},
                TrafficPolicyInstanceNameMarker: {},
                TrafficPolicyInstanceTypeMarker: {},
                IsTruncated: {
                  type: 'boolean'
                },
                MaxItems: {}
              }
            }
          },
          ListTrafficPolicyVersions: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/trafficpolicies/{Id}/versions'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                TrafficPolicyVersionMarker: {
                  location: 'querystring',
                  locationName: 'trafficpolicyversion'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'maxitems'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TrafficPolicies', 'IsTruncated', 'TrafficPolicyVersionMarker', 'MaxItems'],
              members: {
                TrafficPolicies: {
                  type: 'list',
                  member: {
                    shape: 'S42',
                    locationName: 'TrafficPolicy'
                  }
                },
                IsTruncated: {
                  type: 'boolean'
                },
                TrafficPolicyVersionMarker: {},
                MaxItems: {}
              }
            }
          },
          ListVPCAssociationAuthorizations: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/hostedzone/{Id}/authorizevpcassociation'
            },
            input: {
              type: 'structure',
              required: ['HostedZoneId'],
              members: {
                HostedZoneId: {
                  location: 'uri',
                  locationName: 'Id'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nexttoken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxresults'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['HostedZoneId', 'VPCs'],
              members: {
                HostedZoneId: {},
                NextToken: {},
                VPCs: {
                  shape: 'S67'
                }
              }
            }
          },
          TestDNSAnswer: {
            http: {
              method: 'GET',
              requestUri: '/2013-04-01/testdnsanswer'
            },
            input: {
              type: 'structure',
              required: ['HostedZoneId', 'RecordName', 'RecordType'],
              members: {
                HostedZoneId: {
                  location: 'querystring',
                  locationName: 'hostedzoneid'
                },
                RecordName: {
                  location: 'querystring',
                  locationName: 'recordname'
                },
                RecordType: {
                  location: 'querystring',
                  locationName: 'recordtype'
                },
                ResolverIP: {
                  location: 'querystring',
                  locationName: 'resolverip'
                },
                EDNS0ClientSubnetIP: {
                  location: 'querystring',
                  locationName: 'edns0clientsubnetip'
                },
                EDNS0ClientSubnetMask: {
                  location: 'querystring',
                  locationName: 'edns0clientsubnetmask'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Nameserver', 'RecordName', 'RecordType', 'RecordData', 'ResponseCode', 'Protocol'],
              members: {
                Nameserver: {},
                RecordName: {},
                RecordType: {},
                RecordData: {
                  type: 'list',
                  member: {
                    locationName: 'RecordDataEntry'
                  }
                },
                ResponseCode: {},
                Protocol: {}
              }
            }
          },
          UpdateHealthCheck: {
            http: {
              requestUri: '/2013-04-01/healthcheck/{HealthCheckId}'
            },
            input: {
              locationName: 'UpdateHealthCheckRequest',
              xmlNamespace: {
                uri: 'https://route53.amazonaws.com/doc/2013-04-01/'
              },
              type: 'structure',
              required: ['HealthCheckId'],
              members: {
                HealthCheckId: {
                  location: 'uri',
                  locationName: 'HealthCheckId'
                },
                HealthCheckVersion: {
                  type: 'long'
                },
                IPAddress: {},
                Port: {
                  type: 'integer'
                },
                ResourcePath: {},
                FullyQualifiedDomainName: {},
                SearchString: {},
                FailureThreshold: {
                  type: 'integer'
                },
                Inverted: {
                  type: 'boolean'
                },
                Disabled: {
                  type: 'boolean'
                },
                HealthThreshold: {
                  type: 'integer'
                },
                ChildHealthChecks: {
                  shape: 'S2k'
                },
                EnableSNI: {
                  type: 'boolean'
                },
                Regions: {
                  shape: 'S2m'
                },
                AlarmIdentifier: {
                  shape: 'S2o'
                },
                InsufficientDataHealthStatus: {},
                ResetElements: {
                  type: 'list',
                  member: {
                    locationName: 'ResettableElementName'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['HealthCheck'],
              members: {
                HealthCheck: {
                  shape: 'S2u'
                }
              }
            }
          },
          UpdateHostedZoneComment: {
            http: {
              requestUri: '/2013-04-01/hostedzone/{Id}'
            },
            input: {
              locationName: 'UpdateHostedZoneCommentRequest',
              xmlNamespace: {
                uri: 'https://route53.amazonaws.com/doc/2013-04-01/'
              },
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                Comment: {}
              }
            },
            output: {
              type: 'structure',
              required: ['HostedZone'],
              members: {
                HostedZone: {
                  shape: 'S3e'
                }
              }
            }
          },
          UpdateTrafficPolicyComment: {
            http: {
              requestUri: '/2013-04-01/trafficpolicy/{Id}/{Version}'
            },
            input: {
              locationName: 'UpdateTrafficPolicyCommentRequest',
              xmlNamespace: {
                uri: 'https://route53.amazonaws.com/doc/2013-04-01/'
              },
              type: 'structure',
              required: ['Id', 'Version', 'Comment'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                Version: {
                  location: 'uri',
                  locationName: 'Version',
                  type: 'integer'
                },
                Comment: {}
              }
            },
            output: {
              type: 'structure',
              required: ['TrafficPolicy'],
              members: {
                TrafficPolicy: {
                  shape: 'S42'
                }
              }
            }
          },
          UpdateTrafficPolicyInstance: {
            http: {
              requestUri: '/2013-04-01/trafficpolicyinstance/{Id}'
            },
            input: {
              locationName: 'UpdateTrafficPolicyInstanceRequest',
              xmlNamespace: {
                uri: 'https://route53.amazonaws.com/doc/2013-04-01/'
              },
              type: 'structure',
              required: ['Id', 'TTL', 'TrafficPolicyId', 'TrafficPolicyVersion'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                TTL: {
                  type: 'long'
                },
                TrafficPolicyId: {},
                TrafficPolicyVersion: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TrafficPolicyInstance'],
              members: {
                TrafficPolicyInstance: {
                  shape: 'S47'
                }
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            required: ['Id', 'Status', 'SubmittedAt'],
            members: {
              Id: {},
              Status: {},
              SubmittedAt: {
                type: 'timestamp'
              },
              Comment: {}
            }
          },
          Sa: {
            type: 'structure',
            members: {
              VPCRegion: {},
              VPCId: {}
            }
          },
          Sv: {
            type: 'structure',
            required: ['Name', 'Type'],
            members: {
              Name: {},
              Type: {},
              SetIdentifier: {},
              Weight: {
                type: 'long'
              },
              Region: {},
              GeoLocation: {
                type: 'structure',
                members: {
                  ContinentCode: {},
                  CountryCode: {},
                  SubdivisionCode: {}
                }
              },
              Failover: {},
              MultiValueAnswer: {
                type: 'boolean'
              },
              TTL: {
                type: 'long'
              },
              ResourceRecords: {
                type: 'list',
                member: {
                  locationName: 'ResourceRecord',
                  type: 'structure',
                  required: ['Value'],
                  members: {
                    Value: {}
                  }
                }
              },
              AliasTarget: {
                type: 'structure',
                required: ['HostedZoneId', 'DNSName', 'EvaluateTargetHealth'],
                members: {
                  HostedZoneId: {},
                  DNSName: {},
                  EvaluateTargetHealth: {
                    type: 'boolean'
                  }
                }
              },
              HealthCheckId: {},
              TrafficPolicyInstanceId: {},
              CidrRoutingConfig: {
                type: 'structure',
                required: ['CollectionId', 'LocationName'],
                members: {
                  CollectionId: {},
                  LocationName: {}
                }
              },
              GeoProximityLocation: {
                type: 'structure',
                members: {
                  AWSRegion: {},
                  LocalZoneGroup: {},
                  Coordinates: {
                    type: 'structure',
                    required: ['Latitude', 'Longitude'],
                    members: {
                      Latitude: {},
                      Longitude: {}
                    }
                  },
                  Bias: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S1s: {
            type: 'list',
            member: {
              locationName: 'Tag',
              type: 'structure',
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S27: {
            type: 'structure',
            required: ['Type'],
            members: {
              IPAddress: {},
              Port: {
                type: 'integer'
              },
              Type: {},
              ResourcePath: {},
              FullyQualifiedDomainName: {},
              SearchString: {},
              RequestInterval: {
                type: 'integer'
              },
              FailureThreshold: {
                type: 'integer'
              },
              MeasureLatency: {
                type: 'boolean'
              },
              Inverted: {
                type: 'boolean'
              },
              Disabled: {
                type: 'boolean'
              },
              HealthThreshold: {
                type: 'integer'
              },
              ChildHealthChecks: {
                shape: 'S2k'
              },
              EnableSNI: {
                type: 'boolean'
              },
              Regions: {
                shape: 'S2m'
              },
              AlarmIdentifier: {
                shape: 'S2o'
              },
              InsufficientDataHealthStatus: {},
              RoutingControlArn: {}
            }
          },
          S2k: {
            type: 'list',
            member: {
              locationName: 'ChildHealthCheck'
            }
          },
          S2m: {
            type: 'list',
            member: {
              locationName: 'Region'
            }
          },
          S2o: {
            type: 'structure',
            required: ['Region', 'Name'],
            members: {
              Region: {},
              Name: {}
            }
          },
          S2u: {
            type: 'structure',
            required: ['Id', 'CallerReference', 'HealthCheckConfig', 'HealthCheckVersion'],
            members: {
              Id: {},
              CallerReference: {},
              LinkedService: {
                shape: 'S2v'
              },
              HealthCheckConfig: {
                shape: 'S27'
              },
              HealthCheckVersion: {
                type: 'long'
              },
              CloudWatchAlarmConfiguration: {
                type: 'structure',
                required: ['EvaluationPeriods', 'Threshold', 'ComparisonOperator', 'Period', 'MetricName', 'Namespace', 'Statistic'],
                members: {
                  EvaluationPeriods: {
                    type: 'integer'
                  },
                  Threshold: {
                    type: 'double'
                  },
                  ComparisonOperator: {},
                  Period: {
                    type: 'integer'
                  },
                  MetricName: {},
                  Namespace: {},
                  Statistic: {},
                  Dimensions: {
                    type: 'list',
                    member: {
                      locationName: 'Dimension',
                      type: 'structure',
                      required: ['Name', 'Value'],
                      members: {
                        Name: {},
                        Value: {}
                      }
                    }
                  }
                }
              }
            }
          },
          S2v: {
            type: 'structure',
            members: {
              ServicePrincipal: {},
              Description: {}
            }
          },
          S3b: {
            type: 'structure',
            members: {
              Comment: {},
              PrivateZone: {
                type: 'boolean'
              }
            }
          },
          S3e: {
            type: 'structure',
            required: ['Id', 'Name', 'CallerReference'],
            members: {
              Id: {},
              Name: {},
              CallerReference: {},
              Config: {
                shape: 'S3b'
              },
              ResourceRecordSetCount: {
                type: 'long'
              },
              LinkedService: {
                shape: 'S2v'
              }
            }
          },
          S3g: {
            type: 'structure',
            required: ['NameServers'],
            members: {
              Id: {},
              CallerReference: {},
              NameServers: {
                type: 'list',
                member: {
                  locationName: 'NameServer'
                }
              }
            }
          },
          S3m: {
            type: 'structure',
            members: {
              Name: {},
              KmsArn: {},
              Flag: {
                type: 'integer'
              },
              SigningAlgorithmMnemonic: {},
              SigningAlgorithmType: {
                type: 'integer'
              },
              DigestAlgorithmMnemonic: {},
              DigestAlgorithmType: {
                type: 'integer'
              },
              KeyTag: {
                type: 'integer'
              },
              DigestValue: {},
              PublicKey: {},
              DSRecord: {},
              DNSKEYRecord: {},
              Status: {},
              StatusMessage: {},
              CreatedDate: {
                type: 'timestamp'
              },
              LastModifiedDate: {
                type: 'timestamp'
              }
            }
          },
          S3t: {
            type: 'structure',
            required: ['Id', 'HostedZoneId', 'CloudWatchLogsLogGroupArn'],
            members: {
              Id: {},
              HostedZoneId: {},
              CloudWatchLogsLogGroupArn: {}
            }
          },
          S42: {
            type: 'structure',
            required: ['Id', 'Version', 'Name', 'Type', 'Document'],
            members: {
              Id: {},
              Version: {
                type: 'integer'
              },
              Name: {},
              Type: {},
              Document: {},
              Comment: {}
            }
          },
          S47: {
            type: 'structure',
            required: ['Id', 'HostedZoneId', 'Name', 'TTL', 'State', 'Message', 'TrafficPolicyId', 'TrafficPolicyVersion', 'TrafficPolicyType'],
            members: {
              Id: {},
              HostedZoneId: {},
              Name: {},
              TTL: {
                type: 'long'
              },
              State: {},
              Message: {},
              TrafficPolicyId: {},
              TrafficPolicyVersion: {
                type: 'integer'
              },
              TrafficPolicyType: {}
            }
          },
          S5o: {
            type: 'structure',
            members: {
              ContinentCode: {},
              ContinentName: {},
              CountryCode: {},
              CountryName: {},
              SubdivisionCode: {},
              SubdivisionName: {}
            }
          },
          S5z: {
            type: 'list',
            member: {
              locationName: 'HealthCheckObservation',
              type: 'structure',
              members: {
                Region: {},
                IPAddress: {},
                StatusReport: {
                  type: 'structure',
                  members: {
                    Status: {},
                    CheckedTime: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          S67: {
            type: 'list',
            member: {
              shape: 'Sa',
              locationName: 'VPC'
            }
          },
          S7k: {
            type: 'list',
            member: {
              shape: 'S3e',
              locationName: 'HostedZone'
            }
          },
          S85: {
            type: 'structure',
            members: {
              ResourceType: {},
              ResourceId: {},
              Tags: {
                shape: 'S1s'
              }
            }
          },
          S8g: {
            type: 'list',
            member: {
              shape: 'S47',
              locationName: 'TrafficPolicyInstance'
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=073e0ab7ea1ed58f1107782c7827aeffa1102021.js.map