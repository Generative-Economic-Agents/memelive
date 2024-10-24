System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2012-06-01',
          checksumFormat: 'sha256',
          endpointPrefix: 'glacier',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Glacier',
          serviceId: 'Glacier',
          signatureVersion: 'v4',
          uid: 'glacier-2012-06-01'
        },
        operations: {
          AbortMultipartUpload: {
            http: {
              method: 'DELETE',
              requestUri: '/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName', 'uploadId'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                },
                uploadId: {
                  location: 'uri',
                  locationName: 'uploadId'
                }
              }
            }
          },
          AbortVaultLock: {
            http: {
              method: 'DELETE',
              requestUri: '/{accountId}/vaults/{vaultName}/lock-policy',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                }
              }
            }
          },
          AddTagsToVault: {
            http: {
              requestUri: '/{accountId}/vaults/{vaultName}/tags?operation=add',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                },
                Tags: {
                  shape: 'S5'
                }
              }
            }
          },
          CompleteMultipartUpload: {
            http: {
              requestUri: '/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName', 'uploadId'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                },
                uploadId: {
                  location: 'uri',
                  locationName: 'uploadId'
                },
                archiveSize: {
                  location: 'header',
                  locationName: 'x-amz-archive-size'
                },
                checksum: {
                  location: 'header',
                  locationName: 'x-amz-sha256-tree-hash'
                }
              }
            },
            output: {
              shape: 'S9'
            }
          },
          CompleteVaultLock: {
            http: {
              requestUri: '/{accountId}/vaults/{vaultName}/lock-policy/{lockId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName', 'lockId'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                },
                lockId: {
                  location: 'uri',
                  locationName: 'lockId'
                }
              }
            }
          },
          CreateVault: {
            http: {
              method: 'PUT',
              requestUri: '/{accountId}/vaults/{vaultName}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                location: {
                  location: 'header',
                  locationName: 'Location'
                }
              }
            }
          },
          DeleteArchive: {
            http: {
              method: 'DELETE',
              requestUri: '/{accountId}/vaults/{vaultName}/archives/{archiveId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName', 'archiveId'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                },
                archiveId: {
                  location: 'uri',
                  locationName: 'archiveId'
                }
              }
            }
          },
          DeleteVault: {
            http: {
              method: 'DELETE',
              requestUri: '/{accountId}/vaults/{vaultName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                }
              }
            }
          },
          DeleteVaultAccessPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/{accountId}/vaults/{vaultName}/access-policy',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                }
              }
            }
          },
          DeleteVaultNotifications: {
            http: {
              method: 'DELETE',
              requestUri: '/{accountId}/vaults/{vaultName}/notification-configuration',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                }
              }
            }
          },
          DescribeJob: {
            http: {
              method: 'GET',
              requestUri: '/{accountId}/vaults/{vaultName}/jobs/{jobId}'
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName', 'jobId'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                }
              }
            },
            output: {
              shape: 'Si'
            }
          },
          DescribeVault: {
            http: {
              method: 'GET',
              requestUri: '/{accountId}/vaults/{vaultName}'
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                }
              }
            },
            output: {
              shape: 'S1a'
            }
          },
          GetDataRetrievalPolicy: {
            http: {
              method: 'GET',
              requestUri: '/{accountId}/policies/data-retrieval'
            },
            input: {
              type: 'structure',
              required: ['accountId'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {
                  shape: 'S1e'
                }
              }
            }
          },
          GetJobOutput: {
            http: {
              method: 'GET',
              requestUri: '/{accountId}/vaults/{vaultName}/jobs/{jobId}/output'
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName', 'jobId'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                range: {
                  location: 'header',
                  locationName: 'Range'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                body: {
                  shape: 'S1k'
                },
                checksum: {
                  location: 'header',
                  locationName: 'x-amz-sha256-tree-hash'
                },
                status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                contentRange: {
                  location: 'header',
                  locationName: 'Content-Range'
                },
                acceptRanges: {
                  location: 'header',
                  locationName: 'Accept-Ranges'
                },
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                archiveDescription: {
                  location: 'header',
                  locationName: 'x-amz-archive-description'
                }
              },
              payload: 'body'
            }
          },
          GetVaultAccessPolicy: {
            http: {
              method: 'GET',
              requestUri: '/{accountId}/vaults/{vaultName}/access-policy'
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                policy: {
                  shape: 'S1o'
                }
              },
              payload: 'policy'
            }
          },
          GetVaultLock: {
            http: {
              method: 'GET',
              requestUri: '/{accountId}/vaults/{vaultName}/lock-policy'
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {},
                State: {},
                ExpirationDate: {},
                CreationDate: {}
              }
            }
          },
          GetVaultNotifications: {
            http: {
              method: 'GET',
              requestUri: '/{accountId}/vaults/{vaultName}/notification-configuration'
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                vaultNotificationConfig: {
                  shape: 'S1t'
                }
              },
              payload: 'vaultNotificationConfig'
            }
          },
          InitiateJob: {
            http: {
              requestUri: '/{accountId}/vaults/{vaultName}/jobs',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                },
                jobParameters: {
                  type: 'structure',
                  members: {
                    Format: {},
                    Type: {},
                    ArchiveId: {},
                    Description: {},
                    SNSTopic: {},
                    RetrievalByteRange: {},
                    Tier: {},
                    InventoryRetrievalParameters: {
                      type: 'structure',
                      members: {
                        StartDate: {},
                        EndDate: {},
                        Limit: {},
                        Marker: {}
                      }
                    },
                    SelectParameters: {
                      shape: 'Sp'
                    },
                    OutputLocation: {
                      shape: 'Sx'
                    }
                  }
                }
              },
              payload: 'jobParameters'
            },
            output: {
              type: 'structure',
              members: {
                location: {
                  location: 'header',
                  locationName: 'Location'
                },
                jobId: {
                  location: 'header',
                  locationName: 'x-amz-job-id'
                },
                jobOutputPath: {
                  location: 'header',
                  locationName: 'x-amz-job-output-path'
                }
              }
            }
          },
          InitiateMultipartUpload: {
            http: {
              requestUri: '/{accountId}/vaults/{vaultName}/multipart-uploads',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                },
                archiveDescription: {
                  location: 'header',
                  locationName: 'x-amz-archive-description'
                },
                partSize: {
                  location: 'header',
                  locationName: 'x-amz-part-size'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                location: {
                  location: 'header',
                  locationName: 'Location'
                },
                uploadId: {
                  location: 'header',
                  locationName: 'x-amz-multipart-upload-id'
                }
              }
            }
          },
          InitiateVaultLock: {
            http: {
              requestUri: '/{accountId}/vaults/{vaultName}/lock-policy',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                },
                policy: {
                  type: 'structure',
                  members: {
                    Policy: {}
                  }
                }
              },
              payload: 'policy'
            },
            output: {
              type: 'structure',
              members: {
                lockId: {
                  location: 'header',
                  locationName: 'x-amz-lock-id'
                }
              }
            }
          },
          ListJobs: {
            http: {
              method: 'GET',
              requestUri: '/{accountId}/vaults/{vaultName}/jobs'
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit'
                },
                marker: {
                  location: 'querystring',
                  locationName: 'marker'
                },
                statuscode: {
                  location: 'querystring',
                  locationName: 'statuscode'
                },
                completed: {
                  location: 'querystring',
                  locationName: 'completed'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobList: {
                  type: 'list',
                  member: {
                    shape: 'Si'
                  }
                },
                Marker: {}
              }
            }
          },
          ListMultipartUploads: {
            http: {
              method: 'GET',
              requestUri: '/{accountId}/vaults/{vaultName}/multipart-uploads'
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                },
                marker: {
                  location: 'querystring',
                  locationName: 'marker'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UploadsList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MultipartUploadId: {},
                      VaultARN: {},
                      ArchiveDescription: {},
                      PartSizeInBytes: {
                        type: 'long'
                      },
                      CreationDate: {}
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          ListParts: {
            http: {
              method: 'GET',
              requestUri: '/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}'
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName', 'uploadId'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                },
                uploadId: {
                  location: 'uri',
                  locationName: 'uploadId'
                },
                marker: {
                  location: 'querystring',
                  locationName: 'marker'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MultipartUploadId: {},
                VaultARN: {},
                ArchiveDescription: {},
                PartSizeInBytes: {
                  type: 'long'
                },
                CreationDate: {},
                Parts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RangeInBytes: {},
                      SHA256TreeHash: {}
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          ListProvisionedCapacity: {
            http: {
              method: 'GET',
              requestUri: '/{accountId}/provisioned-capacity'
            },
            input: {
              type: 'structure',
              required: ['accountId'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProvisionedCapacityList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CapacityId: {},
                      StartDate: {},
                      ExpirationDate: {}
                    }
                  }
                }
              }
            }
          },
          ListTagsForVault: {
            http: {
              method: 'GET',
              requestUri: '/{accountId}/vaults/{vaultName}/tags'
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S5'
                }
              }
            }
          },
          ListVaults: {
            http: {
              method: 'GET',
              requestUri: '/{accountId}/vaults'
            },
            input: {
              type: 'structure',
              required: ['accountId'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                marker: {
                  location: 'querystring',
                  locationName: 'marker'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VaultList: {
                  type: 'list',
                  member: {
                    shape: 'S1a'
                  }
                },
                Marker: {}
              }
            }
          },
          PurchaseProvisionedCapacity: {
            http: {
              requestUri: '/{accountId}/provisioned-capacity',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['accountId'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                capacityId: {
                  location: 'header',
                  locationName: 'x-amz-capacity-id'
                }
              }
            }
          },
          RemoveTagsFromVault: {
            http: {
              requestUri: '/{accountId}/vaults/{vaultName}/tags?operation=remove',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                },
                TagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          SetDataRetrievalPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/{accountId}/policies/data-retrieval',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['accountId'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                Policy: {
                  shape: 'S1e'
                }
              }
            }
          },
          SetVaultAccessPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/{accountId}/vaults/{vaultName}/access-policy',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                },
                policy: {
                  shape: 'S1o'
                }
              },
              payload: 'policy'
            }
          },
          SetVaultNotifications: {
            http: {
              method: 'PUT',
              requestUri: '/{accountId}/vaults/{vaultName}/notification-configuration',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                },
                vaultNotificationConfig: {
                  shape: 'S1t'
                }
              },
              payload: 'vaultNotificationConfig'
            }
          },
          UploadArchive: {
            http: {
              requestUri: '/{accountId}/vaults/{vaultName}/archives',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['vaultName', 'accountId'],
              members: {
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                },
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                archiveDescription: {
                  location: 'header',
                  locationName: 'x-amz-archive-description'
                },
                checksum: {
                  location: 'header',
                  locationName: 'x-amz-sha256-tree-hash'
                },
                body: {
                  shape: 'S1k'
                }
              },
              payload: 'body'
            },
            output: {
              shape: 'S9'
            }
          },
          UploadMultipartPart: {
            http: {
              method: 'PUT',
              requestUri: '/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['accountId', 'vaultName', 'uploadId'],
              members: {
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                vaultName: {
                  location: 'uri',
                  locationName: 'vaultName'
                },
                uploadId: {
                  location: 'uri',
                  locationName: 'uploadId'
                },
                checksum: {
                  location: 'header',
                  locationName: 'x-amz-sha256-tree-hash'
                },
                range: {
                  location: 'header',
                  locationName: 'Content-Range'
                },
                body: {
                  shape: 'S1k'
                }
              },
              payload: 'body'
            },
            output: {
              type: 'structure',
              members: {
                checksum: {
                  location: 'header',
                  locationName: 'x-amz-sha256-tree-hash'
                }
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'map',
            key: {},
            value: {}
          },
          S9: {
            type: 'structure',
            members: {
              location: {
                location: 'header',
                locationName: 'Location'
              },
              checksum: {
                location: 'header',
                locationName: 'x-amz-sha256-tree-hash'
              },
              archiveId: {
                location: 'header',
                locationName: 'x-amz-archive-id'
              }
            }
          },
          Si: {
            type: 'structure',
            members: {
              JobId: {},
              JobDescription: {},
              Action: {},
              ArchiveId: {},
              VaultARN: {},
              CreationDate: {},
              Completed: {
                type: 'boolean'
              },
              StatusCode: {},
              StatusMessage: {},
              ArchiveSizeInBytes: {
                type: 'long'
              },
              InventorySizeInBytes: {
                type: 'long'
              },
              SNSTopic: {},
              CompletionDate: {},
              SHA256TreeHash: {},
              ArchiveSHA256TreeHash: {},
              RetrievalByteRange: {},
              Tier: {},
              InventoryRetrievalParameters: {
                type: 'structure',
                members: {
                  Format: {},
                  StartDate: {},
                  EndDate: {},
                  Limit: {},
                  Marker: {}
                }
              },
              JobOutputPath: {},
              SelectParameters: {
                shape: 'Sp'
              },
              OutputLocation: {
                shape: 'Sx'
              }
            }
          },
          Sp: {
            type: 'structure',
            members: {
              InputSerialization: {
                type: 'structure',
                members: {
                  csv: {
                    type: 'structure',
                    members: {
                      FileHeaderInfo: {},
                      Comments: {},
                      QuoteEscapeCharacter: {},
                      RecordDelimiter: {},
                      FieldDelimiter: {},
                      QuoteCharacter: {}
                    }
                  }
                }
              },
              ExpressionType: {},
              Expression: {},
              OutputSerialization: {
                type: 'structure',
                members: {
                  csv: {
                    type: 'structure',
                    members: {
                      QuoteFields: {},
                      QuoteEscapeCharacter: {},
                      RecordDelimiter: {},
                      FieldDelimiter: {},
                      QuoteCharacter: {}
                    }
                  }
                }
              }
            }
          },
          Sx: {
            type: 'structure',
            members: {
              S3: {
                type: 'structure',
                members: {
                  BucketName: {},
                  Prefix: {},
                  Encryption: {
                    type: 'structure',
                    members: {
                      EncryptionType: {},
                      KMSKeyId: {},
                      KMSContext: {}
                    }
                  },
                  CannedACL: {},
                  AccessControlList: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        Grantee: {
                          type: 'structure',
                          required: ['Type'],
                          members: {
                            Type: {},
                            DisplayName: {},
                            URI: {},
                            ID: {},
                            EmailAddress: {}
                          }
                        },
                        Permission: {}
                      }
                    }
                  },
                  Tagging: {
                    shape: 'S17'
                  },
                  UserMetadata: {
                    shape: 'S17'
                  },
                  StorageClass: {}
                }
              }
            }
          },
          S17: {
            type: 'map',
            key: {},
            value: {}
          },
          S1a: {
            type: 'structure',
            members: {
              VaultARN: {},
              VaultName: {},
              CreationDate: {},
              LastInventoryDate: {},
              NumberOfArchives: {
                type: 'long'
              },
              SizeInBytes: {
                type: 'long'
              }
            }
          },
          S1e: {
            type: 'structure',
            members: {
              Rules: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Strategy: {},
                    BytesPerHour: {
                      type: 'long'
                    }
                  }
                }
              }
            }
          },
          S1k: {
            type: 'blob',
            streaming: true
          },
          S1o: {
            type: 'structure',
            members: {
              Policy: {}
            }
          },
          S1t: {
            type: 'structure',
            members: {
              SNSTopic: {},
              Events: {
                type: 'list',
                member: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=514685e0905e39e3e1be449eddf8e2262d27fe32.js.map