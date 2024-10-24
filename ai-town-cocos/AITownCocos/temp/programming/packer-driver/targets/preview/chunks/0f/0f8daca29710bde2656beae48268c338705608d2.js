System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2008-10-21',
          endpointPrefix: 'tnb',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Telco Network Builder',
          serviceId: 'tnb',
          signatureVersion: 'v4',
          signingName: 'tnb',
          uid: 'tnb-2008-10-21'
        },
        operations: {
          CancelSolNetworkOperation: {
            http: {
              requestUri: '/sol/nslcm/v1/ns_lcm_op_occs/{nsLcmOpOccId}/cancel',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['nsLcmOpOccId'],
              members: {
                nsLcmOpOccId: {
                  location: 'uri',
                  locationName: 'nsLcmOpOccId'
                }
              }
            }
          },
          CreateSolFunctionPackage: {
            http: {
              requestUri: '/sol/vnfpkgm/v1/vnf_packages',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'id', 'onboardingState', 'operationalState', 'usageState'],
              members: {
                arn: {},
                id: {},
                onboardingState: {},
                operationalState: {},
                tags: {
                  shape: 'S4'
                },
                usageState: {}
              }
            }
          },
          CreateSolNetworkInstance: {
            http: {
              requestUri: '/sol/nslcm/v1/ns_instances',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['nsName', 'nsdInfoId'],
              members: {
                nsDescription: {},
                nsName: {},
                nsdInfoId: {},
                tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'id', 'nsInstanceName', 'nsdInfoId'],
              members: {
                arn: {},
                id: {},
                nsInstanceName: {},
                nsdInfoId: {},
                tags: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateSolNetworkPackage: {
            http: {
              requestUri: '/sol/nsd/v1/ns_descriptors',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'id', 'nsdOnboardingState', 'nsdOperationalState', 'nsdUsageState'],
              members: {
                arn: {},
                id: {},
                nsdOnboardingState: {},
                nsdOperationalState: {},
                nsdUsageState: {},
                tags: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteSolFunctionPackage: {
            http: {
              method: 'DELETE',
              requestUri: '/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['vnfPkgId'],
              members: {
                vnfPkgId: {
                  location: 'uri',
                  locationName: 'vnfPkgId'
                }
              }
            },
            idempotent: true
          },
          DeleteSolNetworkInstance: {
            http: {
              method: 'DELETE',
              requestUri: '/sol/nslcm/v1/ns_instances/{nsInstanceId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['nsInstanceId'],
              members: {
                nsInstanceId: {
                  location: 'uri',
                  locationName: 'nsInstanceId'
                }
              }
            },
            idempotent: true
          },
          DeleteSolNetworkPackage: {
            http: {
              method: 'DELETE',
              requestUri: '/sol/nsd/v1/ns_descriptors/{nsdInfoId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['nsdInfoId'],
              members: {
                nsdInfoId: {
                  location: 'uri',
                  locationName: 'nsdInfoId'
                }
              }
            },
            idempotent: true
          },
          GetSolFunctionInstance: {
            http: {
              method: 'GET',
              requestUri: '/sol/vnflcm/v1/vnf_instances/{vnfInstanceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['vnfInstanceId'],
              members: {
                vnfInstanceId: {
                  location: 'uri',
                  locationName: 'vnfInstanceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'id', 'instantiationState', 'metadata', 'nsInstanceId', 'vnfPkgId', 'vnfdId'],
              members: {
                arn: {},
                id: {},
                instantiatedVnfInfo: {
                  type: 'structure',
                  members: {
                    vnfState: {},
                    vnfcResourceInfo: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          metadata: {
                            type: 'structure',
                            members: {
                              cluster: {},
                              helmChart: {},
                              nodeGroup: {}
                            }
                          }
                        }
                      }
                    }
                  }
                },
                instantiationState: {},
                metadata: {
                  type: 'structure',
                  required: ['createdAt', 'lastModified'],
                  members: {
                    createdAt: {
                      shape: 'S15'
                    },
                    lastModified: {
                      shape: 'S15'
                    }
                  }
                },
                nsInstanceId: {},
                tags: {
                  shape: 'S4'
                },
                vnfPkgId: {},
                vnfProductName: {},
                vnfProvider: {},
                vnfdId: {},
                vnfdVersion: {}
              }
            }
          },
          GetSolFunctionPackage: {
            http: {
              method: 'GET',
              requestUri: '/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['vnfPkgId'],
              members: {
                vnfPkgId: {
                  location: 'uri',
                  locationName: 'vnfPkgId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'id', 'onboardingState', 'operationalState', 'usageState'],
              members: {
                arn: {},
                id: {},
                metadata: {
                  type: 'structure',
                  required: ['createdAt', 'lastModified'],
                  members: {
                    createdAt: {
                      shape: 'S15'
                    },
                    lastModified: {
                      shape: 'S15'
                    },
                    vnfd: {
                      shape: 'S1a'
                    }
                  }
                },
                onboardingState: {},
                operationalState: {},
                tags: {
                  shape: 'S4'
                },
                usageState: {},
                vnfProductName: {},
                vnfProvider: {},
                vnfdId: {},
                vnfdVersion: {}
              }
            }
          },
          GetSolFunctionPackageContent: {
            http: {
              method: 'GET',
              requestUri: '/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/package_content',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['accept', 'vnfPkgId'],
              members: {
                accept: {
                  location: 'header',
                  locationName: 'Accept'
                },
                vnfPkgId: {
                  location: 'uri',
                  locationName: 'vnfPkgId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                packageContent: {
                  type: 'blob'
                }
              },
              payload: 'packageContent'
            }
          },
          GetSolFunctionPackageDescriptor: {
            http: {
              method: 'GET',
              requestUri: '/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/vnfd',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['accept', 'vnfPkgId'],
              members: {
                accept: {
                  location: 'header',
                  locationName: 'Accept'
                },
                vnfPkgId: {
                  location: 'uri',
                  locationName: 'vnfPkgId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                vnfd: {
                  type: 'blob'
                }
              },
              payload: 'vnfd'
            }
          },
          GetSolNetworkInstance: {
            http: {
              method: 'GET',
              requestUri: '/sol/nslcm/v1/ns_instances/{nsInstanceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['nsInstanceId'],
              members: {
                nsInstanceId: {
                  location: 'uri',
                  locationName: 'nsInstanceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'id', 'metadata', 'nsInstanceDescription', 'nsInstanceName', 'nsdId', 'nsdInfoId'],
              members: {
                arn: {},
                id: {},
                lcmOpInfo: {
                  type: 'structure',
                  required: ['nsLcmOpOccId'],
                  members: {
                    nsLcmOpOccId: {}
                  }
                },
                metadata: {
                  type: 'structure',
                  required: ['createdAt', 'lastModified'],
                  members: {
                    createdAt: {
                      shape: 'S15'
                    },
                    lastModified: {
                      shape: 'S15'
                    }
                  }
                },
                nsInstanceDescription: {},
                nsInstanceName: {},
                nsState: {},
                nsdId: {},
                nsdInfoId: {},
                tags: {
                  shape: 'S4'
                }
              }
            }
          },
          GetSolNetworkOperation: {
            http: {
              method: 'GET',
              requestUri: '/sol/nslcm/v1/ns_lcm_op_occs/{nsLcmOpOccId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['nsLcmOpOccId'],
              members: {
                nsLcmOpOccId: {
                  location: 'uri',
                  locationName: 'nsLcmOpOccId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                error: {
                  shape: 'S1t'
                },
                id: {},
                lcmOperationType: {},
                metadata: {
                  type: 'structure',
                  required: ['createdAt', 'lastModified'],
                  members: {
                    createdAt: {
                      shape: 'S15'
                    },
                    lastModified: {
                      shape: 'S15'
                    }
                  }
                },
                nsInstanceId: {},
                operationState: {},
                tags: {
                  shape: 'S4'
                },
                tasks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      taskContext: {
                        type: 'map',
                        key: {},
                        value: {}
                      },
                      taskEndTime: {
                        shape: 'S15'
                      },
                      taskErrorDetails: {
                        type: 'structure',
                        members: {
                          cause: {},
                          details: {}
                        }
                      },
                      taskName: {},
                      taskStartTime: {
                        shape: 'S15'
                      },
                      taskStatus: {}
                    }
                  }
                }
              }
            }
          },
          GetSolNetworkPackage: {
            http: {
              method: 'GET',
              requestUri: '/sol/nsd/v1/ns_descriptors/{nsdInfoId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['nsdInfoId'],
              members: {
                nsdInfoId: {
                  location: 'uri',
                  locationName: 'nsdInfoId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'id', 'metadata', 'nsdId', 'nsdName', 'nsdOnboardingState', 'nsdOperationalState', 'nsdUsageState', 'nsdVersion', 'vnfPkgIds'],
              members: {
                arn: {},
                id: {},
                metadata: {
                  type: 'structure',
                  required: ['createdAt', 'lastModified'],
                  members: {
                    createdAt: {
                      shape: 'S15'
                    },
                    lastModified: {
                      shape: 'S15'
                    },
                    nsd: {
                      shape: 'S27'
                    }
                  }
                },
                nsdId: {},
                nsdName: {},
                nsdOnboardingState: {},
                nsdOperationalState: {},
                nsdUsageState: {},
                nsdVersion: {},
                tags: {
                  shape: 'S4'
                },
                vnfPkgIds: {
                  shape: 'S28'
                }
              }
            }
          },
          GetSolNetworkPackageContent: {
            http: {
              method: 'GET',
              requestUri: '/sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd_content',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['accept', 'nsdInfoId'],
              members: {
                accept: {
                  location: 'header',
                  locationName: 'Accept'
                },
                nsdInfoId: {
                  location: 'uri',
                  locationName: 'nsdInfoId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                nsdContent: {
                  type: 'blob'
                }
              },
              payload: 'nsdContent'
            }
          },
          GetSolNetworkPackageDescriptor: {
            http: {
              method: 'GET',
              requestUri: '/sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['nsdInfoId'],
              members: {
                nsdInfoId: {
                  location: 'uri',
                  locationName: 'nsdInfoId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                nsd: {
                  type: 'blob'
                }
              },
              payload: 'nsd'
            }
          },
          InstantiateSolNetworkInstance: {
            http: {
              requestUri: '/sol/nslcm/v1/ns_instances/{nsInstanceId}/instantiate',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['nsInstanceId'],
              members: {
                additionalParamsForNs: {
                  shape: 'S2e'
                },
                dryRun: {
                  location: 'querystring',
                  locationName: 'dry_run',
                  type: 'boolean'
                },
                nsInstanceId: {
                  location: 'uri',
                  locationName: 'nsInstanceId'
                },
                tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['nsLcmOpOccId'],
              members: {
                nsLcmOpOccId: {},
                tags: {
                  shape: 'S4'
                }
              }
            }
          },
          ListSolFunctionInstances: {
            http: {
              method: 'GET',
              requestUri: '/sol/vnflcm/v1/vnf_instances',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'max_results',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextpage_opaque_marker'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                functionInstances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'id', 'instantiationState', 'metadata', 'nsInstanceId', 'vnfPkgId'],
                    members: {
                      arn: {},
                      id: {},
                      instantiatedVnfInfo: {
                        type: 'structure',
                        members: {
                          vnfState: {}
                        }
                      },
                      instantiationState: {},
                      metadata: {
                        type: 'structure',
                        required: ['createdAt', 'lastModified'],
                        members: {
                          createdAt: {
                            shape: 'S15'
                          },
                          lastModified: {
                            shape: 'S15'
                          }
                        }
                      },
                      nsInstanceId: {},
                      vnfPkgId: {},
                      vnfPkgName: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSolFunctionPackages: {
            http: {
              method: 'GET',
              requestUri: '/sol/vnfpkgm/v1/vnf_packages',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'max_results',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextpage_opaque_marker'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['functionPackages'],
              members: {
                functionPackages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'id', 'onboardingState', 'operationalState', 'usageState'],
                    members: {
                      arn: {},
                      id: {},
                      metadata: {
                        type: 'structure',
                        required: ['createdAt', 'lastModified'],
                        members: {
                          createdAt: {
                            shape: 'S15'
                          },
                          lastModified: {
                            shape: 'S15'
                          }
                        }
                      },
                      onboardingState: {},
                      operationalState: {},
                      usageState: {},
                      vnfProductName: {},
                      vnfProvider: {},
                      vnfdId: {},
                      vnfdVersion: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSolNetworkInstances: {
            http: {
              method: 'GET',
              requestUri: '/sol/nslcm/v1/ns_instances',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'max_results',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextpage_opaque_marker'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                networkInstances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'id', 'metadata', 'nsInstanceDescription', 'nsInstanceName', 'nsState', 'nsdId', 'nsdInfoId'],
                    members: {
                      arn: {},
                      id: {},
                      metadata: {
                        type: 'structure',
                        required: ['createdAt', 'lastModified'],
                        members: {
                          createdAt: {
                            shape: 'S15'
                          },
                          lastModified: {
                            shape: 'S15'
                          }
                        }
                      },
                      nsInstanceDescription: {},
                      nsInstanceName: {},
                      nsState: {},
                      nsdId: {},
                      nsdInfoId: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSolNetworkOperations: {
            http: {
              method: 'GET',
              requestUri: '/sol/nslcm/v1/ns_lcm_op_occs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'max_results',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextpage_opaque_marker'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                networkOperations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'id', 'lcmOperationType', 'nsInstanceId', 'operationState'],
                    members: {
                      arn: {},
                      error: {
                        shape: 'S1t'
                      },
                      id: {},
                      lcmOperationType: {},
                      metadata: {
                        type: 'structure',
                        required: ['createdAt', 'lastModified'],
                        members: {
                          createdAt: {
                            shape: 'S15'
                          },
                          lastModified: {
                            shape: 'S15'
                          }
                        }
                      },
                      nsInstanceId: {},
                      operationState: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSolNetworkPackages: {
            http: {
              method: 'GET',
              requestUri: '/sol/nsd/v1/ns_descriptors',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'max_results',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextpage_opaque_marker'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['networkPackages'],
              members: {
                networkPackages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'id', 'metadata', 'nsdOnboardingState', 'nsdOperationalState', 'nsdUsageState'],
                    members: {
                      arn: {},
                      id: {},
                      metadata: {
                        type: 'structure',
                        required: ['createdAt', 'lastModified'],
                        members: {
                          createdAt: {
                            shape: 'S15'
                          },
                          lastModified: {
                            shape: 'S15'
                          }
                        }
                      },
                      nsdDesigner: {},
                      nsdId: {},
                      nsdInvariantId: {},
                      nsdName: {},
                      nsdOnboardingState: {},
                      nsdOperationalState: {},
                      nsdUsageState: {},
                      nsdVersion: {},
                      vnfPkgIds: {
                        shape: 'S28'
                      }
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
              required: ['tags'],
              members: {
                tags: {
                  shape: 'S4'
                }
              }
            }
          },
          PutSolFunctionPackageContent: {
            http: {
              method: 'PUT',
              requestUri: '/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/package_content',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['file', 'vnfPkgId'],
              members: {
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                file: {
                  type: 'blob'
                },
                vnfPkgId: {
                  location: 'uri',
                  locationName: 'vnfPkgId'
                }
              },
              payload: 'file'
            },
            output: {
              type: 'structure',
              required: ['id', 'metadata', 'vnfProductName', 'vnfProvider', 'vnfdId', 'vnfdVersion'],
              members: {
                id: {},
                metadata: {
                  type: 'structure',
                  members: {
                    vnfd: {
                      shape: 'S1a'
                    }
                  }
                },
                vnfProductName: {},
                vnfProvider: {},
                vnfdId: {},
                vnfdVersion: {}
              }
            },
            idempotent: true
          },
          PutSolNetworkPackageContent: {
            http: {
              method: 'PUT',
              requestUri: '/sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd_content',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['file', 'nsdInfoId'],
              members: {
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                file: {
                  type: 'blob'
                },
                nsdInfoId: {
                  location: 'uri',
                  locationName: 'nsdInfoId'
                }
              },
              payload: 'file'
            },
            output: {
              type: 'structure',
              required: ['arn', 'id', 'metadata', 'nsdId', 'nsdName', 'nsdVersion', 'vnfPkgIds'],
              members: {
                arn: {},
                id: {},
                metadata: {
                  type: 'structure',
                  members: {
                    nsd: {
                      shape: 'S27'
                    }
                  }
                },
                nsdId: {},
                nsdName: {},
                nsdVersion: {},
                vnfPkgIds: {
                  shape: 'S28'
                }
              }
            },
            idempotent: true
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
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          TerminateSolNetworkInstance: {
            http: {
              requestUri: '/sol/nslcm/v1/ns_instances/{nsInstanceId}/terminate',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['nsInstanceId'],
              members: {
                nsInstanceId: {
                  location: 'uri',
                  locationName: 'nsInstanceId'
                },
                tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nsLcmOpOccId: {},
                tags: {
                  shape: 'S4'
                }
              }
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
          UpdateSolFunctionPackage: {
            http: {
              method: 'PATCH',
              requestUri: '/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['operationalState', 'vnfPkgId'],
              members: {
                operationalState: {},
                vnfPkgId: {
                  location: 'uri',
                  locationName: 'vnfPkgId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['operationalState'],
              members: {
                operationalState: {}
              }
            }
          },
          UpdateSolNetworkInstance: {
            http: {
              requestUri: '/sol/nslcm/v1/ns_instances/{nsInstanceId}/update',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['nsInstanceId', 'updateType'],
              members: {
                modifyVnfInfoData: {
                  type: 'structure',
                  required: ['vnfConfigurableProperties', 'vnfInstanceId'],
                  members: {
                    vnfConfigurableProperties: {
                      shape: 'S2e'
                    },
                    vnfInstanceId: {}
                  }
                },
                nsInstanceId: {
                  location: 'uri',
                  locationName: 'nsInstanceId'
                },
                tags: {
                  shape: 'S4'
                },
                updateType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                nsLcmOpOccId: {},
                tags: {
                  shape: 'S4'
                }
              }
            }
          },
          UpdateSolNetworkPackage: {
            http: {
              method: 'PATCH',
              requestUri: '/sol/nsd/v1/ns_descriptors/{nsdInfoId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['nsdInfoId', 'nsdOperationalState'],
              members: {
                nsdInfoId: {
                  location: 'uri',
                  locationName: 'nsdInfoId'
                },
                nsdOperationalState: {}
              }
            },
            output: {
              type: 'structure',
              required: ['nsdOperationalState'],
              members: {
                nsdOperationalState: {}
              }
            }
          },
          ValidateSolFunctionPackageContent: {
            http: {
              method: 'PUT',
              requestUri: '/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/package_content/validate',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['file', 'vnfPkgId'],
              members: {
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                file: {
                  type: 'blob'
                },
                vnfPkgId: {
                  location: 'uri',
                  locationName: 'vnfPkgId'
                }
              },
              payload: 'file'
            },
            output: {
              type: 'structure',
              required: ['id', 'metadata', 'vnfProductName', 'vnfProvider', 'vnfdId', 'vnfdVersion'],
              members: {
                id: {},
                metadata: {
                  type: 'structure',
                  members: {
                    vnfd: {
                      shape: 'S1a'
                    }
                  }
                },
                vnfProductName: {},
                vnfProvider: {},
                vnfdId: {},
                vnfdVersion: {}
              }
            },
            idempotent: true
          },
          ValidateSolNetworkPackageContent: {
            http: {
              method: 'PUT',
              requestUri: '/sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd_content/validate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['file', 'nsdInfoId'],
              members: {
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                file: {
                  type: 'blob'
                },
                nsdInfoId: {
                  location: 'uri',
                  locationName: 'nsdInfoId'
                }
              },
              payload: 'file'
            },
            output: {
              type: 'structure',
              required: ['arn', 'id', 'metadata', 'nsdId', 'nsdName', 'nsdVersion', 'vnfPkgIds'],
              members: {
                arn: {},
                id: {},
                metadata: {
                  type: 'structure',
                  members: {
                    nsd: {
                      shape: 'S27'
                    }
                  }
                },
                nsdId: {},
                nsdName: {},
                nsdVersion: {},
                vnfPkgIds: {
                  shape: 'S28'
                }
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S4: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          S15: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S1a: {
            type: 'structure',
            members: {
              overrides: {
                shape: 'S1b'
              }
            }
          },
          S1b: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                defaultValue: {},
                name: {}
              }
            }
          },
          S1t: {
            type: 'structure',
            required: ['detail'],
            members: {
              detail: {},
              title: {}
            }
          },
          S27: {
            type: 'structure',
            members: {
              overrides: {
                shape: 'S1b'
              }
            }
          },
          S28: {
            type: 'list',
            member: {}
          },
          S2e: {
            type: 'structure',
            members: {},
            document: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=0f8daca29710bde2656beae48268c338705608d2.js.map