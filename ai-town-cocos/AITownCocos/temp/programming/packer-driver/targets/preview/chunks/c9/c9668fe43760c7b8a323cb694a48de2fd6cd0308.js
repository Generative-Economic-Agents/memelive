System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2018-11-07',
          endpointPrefix: 'mediapackage-vod',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'MediaPackage Vod',
          serviceFullName: 'AWS Elemental MediaPackage VOD',
          serviceId: 'MediaPackage Vod',
          signatureVersion: 'v4',
          signingName: 'mediapackage-vod',
          uid: 'mediapackage-vod-2018-11-07'
        },
        operations: {
          ConfigureLogs: {
            http: {
              method: 'PUT',
              requestUri: '/packaging_groups/{id}/configure_logs',
              responseCode: 200
            },
            input: {
              members: {
                EgressAccessLogs: {
                  locationName: 'egressAccessLogs',
                  shape: 'S2'
                },
                Id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['Id'],
              type: 'structure'
            },
            output: {
              members: {
                Arn: {
                  locationName: 'arn'
                },
                Authorization: {
                  locationName: 'authorization',
                  shape: 'S5'
                },
                CreatedAt: {
                  locationName: 'createdAt'
                },
                DomainName: {
                  locationName: 'domainName'
                },
                EgressAccessLogs: {
                  locationName: 'egressAccessLogs',
                  shape: 'S2'
                },
                Id: {
                  locationName: 'id'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'S6'
                }
              },
              type: 'structure'
            }
          },
          CreateAsset: {
            http: {
              requestUri: '/assets',
              responseCode: 200
            },
            input: {
              members: {
                Id: {
                  locationName: 'id'
                },
                PackagingGroupId: {
                  locationName: 'packagingGroupId'
                },
                ResourceId: {
                  locationName: 'resourceId'
                },
                SourceArn: {
                  locationName: 'sourceArn'
                },
                SourceRoleArn: {
                  locationName: 'sourceRoleArn'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'S6'
                }
              },
              required: ['SourceArn', 'Id', 'PackagingGroupId', 'SourceRoleArn'],
              type: 'structure'
            },
            output: {
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CreatedAt: {
                  locationName: 'createdAt'
                },
                EgressEndpoints: {
                  locationName: 'egressEndpoints',
                  shape: 'S9'
                },
                Id: {
                  locationName: 'id'
                },
                PackagingGroupId: {
                  locationName: 'packagingGroupId'
                },
                ResourceId: {
                  locationName: 'resourceId'
                },
                SourceArn: {
                  locationName: 'sourceArn'
                },
                SourceRoleArn: {
                  locationName: 'sourceRoleArn'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'S6'
                }
              },
              type: 'structure'
            }
          },
          CreatePackagingConfiguration: {
            http: {
              requestUri: '/packaging_configurations',
              responseCode: 200
            },
            input: {
              members: {
                CmafPackage: {
                  locationName: 'cmafPackage',
                  shape: 'Sc'
                },
                DashPackage: {
                  locationName: 'dashPackage',
                  shape: 'Sq'
                },
                HlsPackage: {
                  locationName: 'hlsPackage',
                  shape: 'S10'
                },
                Id: {
                  locationName: 'id'
                },
                MssPackage: {
                  locationName: 'mssPackage',
                  shape: 'S13'
                },
                PackagingGroupId: {
                  locationName: 'packagingGroupId'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'S6'
                }
              },
              required: ['Id', 'PackagingGroupId'],
              type: 'structure'
            },
            output: {
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CmafPackage: {
                  locationName: 'cmafPackage',
                  shape: 'Sc'
                },
                CreatedAt: {
                  locationName: 'createdAt'
                },
                DashPackage: {
                  locationName: 'dashPackage',
                  shape: 'Sq'
                },
                HlsPackage: {
                  locationName: 'hlsPackage',
                  shape: 'S10'
                },
                Id: {
                  locationName: 'id'
                },
                MssPackage: {
                  locationName: 'mssPackage',
                  shape: 'S13'
                },
                PackagingGroupId: {
                  locationName: 'packagingGroupId'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'S6'
                }
              },
              type: 'structure'
            }
          },
          CreatePackagingGroup: {
            http: {
              requestUri: '/packaging_groups',
              responseCode: 200
            },
            input: {
              members: {
                Authorization: {
                  locationName: 'authorization',
                  shape: 'S5'
                },
                EgressAccessLogs: {
                  locationName: 'egressAccessLogs',
                  shape: 'S2'
                },
                Id: {
                  locationName: 'id'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'S6'
                }
              },
              required: ['Id'],
              type: 'structure'
            },
            output: {
              members: {
                Arn: {
                  locationName: 'arn'
                },
                Authorization: {
                  locationName: 'authorization',
                  shape: 'S5'
                },
                CreatedAt: {
                  locationName: 'createdAt'
                },
                DomainName: {
                  locationName: 'domainName'
                },
                EgressAccessLogs: {
                  locationName: 'egressAccessLogs',
                  shape: 'S2'
                },
                Id: {
                  locationName: 'id'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'S6'
                }
              },
              type: 'structure'
            }
          },
          DeleteAsset: {
            http: {
              method: 'DELETE',
              requestUri: '/assets/{id}',
              responseCode: 202
            },
            input: {
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['Id'],
              type: 'structure'
            },
            output: {
              members: {},
              type: 'structure'
            }
          },
          DeletePackagingConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/packaging_configurations/{id}',
              responseCode: 202
            },
            input: {
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['Id'],
              type: 'structure'
            },
            output: {
              members: {},
              type: 'structure'
            }
          },
          DeletePackagingGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/packaging_groups/{id}',
              responseCode: 202
            },
            input: {
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['Id'],
              type: 'structure'
            },
            output: {
              members: {},
              type: 'structure'
            }
          },
          DescribeAsset: {
            http: {
              method: 'GET',
              requestUri: '/assets/{id}',
              responseCode: 200
            },
            input: {
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['Id'],
              type: 'structure'
            },
            output: {
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CreatedAt: {
                  locationName: 'createdAt'
                },
                EgressEndpoints: {
                  locationName: 'egressEndpoints',
                  shape: 'S9'
                },
                Id: {
                  locationName: 'id'
                },
                PackagingGroupId: {
                  locationName: 'packagingGroupId'
                },
                ResourceId: {
                  locationName: 'resourceId'
                },
                SourceArn: {
                  locationName: 'sourceArn'
                },
                SourceRoleArn: {
                  locationName: 'sourceRoleArn'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'S6'
                }
              },
              type: 'structure'
            }
          },
          DescribePackagingConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/packaging_configurations/{id}',
              responseCode: 200
            },
            input: {
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['Id'],
              type: 'structure'
            },
            output: {
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CmafPackage: {
                  locationName: 'cmafPackage',
                  shape: 'Sc'
                },
                CreatedAt: {
                  locationName: 'createdAt'
                },
                DashPackage: {
                  locationName: 'dashPackage',
                  shape: 'Sq'
                },
                HlsPackage: {
                  locationName: 'hlsPackage',
                  shape: 'S10'
                },
                Id: {
                  locationName: 'id'
                },
                MssPackage: {
                  locationName: 'mssPackage',
                  shape: 'S13'
                },
                PackagingGroupId: {
                  locationName: 'packagingGroupId'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'S6'
                }
              },
              type: 'structure'
            }
          },
          DescribePackagingGroup: {
            http: {
              method: 'GET',
              requestUri: '/packaging_groups/{id}',
              responseCode: 200
            },
            input: {
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['Id'],
              type: 'structure'
            },
            output: {
              members: {
                ApproximateAssetCount: {
                  locationName: 'approximateAssetCount',
                  type: 'integer'
                },
                Arn: {
                  locationName: 'arn'
                },
                Authorization: {
                  locationName: 'authorization',
                  shape: 'S5'
                },
                CreatedAt: {
                  locationName: 'createdAt'
                },
                DomainName: {
                  locationName: 'domainName'
                },
                EgressAccessLogs: {
                  locationName: 'egressAccessLogs',
                  shape: 'S2'
                },
                Id: {
                  locationName: 'id'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'S6'
                }
              },
              type: 'structure'
            }
          },
          ListAssets: {
            http: {
              method: 'GET',
              requestUri: '/assets',
              responseCode: 200
            },
            input: {
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                PackagingGroupId: {
                  location: 'querystring',
                  locationName: 'packagingGroupId'
                }
              },
              type: 'structure'
            },
            output: {
              members: {
                Assets: {
                  locationName: 'assets',
                  member: {
                    members: {
                      Arn: {
                        locationName: 'arn'
                      },
                      CreatedAt: {
                        locationName: 'createdAt'
                      },
                      Id: {
                        locationName: 'id'
                      },
                      PackagingGroupId: {
                        locationName: 'packagingGroupId'
                      },
                      ResourceId: {
                        locationName: 'resourceId'
                      },
                      SourceArn: {
                        locationName: 'sourceArn'
                      },
                      SourceRoleArn: {
                        locationName: 'sourceRoleArn'
                      },
                      Tags: {
                        locationName: 'tags',
                        shape: 'S6'
                      }
                    },
                    type: 'structure'
                  },
                  type: 'list'
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              },
              type: 'structure'
            }
          },
          ListPackagingConfigurations: {
            http: {
              method: 'GET',
              requestUri: '/packaging_configurations',
              responseCode: 200
            },
            input: {
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                PackagingGroupId: {
                  location: 'querystring',
                  locationName: 'packagingGroupId'
                }
              },
              type: 'structure'
            },
            output: {
              members: {
                NextToken: {
                  locationName: 'nextToken'
                },
                PackagingConfigurations: {
                  locationName: 'packagingConfigurations',
                  member: {
                    members: {
                      Arn: {
                        locationName: 'arn'
                      },
                      CmafPackage: {
                        locationName: 'cmafPackage',
                        shape: 'Sc'
                      },
                      CreatedAt: {
                        locationName: 'createdAt'
                      },
                      DashPackage: {
                        locationName: 'dashPackage',
                        shape: 'Sq'
                      },
                      HlsPackage: {
                        locationName: 'hlsPackage',
                        shape: 'S10'
                      },
                      Id: {
                        locationName: 'id'
                      },
                      MssPackage: {
                        locationName: 'mssPackage',
                        shape: 'S13'
                      },
                      PackagingGroupId: {
                        locationName: 'packagingGroupId'
                      },
                      Tags: {
                        locationName: 'tags',
                        shape: 'S6'
                      }
                    },
                    type: 'structure'
                  },
                  type: 'list'
                }
              },
              type: 'structure'
            }
          },
          ListPackagingGroups: {
            http: {
              method: 'GET',
              requestUri: '/packaging_groups',
              responseCode: 200
            },
            input: {
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              },
              type: 'structure'
            },
            output: {
              members: {
                NextToken: {
                  locationName: 'nextToken'
                },
                PackagingGroups: {
                  locationName: 'packagingGroups',
                  member: {
                    members: {
                      ApproximateAssetCount: {
                        locationName: 'approximateAssetCount',
                        type: 'integer'
                      },
                      Arn: {
                        locationName: 'arn'
                      },
                      Authorization: {
                        locationName: 'authorization',
                        shape: 'S5'
                      },
                      CreatedAt: {
                        locationName: 'createdAt'
                      },
                      DomainName: {
                        locationName: 'domainName'
                      },
                      EgressAccessLogs: {
                        locationName: 'egressAccessLogs',
                        shape: 'S2'
                      },
                      Id: {
                        locationName: 'id'
                      },
                      Tags: {
                        locationName: 'tags',
                        shape: 'S6'
                      }
                    },
                    type: 'structure'
                  },
                  type: 'list'
                }
              },
              type: 'structure'
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resource-arn}',
              responseCode: 200
            },
            input: {
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                }
              },
              required: ['ResourceArn'],
              type: 'structure'
            },
            output: {
              members: {
                Tags: {
                  locationName: 'tags',
                  shape: 'S21'
                }
              },
              type: 'structure'
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resource-arn}',
              responseCode: 204
            },
            input: {
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'S21'
                }
              },
              required: ['ResourceArn', 'Tags'],
              type: 'structure'
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resource-arn}',
              responseCode: 204
            },
            input: {
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                },
                TagKeys: {
                  location: 'querystring',
                  locationName: 'tagKeys',
                  shape: 'Si'
                }
              },
              required: ['TagKeys', 'ResourceArn'],
              type: 'structure'
            }
          },
          UpdatePackagingGroup: {
            http: {
              method: 'PUT',
              requestUri: '/packaging_groups/{id}',
              responseCode: 200
            },
            input: {
              members: {
                Authorization: {
                  locationName: 'authorization',
                  shape: 'S5'
                },
                Id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['Id'],
              type: 'structure'
            },
            output: {
              members: {
                ApproximateAssetCount: {
                  locationName: 'approximateAssetCount',
                  type: 'integer'
                },
                Arn: {
                  locationName: 'arn'
                },
                Authorization: {
                  locationName: 'authorization',
                  shape: 'S5'
                },
                CreatedAt: {
                  locationName: 'createdAt'
                },
                DomainName: {
                  locationName: 'domainName'
                },
                EgressAccessLogs: {
                  locationName: 'egressAccessLogs',
                  shape: 'S2'
                },
                Id: {
                  locationName: 'id'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'S6'
                }
              },
              type: 'structure'
            }
          }
        },
        shapes: {
          S2: {
            members: {
              LogGroupName: {
                locationName: 'logGroupName'
              }
            },
            type: 'structure'
          },
          S5: {
            members: {
              CdnIdentifierSecret: {
                locationName: 'cdnIdentifierSecret'
              },
              SecretsRoleArn: {
                locationName: 'secretsRoleArn'
              }
            },
            required: ['SecretsRoleArn', 'CdnIdentifierSecret'],
            type: 'structure'
          },
          S6: {
            key: {},
            type: 'map',
            value: {}
          },
          S9: {
            member: {
              members: {
                PackagingConfigurationId: {
                  locationName: 'packagingConfigurationId'
                },
                Status: {
                  locationName: 'status'
                },
                Url: {
                  locationName: 'url'
                }
              },
              type: 'structure'
            },
            type: 'list'
          },
          Sc: {
            members: {
              Encryption: {
                locationName: 'encryption',
                members: {
                  ConstantInitializationVector: {
                    locationName: 'constantInitializationVector'
                  },
                  SpekeKeyProvider: {
                    locationName: 'spekeKeyProvider',
                    shape: 'Se'
                  }
                },
                required: ['SpekeKeyProvider'],
                type: 'structure'
              },
              HlsManifests: {
                locationName: 'hlsManifests',
                shape: 'Sj'
              },
              IncludeEncoderConfigurationInSegments: {
                locationName: 'includeEncoderConfigurationInSegments',
                type: 'boolean'
              },
              SegmentDurationSeconds: {
                locationName: 'segmentDurationSeconds',
                type: 'integer'
              }
            },
            required: ['HlsManifests'],
            type: 'structure'
          },
          Se: {
            members: {
              EncryptionContractConfiguration: {
                locationName: 'encryptionContractConfiguration',
                members: {
                  PresetSpeke20Audio: {
                    locationName: 'presetSpeke20Audio'
                  },
                  PresetSpeke20Video: {
                    locationName: 'presetSpeke20Video'
                  }
                },
                required: ['PresetSpeke20Audio', 'PresetSpeke20Video'],
                type: 'structure'
              },
              RoleArn: {
                locationName: 'roleArn'
              },
              SystemIds: {
                locationName: 'systemIds',
                shape: 'Si'
              },
              Url: {
                locationName: 'url'
              }
            },
            required: ['SystemIds', 'Url', 'RoleArn'],
            type: 'structure'
          },
          Si: {
            member: {},
            type: 'list'
          },
          Sj: {
            member: {
              members: {
                AdMarkers: {
                  locationName: 'adMarkers'
                },
                IncludeIframeOnlyStream: {
                  locationName: 'includeIframeOnlyStream',
                  type: 'boolean'
                },
                ManifestName: {
                  locationName: 'manifestName'
                },
                ProgramDateTimeIntervalSeconds: {
                  locationName: 'programDateTimeIntervalSeconds',
                  type: 'integer'
                },
                RepeatExtXKey: {
                  locationName: 'repeatExtXKey',
                  type: 'boolean'
                },
                StreamSelection: {
                  locationName: 'streamSelection',
                  shape: 'So'
                }
              },
              type: 'structure'
            },
            type: 'list'
          },
          So: {
            members: {
              MaxVideoBitsPerSecond: {
                locationName: 'maxVideoBitsPerSecond',
                type: 'integer'
              },
              MinVideoBitsPerSecond: {
                locationName: 'minVideoBitsPerSecond',
                type: 'integer'
              },
              StreamOrder: {
                locationName: 'streamOrder'
              }
            },
            type: 'structure'
          },
          Sq: {
            members: {
              DashManifests: {
                locationName: 'dashManifests',
                member: {
                  members: {
                    ManifestLayout: {
                      locationName: 'manifestLayout'
                    },
                    ManifestName: {
                      locationName: 'manifestName'
                    },
                    MinBufferTimeSeconds: {
                      locationName: 'minBufferTimeSeconds',
                      type: 'integer'
                    },
                    Profile: {
                      locationName: 'profile'
                    },
                    ScteMarkersSource: {
                      locationName: 'scteMarkersSource'
                    },
                    StreamSelection: {
                      locationName: 'streamSelection',
                      shape: 'So'
                    }
                  },
                  type: 'structure'
                },
                type: 'list'
              },
              Encryption: {
                locationName: 'encryption',
                members: {
                  SpekeKeyProvider: {
                    locationName: 'spekeKeyProvider',
                    shape: 'Se'
                  }
                },
                required: ['SpekeKeyProvider'],
                type: 'structure'
              },
              IncludeEncoderConfigurationInSegments: {
                locationName: 'includeEncoderConfigurationInSegments',
                type: 'boolean'
              },
              IncludeIframeOnlyStream: {
                locationName: 'includeIframeOnlyStream',
                type: 'boolean'
              },
              PeriodTriggers: {
                locationName: 'periodTriggers',
                member: {},
                type: 'list'
              },
              SegmentDurationSeconds: {
                locationName: 'segmentDurationSeconds',
                type: 'integer'
              },
              SegmentTemplateFormat: {
                locationName: 'segmentTemplateFormat'
              }
            },
            required: ['DashManifests'],
            type: 'structure'
          },
          S10: {
            members: {
              Encryption: {
                locationName: 'encryption',
                members: {
                  ConstantInitializationVector: {
                    locationName: 'constantInitializationVector'
                  },
                  EncryptionMethod: {
                    locationName: 'encryptionMethod'
                  },
                  SpekeKeyProvider: {
                    locationName: 'spekeKeyProvider',
                    shape: 'Se'
                  }
                },
                required: ['SpekeKeyProvider'],
                type: 'structure'
              },
              HlsManifests: {
                locationName: 'hlsManifests',
                shape: 'Sj'
              },
              IncludeDvbSubtitles: {
                locationName: 'includeDvbSubtitles',
                type: 'boolean'
              },
              SegmentDurationSeconds: {
                locationName: 'segmentDurationSeconds',
                type: 'integer'
              },
              UseAudioRenditionGroup: {
                locationName: 'useAudioRenditionGroup',
                type: 'boolean'
              }
            },
            required: ['HlsManifests'],
            type: 'structure'
          },
          S13: {
            members: {
              Encryption: {
                locationName: 'encryption',
                members: {
                  SpekeKeyProvider: {
                    locationName: 'spekeKeyProvider',
                    shape: 'Se'
                  }
                },
                required: ['SpekeKeyProvider'],
                type: 'structure'
              },
              MssManifests: {
                locationName: 'mssManifests',
                member: {
                  members: {
                    ManifestName: {
                      locationName: 'manifestName'
                    },
                    StreamSelection: {
                      locationName: 'streamSelection',
                      shape: 'So'
                    }
                  },
                  type: 'structure'
                },
                type: 'list'
              },
              SegmentDurationSeconds: {
                locationName: 'segmentDurationSeconds',
                type: 'integer'
              }
            },
            required: ['MssManifests'],
            type: 'structure'
          },
          S21: {
            key: {},
            type: 'map',
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c9668fe43760c7b8a323cb694a48de2fd6cd0308.js.map