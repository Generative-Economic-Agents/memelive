System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-05-27',
          endpointPrefix: 'sagemaker-geospatial',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon SageMaker geospatial capabilities',
          serviceId: 'SageMaker Geospatial',
          signatureVersion: 'v4',
          signingName: 'sagemaker-geospatial',
          uid: 'sagemaker-geospatial-2020-05-27'
        },
        operations: {
          DeleteEarthObservationJob: {
            http: {
              method: 'DELETE',
              requestUri: '/earth-observation-jobs/{Arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {
                  location: 'uri',
                  locationName: 'Arn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteVectorEnrichmentJob: {
            http: {
              method: 'DELETE',
              requestUri: '/vector-enrichment-jobs/{Arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {
                  location: 'uri',
                  locationName: 'Arn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          ExportEarthObservationJob: {
            http: {
              requestUri: '/export-earth-observation-job',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn', 'ExecutionRoleArn', 'OutputConfig'],
              members: {
                Arn: {},
                ClientToken: {
                  idempotencyToken: true
                },
                ExecutionRoleArn: {},
                ExportSourceImages: {
                  type: 'boolean'
                },
                OutputConfig: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Arn', 'CreationTime', 'ExecutionRoleArn', 'ExportStatus', 'OutputConfig'],
              members: {
                Arn: {},
                CreationTime: {
                  shape: 'Sg'
                },
                ExecutionRoleArn: {},
                ExportSourceImages: {
                  type: 'boolean'
                },
                ExportStatus: {},
                OutputConfig: {
                  shape: 'Sb'
                }
              }
            }
          },
          ExportVectorEnrichmentJob: {
            http: {
              requestUri: '/export-vector-enrichment-jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn', 'ExecutionRoleArn', 'OutputConfig'],
              members: {
                Arn: {},
                ClientToken: {
                  idempotencyToken: true
                },
                ExecutionRoleArn: {},
                OutputConfig: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Arn', 'CreationTime', 'ExecutionRoleArn', 'ExportStatus', 'OutputConfig'],
              members: {
                Arn: {},
                CreationTime: {
                  shape: 'Sg'
                },
                ExecutionRoleArn: {},
                ExportStatus: {},
                OutputConfig: {
                  shape: 'Sk'
                }
              }
            }
          },
          GetEarthObservationJob: {
            http: {
              method: 'GET',
              requestUri: '/earth-observation-jobs/{Arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {
                  location: 'uri',
                  locationName: 'Arn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Arn', 'CreationTime', 'DurationInSeconds', 'InputConfig', 'JobConfig', 'Name', 'Status'],
              members: {
                Arn: {},
                CreationTime: {
                  shape: 'Sg'
                },
                DurationInSeconds: {
                  type: 'integer'
                },
                ErrorDetails: {
                  type: 'structure',
                  members: {
                    Message: {},
                    Type: {}
                  }
                },
                ExecutionRoleArn: {},
                ExportErrorDetails: {
                  type: 'structure',
                  members: {
                    ExportResults: {
                      shape: 'Sv'
                    },
                    ExportSourceImages: {
                      shape: 'Sv'
                    }
                  }
                },
                ExportStatus: {},
                InputConfig: {
                  shape: 'Sx'
                },
                JobConfig: {
                  shape: 'S1n'
                },
                KmsKeyId: {},
                Name: {},
                OutputBands: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['BandName', 'OutputDataType'],
                    members: {
                      BandName: {},
                      OutputDataType: {}
                    }
                  }
                },
                Status: {},
                Tags: {
                  shape: 'S2i'
                }
              }
            }
          },
          GetRasterDataCollection: {
            http: {
              method: 'GET',
              requestUri: '/raster-data-collection/{Arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {
                  location: 'uri',
                  locationName: 'Arn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Arn', 'Description', 'DescriptionPageUrl', 'ImageSourceBands', 'Name', 'SupportedFilters', 'Type'],
              members: {
                Arn: {},
                Description: {},
                DescriptionPageUrl: {},
                ImageSourceBands: {
                  type: 'list',
                  member: {}
                },
                Name: {},
                SupportedFilters: {
                  shape: 'S2m'
                },
                Tags: {
                  shape: 'S2i'
                },
                Type: {}
              }
            }
          },
          GetTile: {
            http: {
              method: 'GET',
              requestUri: '/tile/{z}/{x}/{y}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn', 'ImageAssets', 'Target', 'x', 'y', 'z'],
              members: {
                Arn: {
                  location: 'querystring',
                  locationName: 'Arn'
                },
                ExecutionRoleArn: {
                  location: 'querystring',
                  locationName: 'ExecutionRoleArn'
                },
                ImageAssets: {
                  shape: 'S1t',
                  location: 'querystring',
                  locationName: 'ImageAssets'
                },
                ImageMask: {
                  location: 'querystring',
                  locationName: 'ImageMask',
                  type: 'boolean'
                },
                OutputDataType: {
                  location: 'querystring',
                  locationName: 'OutputDataType'
                },
                OutputFormat: {
                  location: 'querystring',
                  locationName: 'OutputFormat'
                },
                PropertyFilters: {
                  location: 'querystring',
                  locationName: 'PropertyFilters'
                },
                Target: {
                  location: 'querystring',
                  locationName: 'Target'
                },
                TimeRangeFilter: {
                  location: 'querystring',
                  locationName: 'TimeRangeFilter'
                },
                x: {
                  location: 'uri',
                  locationName: 'x',
                  type: 'integer'
                },
                y: {
                  location: 'uri',
                  locationName: 'y',
                  type: 'integer'
                },
                z: {
                  location: 'uri',
                  locationName: 'z',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BinaryFile: {
                  type: 'blob',
                  streaming: true
                }
              },
              payload: 'BinaryFile'
            }
          },
          GetVectorEnrichmentJob: {
            http: {
              method: 'GET',
              requestUri: '/vector-enrichment-jobs/{Arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {
                  location: 'uri',
                  locationName: 'Arn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Arn', 'CreationTime', 'DurationInSeconds', 'ExecutionRoleArn', 'InputConfig', 'JobConfig', 'Name', 'Status', 'Type'],
              members: {
                Arn: {},
                CreationTime: {
                  shape: 'Sg'
                },
                DurationInSeconds: {
                  type: 'integer'
                },
                ErrorDetails: {
                  type: 'structure',
                  members: {
                    ErrorMessage: {},
                    ErrorType: {}
                  }
                },
                ExecutionRoleArn: {},
                ExportErrorDetails: {
                  type: 'structure',
                  members: {
                    Message: {},
                    Type: {}
                  }
                },
                ExportStatus: {},
                InputConfig: {
                  shape: 'S2z'
                },
                JobConfig: {
                  shape: 'S32'
                },
                KmsKeyId: {},
                Name: {},
                Status: {},
                Tags: {
                  shape: 'S2i'
                },
                Type: {}
              }
            }
          },
          ListEarthObservationJobs: {
            http: {
              requestUri: '/list-earth-observation-jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {
                  shape: 'S39'
                },
                SortBy: {},
                SortOrder: {},
                StatusEquals: {}
              }
            },
            output: {
              type: 'structure',
              required: ['EarthObservationJobSummaries'],
              members: {
                EarthObservationJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn', 'CreationTime', 'DurationInSeconds', 'Name', 'OperationType', 'Status'],
                    members: {
                      Arn: {},
                      CreationTime: {
                        shape: 'Sg'
                      },
                      DurationInSeconds: {
                        type: 'integer'
                      },
                      Name: {},
                      OperationType: {},
                      Status: {},
                      Tags: {
                        shape: 'S2i'
                      }
                    }
                  }
                },
                NextToken: {
                  shape: 'S39'
                }
              }
            }
          },
          ListRasterDataCollections: {
            http: {
              method: 'GET',
              requestUri: '/raster-data-collections',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  shape: 'S39',
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RasterDataCollectionSummaries'],
              members: {
                NextToken: {
                  shape: 'S39'
                },
                RasterDataCollectionSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn', 'Description', 'Name', 'SupportedFilters', 'Type'],
                    members: {
                      Arn: {},
                      Description: {},
                      DescriptionPageUrl: {},
                      Name: {},
                      SupportedFilters: {
                        shape: 'S2m'
                      },
                      Tags: {
                        shape: 'S2i'
                      },
                      Type: {}
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S2i'
                }
              }
            }
          },
          ListVectorEnrichmentJobs: {
            http: {
              requestUri: '/list-vector-enrichment-jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {
                  shape: 'S39'
                },
                SortBy: {},
                SortOrder: {},
                StatusEquals: {}
              }
            },
            output: {
              type: 'structure',
              required: ['VectorEnrichmentJobSummaries'],
              members: {
                NextToken: {
                  shape: 'S39'
                },
                VectorEnrichmentJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn', 'CreationTime', 'DurationInSeconds', 'Name', 'Status', 'Type'],
                    members: {
                      Arn: {},
                      CreationTime: {
                        shape: 'Sg'
                      },
                      DurationInSeconds: {
                        type: 'integer'
                      },
                      Name: {},
                      Status: {},
                      Tags: {
                        shape: 'S2i'
                      },
                      Type: {}
                    }
                  }
                }
              }
            }
          },
          SearchRasterDataCollection: {
            http: {
              requestUri: '/search-raster-data-collection',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn', 'RasterDataCollectionQuery'],
              members: {
                Arn: {},
                NextToken: {
                  shape: 'S39'
                },
                RasterDataCollectionQuery: {
                  type: 'structure',
                  required: ['TimeRangeFilter'],
                  members: {
                    AreaOfInterest: {
                      shape: 'Sz'
                    },
                    BandFilter: {
                      shape: 'S1t'
                    },
                    PropertyFilters: {
                      shape: 'S18'
                    },
                    TimeRangeFilter: {
                      shape: 'S3t'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ApproximateResultCount'],
              members: {
                ApproximateResultCount: {
                  type: 'integer'
                },
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['DateTime', 'Geometry', 'Id'],
                    members: {
                      Assets: {
                        type: 'map',
                        key: {},
                        value: {
                          type: 'structure',
                          members: {
                            Href: {}
                          }
                        }
                      },
                      DateTime: {
                        type: 'timestamp'
                      },
                      Geometry: {
                        type: 'structure',
                        required: ['Coordinates', 'Type'],
                        members: {
                          Coordinates: {
                            shape: 'S13'
                          },
                          Type: {}
                        }
                      },
                      Id: {},
                      Properties: {
                        type: 'structure',
                        members: {
                          EoCloudCover: {
                            type: 'float'
                          },
                          LandsatCloudCoverLand: {
                            type: 'float'
                          },
                          Platform: {},
                          ViewOffNadir: {
                            type: 'float'
                          },
                          ViewSunAzimuth: {
                            type: 'float'
                          },
                          ViewSunElevation: {
                            type: 'float'
                          }
                        }
                      }
                    }
                  }
                },
                NextToken: {
                  shape: 'S39'
                }
              }
            }
          },
          StartEarthObservationJob: {
            http: {
              requestUri: '/earth-observation-jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ExecutionRoleArn', 'InputConfig', 'JobConfig', 'Name'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                ExecutionRoleArn: {},
                InputConfig: {
                  type: 'structure',
                  members: {
                    PreviousEarthObservationJobArn: {},
                    RasterDataCollectionQuery: {
                      type: 'structure',
                      required: ['RasterDataCollectionArn', 'TimeRangeFilter'],
                      members: {
                        AreaOfInterest: {
                          shape: 'Sz'
                        },
                        PropertyFilters: {
                          shape: 'S18'
                        },
                        RasterDataCollectionArn: {},
                        TimeRangeFilter: {
                          shape: 'S3t'
                        }
                      }
                    }
                  }
                },
                JobConfig: {
                  shape: 'S1n'
                },
                KmsKeyId: {},
                Name: {},
                Tags: {
                  shape: 'S2i'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Arn', 'CreationTime', 'DurationInSeconds', 'ExecutionRoleArn', 'JobConfig', 'Name', 'Status'],
              members: {
                Arn: {},
                CreationTime: {
                  shape: 'Sg'
                },
                DurationInSeconds: {
                  type: 'integer'
                },
                ExecutionRoleArn: {},
                InputConfig: {
                  shape: 'Sx'
                },
                JobConfig: {
                  shape: 'S1n'
                },
                KmsKeyId: {},
                Name: {},
                Status: {},
                Tags: {
                  shape: 'S2i'
                }
              }
            },
            idempotent: true
          },
          StartVectorEnrichmentJob: {
            http: {
              requestUri: '/vector-enrichment-jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ExecutionRoleArn', 'InputConfig', 'JobConfig', 'Name'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                ExecutionRoleArn: {},
                InputConfig: {
                  shape: 'S2z'
                },
                JobConfig: {
                  shape: 'S32'
                },
                KmsKeyId: {},
                Name: {},
                Tags: {
                  shape: 'S2i'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Arn', 'CreationTime', 'DurationInSeconds', 'ExecutionRoleArn', 'InputConfig', 'JobConfig', 'Name', 'Status', 'Type'],
              members: {
                Arn: {},
                CreationTime: {
                  shape: 'Sg'
                },
                DurationInSeconds: {
                  type: 'integer'
                },
                ExecutionRoleArn: {},
                InputConfig: {
                  shape: 'S2z'
                },
                JobConfig: {
                  shape: 'S32'
                },
                KmsKeyId: {},
                Name: {},
                Status: {},
                Tags: {
                  shape: 'S2i'
                },
                Type: {}
              }
            },
            idempotent: true
          },
          StopEarthObservationJob: {
            http: {
              requestUri: '/earth-observation-jobs/stop',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StopVectorEnrichmentJob: {
            http: {
              requestUri: '/vector-enrichment-jobs/stop',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          TagResource: {
            http: {
              method: 'PUT',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                Tags: {
                  shape: 'S2i'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                TagKeys: {
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
          Sb: {
            type: 'structure',
            required: ['S3Data'],
            members: {
              S3Data: {
                type: 'structure',
                required: ['S3Uri'],
                members: {
                  KmsKeyId: {},
                  S3Uri: {}
                }
              }
            }
          },
          Sg: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sk: {
            type: 'structure',
            required: ['S3Data'],
            members: {
              S3Data: {
                shape: 'Sl'
              }
            }
          },
          Sl: {
            type: 'structure',
            required: ['S3Uri'],
            members: {
              KmsKeyId: {},
              S3Uri: {}
            }
          },
          Sv: {
            type: 'structure',
            members: {
              Message: {},
              Type: {}
            }
          },
          Sx: {
            type: 'structure',
            members: {
              PreviousEarthObservationJobArn: {},
              RasterDataCollectionQuery: {
                type: 'structure',
                required: ['RasterDataCollectionArn', 'RasterDataCollectionName', 'TimeRangeFilter'],
                members: {
                  AreaOfInterest: {
                    shape: 'Sz'
                  },
                  PropertyFilters: {
                    shape: 'S18'
                  },
                  RasterDataCollectionArn: {},
                  RasterDataCollectionName: {},
                  TimeRangeFilter: {
                    type: 'structure',
                    required: ['EndTime', 'StartTime'],
                    members: {
                      EndTime: {
                        shape: 'Sg'
                      },
                      StartTime: {
                        shape: 'Sg'
                      }
                    },
                    sensitive: true
                  }
                }
              }
            }
          },
          Sz: {
            type: 'structure',
            members: {
              AreaOfInterestGeometry: {
                type: 'structure',
                members: {
                  MultiPolygonGeometry: {
                    type: 'structure',
                    required: ['Coordinates'],
                    members: {
                      Coordinates: {
                        type: 'list',
                        member: {
                          shape: 'S13'
                        }
                      }
                    }
                  },
                  PolygonGeometry: {
                    type: 'structure',
                    required: ['Coordinates'],
                    members: {
                      Coordinates: {
                        shape: 'S13'
                      }
                    }
                  }
                },
                union: true
              }
            },
            union: true
          },
          S13: {
            type: 'list',
            member: {
              type: 'list',
              member: {
                type: 'list',
                member: {
                  type: 'double'
                },
                sensitive: true
              }
            }
          },
          S18: {
            type: 'structure',
            members: {
              LogicalOperator: {},
              Properties: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Property'],
                  members: {
                    Property: {
                      type: 'structure',
                      members: {
                        EoCloudCover: {
                          type: 'structure',
                          required: ['LowerBound', 'UpperBound'],
                          members: {
                            LowerBound: {
                              type: 'float'
                            },
                            UpperBound: {
                              type: 'float'
                            }
                          }
                        },
                        LandsatCloudCoverLand: {
                          type: 'structure',
                          required: ['LowerBound', 'UpperBound'],
                          members: {
                            LowerBound: {
                              type: 'float'
                            },
                            UpperBound: {
                              type: 'float'
                            }
                          }
                        },
                        Platform: {
                          type: 'structure',
                          required: ['Value'],
                          members: {
                            ComparisonOperator: {},
                            Value: {}
                          }
                        },
                        ViewOffNadir: {
                          type: 'structure',
                          required: ['LowerBound', 'UpperBound'],
                          members: {
                            LowerBound: {
                              type: 'float'
                            },
                            UpperBound: {
                              type: 'float'
                            }
                          }
                        },
                        ViewSunAzimuth: {
                          type: 'structure',
                          required: ['LowerBound', 'UpperBound'],
                          members: {
                            LowerBound: {
                              type: 'float'
                            },
                            UpperBound: {
                              type: 'float'
                            }
                          }
                        },
                        ViewSunElevation: {
                          type: 'structure',
                          required: ['LowerBound', 'UpperBound'],
                          members: {
                            LowerBound: {
                              type: 'float'
                            },
                            UpperBound: {
                              type: 'float'
                            }
                          }
                        }
                      },
                      union: true
                    }
                  }
                }
              }
            }
          },
          S1n: {
            type: 'structure',
            members: {
              BandMathConfig: {
                type: 'structure',
                members: {
                  CustomIndices: {
                    type: 'structure',
                    members: {
                      Operations: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['Equation', 'Name'],
                          members: {
                            Equation: {},
                            Name: {},
                            OutputType: {}
                          }
                        }
                      }
                    }
                  },
                  PredefinedIndices: {
                    shape: 'S1t'
                  }
                }
              },
              CloudMaskingConfig: {
                type: 'structure',
                members: {}
              },
              CloudRemovalConfig: {
                type: 'structure',
                members: {
                  AlgorithmName: {},
                  InterpolationValue: {},
                  TargetBands: {
                    shape: 'S1t'
                  }
                }
              },
              GeoMosaicConfig: {
                type: 'structure',
                members: {
                  AlgorithmName: {},
                  TargetBands: {
                    shape: 'S1t'
                  }
                }
              },
              LandCoverSegmentationConfig: {
                type: 'structure',
                members: {}
              },
              ResamplingConfig: {
                type: 'structure',
                required: ['OutputResolution'],
                members: {
                  AlgorithmName: {},
                  OutputResolution: {
                    type: 'structure',
                    required: ['UserDefined'],
                    members: {
                      UserDefined: {
                        shape: 'S23'
                      }
                    }
                  },
                  TargetBands: {
                    shape: 'S1t'
                  }
                }
              },
              StackConfig: {
                type: 'structure',
                members: {
                  OutputResolution: {
                    type: 'structure',
                    members: {
                      Predefined: {},
                      UserDefined: {
                        shape: 'S23'
                      }
                    }
                  },
                  TargetBands: {
                    shape: 'S1t'
                  }
                }
              },
              TemporalStatisticsConfig: {
                type: 'structure',
                required: ['Statistics'],
                members: {
                  GroupBy: {},
                  Statistics: {
                    type: 'list',
                    member: {}
                  },
                  TargetBands: {
                    shape: 'S1t'
                  }
                }
              },
              ZonalStatisticsConfig: {
                type: 'structure',
                required: ['Statistics', 'ZoneS3Path'],
                members: {
                  Statistics: {
                    type: 'list',
                    member: {}
                  },
                  TargetBands: {
                    shape: 'S1t'
                  },
                  ZoneS3Path: {},
                  ZoneS3PathKmsKeyId: {}
                }
              }
            },
            union: true
          },
          S1t: {
            type: 'list',
            member: {}
          },
          S23: {
            type: 'structure',
            required: ['Unit', 'Value'],
            members: {
              Unit: {},
              Value: {
                type: 'float'
              }
            }
          },
          S2i: {
            type: 'map',
            key: {},
            value: {}
          },
          S2m: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Type'],
              members: {
                Maximum: {
                  type: 'float'
                },
                Minimum: {
                  type: 'float'
                },
                Name: {},
                Type: {}
              }
            }
          },
          S2z: {
            type: 'structure',
            required: ['DataSourceConfig', 'DocumentType'],
            members: {
              DataSourceConfig: {
                type: 'structure',
                members: {
                  S3Data: {
                    shape: 'Sl'
                  }
                },
                union: true
              },
              DocumentType: {}
            }
          },
          S32: {
            type: 'structure',
            members: {
              MapMatchingConfig: {
                type: 'structure',
                required: ['IdAttributeName', 'TimestampAttributeName', 'XAttributeName', 'YAttributeName'],
                members: {
                  IdAttributeName: {},
                  TimestampAttributeName: {},
                  XAttributeName: {},
                  YAttributeName: {}
                }
              },
              ReverseGeocodingConfig: {
                type: 'structure',
                required: ['XAttributeName', 'YAttributeName'],
                members: {
                  XAttributeName: {},
                  YAttributeName: {}
                }
              }
            },
            union: true
          },
          S39: {
            type: 'string',
            sensitive: true
          },
          S3t: {
            type: 'structure',
            required: ['EndTime', 'StartTime'],
            members: {
              EndTime: {
                type: 'timestamp'
              },
              StartTime: {
                type: 'timestamp'
              }
            },
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=592174605fb9c37b7e37dd6d8ead6a5b72881554.js.map