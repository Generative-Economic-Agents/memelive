System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-07-01',
          endpointPrefix: 'healthlake',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceAbbreviation: 'HealthLake',
          serviceFullName: 'Amazon HealthLake',
          serviceId: 'HealthLake',
          signatureVersion: 'v4',
          signingName: 'healthlake',
          targetPrefix: 'HealthLake',
          uid: 'healthlake-2017-07-01'
        },
        operations: {
          CreateFHIRDatastore: {
            input: {
              type: 'structure',
              required: ['DatastoreTypeVersion'],
              members: {
                DatastoreName: {},
                DatastoreTypeVersion: {},
                SseConfiguration: {
                  shape: 'S4'
                },
                PreloadDataConfig: {
                  shape: 'S8'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'Sb'
                },
                IdentityProviderConfiguration: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DatastoreId', 'DatastoreArn', 'DatastoreStatus', 'DatastoreEndpoint'],
              members: {
                DatastoreId: {},
                DatastoreArn: {},
                DatastoreStatus: {},
                DatastoreEndpoint: {}
              }
            }
          },
          DeleteFHIRDatastore: {
            input: {
              type: 'structure',
              required: ['DatastoreId'],
              members: {
                DatastoreId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['DatastoreId', 'DatastoreArn', 'DatastoreStatus', 'DatastoreEndpoint'],
              members: {
                DatastoreId: {},
                DatastoreArn: {},
                DatastoreStatus: {},
                DatastoreEndpoint: {}
              }
            }
          },
          DescribeFHIRDatastore: {
            input: {
              type: 'structure',
              required: ['DatastoreId'],
              members: {
                DatastoreId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['DatastoreProperties'],
              members: {
                DatastoreProperties: {
                  shape: 'St'
                }
              }
            }
          },
          DescribeFHIRExportJob: {
            input: {
              type: 'structure',
              required: ['DatastoreId', 'JobId'],
              members: {
                DatastoreId: {},
                JobId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ExportJobProperties'],
              members: {
                ExportJobProperties: {
                  shape: 'S12'
                }
              }
            }
          },
          DescribeFHIRImportJob: {
            input: {
              type: 'structure',
              required: ['DatastoreId', 'JobId'],
              members: {
                DatastoreId: {},
                JobId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ImportJobProperties'],
              members: {
                ImportJobProperties: {
                  shape: 'S1c'
                }
              }
            }
          },
          ListFHIRDatastores: {
            input: {
              type: 'structure',
              members: {
                Filter: {
                  type: 'structure',
                  members: {
                    DatastoreName: {},
                    DatastoreStatus: {},
                    CreatedBefore: {
                      type: 'timestamp'
                    },
                    CreatedAfter: {
                      type: 'timestamp'
                    }
                  }
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DatastorePropertiesList'],
              members: {
                DatastorePropertiesList: {
                  type: 'list',
                  member: {
                    shape: 'St'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListFHIRExportJobs: {
            input: {
              type: 'structure',
              required: ['DatastoreId'],
              members: {
                DatastoreId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                JobName: {},
                JobStatus: {},
                SubmittedBefore: {
                  type: 'timestamp'
                },
                SubmittedAfter: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ExportJobPropertiesList'],
              members: {
                ExportJobPropertiesList: {
                  type: 'list',
                  member: {
                    shape: 'S12'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListFHIRImportJobs: {
            input: {
              type: 'structure',
              required: ['DatastoreId'],
              members: {
                DatastoreId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                JobName: {},
                JobStatus: {},
                SubmittedBefore: {
                  type: 'timestamp'
                },
                SubmittedAfter: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ImportJobPropertiesList'],
              members: {
                ImportJobPropertiesList: {
                  type: 'list',
                  member: {
                    shape: 'S1c'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          StartFHIRExportJob: {
            input: {
              type: 'structure',
              required: ['OutputDataConfig', 'DatastoreId', 'DataAccessRoleArn', 'ClientToken'],
              members: {
                JobName: {},
                OutputDataConfig: {
                  shape: 'S15'
                },
                DatastoreId: {},
                DataAccessRoleArn: {},
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['JobId', 'JobStatus'],
              members: {
                JobId: {},
                JobStatus: {},
                DatastoreId: {}
              }
            }
          },
          StartFHIRImportJob: {
            input: {
              type: 'structure',
              required: ['InputDataConfig', 'JobOutputDataConfig', 'DatastoreId', 'DataAccessRoleArn', 'ClientToken'],
              members: {
                JobName: {},
                InputDataConfig: {
                  shape: 'S1d'
                },
                JobOutputDataConfig: {
                  shape: 'S15'
                },
                DatastoreId: {},
                DataAccessRoleArn: {},
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['JobId', 'JobStatus'],
              members: {
                JobId: {},
                JobStatus: {},
                DatastoreId: {}
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
                  shape: 'Sb'
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
              members: {}
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            required: ['KmsEncryptionConfig'],
            members: {
              KmsEncryptionConfig: {
                type: 'structure',
                required: ['CmkType'],
                members: {
                  CmkType: {},
                  KmsKeyId: {}
                }
              }
            }
          },
          S8: {
            type: 'structure',
            required: ['PreloadDataType'],
            members: {
              PreloadDataType: {}
            }
          },
          Sb: {
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
          Sf: {
            type: 'structure',
            required: ['AuthorizationStrategy'],
            members: {
              AuthorizationStrategy: {},
              FineGrainedAuthorizationEnabled: {
                type: 'boolean'
              },
              Metadata: {},
              IdpLambdaArn: {}
            }
          },
          St: {
            type: 'structure',
            required: ['DatastoreId', 'DatastoreArn', 'DatastoreStatus', 'DatastoreTypeVersion', 'DatastoreEndpoint'],
            members: {
              DatastoreId: {},
              DatastoreArn: {},
              DatastoreName: {},
              DatastoreStatus: {},
              CreatedAt: {
                type: 'timestamp'
              },
              DatastoreTypeVersion: {},
              DatastoreEndpoint: {},
              SseConfiguration: {
                shape: 'S4'
              },
              PreloadDataConfig: {
                shape: 'S8'
              },
              IdentityProviderConfiguration: {
                shape: 'Sf'
              },
              ErrorCause: {
                type: 'structure',
                members: {
                  ErrorMessage: {},
                  ErrorCategory: {}
                }
              }
            }
          },
          S12: {
            type: 'structure',
            required: ['JobId', 'JobStatus', 'SubmitTime', 'DatastoreId', 'OutputDataConfig'],
            members: {
              JobId: {},
              JobName: {},
              JobStatus: {},
              SubmitTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              DatastoreId: {},
              OutputDataConfig: {
                shape: 'S15'
              },
              DataAccessRoleArn: {},
              Message: {}
            }
          },
          S15: {
            type: 'structure',
            members: {
              S3Configuration: {
                type: 'structure',
                required: ['S3Uri', 'KmsKeyId'],
                members: {
                  S3Uri: {},
                  KmsKeyId: {}
                }
              }
            },
            union: true
          },
          S1c: {
            type: 'structure',
            required: ['JobId', 'JobStatus', 'SubmitTime', 'DatastoreId', 'InputDataConfig'],
            members: {
              JobId: {},
              JobName: {},
              JobStatus: {},
              SubmitTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              DatastoreId: {},
              InputDataConfig: {
                shape: 'S1d'
              },
              JobOutputDataConfig: {
                shape: 'S15'
              },
              JobProgressReport: {
                type: 'structure',
                members: {
                  TotalNumberOfScannedFiles: {
                    type: 'long'
                  },
                  TotalSizeOfScannedFilesInMB: {
                    type: 'double'
                  },
                  TotalNumberOfImportedFiles: {
                    type: 'long'
                  },
                  TotalNumberOfResourcesScanned: {
                    type: 'long'
                  },
                  TotalNumberOfResourcesImported: {
                    type: 'long'
                  },
                  TotalNumberOfResourcesWithCustomerError: {
                    type: 'long'
                  },
                  TotalNumberOfFilesReadWithCustomerError: {
                    type: 'long'
                  },
                  Throughput: {
                    type: 'double'
                  }
                }
              },
              DataAccessRoleArn: {},
              Message: {}
            }
          },
          S1d: {
            type: 'structure',
            members: {
              S3Uri: {}
            },
            union: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=6024a73896e2b5c74d041d76b0a8dece62d832bf.js.map