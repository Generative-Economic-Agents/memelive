System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-11-28',
          endpointPrefix: 'omics',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Omics',
          serviceId: 'Omics',
          signatureVersion: 'v4',
          signingName: 'omics',
          uid: 'omics-2022-11-28'
        },
        operations: {
          AbortMultipartReadSetUpload: {
            http: {
              method: 'DELETE',
              requestUri: '/sequencestore/{sequenceStoreId}/upload/{uploadId}/abort',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sequenceStoreId', 'uploadId'],
              members: {
                sequenceStoreId: {
                  location: 'uri',
                  locationName: 'sequenceStoreId'
                },
                uploadId: {
                  location: 'uri',
                  locationName: 'uploadId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          AcceptShare: {
            http: {
              requestUri: '/share/{shareId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['shareId'],
              members: {
                shareId: {
                  location: 'uri',
                  locationName: 'shareId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {}
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            }
          },
          BatchDeleteReadSet: {
            http: {
              requestUri: '/sequencestore/{sequenceStoreId}/readset/batch/delete',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ids', 'sequenceStoreId'],
              members: {
                ids: {
                  type: 'list',
                  member: {}
                },
                sequenceStoreId: {
                  location: 'uri',
                  locationName: 'sequenceStoreId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'code', 'message'],
                    members: {
                      id: {},
                      code: {},
                      message: {}
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            },
            idempotent: true
          },
          CancelAnnotationImportJob: {
            http: {
              method: 'DELETE',
              requestUri: '/import/annotation/{jobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['jobId'],
              members: {
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'analytics-'
            },
            idempotent: true
          },
          CancelRun: {
            http: {
              requestUri: '/run/{id}/cancel',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            endpoint: {
              hostPrefix: 'workflows-'
            }
          },
          CancelVariantImportJob: {
            http: {
              method: 'DELETE',
              requestUri: '/import/variant/{jobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['jobId'],
              members: {
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'analytics-'
            },
            idempotent: true
          },
          CompleteMultipartReadSetUpload: {
            http: {
              requestUri: '/sequencestore/{sequenceStoreId}/upload/{uploadId}/complete',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sequenceStoreId', 'uploadId', 'parts'],
              members: {
                sequenceStoreId: {
                  location: 'uri',
                  locationName: 'sequenceStoreId'
                },
                uploadId: {
                  location: 'uri',
                  locationName: 'uploadId'
                },
                parts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['partNumber', 'partSource', 'checksum'],
                    members: {
                      partNumber: {
                        type: 'integer'
                      },
                      partSource: {},
                      checksum: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['readSetId'],
              members: {
                readSetId: {}
              }
            },
            endpoint: {
              hostPrefix: 'storage-'
            }
          },
          CreateAnnotationStore: {
            http: {
              requestUri: '/annotationStore',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['storeFormat'],
              members: {
                reference: {
                  shape: 'Su'
                },
                name: {},
                description: {},
                tags: {
                  shape: 'Sy'
                },
                versionName: {},
                sseConfig: {
                  shape: 'S12'
                },
                storeFormat: {},
                storeOptions: {
                  shape: 'S16'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'status', 'name', 'versionName', 'creationTime'],
              members: {
                id: {},
                reference: {
                  shape: 'Su'
                },
                storeFormat: {},
                storeOptions: {
                  shape: 'S16'
                },
                status: {},
                name: {},
                versionName: {},
                creationTime: {
                  shape: 'S1i'
                }
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            }
          },
          CreateAnnotationStoreVersion: {
            http: {
              requestUri: '/annotationStore/{name}/version',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'versionName'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                versionName: {},
                description: {},
                versionOptions: {
                  shape: 'S1k'
                },
                tags: {
                  shape: 'Sy'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'versionName', 'storeId', 'name', 'status', 'creationTime'],
              members: {
                id: {},
                versionName: {},
                storeId: {},
                versionOptions: {
                  shape: 'S1k'
                },
                name: {},
                status: {},
                creationTime: {
                  shape: 'S1i'
                }
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            }
          },
          CreateMultipartReadSetUpload: {
            http: {
              requestUri: '/sequencestore/{sequenceStoreId}/upload',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sequenceStoreId', 'sourceFileType', 'subjectId', 'sampleId', 'name'],
              members: {
                sequenceStoreId: {
                  location: 'uri',
                  locationName: 'sequenceStoreId'
                },
                clientToken: {},
                sourceFileType: {},
                subjectId: {},
                sampleId: {},
                generatedFrom: {},
                referenceArn: {},
                name: {},
                description: {},
                tags: {
                  shape: 'Sy'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['sequenceStoreId', 'uploadId', 'sourceFileType', 'subjectId', 'sampleId', 'referenceArn', 'creationTime'],
              members: {
                sequenceStoreId: {},
                uploadId: {},
                sourceFileType: {},
                subjectId: {},
                sampleId: {},
                generatedFrom: {},
                referenceArn: {},
                name: {},
                description: {},
                tags: {
                  shape: 'Sy'
                },
                creationTime: {
                  shape: 'S1y'
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          CreateReferenceStore: {
            http: {
              requestUri: '/referencestore',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                description: {},
                sseConfig: {
                  shape: 'S12'
                },
                tags: {
                  shape: 'Sy'
                },
                clientToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'arn', 'creationTime'],
              members: {
                id: {},
                arn: {},
                name: {},
                description: {},
                sseConfig: {
                  shape: 'S12'
                },
                creationTime: {
                  shape: 'S1y'
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          CreateRunGroup: {
            http: {
              requestUri: '/runGroup',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['requestId'],
              members: {
                name: {},
                maxCpus: {
                  type: 'integer'
                },
                maxRuns: {
                  type: 'integer'
                },
                maxDuration: {
                  type: 'integer'
                },
                tags: {
                  shape: 'Sy'
                },
                requestId: {
                  idempotencyToken: true
                },
                maxGpus: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                id: {},
                tags: {
                  shape: 'Sy'
                }
              }
            },
            endpoint: {
              hostPrefix: 'workflows-'
            }
          },
          CreateSequenceStore: {
            http: {
              requestUri: '/sequencestore',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                description: {},
                sseConfig: {
                  shape: 'S12'
                },
                tags: {
                  shape: 'Sy'
                },
                clientToken: {},
                fallbackLocation: {},
                eTagAlgorithmFamily: {}
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'arn', 'creationTime'],
              members: {
                id: {},
                arn: {},
                name: {},
                description: {},
                sseConfig: {
                  shape: 'S12'
                },
                creationTime: {
                  shape: 'S1y'
                },
                fallbackLocation: {},
                eTagAlgorithmFamily: {}
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          CreateShare: {
            http: {
              requestUri: '/share',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'principalSubscriber'],
              members: {
                resourceArn: {},
                principalSubscriber: {},
                shareName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                shareId: {},
                status: {},
                shareName: {}
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            }
          },
          CreateVariantStore: {
            http: {
              requestUri: '/variantStore',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['reference'],
              members: {
                reference: {
                  shape: 'Su'
                },
                name: {},
                description: {},
                tags: {
                  shape: 'Sy'
                },
                sseConfig: {
                  shape: 'S12'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'status', 'name', 'creationTime'],
              members: {
                id: {},
                reference: {
                  shape: 'Su'
                },
                status: {},
                name: {},
                creationTime: {
                  shape: 'S1i'
                }
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            }
          },
          CreateWorkflow: {
            http: {
              requestUri: '/workflow',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['requestId'],
              members: {
                name: {},
                description: {},
                engine: {},
                definitionZip: {
                  type: 'blob'
                },
                definitionUri: {},
                main: {},
                parameterTemplate: {
                  shape: 'S2y'
                },
                storageCapacity: {
                  type: 'integer'
                },
                tags: {
                  shape: 'Sy'
                },
                requestId: {
                  idempotencyToken: true
                },
                accelerators: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                id: {},
                status: {},
                tags: {
                  shape: 'Sy'
                }
              }
            },
            endpoint: {
              hostPrefix: 'workflows-'
            }
          },
          DeleteAnnotationStore: {
            http: {
              method: 'DELETE',
              requestUri: '/annotationStore/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                force: {
                  location: 'querystring',
                  locationName: 'force',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['status'],
              members: {
                status: {}
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            },
            idempotent: true
          },
          DeleteAnnotationStoreVersions: {
            http: {
              requestUri: '/annotationStore/{name}/versions/delete',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'versions'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                versions: {
                  type: 'list',
                  member: {}
                },
                force: {
                  location: 'querystring',
                  locationName: 'force',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['versionName', 'message'],
                    members: {
                      versionName: {},
                      message: {}
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            },
            idempotent: true
          },
          DeleteReference: {
            http: {
              method: 'DELETE',
              requestUri: '/referencestore/{referenceStoreId}/reference/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id', 'referenceStoreId'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                referenceStoreId: {
                  location: 'uri',
                  locationName: 'referenceStoreId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            },
            idempotent: true
          },
          DeleteReferenceStore: {
            http: {
              method: 'DELETE',
              requestUri: '/referencestore/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            },
            idempotent: true
          },
          DeleteRun: {
            http: {
              method: 'DELETE',
              requestUri: '/run/{id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            endpoint: {
              hostPrefix: 'workflows-'
            },
            idempotent: true
          },
          DeleteRunGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/runGroup/{id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            endpoint: {
              hostPrefix: 'workflows-'
            },
            idempotent: true
          },
          DeleteSequenceStore: {
            http: {
              method: 'DELETE',
              requestUri: '/sequencestore/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            },
            idempotent: true
          },
          DeleteShare: {
            http: {
              method: 'DELETE',
              requestUri: '/share/{shareId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['shareId'],
              members: {
                shareId: {
                  location: 'uri',
                  locationName: 'shareId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {}
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            },
            idempotent: true
          },
          DeleteVariantStore: {
            http: {
              method: 'DELETE',
              requestUri: '/variantStore/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                force: {
                  location: 'querystring',
                  locationName: 'force',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['status'],
              members: {
                status: {}
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            },
            idempotent: true
          },
          DeleteWorkflow: {
            http: {
              method: 'DELETE',
              requestUri: '/workflow/{id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            endpoint: {
              hostPrefix: 'workflows-'
            },
            idempotent: true
          },
          GetAnnotationImportJob: {
            http: {
              method: 'GET',
              requestUri: '/import/annotation/{jobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['jobId'],
              members: {
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'destinationName', 'versionName', 'roleArn', 'status', 'statusMessage', 'creationTime', 'updateTime', 'completionTime', 'items', 'runLeftNormalization', 'formatOptions'],
              members: {
                id: {},
                destinationName: {},
                versionName: {},
                roleArn: {},
                status: {},
                statusMessage: {},
                creationTime: {
                  shape: 'S1i'
                },
                updateTime: {
                  shape: 'S41'
                },
                completionTime: {
                  shape: 'S42'
                },
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['source', 'jobStatus'],
                    members: {
                      source: {},
                      jobStatus: {}
                    }
                  }
                },
                runLeftNormalization: {
                  type: 'boolean'
                },
                formatOptions: {
                  shape: 'S47'
                },
                annotationFields: {
                  shape: 'S4k'
                }
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            }
          },
          GetAnnotationStore: {
            http: {
              method: 'GET',
              requestUri: '/annotationStore/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'reference', 'status', 'storeArn', 'name', 'description', 'sseConfig', 'creationTime', 'updateTime', 'tags', 'statusMessage', 'storeSizeBytes', 'numVersions'],
              members: {
                id: {},
                reference: {
                  shape: 'Su'
                },
                status: {},
                storeArn: {},
                name: {},
                description: {},
                sseConfig: {
                  shape: 'S12'
                },
                creationTime: {
                  shape: 'S1i'
                },
                updateTime: {
                  shape: 'S41'
                },
                tags: {
                  shape: 'Sy'
                },
                storeOptions: {
                  shape: 'S16'
                },
                storeFormat: {},
                statusMessage: {},
                storeSizeBytes: {
                  type: 'long'
                },
                numVersions: {
                  type: 'integer'
                }
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            }
          },
          GetAnnotationStoreVersion: {
            http: {
              method: 'GET',
              requestUri: '/annotationStore/{name}/version/{versionName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'versionName'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                versionName: {
                  location: 'uri',
                  locationName: 'versionName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['storeId', 'id', 'status', 'versionArn', 'name', 'versionName', 'description', 'creationTime', 'updateTime', 'tags', 'statusMessage', 'versionSizeBytes'],
              members: {
                storeId: {},
                id: {},
                status: {},
                versionArn: {},
                name: {},
                versionName: {},
                description: {},
                creationTime: {
                  shape: 'S1i'
                },
                updateTime: {
                  shape: 'S41'
                },
                tags: {
                  shape: 'Sy'
                },
                versionOptions: {
                  shape: 'S1k'
                },
                statusMessage: {},
                versionSizeBytes: {
                  type: 'long'
                }
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            }
          },
          GetReadSet: {
            http: {
              method: 'GET',
              requestUri: '/sequencestore/{sequenceStoreId}/readset/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id', 'sequenceStoreId', 'partNumber'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                sequenceStoreId: {
                  location: 'uri',
                  locationName: 'sequenceStoreId'
                },
                file: {
                  location: 'querystring',
                  locationName: 'file'
                },
                partNumber: {
                  location: 'querystring',
                  locationName: 'partNumber',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                payload: {
                  type: 'blob',
                  streaming: true
                }
              },
              payload: 'payload'
            },
            endpoint: {
              hostPrefix: 'storage-'
            }
          },
          GetReadSetActivationJob: {
            http: {
              method: 'GET',
              requestUri: '/sequencestore/{sequenceStoreId}/activationjob/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id', 'sequenceStoreId'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                sequenceStoreId: {
                  location: 'uri',
                  locationName: 'sequenceStoreId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'sequenceStoreId', 'status', 'creationTime'],
              members: {
                id: {},
                sequenceStoreId: {},
                status: {},
                statusMessage: {},
                creationTime: {
                  shape: 'S1y'
                },
                completionTime: {
                  shape: 'S1y'
                },
                sources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['readSetId', 'status'],
                    members: {
                      readSetId: {},
                      status: {},
                      statusMessage: {}
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          GetReadSetExportJob: {
            http: {
              method: 'GET',
              requestUri: '/sequencestore/{sequenceStoreId}/exportjob/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sequenceStoreId', 'id'],
              members: {
                sequenceStoreId: {
                  location: 'uri',
                  locationName: 'sequenceStoreId'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'sequenceStoreId', 'destination', 'status', 'creationTime'],
              members: {
                id: {},
                sequenceStoreId: {},
                destination: {},
                status: {},
                statusMessage: {},
                creationTime: {
                  shape: 'S1y'
                },
                completionTime: {
                  shape: 'S1y'
                },
                readSets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'status'],
                    members: {
                      id: {},
                      status: {},
                      statusMessage: {}
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          GetReadSetImportJob: {
            http: {
              method: 'GET',
              requestUri: '/sequencestore/{sequenceStoreId}/importjob/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id', 'sequenceStoreId'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                sequenceStoreId: {
                  location: 'uri',
                  locationName: 'sequenceStoreId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'sequenceStoreId', 'roleArn', 'status', 'creationTime', 'sources'],
              members: {
                id: {},
                sequenceStoreId: {},
                roleArn: {},
                status: {},
                statusMessage: {},
                creationTime: {
                  shape: 'S1y'
                },
                completionTime: {
                  shape: 'S1y'
                },
                sources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['sourceFiles', 'sourceFileType', 'status', 'subjectId', 'sampleId'],
                    members: {
                      sourceFiles: {
                        shape: 'S5l'
                      },
                      sourceFileType: {},
                      status: {},
                      statusMessage: {},
                      subjectId: {},
                      sampleId: {},
                      generatedFrom: {},
                      referenceArn: {},
                      name: {},
                      description: {},
                      tags: {
                        shape: 'Sy'
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          GetReadSetMetadata: {
            http: {
              method: 'GET',
              requestUri: '/sequencestore/{sequenceStoreId}/readset/{id}/metadata',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id', 'sequenceStoreId'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                sequenceStoreId: {
                  location: 'uri',
                  locationName: 'sequenceStoreId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'arn', 'sequenceStoreId', 'status', 'fileType', 'creationTime'],
              members: {
                id: {},
                arn: {},
                sequenceStoreId: {},
                subjectId: {},
                sampleId: {},
                status: {},
                name: {},
                description: {},
                fileType: {},
                creationTime: {
                  shape: 'S1y'
                },
                sequenceInformation: {
                  shape: 'S5r'
                },
                referenceArn: {},
                files: {
                  type: 'structure',
                  members: {
                    source1: {
                      shape: 'S5t'
                    },
                    source2: {
                      shape: 'S5t'
                    },
                    index: {
                      shape: 'S5t'
                    }
                  }
                },
                statusMessage: {},
                creationType: {},
                etag: {
                  shape: 'S60'
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          GetReference: {
            http: {
              method: 'GET',
              requestUri: '/referencestore/{referenceStoreId}/reference/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id', 'referenceStoreId', 'partNumber'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                referenceStoreId: {
                  location: 'uri',
                  locationName: 'referenceStoreId'
                },
                range: {
                  location: 'header',
                  locationName: 'Range'
                },
                partNumber: {
                  location: 'querystring',
                  locationName: 'partNumber',
                  type: 'integer'
                },
                file: {
                  location: 'querystring',
                  locationName: 'file'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                payload: {
                  type: 'blob',
                  streaming: true
                }
              },
              payload: 'payload'
            },
            endpoint: {
              hostPrefix: 'storage-'
            }
          },
          GetReferenceImportJob: {
            http: {
              method: 'GET',
              requestUri: '/referencestore/{referenceStoreId}/importjob/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id', 'referenceStoreId'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                referenceStoreId: {
                  location: 'uri',
                  locationName: 'referenceStoreId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'referenceStoreId', 'roleArn', 'status', 'creationTime', 'sources'],
              members: {
                id: {},
                referenceStoreId: {},
                roleArn: {},
                status: {},
                statusMessage: {},
                creationTime: {
                  shape: 'S1y'
                },
                completionTime: {
                  shape: 'S1y'
                },
                sources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['status'],
                    members: {
                      sourceFile: {},
                      status: {},
                      statusMessage: {},
                      name: {},
                      description: {},
                      tags: {
                        shape: 'Sy'
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          GetReferenceMetadata: {
            http: {
              method: 'GET',
              requestUri: '/referencestore/{referenceStoreId}/reference/{id}/metadata',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id', 'referenceStoreId'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                referenceStoreId: {
                  location: 'uri',
                  locationName: 'referenceStoreId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'arn', 'referenceStoreId', 'md5', 'creationTime', 'updateTime'],
              members: {
                id: {},
                arn: {},
                referenceStoreId: {},
                md5: {},
                status: {},
                name: {},
                description: {},
                creationTime: {
                  shape: 'S1y'
                },
                updateTime: {
                  shape: 'S1y'
                },
                files: {
                  type: 'structure',
                  members: {
                    source: {
                      shape: 'S5t'
                    },
                    index: {
                      shape: 'S5t'
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          GetReferenceStore: {
            http: {
              method: 'GET',
              requestUri: '/referencestore/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'arn', 'creationTime'],
              members: {
                id: {},
                arn: {},
                name: {},
                description: {},
                sseConfig: {
                  shape: 'S12'
                },
                creationTime: {
                  shape: 'S1y'
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          GetRun: {
            http: {
              method: 'GET',
              requestUri: '/run/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                'export': {
                  location: 'querystring',
                  locationName: 'export',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                id: {},
                status: {},
                workflowId: {},
                workflowType: {},
                runId: {},
                roleArn: {},
                name: {},
                runGroupId: {},
                priority: {
                  type: 'integer'
                },
                definition: {},
                digest: {},
                parameters: {
                  shape: 'S6y'
                },
                storageCapacity: {
                  type: 'integer'
                },
                outputUri: {},
                logLevel: {},
                resourceDigests: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                startedBy: {},
                creationTime: {
                  shape: 'S76'
                },
                startTime: {
                  shape: 'S76'
                },
                stopTime: {
                  shape: 'S76'
                },
                statusMessage: {},
                tags: {
                  shape: 'Sy'
                },
                accelerators: {},
                retentionMode: {},
                failureReason: {},
                logLocation: {
                  type: 'structure',
                  members: {
                    engineLogStream: {},
                    runLogStream: {}
                  }
                },
                uuid: {},
                runOutputUri: {},
                storageType: {},
                workflowOwnerId: {}
              }
            },
            endpoint: {
              hostPrefix: 'workflows-'
            }
          },
          GetRunGroup: {
            http: {
              method: 'GET',
              requestUri: '/runGroup/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                id: {},
                name: {},
                maxCpus: {
                  type: 'integer'
                },
                maxRuns: {
                  type: 'integer'
                },
                maxDuration: {
                  type: 'integer'
                },
                creationTime: {
                  shape: 'S7l'
                },
                tags: {
                  shape: 'Sy'
                },
                maxGpus: {
                  type: 'integer'
                }
              }
            },
            endpoint: {
              hostPrefix: 'workflows-'
            }
          },
          GetRunTask: {
            http: {
              method: 'GET',
              requestUri: '/run/{id}/task/{taskId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id', 'taskId'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                taskId: {
                  location: 'uri',
                  locationName: 'taskId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                taskId: {},
                status: {},
                name: {},
                cpus: {
                  type: 'integer'
                },
                memory: {
                  type: 'integer'
                },
                creationTime: {
                  shape: 'S7u'
                },
                startTime: {
                  shape: 'S7u'
                },
                stopTime: {
                  shape: 'S7u'
                },
                statusMessage: {},
                logStream: {},
                gpus: {
                  type: 'integer'
                },
                instanceType: {},
                failureReason: {}
              }
            },
            endpoint: {
              hostPrefix: 'workflows-'
            }
          },
          GetSequenceStore: {
            http: {
              method: 'GET',
              requestUri: '/sequencestore/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'arn', 'creationTime'],
              members: {
                id: {},
                arn: {},
                name: {},
                description: {},
                sseConfig: {
                  shape: 'S12'
                },
                creationTime: {
                  shape: 'S1y'
                },
                fallbackLocation: {},
                s3Access: {
                  type: 'structure',
                  members: {
                    s3Uri: {},
                    s3AccessPointArn: {}
                  }
                },
                eTagAlgorithmFamily: {}
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          GetShare: {
            http: {
              method: 'GET',
              requestUri: '/share/{shareId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['shareId'],
              members: {
                shareId: {
                  location: 'uri',
                  locationName: 'shareId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                share: {
                  shape: 'S86'
                }
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            }
          },
          GetVariantImportJob: {
            http: {
              method: 'GET',
              requestUri: '/import/variant/{jobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['jobId'],
              members: {
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'destinationName', 'roleArn', 'status', 'statusMessage', 'creationTime', 'updateTime', 'items', 'runLeftNormalization'],
              members: {
                id: {},
                destinationName: {},
                roleArn: {},
                status: {},
                statusMessage: {},
                creationTime: {
                  shape: 'S1i'
                },
                updateTime: {
                  shape: 'S41'
                },
                completionTime: {
                  shape: 'S42'
                },
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['source', 'jobStatus'],
                    members: {
                      source: {},
                      jobStatus: {},
                      statusMessage: {}
                    }
                  }
                },
                runLeftNormalization: {
                  type: 'boolean'
                },
                annotationFields: {
                  shape: 'S4k'
                }
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            }
          },
          GetVariantStore: {
            http: {
              method: 'GET',
              requestUri: '/variantStore/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'reference', 'status', 'storeArn', 'name', 'description', 'sseConfig', 'creationTime', 'updateTime', 'tags', 'statusMessage', 'storeSizeBytes'],
              members: {
                id: {},
                reference: {
                  shape: 'Su'
                },
                status: {},
                storeArn: {},
                name: {},
                description: {},
                sseConfig: {
                  shape: 'S12'
                },
                creationTime: {
                  shape: 'S1i'
                },
                updateTime: {
                  shape: 'S41'
                },
                tags: {
                  shape: 'Sy'
                },
                statusMessage: {},
                storeSizeBytes: {
                  type: 'long'
                }
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            }
          },
          GetWorkflow: {
            http: {
              method: 'GET',
              requestUri: '/workflow/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                type: {
                  location: 'querystring',
                  locationName: 'type'
                },
                'export': {
                  location: 'querystring',
                  locationName: 'export',
                  type: 'list',
                  member: {}
                },
                workflowOwnerId: {
                  location: 'querystring',
                  locationName: 'workflowOwnerId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                id: {},
                status: {},
                type: {},
                name: {},
                description: {},
                engine: {},
                definition: {},
                main: {},
                digest: {},
                parameterTemplate: {
                  shape: 'S2y'
                },
                storageCapacity: {
                  type: 'integer'
                },
                creationTime: {
                  shape: 'S8i'
                },
                statusMessage: {},
                tags: {
                  shape: 'Sy'
                },
                metadata: {
                  shape: 'S8k'
                },
                accelerators: {}
              }
            },
            endpoint: {
              hostPrefix: 'workflows-'
            }
          },
          ListAnnotationImportJobs: {
            http: {
              requestUri: '/import/annotations',
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
                ids: {
                  type: 'list',
                  member: {}
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                filter: {
                  type: 'structure',
                  members: {
                    status: {},
                    storeName: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                annotationImportJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'destinationName', 'versionName', 'roleArn', 'status', 'creationTime', 'updateTime'],
                    members: {
                      id: {},
                      destinationName: {},
                      versionName: {},
                      roleArn: {},
                      status: {},
                      creationTime: {
                        shape: 'S1i'
                      },
                      updateTime: {
                        shape: 'S41'
                      },
                      completionTime: {
                        shape: 'S42'
                      },
                      runLeftNormalization: {
                        type: 'boolean'
                      },
                      annotationFields: {
                        shape: 'S4k'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            }
          },
          ListAnnotationStoreVersions: {
            http: {
              requestUri: '/annotationStore/{name}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
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
                filter: {
                  type: 'structure',
                  members: {
                    status: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                annotationStoreVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['storeId', 'id', 'status', 'versionArn', 'name', 'versionName', 'description', 'creationTime', 'updateTime', 'statusMessage', 'versionSizeBytes'],
                    members: {
                      storeId: {},
                      id: {},
                      status: {},
                      versionArn: {},
                      name: {},
                      versionName: {},
                      description: {},
                      creationTime: {
                        shape: 'S1i'
                      },
                      updateTime: {
                        shape: 'S41'
                      },
                      statusMessage: {},
                      versionSizeBytes: {
                        type: 'long'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            }
          },
          ListAnnotationStores: {
            http: {
              requestUri: '/annotationStores',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ids: {
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
                filter: {
                  type: 'structure',
                  members: {
                    status: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                annotationStores: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'reference', 'status', 'storeArn', 'name', 'storeFormat', 'description', 'sseConfig', 'creationTime', 'updateTime', 'statusMessage', 'storeSizeBytes'],
                    members: {
                      id: {},
                      reference: {
                        shape: 'Su'
                      },
                      status: {},
                      storeArn: {},
                      name: {},
                      storeFormat: {},
                      description: {},
                      sseConfig: {
                        shape: 'S12'
                      },
                      creationTime: {
                        shape: 'S1i'
                      },
                      updateTime: {
                        shape: 'S41'
                      },
                      statusMessage: {},
                      storeSizeBytes: {
                        type: 'long'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            }
          },
          ListMultipartReadSetUploads: {
            http: {
              requestUri: '/sequencestore/{sequenceStoreId}/uploads',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sequenceStoreId'],
              members: {
                sequenceStoreId: {
                  location: 'uri',
                  locationName: 'sequenceStoreId'
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
                nextToken: {},
                uploads: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['sequenceStoreId', 'uploadId', 'sourceFileType', 'subjectId', 'sampleId', 'generatedFrom', 'referenceArn', 'creationTime'],
                    members: {
                      sequenceStoreId: {},
                      uploadId: {},
                      sourceFileType: {},
                      subjectId: {},
                      sampleId: {},
                      generatedFrom: {},
                      referenceArn: {},
                      name: {},
                      description: {},
                      tags: {
                        shape: 'Sy'
                      },
                      creationTime: {
                        shape: 'S1y'
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          ListReadSetActivationJobs: {
            http: {
              requestUri: '/sequencestore/{sequenceStoreId}/activationjobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sequenceStoreId'],
              members: {
                sequenceStoreId: {
                  location: 'uri',
                  locationName: 'sequenceStoreId'
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
                filter: {
                  type: 'structure',
                  members: {
                    status: {},
                    createdAfter: {
                      shape: 'S1y'
                    },
                    createdBefore: {
                      shape: 'S1y'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                activationJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'sequenceStoreId', 'status', 'creationTime'],
                    members: {
                      id: {},
                      sequenceStoreId: {},
                      status: {},
                      creationTime: {
                        shape: 'S1y'
                      },
                      completionTime: {
                        shape: 'S1y'
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          ListReadSetExportJobs: {
            http: {
              requestUri: '/sequencestore/{sequenceStoreId}/exportjobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sequenceStoreId'],
              members: {
                sequenceStoreId: {
                  location: 'uri',
                  locationName: 'sequenceStoreId'
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
                filter: {
                  type: 'structure',
                  members: {
                    status: {},
                    createdAfter: {
                      shape: 'S1y'
                    },
                    createdBefore: {
                      shape: 'S1y'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                exportJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'sequenceStoreId', 'destination', 'status', 'creationTime'],
                    members: {
                      id: {},
                      sequenceStoreId: {},
                      destination: {},
                      status: {},
                      creationTime: {
                        shape: 'S1y'
                      },
                      completionTime: {
                        shape: 'S1y'
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          ListReadSetImportJobs: {
            http: {
              requestUri: '/sequencestore/{sequenceStoreId}/importjobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sequenceStoreId'],
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
                sequenceStoreId: {
                  location: 'uri',
                  locationName: 'sequenceStoreId'
                },
                filter: {
                  type: 'structure',
                  members: {
                    status: {},
                    createdAfter: {
                      shape: 'S1y'
                    },
                    createdBefore: {
                      shape: 'S1y'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                importJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'sequenceStoreId', 'roleArn', 'status', 'creationTime'],
                    members: {
                      id: {},
                      sequenceStoreId: {},
                      roleArn: {},
                      status: {},
                      creationTime: {
                        shape: 'S1y'
                      },
                      completionTime: {
                        shape: 'S1y'
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          ListReadSetUploadParts: {
            http: {
              requestUri: '/sequencestore/{sequenceStoreId}/upload/{uploadId}/parts',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sequenceStoreId', 'uploadId', 'partSource'],
              members: {
                sequenceStoreId: {
                  location: 'uri',
                  locationName: 'sequenceStoreId'
                },
                uploadId: {
                  location: 'uri',
                  locationName: 'uploadId'
                },
                partSource: {},
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                filter: {
                  type: 'structure',
                  members: {
                    createdAfter: {
                      shape: 'S1y'
                    },
                    createdBefore: {
                      shape: 'S1y'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                parts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['partNumber', 'partSize', 'partSource', 'checksum'],
                    members: {
                      partNumber: {
                        type: 'integer'
                      },
                      partSize: {
                        type: 'long'
                      },
                      partSource: {},
                      checksum: {},
                      creationTime: {
                        shape: 'S1y'
                      },
                      lastUpdatedTime: {
                        shape: 'S1y'
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          ListReadSets: {
            http: {
              requestUri: '/sequencestore/{sequenceStoreId}/readsets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sequenceStoreId'],
              members: {
                sequenceStoreId: {
                  location: 'uri',
                  locationName: 'sequenceStoreId'
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
                filter: {
                  type: 'structure',
                  members: {
                    name: {},
                    status: {},
                    referenceArn: {},
                    createdAfter: {
                      shape: 'S1y'
                    },
                    createdBefore: {
                      shape: 'S1y'
                    },
                    sampleId: {},
                    subjectId: {},
                    generatedFrom: {},
                    creationType: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['readSets'],
              members: {
                nextToken: {},
                readSets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'arn', 'sequenceStoreId', 'status', 'fileType', 'creationTime'],
                    members: {
                      id: {},
                      arn: {},
                      sequenceStoreId: {},
                      subjectId: {},
                      sampleId: {},
                      status: {},
                      name: {},
                      description: {},
                      referenceArn: {},
                      fileType: {},
                      sequenceInformation: {
                        shape: 'S5r'
                      },
                      creationTime: {
                        shape: 'S1y'
                      },
                      statusMessage: {},
                      creationType: {},
                      etag: {
                        shape: 'S60'
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          ListReferenceImportJobs: {
            http: {
              requestUri: '/referencestore/{referenceStoreId}/importjobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['referenceStoreId'],
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
                referenceStoreId: {
                  location: 'uri',
                  locationName: 'referenceStoreId'
                },
                filter: {
                  type: 'structure',
                  members: {
                    status: {},
                    createdAfter: {
                      shape: 'S1y'
                    },
                    createdBefore: {
                      shape: 'S1y'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                importJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'referenceStoreId', 'roleArn', 'status', 'creationTime'],
                    members: {
                      id: {},
                      referenceStoreId: {},
                      roleArn: {},
                      status: {},
                      creationTime: {
                        shape: 'S1y'
                      },
                      completionTime: {
                        shape: 'S1y'
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          ListReferenceStores: {
            http: {
              requestUri: '/referencestores',
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
                filter: {
                  type: 'structure',
                  members: {
                    name: {},
                    createdAfter: {
                      shape: 'S1y'
                    },
                    createdBefore: {
                      shape: 'S1y'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['referenceStores'],
              members: {
                nextToken: {},
                referenceStores: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'id', 'creationTime'],
                    members: {
                      arn: {},
                      id: {},
                      name: {},
                      description: {},
                      sseConfig: {
                        shape: 'S12'
                      },
                      creationTime: {
                        shape: 'S1y'
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          ListReferences: {
            http: {
              requestUri: '/referencestore/{referenceStoreId}/references',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['referenceStoreId'],
              members: {
                referenceStoreId: {
                  location: 'uri',
                  locationName: 'referenceStoreId'
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
                filter: {
                  type: 'structure',
                  members: {
                    name: {},
                    md5: {},
                    createdAfter: {
                      shape: 'S1y'
                    },
                    createdBefore: {
                      shape: 'S1y'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['references'],
              members: {
                nextToken: {},
                references: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'arn', 'referenceStoreId', 'md5', 'creationTime', 'updateTime'],
                    members: {
                      id: {},
                      arn: {},
                      referenceStoreId: {},
                      md5: {},
                      status: {},
                      name: {},
                      description: {},
                      creationTime: {
                        shape: 'S1y'
                      },
                      updateTime: {
                        shape: 'S1y'
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          ListRunGroups: {
            http: {
              method: 'GET',
              requestUri: '/runGroup',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                name: {
                  location: 'querystring',
                  locationName: 'name'
                },
                startingToken: {
                  location: 'querystring',
                  locationName: 'startingToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
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
                      id: {},
                      name: {},
                      maxCpus: {
                        type: 'integer'
                      },
                      maxRuns: {
                        type: 'integer'
                      },
                      maxDuration: {
                        type: 'integer'
                      },
                      creationTime: {
                        shape: 'S7l'
                      },
                      maxGpus: {
                        type: 'integer'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'workflows-'
            }
          },
          ListRunTasks: {
            http: {
              method: 'GET',
              requestUri: '/run/{id}/task',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                status: {
                  location: 'querystring',
                  locationName: 'status'
                },
                startingToken: {
                  location: 'querystring',
                  locationName: 'startingToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
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
                      taskId: {},
                      status: {},
                      name: {},
                      cpus: {
                        type: 'integer'
                      },
                      memory: {
                        type: 'integer'
                      },
                      creationTime: {
                        shape: 'S7u'
                      },
                      startTime: {
                        shape: 'S7u'
                      },
                      stopTime: {
                        shape: 'S7u'
                      },
                      gpus: {
                        type: 'integer'
                      },
                      instanceType: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'workflows-'
            }
          },
          ListRuns: {
            http: {
              method: 'GET',
              requestUri: '/run',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                name: {
                  location: 'querystring',
                  locationName: 'name'
                },
                runGroupId: {
                  location: 'querystring',
                  locationName: 'runGroupId'
                },
                startingToken: {
                  location: 'querystring',
                  locationName: 'startingToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                status: {
                  location: 'querystring',
                  locationName: 'status'
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
                      id: {},
                      status: {},
                      workflowId: {},
                      name: {},
                      priority: {
                        type: 'integer'
                      },
                      storageCapacity: {
                        type: 'integer'
                      },
                      creationTime: {
                        shape: 'S76'
                      },
                      startTime: {
                        shape: 'S76'
                      },
                      stopTime: {
                        shape: 'S76'
                      },
                      storageType: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'workflows-'
            }
          },
          ListSequenceStores: {
            http: {
              requestUri: '/sequencestores',
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
                filter: {
                  type: 'structure',
                  members: {
                    name: {},
                    createdAfter: {
                      shape: 'S1y'
                    },
                    createdBefore: {
                      shape: 'S1y'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['sequenceStores'],
              members: {
                nextToken: {},
                sequenceStores: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'id', 'creationTime'],
                    members: {
                      arn: {},
                      id: {},
                      name: {},
                      description: {},
                      sseConfig: {
                        shape: 'S12'
                      },
                      creationTime: {
                        shape: 'S1y'
                      },
                      fallbackLocation: {},
                      eTagAlgorithmFamily: {}
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          ListShares: {
            http: {
              requestUri: '/shares',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceOwner'],
              members: {
                resourceOwner: {},
                filter: {
                  type: 'structure',
                  members: {
                    resourceArns: {
                      type: 'list',
                      member: {}
                    },
                    status: {
                      type: 'list',
                      member: {}
                    },
                    type: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['shares'],
              members: {
                shares: {
                  type: 'list',
                  member: {
                    shape: 'S86'
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
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
                  shape: 'Sy'
                }
              }
            },
            endpoint: {
              hostPrefix: 'tags-'
            }
          },
          ListVariantImportJobs: {
            http: {
              requestUri: '/import/variants',
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
                ids: {
                  type: 'list',
                  member: {}
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                filter: {
                  type: 'structure',
                  members: {
                    status: {},
                    storeName: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                variantImportJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'destinationName', 'roleArn', 'status', 'creationTime', 'updateTime'],
                    members: {
                      id: {},
                      destinationName: {},
                      roleArn: {},
                      status: {},
                      creationTime: {
                        shape: 'S1i'
                      },
                      updateTime: {
                        shape: 'S41'
                      },
                      completionTime: {
                        shape: 'S42'
                      },
                      runLeftNormalization: {
                        type: 'boolean'
                      },
                      annotationFields: {
                        shape: 'S4k'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            }
          },
          ListVariantStores: {
            http: {
              requestUri: '/variantStores',
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
                ids: {
                  type: 'list',
                  member: {}
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                filter: {
                  type: 'structure',
                  members: {
                    status: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                variantStores: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'reference', 'status', 'storeArn', 'name', 'description', 'sseConfig', 'creationTime', 'updateTime', 'statusMessage', 'storeSizeBytes'],
                    members: {
                      id: {},
                      reference: {
                        shape: 'Su'
                      },
                      status: {},
                      storeArn: {},
                      name: {},
                      description: {},
                      sseConfig: {
                        shape: 'S12'
                      },
                      creationTime: {
                        shape: 'S1i'
                      },
                      updateTime: {
                        shape: 'S41'
                      },
                      statusMessage: {},
                      storeSizeBytes: {
                        type: 'long'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            }
          },
          ListWorkflows: {
            http: {
              method: 'GET',
              requestUri: '/workflow',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                type: {
                  location: 'querystring',
                  locationName: 'type'
                },
                name: {
                  location: 'querystring',
                  locationName: 'name'
                },
                startingToken: {
                  location: 'querystring',
                  locationName: 'startingToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
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
                      id: {},
                      name: {},
                      status: {},
                      type: {},
                      digest: {},
                      creationTime: {
                        shape: 'S8i'
                      },
                      metadata: {
                        shape: 'S8k'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'workflows-'
            }
          },
          StartAnnotationImportJob: {
            http: {
              requestUri: '/import/annotation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['destinationName', 'roleArn', 'items'],
              members: {
                destinationName: {},
                roleArn: {},
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['source'],
                    members: {
                      source: {}
                    }
                  }
                },
                versionName: {},
                formatOptions: {
                  shape: 'S47'
                },
                runLeftNormalization: {
                  type: 'boolean'
                },
                annotationFields: {
                  shape: 'S4k'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobId'],
              members: {
                jobId: {}
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            }
          },
          StartReadSetActivationJob: {
            http: {
              requestUri: '/sequencestore/{sequenceStoreId}/activationjob',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sequenceStoreId', 'sources'],
              members: {
                sequenceStoreId: {
                  location: 'uri',
                  locationName: 'sequenceStoreId'
                },
                clientToken: {},
                sources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['readSetId'],
                    members: {
                      readSetId: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'sequenceStoreId', 'status', 'creationTime'],
              members: {
                id: {},
                sequenceStoreId: {},
                status: {},
                creationTime: {
                  shape: 'S1y'
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          StartReadSetExportJob: {
            http: {
              requestUri: '/sequencestore/{sequenceStoreId}/exportjob',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sequenceStoreId', 'destination', 'roleArn', 'sources'],
              members: {
                sequenceStoreId: {
                  location: 'uri',
                  locationName: 'sequenceStoreId'
                },
                destination: {},
                roleArn: {},
                clientToken: {},
                sources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['readSetId'],
                    members: {
                      readSetId: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'sequenceStoreId', 'destination', 'status', 'creationTime'],
              members: {
                id: {},
                sequenceStoreId: {},
                destination: {},
                status: {},
                creationTime: {
                  shape: 'S1y'
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          StartReadSetImportJob: {
            http: {
              requestUri: '/sequencestore/{sequenceStoreId}/importjob',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sequenceStoreId', 'roleArn', 'sources'],
              members: {
                sequenceStoreId: {
                  location: 'uri',
                  locationName: 'sequenceStoreId'
                },
                roleArn: {},
                clientToken: {},
                sources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['sourceFiles', 'sourceFileType', 'subjectId', 'sampleId'],
                    members: {
                      sourceFiles: {
                        shape: 'S5l'
                      },
                      sourceFileType: {},
                      subjectId: {},
                      sampleId: {},
                      generatedFrom: {},
                      referenceArn: {},
                      name: {},
                      description: {},
                      tags: {
                        shape: 'Sy'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'sequenceStoreId', 'roleArn', 'status', 'creationTime'],
              members: {
                id: {},
                sequenceStoreId: {},
                roleArn: {},
                status: {},
                creationTime: {
                  shape: 'S1y'
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          StartReferenceImportJob: {
            http: {
              requestUri: '/referencestore/{referenceStoreId}/importjob',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['referenceStoreId', 'roleArn', 'sources'],
              members: {
                referenceStoreId: {
                  location: 'uri',
                  locationName: 'referenceStoreId'
                },
                roleArn: {},
                clientToken: {},
                sources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['sourceFile', 'name'],
                    members: {
                      sourceFile: {},
                      name: {},
                      description: {},
                      tags: {
                        shape: 'Sy'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'referenceStoreId', 'roleArn', 'status', 'creationTime'],
              members: {
                id: {},
                referenceStoreId: {},
                roleArn: {},
                status: {},
                creationTime: {
                  shape: 'S1y'
                }
              }
            },
            endpoint: {
              hostPrefix: 'control-storage-'
            }
          },
          StartRun: {
            http: {
              requestUri: '/run',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['roleArn', 'requestId'],
              members: {
                workflowId: {},
                workflowType: {},
                runId: {},
                roleArn: {},
                name: {},
                runGroupId: {},
                priority: {
                  type: 'integer'
                },
                parameters: {
                  shape: 'S6y'
                },
                storageCapacity: {
                  type: 'integer'
                },
                outputUri: {},
                logLevel: {},
                tags: {
                  shape: 'Sy'
                },
                requestId: {
                  idempotencyToken: true
                },
                retentionMode: {},
                storageType: {},
                workflowOwnerId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                id: {},
                status: {},
                tags: {
                  shape: 'Sy'
                },
                uuid: {},
                runOutputUri: {}
              }
            },
            endpoint: {
              hostPrefix: 'workflows-'
            }
          },
          StartVariantImportJob: {
            http: {
              requestUri: '/import/variant',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['destinationName', 'roleArn', 'items'],
              members: {
                destinationName: {},
                roleArn: {},
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['source'],
                    members: {
                      source: {}
                    }
                  }
                },
                runLeftNormalization: {
                  type: 'boolean'
                },
                annotationFields: {
                  shape: 'S4k'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobId'],
              members: {
                jobId: {}
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}',
              responseCode: 204
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
                  type: 'map',
                  key: {},
                  value: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'tags-'
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resourceArn}',
              responseCode: 204
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
            endpoint: {
              hostPrefix: 'tags-'
            },
            idempotent: true
          },
          UpdateAnnotationStore: {
            http: {
              requestUri: '/annotationStore/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                description: {}
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'reference', 'status', 'name', 'description', 'creationTime', 'updateTime'],
              members: {
                id: {},
                reference: {
                  shape: 'Su'
                },
                status: {},
                name: {},
                description: {},
                creationTime: {
                  shape: 'S1i'
                },
                updateTime: {
                  shape: 'S41'
                },
                storeOptions: {
                  shape: 'S16'
                },
                storeFormat: {}
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            }
          },
          UpdateAnnotationStoreVersion: {
            http: {
              requestUri: '/annotationStore/{name}/version/{versionName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'versionName'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                versionName: {
                  location: 'uri',
                  locationName: 'versionName'
                },
                description: {}
              }
            },
            output: {
              type: 'structure',
              required: ['storeId', 'id', 'status', 'name', 'versionName', 'description', 'creationTime', 'updateTime'],
              members: {
                storeId: {},
                id: {},
                status: {},
                name: {},
                versionName: {},
                description: {},
                creationTime: {
                  shape: 'S1i'
                },
                updateTime: {
                  shape: 'S41'
                }
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            }
          },
          UpdateRunGroup: {
            http: {
              requestUri: '/runGroup/{id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                name: {},
                maxCpus: {
                  type: 'integer'
                },
                maxRuns: {
                  type: 'integer'
                },
                maxDuration: {
                  type: 'integer'
                },
                maxGpus: {
                  type: 'integer'
                }
              }
            },
            endpoint: {
              hostPrefix: 'workflows-'
            }
          },
          UpdateVariantStore: {
            http: {
              requestUri: '/variantStore/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                description: {}
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'reference', 'status', 'name', 'description', 'creationTime', 'updateTime'],
              members: {
                id: {},
                reference: {
                  shape: 'Su'
                },
                status: {},
                name: {},
                description: {},
                creationTime: {
                  shape: 'S1i'
                },
                updateTime: {
                  shape: 'S41'
                }
              }
            },
            endpoint: {
              hostPrefix: 'analytics-'
            }
          },
          UpdateWorkflow: {
            http: {
              requestUri: '/workflow/{id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                name: {},
                description: {}
              }
            },
            endpoint: {
              hostPrefix: 'workflows-'
            }
          },
          UploadReadSetPart: {
            http: {
              method: 'PUT',
              requestUri: '/sequencestore/{sequenceStoreId}/upload/{uploadId}/part',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sequenceStoreId', 'uploadId', 'partSource', 'partNumber', 'payload'],
              members: {
                sequenceStoreId: {
                  location: 'uri',
                  locationName: 'sequenceStoreId'
                },
                uploadId: {
                  location: 'uri',
                  locationName: 'uploadId'
                },
                partSource: {
                  location: 'querystring',
                  locationName: 'partSource'
                },
                partNumber: {
                  location: 'querystring',
                  locationName: 'partNumber',
                  type: 'integer'
                },
                payload: {
                  type: 'blob',
                  requiresLength: true,
                  streaming: true
                }
              },
              payload: 'payload'
            },
            output: {
              type: 'structure',
              required: ['checksum'],
              members: {
                checksum: {}
              }
            },
            authtype: 'v4-unsigned-body',
            endpoint: {
              hostPrefix: 'storage-'
            }
          }
        },
        shapes: {
          Su: {
            type: 'structure',
            members: {
              referenceArn: {}
            },
            union: true
          },
          Sy: {
            type: 'map',
            key: {},
            value: {}
          },
          S12: {
            type: 'structure',
            required: ['type'],
            members: {
              type: {},
              keyArn: {}
            }
          },
          S16: {
            type: 'structure',
            members: {
              tsvStoreOptions: {
                type: 'structure',
                members: {
                  annotationType: {},
                  formatToHeader: {
                    shape: 'S19'
                  },
                  schema: {
                    type: 'list',
                    member: {
                      shape: 'S1d'
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
          S1d: {
            type: 'map',
            key: {},
            value: {}
          },
          S1i: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S1k: {
            type: 'structure',
            members: {
              tsvVersionOptions: {
                type: 'structure',
                members: {
                  annotationType: {},
                  formatToHeader: {
                    shape: 'S19'
                  },
                  schema: {
                    type: 'list',
                    member: {
                      shape: 'S1d'
                    }
                  }
                }
              }
            },
            union: true
          },
          S1y: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S2y: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                description: {},
                optional: {
                  type: 'boolean'
                }
              }
            }
          },
          S41: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S42: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S47: {
            type: 'structure',
            members: {
              tsvOptions: {
                type: 'structure',
                members: {
                  readOptions: {
                    type: 'structure',
                    members: {
                      sep: {},
                      encoding: {},
                      quote: {},
                      quoteAll: {
                        type: 'boolean'
                      },
                      escape: {},
                      escapeQuotes: {
                        type: 'boolean'
                      },
                      comment: {},
                      header: {
                        type: 'boolean'
                      },
                      lineSep: {}
                    }
                  }
                }
              },
              vcfOptions: {
                type: 'structure',
                members: {
                  ignoreQualField: {
                    type: 'boolean'
                  },
                  ignoreFilterField: {
                    type: 'boolean'
                  }
                }
              }
            },
            union: true
          },
          S4k: {
            type: 'map',
            key: {},
            value: {}
          },
          S5l: {
            type: 'structure',
            required: ['source1'],
            members: {
              source1: {},
              source2: {}
            }
          },
          S5r: {
            type: 'structure',
            members: {
              totalReadCount: {
                type: 'long'
              },
              totalBaseCount: {
                type: 'long'
              },
              generatedFrom: {},
              alignment: {}
            }
          },
          S5t: {
            type: 'structure',
            members: {
              totalParts: {
                type: 'integer'
              },
              partSize: {
                type: 'long'
              },
              contentLength: {
                type: 'long'
              },
              s3Access: {
                type: 'structure',
                members: {
                  s3Uri: {}
                }
              }
            }
          },
          S60: {
            type: 'structure',
            members: {
              algorithm: {},
              source1: {},
              source2: {}
            }
          },
          S6y: {
            type: 'structure',
            members: {},
            document: true
          },
          S76: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S7l: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S7u: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S86: {
            type: 'structure',
            members: {
              shareId: {},
              resourceArn: {},
              resourceId: {},
              principalSubscriber: {},
              ownerId: {},
              status: {},
              statusMessage: {},
              shareName: {},
              creationTime: {
                shape: 'S1i'
              },
              updateTime: {
                shape: 'S41'
              }
            }
          },
          S8i: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S8k: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=339f51daf647d07f99c0442ab5c5bd665da40476.js.map