System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-11-30',
          endpointPrefix: 'vpc-lattice',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon VPC Lattice',
          serviceId: 'VPC Lattice',
          signatureVersion: 'v4',
          signingName: 'vpc-lattice',
          uid: 'vpc-lattice-2022-11-30'
        },
        operations: {
          BatchUpdateRule: {
            http: {
              method: 'PATCH',
              requestUri: '/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['listenerIdentifier', 'rules', 'serviceIdentifier'],
              members: {
                listenerIdentifier: {
                  location: 'uri',
                  locationName: 'listenerIdentifier'
                },
                rules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ruleIdentifier'],
                    members: {
                      action: {
                        shape: 'S5'
                      },
                      match: {
                        shape: 'Sd'
                      },
                      priority: {
                        type: 'integer'
                      },
                      ruleIdentifier: {}
                    }
                  }
                },
                serviceIdentifier: {
                  location: 'uri',
                  locationName: 'serviceIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                successful: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      action: {
                        shape: 'S5'
                      },
                      arn: {},
                      id: {},
                      isDefault: {
                        type: 'boolean'
                      },
                      match: {
                        shape: 'Sd'
                      },
                      name: {},
                      priority: {
                        type: 'integer'
                      }
                    }
                  }
                },
                unsuccessful: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      failureCode: {},
                      failureMessage: {},
                      ruleIdentifier: {}
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          CreateAccessLogSubscription: {
            http: {
              requestUri: '/accesslogsubscriptions',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['destinationArn', 'resourceIdentifier'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                destinationArn: {},
                resourceIdentifier: {},
                tags: {
                  shape: 'S19'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'destinationArn', 'id', 'resourceArn', 'resourceId'],
              members: {
                arn: {},
                destinationArn: {},
                id: {},
                resourceArn: {},
                resourceId: {}
              }
            },
            idempotent: true
          },
          CreateListener: {
            http: {
              requestUri: '/services/{serviceIdentifier}/listeners',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['defaultAction', 'name', 'protocol', 'serviceIdentifier'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                defaultAction: {
                  shape: 'S5'
                },
                name: {},
                port: {
                  type: 'integer'
                },
                protocol: {},
                serviceIdentifier: {
                  location: 'uri',
                  locationName: 'serviceIdentifier'
                },
                tags: {
                  shape: 'S19'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                defaultAction: {
                  shape: 'S5'
                },
                id: {},
                name: {},
                port: {
                  type: 'integer'
                },
                protocol: {},
                serviceArn: {},
                serviceId: {}
              }
            },
            idempotent: true
          },
          CreateRule: {
            http: {
              requestUri: '/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['action', 'listenerIdentifier', 'match', 'name', 'priority', 'serviceIdentifier'],
              members: {
                action: {
                  shape: 'S5'
                },
                clientToken: {
                  idempotencyToken: true
                },
                listenerIdentifier: {
                  location: 'uri',
                  locationName: 'listenerIdentifier'
                },
                match: {
                  shape: 'Sd'
                },
                name: {},
                priority: {
                  type: 'integer'
                },
                serviceIdentifier: {
                  location: 'uri',
                  locationName: 'serviceIdentifier'
                },
                tags: {
                  shape: 'S19'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                action: {
                  shape: 'S5'
                },
                arn: {},
                id: {},
                match: {
                  shape: 'Sd'
                },
                name: {},
                priority: {
                  type: 'integer'
                }
              }
            },
            idempotent: true
          },
          CreateService: {
            http: {
              requestUri: '/services',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                authType: {},
                certificateArn: {},
                clientToken: {
                  idempotencyToken: true
                },
                customDomainName: {},
                name: {},
                tags: {
                  shape: 'S19'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                authType: {},
                certificateArn: {},
                customDomainName: {},
                dnsEntry: {
                  shape: 'S1y'
                },
                id: {},
                name: {},
                status: {}
              }
            },
            idempotent: true
          },
          CreateServiceNetwork: {
            http: {
              requestUri: '/servicenetworks',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                authType: {},
                clientToken: {
                  idempotencyToken: true
                },
                name: {},
                tags: {
                  shape: 'S19'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                authType: {},
                id: {},
                name: {}
              }
            },
            idempotent: true
          },
          CreateServiceNetworkServiceAssociation: {
            http: {
              requestUri: '/servicenetworkserviceassociations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['serviceIdentifier', 'serviceNetworkIdentifier'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                serviceIdentifier: {},
                serviceNetworkIdentifier: {},
                tags: {
                  shape: 'S19'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                createdBy: {},
                customDomainName: {},
                dnsEntry: {
                  shape: 'S1y'
                },
                id: {},
                status: {}
              }
            },
            idempotent: true
          },
          CreateServiceNetworkVpcAssociation: {
            http: {
              requestUri: '/servicenetworkvpcassociations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['serviceNetworkIdentifier', 'vpcIdentifier'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                securityGroupIds: {
                  type: 'list',
                  member: {}
                },
                serviceNetworkIdentifier: {},
                tags: {
                  shape: 'S19'
                },
                vpcIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                createdBy: {},
                id: {},
                securityGroupIds: {
                  shape: 'S2k'
                },
                status: {}
              }
            },
            idempotent: true
          },
          CreateTargetGroup: {
            http: {
              requestUri: '/targetgroups',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['name', 'type'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                config: {
                  shape: 'S2n'
                },
                name: {},
                tags: {
                  shape: 'S19'
                },
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                config: {
                  shape: 'S2n'
                },
                id: {},
                name: {},
                status: {},
                type: {}
              }
            },
            idempotent: true
          },
          DeleteAccessLogSubscription: {
            http: {
              method: 'DELETE',
              requestUri: '/accesslogsubscriptions/{accessLogSubscriptionIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['accessLogSubscriptionIdentifier'],
              members: {
                accessLogSubscriptionIdentifier: {
                  location: 'uri',
                  locationName: 'accessLogSubscriptionIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteAuthPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/authpolicy/{resourceIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['resourceIdentifier'],
              members: {
                resourceIdentifier: {
                  location: 'uri',
                  locationName: 'resourceIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteListener: {
            http: {
              method: 'DELETE',
              requestUri: '/services/{serviceIdentifier}/listeners/{listenerIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['listenerIdentifier', 'serviceIdentifier'],
              members: {
                listenerIdentifier: {
                  location: 'uri',
                  locationName: 'listenerIdentifier'
                },
                serviceIdentifier: {
                  location: 'uri',
                  locationName: 'serviceIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteResourcePolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/resourcepolicy/{resourceArn}',
              responseCode: 204
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
              members: {}
            },
            idempotent: true
          },
          DeleteRule: {
            http: {
              method: 'DELETE',
              requestUri: '/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules/{ruleIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['listenerIdentifier', 'ruleIdentifier', 'serviceIdentifier'],
              members: {
                listenerIdentifier: {
                  location: 'uri',
                  locationName: 'listenerIdentifier'
                },
                ruleIdentifier: {
                  location: 'uri',
                  locationName: 'ruleIdentifier'
                },
                serviceIdentifier: {
                  location: 'uri',
                  locationName: 'serviceIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteService: {
            http: {
              method: 'DELETE',
              requestUri: '/services/{serviceIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['serviceIdentifier'],
              members: {
                serviceIdentifier: {
                  location: 'uri',
                  locationName: 'serviceIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                id: {},
                name: {},
                status: {}
              }
            },
            idempotent: true
          },
          DeleteServiceNetwork: {
            http: {
              method: 'DELETE',
              requestUri: '/servicenetworks/{serviceNetworkIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['serviceNetworkIdentifier'],
              members: {
                serviceNetworkIdentifier: {
                  location: 'uri',
                  locationName: 'serviceNetworkIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteServiceNetworkServiceAssociation: {
            http: {
              method: 'DELETE',
              requestUri: '/servicenetworkserviceassociations/{serviceNetworkServiceAssociationIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['serviceNetworkServiceAssociationIdentifier'],
              members: {
                serviceNetworkServiceAssociationIdentifier: {
                  location: 'uri',
                  locationName: 'serviceNetworkServiceAssociationIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                id: {},
                status: {}
              }
            },
            idempotent: true
          },
          DeleteServiceNetworkVpcAssociation: {
            http: {
              method: 'DELETE',
              requestUri: '/servicenetworkvpcassociations/{serviceNetworkVpcAssociationIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['serviceNetworkVpcAssociationIdentifier'],
              members: {
                serviceNetworkVpcAssociationIdentifier: {
                  location: 'uri',
                  locationName: 'serviceNetworkVpcAssociationIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                id: {},
                status: {}
              }
            },
            idempotent: true
          },
          DeleteTargetGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/targetgroups/{targetGroupIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['targetGroupIdentifier'],
              members: {
                targetGroupIdentifier: {
                  location: 'uri',
                  locationName: 'targetGroupIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                id: {},
                status: {}
              }
            },
            idempotent: true
          },
          DeregisterTargets: {
            http: {
              requestUri: '/targetgroups/{targetGroupIdentifier}/deregistertargets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['targetGroupIdentifier', 'targets'],
              members: {
                targetGroupIdentifier: {
                  location: 'uri',
                  locationName: 'targetGroupIdentifier'
                },
                targets: {
                  type: 'list',
                  member: {
                    shape: 'S3w'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                successful: {
                  shape: 'S3z'
                },
                unsuccessful: {
                  shape: 'S40'
                }
              }
            },
            idempotent: true
          },
          GetAccessLogSubscription: {
            http: {
              method: 'GET',
              requestUri: '/accesslogsubscriptions/{accessLogSubscriptionIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['accessLogSubscriptionIdentifier'],
              members: {
                accessLogSubscriptionIdentifier: {
                  location: 'uri',
                  locationName: 'accessLogSubscriptionIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'createdAt', 'destinationArn', 'id', 'lastUpdatedAt', 'resourceArn', 'resourceId'],
              members: {
                arn: {},
                createdAt: {
                  shape: 'S44'
                },
                destinationArn: {},
                id: {},
                lastUpdatedAt: {
                  shape: 'S44'
                },
                resourceArn: {},
                resourceId: {}
              }
            }
          },
          GetAuthPolicy: {
            http: {
              method: 'GET',
              requestUri: '/authpolicy/{resourceIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceIdentifier'],
              members: {
                resourceIdentifier: {
                  location: 'uri',
                  locationName: 'resourceIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                createdAt: {
                  shape: 'S44'
                },
                lastUpdatedAt: {
                  shape: 'S44'
                },
                policy: {},
                state: {}
              }
            }
          },
          GetListener: {
            http: {
              method: 'GET',
              requestUri: '/services/{serviceIdentifier}/listeners/{listenerIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['listenerIdentifier', 'serviceIdentifier'],
              members: {
                listenerIdentifier: {
                  location: 'uri',
                  locationName: 'listenerIdentifier'
                },
                serviceIdentifier: {
                  location: 'uri',
                  locationName: 'serviceIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                createdAt: {
                  shape: 'S44'
                },
                defaultAction: {
                  shape: 'S5'
                },
                id: {},
                lastUpdatedAt: {
                  shape: 'S44'
                },
                name: {},
                port: {
                  type: 'integer'
                },
                protocol: {},
                serviceArn: {},
                serviceId: {}
              }
            }
          },
          GetResourcePolicy: {
            http: {
              method: 'GET',
              requestUri: '/resourcepolicy/{resourceArn}',
              responseCode: 200
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
                policy: {}
              }
            }
          },
          GetRule: {
            http: {
              method: 'GET',
              requestUri: '/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules/{ruleIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['listenerIdentifier', 'ruleIdentifier', 'serviceIdentifier'],
              members: {
                listenerIdentifier: {
                  location: 'uri',
                  locationName: 'listenerIdentifier'
                },
                ruleIdentifier: {
                  location: 'uri',
                  locationName: 'ruleIdentifier'
                },
                serviceIdentifier: {
                  location: 'uri',
                  locationName: 'serviceIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                action: {
                  shape: 'S5'
                },
                arn: {},
                createdAt: {
                  shape: 'S44'
                },
                id: {},
                isDefault: {
                  type: 'boolean'
                },
                lastUpdatedAt: {
                  shape: 'S44'
                },
                match: {
                  shape: 'Sd'
                },
                name: {},
                priority: {
                  type: 'integer'
                }
              }
            }
          },
          GetService: {
            http: {
              method: 'GET',
              requestUri: '/services/{serviceIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['serviceIdentifier'],
              members: {
                serviceIdentifier: {
                  location: 'uri',
                  locationName: 'serviceIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                authType: {},
                certificateArn: {},
                createdAt: {
                  shape: 'S44'
                },
                customDomainName: {},
                dnsEntry: {
                  shape: 'S1y'
                },
                failureCode: {},
                failureMessage: {},
                id: {},
                lastUpdatedAt: {
                  shape: 'S44'
                },
                name: {},
                status: {}
              }
            }
          },
          GetServiceNetwork: {
            http: {
              method: 'GET',
              requestUri: '/servicenetworks/{serviceNetworkIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['serviceNetworkIdentifier'],
              members: {
                serviceNetworkIdentifier: {
                  location: 'uri',
                  locationName: 'serviceNetworkIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                authType: {},
                createdAt: {
                  shape: 'S44'
                },
                id: {},
                lastUpdatedAt: {
                  shape: 'S44'
                },
                name: {},
                numberOfAssociatedServices: {
                  type: 'long'
                },
                numberOfAssociatedVPCs: {
                  type: 'long'
                }
              }
            }
          },
          GetServiceNetworkServiceAssociation: {
            http: {
              method: 'GET',
              requestUri: '/servicenetworkserviceassociations/{serviceNetworkServiceAssociationIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['serviceNetworkServiceAssociationIdentifier'],
              members: {
                serviceNetworkServiceAssociationIdentifier: {
                  location: 'uri',
                  locationName: 'serviceNetworkServiceAssociationIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                createdAt: {
                  shape: 'S44'
                },
                createdBy: {},
                customDomainName: {},
                dnsEntry: {
                  shape: 'S1y'
                },
                failureCode: {},
                failureMessage: {},
                id: {},
                serviceArn: {},
                serviceId: {},
                serviceName: {},
                serviceNetworkArn: {},
                serviceNetworkId: {},
                serviceNetworkName: {},
                status: {}
              }
            }
          },
          GetServiceNetworkVpcAssociation: {
            http: {
              method: 'GET',
              requestUri: '/servicenetworkvpcassociations/{serviceNetworkVpcAssociationIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['serviceNetworkVpcAssociationIdentifier'],
              members: {
                serviceNetworkVpcAssociationIdentifier: {
                  location: 'uri',
                  locationName: 'serviceNetworkVpcAssociationIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                createdAt: {
                  shape: 'S44'
                },
                createdBy: {},
                failureCode: {},
                failureMessage: {},
                id: {},
                lastUpdatedAt: {
                  shape: 'S44'
                },
                securityGroupIds: {
                  shape: 'S2k'
                },
                serviceNetworkArn: {},
                serviceNetworkId: {},
                serviceNetworkName: {},
                status: {},
                vpcId: {}
              }
            }
          },
          GetTargetGroup: {
            http: {
              method: 'GET',
              requestUri: '/targetgroups/{targetGroupIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['targetGroupIdentifier'],
              members: {
                targetGroupIdentifier: {
                  location: 'uri',
                  locationName: 'targetGroupIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                config: {
                  shape: 'S2n'
                },
                createdAt: {
                  shape: 'S44'
                },
                failureCode: {},
                failureMessage: {},
                id: {},
                lastUpdatedAt: {
                  shape: 'S44'
                },
                name: {},
                serviceArns: {
                  shape: 'S4r'
                },
                status: {},
                type: {}
              }
            }
          },
          ListAccessLogSubscriptions: {
            http: {
              method: 'GET',
              requestUri: '/accesslogsubscriptions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceIdentifier'],
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                resourceIdentifier: {
                  location: 'querystring',
                  locationName: 'resourceIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdAt', 'destinationArn', 'id', 'lastUpdatedAt', 'resourceArn', 'resourceId'],
                    members: {
                      arn: {},
                      createdAt: {
                        shape: 'S44'
                      },
                      destinationArn: {},
                      id: {},
                      lastUpdatedAt: {
                        shape: 'S44'
                      },
                      resourceArn: {},
                      resourceId: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListListeners: {
            http: {
              method: 'GET',
              requestUri: '/services/{serviceIdentifier}/listeners',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['serviceIdentifier'],
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                serviceIdentifier: {
                  location: 'uri',
                  locationName: 'serviceIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      createdAt: {
                        shape: 'S44'
                      },
                      id: {},
                      lastUpdatedAt: {
                        shape: 'S44'
                      },
                      name: {},
                      port: {
                        type: 'integer'
                      },
                      protocol: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListRules: {
            http: {
              method: 'GET',
              requestUri: '/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['listenerIdentifier', 'serviceIdentifier'],
              members: {
                listenerIdentifier: {
                  location: 'uri',
                  locationName: 'listenerIdentifier'
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
                serviceIdentifier: {
                  location: 'uri',
                  locationName: 'serviceIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      createdAt: {
                        shape: 'S44'
                      },
                      id: {},
                      isDefault: {
                        type: 'boolean'
                      },
                      lastUpdatedAt: {
                        shape: 'S44'
                      },
                      name: {},
                      priority: {
                        type: 'integer'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListServiceNetworkServiceAssociations: {
            http: {
              method: 'GET',
              requestUri: '/servicenetworkserviceassociations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                serviceIdentifier: {
                  location: 'querystring',
                  locationName: 'serviceIdentifier'
                },
                serviceNetworkIdentifier: {
                  location: 'querystring',
                  locationName: 'serviceNetworkIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      createdAt: {
                        shape: 'S44'
                      },
                      createdBy: {},
                      customDomainName: {},
                      dnsEntry: {
                        shape: 'S1y'
                      },
                      id: {},
                      serviceArn: {},
                      serviceId: {},
                      serviceName: {},
                      serviceNetworkArn: {},
                      serviceNetworkId: {},
                      serviceNetworkName: {},
                      status: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListServiceNetworkVpcAssociations: {
            http: {
              method: 'GET',
              requestUri: '/servicenetworkvpcassociations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                serviceNetworkIdentifier: {
                  location: 'querystring',
                  locationName: 'serviceNetworkIdentifier'
                },
                vpcIdentifier: {
                  location: 'querystring',
                  locationName: 'vpcIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      createdAt: {
                        shape: 'S44'
                      },
                      createdBy: {},
                      id: {},
                      lastUpdatedAt: {
                        shape: 'S44'
                      },
                      serviceNetworkArn: {},
                      serviceNetworkId: {},
                      serviceNetworkName: {},
                      status: {},
                      vpcId: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListServiceNetworks: {
            http: {
              method: 'GET',
              requestUri: '/servicenetworks',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
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
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      createdAt: {
                        shape: 'S44'
                      },
                      id: {},
                      lastUpdatedAt: {
                        shape: 'S44'
                      },
                      name: {},
                      numberOfAssociatedServices: {
                        type: 'long'
                      },
                      numberOfAssociatedVPCs: {
                        type: 'long'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListServices: {
            http: {
              method: 'GET',
              requestUri: '/services',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
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
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      createdAt: {
                        shape: 'S44'
                      },
                      customDomainName: {},
                      dnsEntry: {
                        shape: 'S1y'
                      },
                      id: {},
                      lastUpdatedAt: {
                        shape: 'S44'
                      },
                      name: {},
                      status: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
                  shape: 'S19'
                }
              }
            }
          },
          ListTargetGroups: {
            http: {
              method: 'GET',
              requestUri: '/targetgroups',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                targetGroupType: {
                  location: 'querystring',
                  locationName: 'targetGroupType'
                },
                vpcIdentifier: {
                  location: 'querystring',
                  locationName: 'vpcIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      createdAt: {
                        shape: 'S44'
                      },
                      id: {},
                      ipAddressType: {},
                      lambdaEventStructureVersion: {},
                      lastUpdatedAt: {
                        shape: 'S44'
                      },
                      name: {},
                      port: {
                        type: 'integer'
                      },
                      protocol: {},
                      serviceArns: {
                        shape: 'S4r'
                      },
                      status: {},
                      type: {},
                      vpcIdentifier: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTargets: {
            http: {
              requestUri: '/targetgroups/{targetGroupIdentifier}/listtargets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['targetGroupIdentifier'],
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                targetGroupIdentifier: {
                  location: 'uri',
                  locationName: 'targetGroupIdentifier'
                },
                targets: {
                  type: 'list',
                  member: {
                    shape: 'S3w'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {},
                      port: {
                        type: 'integer'
                      },
                      reasonCode: {},
                      status: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          PutAuthPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/authpolicy/{resourceIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['policy', 'resourceIdentifier'],
              members: {
                policy: {},
                resourceIdentifier: {
                  location: 'uri',
                  locationName: 'resourceIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                policy: {},
                state: {}
              }
            }
          },
          PutResourcePolicy: {
            http: {
              method: 'PUT',
              requestUri: '/resourcepolicy/{resourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['policy', 'resourceArn'],
              members: {
                policy: {},
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          RegisterTargets: {
            http: {
              requestUri: '/targetgroups/{targetGroupIdentifier}/registertargets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['targetGroupIdentifier', 'targets'],
              members: {
                targetGroupIdentifier: {
                  location: 'uri',
                  locationName: 'targetGroupIdentifier'
                },
                targets: {
                  type: 'list',
                  member: {
                    shape: 'S3w'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                successful: {
                  shape: 'S3z'
                },
                unsuccessful: {
                  shape: 'S40'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
                  shape: 'S19'
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
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
            },
            idempotent: true
          },
          UpdateAccessLogSubscription: {
            http: {
              method: 'PATCH',
              requestUri: '/accesslogsubscriptions/{accessLogSubscriptionIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['accessLogSubscriptionIdentifier', 'destinationArn'],
              members: {
                accessLogSubscriptionIdentifier: {
                  location: 'uri',
                  locationName: 'accessLogSubscriptionIdentifier'
                },
                destinationArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'destinationArn', 'id', 'resourceArn', 'resourceId'],
              members: {
                arn: {},
                destinationArn: {},
                id: {},
                resourceArn: {},
                resourceId: {}
              }
            },
            idempotent: true
          },
          UpdateListener: {
            http: {
              method: 'PATCH',
              requestUri: '/services/{serviceIdentifier}/listeners/{listenerIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['defaultAction', 'listenerIdentifier', 'serviceIdentifier'],
              members: {
                defaultAction: {
                  shape: 'S5'
                },
                listenerIdentifier: {
                  location: 'uri',
                  locationName: 'listenerIdentifier'
                },
                serviceIdentifier: {
                  location: 'uri',
                  locationName: 'serviceIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                defaultAction: {
                  shape: 'S5'
                },
                id: {},
                name: {},
                port: {
                  type: 'integer'
                },
                protocol: {},
                serviceArn: {},
                serviceId: {}
              }
            },
            idempotent: true
          },
          UpdateRule: {
            http: {
              method: 'PATCH',
              requestUri: '/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules/{ruleIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['listenerIdentifier', 'ruleIdentifier', 'serviceIdentifier'],
              members: {
                action: {
                  shape: 'S5'
                },
                listenerIdentifier: {
                  location: 'uri',
                  locationName: 'listenerIdentifier'
                },
                match: {
                  shape: 'Sd'
                },
                priority: {
                  type: 'integer'
                },
                ruleIdentifier: {
                  location: 'uri',
                  locationName: 'ruleIdentifier'
                },
                serviceIdentifier: {
                  location: 'uri',
                  locationName: 'serviceIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                action: {
                  shape: 'S5'
                },
                arn: {},
                id: {},
                isDefault: {
                  type: 'boolean'
                },
                match: {
                  shape: 'Sd'
                },
                name: {},
                priority: {
                  type: 'integer'
                }
              }
            },
            idempotent: true
          },
          UpdateService: {
            http: {
              method: 'PATCH',
              requestUri: '/services/{serviceIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['serviceIdentifier'],
              members: {
                authType: {},
                certificateArn: {},
                serviceIdentifier: {
                  location: 'uri',
                  locationName: 'serviceIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                authType: {},
                certificateArn: {},
                customDomainName: {},
                id: {},
                name: {}
              }
            }
          },
          UpdateServiceNetwork: {
            http: {
              method: 'PATCH',
              requestUri: '/servicenetworks/{serviceNetworkIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['authType', 'serviceNetworkIdentifier'],
              members: {
                authType: {},
                serviceNetworkIdentifier: {
                  location: 'uri',
                  locationName: 'serviceNetworkIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                authType: {},
                id: {},
                name: {}
              }
            },
            idempotent: true
          },
          UpdateServiceNetworkVpcAssociation: {
            http: {
              method: 'PATCH',
              requestUri: '/servicenetworkvpcassociations/{serviceNetworkVpcAssociationIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['securityGroupIds', 'serviceNetworkVpcAssociationIdentifier'],
              members: {
                securityGroupIds: {
                  type: 'list',
                  member: {}
                },
                serviceNetworkVpcAssociationIdentifier: {
                  location: 'uri',
                  locationName: 'serviceNetworkVpcAssociationIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                createdBy: {},
                id: {},
                securityGroupIds: {
                  shape: 'S2k'
                },
                status: {}
              }
            },
            idempotent: true
          },
          UpdateTargetGroup: {
            http: {
              method: 'PATCH',
              requestUri: '/targetgroups/{targetGroupIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['healthCheck', 'targetGroupIdentifier'],
              members: {
                healthCheck: {
                  shape: 'S2o'
                },
                targetGroupIdentifier: {
                  location: 'uri',
                  locationName: 'targetGroupIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                config: {
                  shape: 'S2n'
                },
                id: {},
                name: {},
                status: {},
                type: {}
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            members: {
              fixedResponse: {
                type: 'structure',
                required: ['statusCode'],
                members: {
                  statusCode: {
                    type: 'integer'
                  }
                }
              },
              forward: {
                type: 'structure',
                required: ['targetGroups'],
                members: {
                  targetGroups: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['targetGroupIdentifier'],
                      members: {
                        targetGroupIdentifier: {},
                        weight: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                }
              }
            },
            union: true
          },
          Sd: {
            type: 'structure',
            members: {
              httpMatch: {
                type: 'structure',
                members: {
                  headerMatches: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['match', 'name'],
                      members: {
                        caseSensitive: {
                          type: 'boolean'
                        },
                        match: {
                          type: 'structure',
                          members: {
                            contains: {},
                            exact: {},
                            prefix: {}
                          },
                          union: true
                        },
                        name: {}
                      }
                    }
                  },
                  method: {},
                  pathMatch: {
                    type: 'structure',
                    required: ['match'],
                    members: {
                      caseSensitive: {
                        type: 'boolean'
                      },
                      match: {
                        type: 'structure',
                        members: {
                          exact: {},
                          prefix: {}
                        },
                        union: true
                      }
                    }
                  }
                }
              }
            },
            union: true
          },
          S19: {
            type: 'map',
            key: {},
            value: {}
          },
          S1y: {
            type: 'structure',
            members: {
              domainName: {},
              hostedZoneId: {}
            }
          },
          S2k: {
            type: 'list',
            member: {}
          },
          S2n: {
            type: 'structure',
            members: {
              healthCheck: {
                shape: 'S2o'
              },
              ipAddressType: {},
              lambdaEventStructureVersion: {},
              port: {
                type: 'integer'
              },
              protocol: {},
              protocolVersion: {},
              vpcIdentifier: {}
            }
          },
          S2o: {
            type: 'structure',
            members: {
              enabled: {
                type: 'boolean'
              },
              healthCheckIntervalSeconds: {
                type: 'integer'
              },
              healthCheckTimeoutSeconds: {
                type: 'integer'
              },
              healthyThresholdCount: {
                type: 'integer'
              },
              matcher: {
                type: 'structure',
                members: {
                  httpCode: {}
                },
                union: true
              },
              path: {},
              port: {
                type: 'integer'
              },
              protocol: {},
              protocolVersion: {},
              unhealthyThresholdCount: {
                type: 'integer'
              }
            }
          },
          S3w: {
            type: 'structure',
            required: ['id'],
            members: {
              id: {},
              port: {
                type: 'integer'
              }
            }
          },
          S3z: {
            type: 'list',
            member: {
              shape: 'S3w'
            }
          },
          S40: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                failureCode: {},
                failureMessage: {},
                id: {},
                port: {
                  type: 'integer'
                }
              }
            }
          },
          S44: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S4r: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=592fa305989645f6489a30de74091bdfe61655cc.js.map