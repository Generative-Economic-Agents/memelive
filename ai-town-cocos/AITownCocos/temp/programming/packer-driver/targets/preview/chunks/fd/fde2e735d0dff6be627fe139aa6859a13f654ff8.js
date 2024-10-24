System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2023-07-19',
          endpointPrefix: 'medical-imaging',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'AWS Health Imaging',
          serviceId: 'Medical Imaging',
          signatureVersion: 'v4',
          signingName: 'medical-imaging',
          uid: 'medical-imaging-2023-07-19'
        },
        operations: {
          CopyImageSet: {
            http: {
              requestUri: '/datastore/{datastoreId}/imageSet/{sourceImageSetId}/copyImageSet',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['datastoreId', 'sourceImageSetId', 'copyImageSetInformation'],
              members: {
                datastoreId: {
                  location: 'uri',
                  locationName: 'datastoreId'
                },
                sourceImageSetId: {
                  location: 'uri',
                  locationName: 'sourceImageSetId'
                },
                copyImageSetInformation: {
                  type: 'structure',
                  required: ['sourceImageSet'],
                  members: {
                    sourceImageSet: {
                      type: 'structure',
                      required: ['latestVersionId'],
                      members: {
                        latestVersionId: {}
                      }
                    },
                    destinationImageSet: {
                      type: 'structure',
                      required: ['imageSetId', 'latestVersionId'],
                      members: {
                        imageSetId: {},
                        latestVersionId: {}
                      }
                    }
                  }
                }
              },
              payload: 'copyImageSetInformation'
            },
            output: {
              type: 'structure',
              required: ['datastoreId', 'sourceImageSetProperties', 'destinationImageSetProperties'],
              members: {
                datastoreId: {},
                sourceImageSetProperties: {
                  type: 'structure',
                  required: ['imageSetId', 'latestVersionId'],
                  members: {
                    imageSetId: {},
                    latestVersionId: {},
                    imageSetState: {},
                    imageSetWorkflowStatus: {},
                    createdAt: {
                      type: 'timestamp'
                    },
                    updatedAt: {
                      type: 'timestamp'
                    },
                    imageSetArn: {}
                  }
                },
                destinationImageSetProperties: {
                  type: 'structure',
                  required: ['imageSetId', 'latestVersionId'],
                  members: {
                    imageSetId: {},
                    latestVersionId: {},
                    imageSetState: {},
                    imageSetWorkflowStatus: {},
                    createdAt: {
                      type: 'timestamp'
                    },
                    updatedAt: {
                      type: 'timestamp'
                    },
                    imageSetArn: {}
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'runtime-'
            }
          },
          CreateDatastore: {
            http: {
              requestUri: '/datastore',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['clientToken'],
              members: {
                datastoreName: {},
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'Si'
                },
                kmsKeyArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['datastoreId', 'datastoreStatus'],
              members: {
                datastoreId: {},
                datastoreStatus: {}
              }
            },
            idempotent: true
          },
          DeleteDatastore: {
            http: {
              method: 'DELETE',
              requestUri: '/datastore/{datastoreId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['datastoreId'],
              members: {
                datastoreId: {
                  location: 'uri',
                  locationName: 'datastoreId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['datastoreId', 'datastoreStatus'],
              members: {
                datastoreId: {},
                datastoreStatus: {}
              }
            },
            idempotent: true
          },
          DeleteImageSet: {
            http: {
              requestUri: '/datastore/{datastoreId}/imageSet/{imageSetId}/deleteImageSet',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['datastoreId', 'imageSetId'],
              members: {
                datastoreId: {
                  location: 'uri',
                  locationName: 'datastoreId'
                },
                imageSetId: {
                  location: 'uri',
                  locationName: 'imageSetId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['datastoreId', 'imageSetId', 'imageSetState', 'imageSetWorkflowStatus'],
              members: {
                datastoreId: {},
                imageSetId: {},
                imageSetState: {},
                imageSetWorkflowStatus: {}
              }
            },
            endpoint: {
              hostPrefix: 'runtime-'
            },
            idempotent: true
          },
          GetDICOMImportJob: {
            http: {
              method: 'GET',
              requestUri: '/getDICOMImportJob/datastore/{datastoreId}/job/{jobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['datastoreId', 'jobId'],
              members: {
                datastoreId: {
                  location: 'uri',
                  locationName: 'datastoreId'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobProperties'],
              members: {
                jobProperties: {
                  type: 'structure',
                  required: ['jobId', 'jobName', 'jobStatus', 'datastoreId', 'dataAccessRoleArn', 'inputS3Uri', 'outputS3Uri'],
                  members: {
                    jobId: {},
                    jobName: {},
                    jobStatus: {},
                    datastoreId: {},
                    dataAccessRoleArn: {},
                    endedAt: {
                      type: 'timestamp'
                    },
                    submittedAt: {
                      type: 'timestamp'
                    },
                    inputS3Uri: {},
                    outputS3Uri: {},
                    message: {}
                  }
                }
              }
            }
          },
          GetDatastore: {
            http: {
              method: 'GET',
              requestUri: '/datastore/{datastoreId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['datastoreId'],
              members: {
                datastoreId: {
                  location: 'uri',
                  locationName: 'datastoreId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['datastoreProperties'],
              members: {
                datastoreProperties: {
                  type: 'structure',
                  required: ['datastoreId', 'datastoreName', 'datastoreStatus'],
                  members: {
                    datastoreId: {},
                    datastoreName: {},
                    datastoreStatus: {},
                    kmsKeyArn: {},
                    datastoreArn: {},
                    createdAt: {
                      type: 'timestamp'
                    },
                    updatedAt: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          GetImageFrame: {
            http: {
              requestUri: '/datastore/{datastoreId}/imageSet/{imageSetId}/getImageFrame',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['datastoreId', 'imageSetId', 'imageFrameInformation'],
              members: {
                datastoreId: {
                  location: 'uri',
                  locationName: 'datastoreId'
                },
                imageSetId: {
                  location: 'uri',
                  locationName: 'imageSetId'
                },
                imageFrameInformation: {
                  type: 'structure',
                  required: ['imageFrameId'],
                  members: {
                    imageFrameId: {}
                  }
                }
              },
              payload: 'imageFrameInformation'
            },
            output: {
              type: 'structure',
              required: ['imageFrameBlob'],
              members: {
                imageFrameBlob: {
                  type: 'blob',
                  streaming: true
                },
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                }
              },
              payload: 'imageFrameBlob'
            },
            endpoint: {
              hostPrefix: 'runtime-'
            }
          },
          GetImageSet: {
            http: {
              requestUri: '/datastore/{datastoreId}/imageSet/{imageSetId}/getImageSet',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['datastoreId', 'imageSetId'],
              members: {
                datastoreId: {
                  location: 'uri',
                  locationName: 'datastoreId'
                },
                imageSetId: {
                  location: 'uri',
                  locationName: 'imageSetId'
                },
                versionId: {
                  location: 'querystring',
                  locationName: 'version'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['datastoreId', 'imageSetId', 'versionId', 'imageSetState'],
              members: {
                datastoreId: {},
                imageSetId: {},
                versionId: {},
                imageSetState: {},
                imageSetWorkflowStatus: {},
                createdAt: {
                  type: 'timestamp'
                },
                updatedAt: {
                  type: 'timestamp'
                },
                deletedAt: {
                  type: 'timestamp'
                },
                message: {},
                imageSetArn: {}
              }
            },
            endpoint: {
              hostPrefix: 'runtime-'
            }
          },
          GetImageSetMetadata: {
            http: {
              requestUri: '/datastore/{datastoreId}/imageSet/{imageSetId}/getImageSetMetadata',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['datastoreId', 'imageSetId'],
              members: {
                datastoreId: {
                  location: 'uri',
                  locationName: 'datastoreId'
                },
                imageSetId: {
                  location: 'uri',
                  locationName: 'imageSetId'
                },
                versionId: {
                  location: 'querystring',
                  locationName: 'version'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['imageSetMetadataBlob'],
              members: {
                imageSetMetadataBlob: {
                  type: 'blob',
                  streaming: true
                },
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                contentEncoding: {
                  location: 'header',
                  locationName: 'Content-Encoding'
                }
              },
              payload: 'imageSetMetadataBlob'
            },
            endpoint: {
              hostPrefix: 'runtime-'
            }
          },
          ListDICOMImportJobs: {
            http: {
              method: 'GET',
              requestUri: '/listDICOMImportJobs/datastore/{datastoreId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['datastoreId'],
              members: {
                datastoreId: {
                  location: 'uri',
                  locationName: 'datastoreId'
                },
                jobStatus: {
                  location: 'querystring',
                  locationName: 'jobStatus'
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
              required: ['jobSummaries'],
              members: {
                jobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['jobId', 'jobName', 'jobStatus', 'datastoreId'],
                    members: {
                      jobId: {},
                      jobName: {},
                      jobStatus: {},
                      datastoreId: {},
                      dataAccessRoleArn: {},
                      endedAt: {
                        type: 'timestamp'
                      },
                      submittedAt: {
                        type: 'timestamp'
                      },
                      message: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDatastores: {
            http: {
              method: 'GET',
              requestUri: '/datastore',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                datastoreStatus: {
                  location: 'querystring',
                  locationName: 'datastoreStatus'
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
              members: {
                datastoreSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['datastoreId', 'datastoreName', 'datastoreStatus'],
                    members: {
                      datastoreId: {},
                      datastoreName: {},
                      datastoreStatus: {},
                      datastoreArn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      updatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListImageSetVersions: {
            http: {
              requestUri: '/datastore/{datastoreId}/imageSet/{imageSetId}/listImageSetVersions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['datastoreId', 'imageSetId'],
              members: {
                datastoreId: {
                  location: 'uri',
                  locationName: 'datastoreId'
                },
                imageSetId: {
                  location: 'uri',
                  locationName: 'imageSetId'
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
              required: ['imageSetPropertiesList'],
              members: {
                imageSetPropertiesList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['imageSetId', 'versionId', 'imageSetState'],
                    members: {
                      imageSetId: {},
                      versionId: {},
                      imageSetState: {},
                      ImageSetWorkflowStatus: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      updatedAt: {
                        type: 'timestamp'
                      },
                      deletedAt: {
                        type: 'timestamp'
                      },
                      message: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'runtime-'
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
                  shape: 'Si'
                }
              }
            }
          },
          SearchImageSets: {
            http: {
              requestUri: '/datastore/{datastoreId}/searchImageSets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['datastoreId'],
              members: {
                datastoreId: {
                  location: 'uri',
                  locationName: 'datastoreId'
                },
                searchCriteria: {
                  type: 'structure',
                  members: {
                    filters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['values', 'operator'],
                        members: {
                          values: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                DICOMPatientId: {
                                  shape: 'S23'
                                },
                                DICOMAccessionNumber: {
                                  shape: 'S24'
                                },
                                DICOMStudyId: {
                                  shape: 'S25'
                                },
                                DICOMStudyInstanceUID: {
                                  shape: 'S26'
                                },
                                DICOMSeriesInstanceUID: {
                                  shape: 'S27'
                                },
                                createdAt: {
                                  type: 'timestamp'
                                },
                                updatedAt: {
                                  type: 'timestamp'
                                },
                                DICOMStudyDateAndTime: {
                                  type: 'structure',
                                  required: ['DICOMStudyDate'],
                                  members: {
                                    DICOMStudyDate: {
                                      shape: 'S29'
                                    },
                                    DICOMStudyTime: {
                                      shape: 'S2a'
                                    }
                                  }
                                }
                              },
                              union: true
                            }
                          },
                          operator: {}
                        }
                      }
                    },
                    sort: {
                      shape: 'S2c'
                    }
                  },
                  sensitive: true
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
              },
              payload: 'searchCriteria'
            },
            output: {
              type: 'structure',
              required: ['imageSetsMetadataSummaries'],
              members: {
                imageSetsMetadataSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['imageSetId'],
                    members: {
                      imageSetId: {},
                      version: {
                        type: 'integer'
                      },
                      createdAt: {
                        type: 'timestamp'
                      },
                      updatedAt: {
                        type: 'timestamp'
                      },
                      DICOMTags: {
                        type: 'structure',
                        members: {
                          DICOMPatientId: {
                            shape: 'S23'
                          },
                          DICOMPatientName: {
                            type: 'string',
                            sensitive: true
                          },
                          DICOMPatientBirthDate: {
                            type: 'string',
                            sensitive: true
                          },
                          DICOMPatientSex: {
                            type: 'string',
                            sensitive: true
                          },
                          DICOMStudyInstanceUID: {
                            shape: 'S26'
                          },
                          DICOMStudyId: {
                            shape: 'S25'
                          },
                          DICOMStudyDescription: {
                            type: 'string',
                            sensitive: true
                          },
                          DICOMNumberOfStudyRelatedSeries: {
                            type: 'integer'
                          },
                          DICOMNumberOfStudyRelatedInstances: {
                            type: 'integer'
                          },
                          DICOMAccessionNumber: {
                            shape: 'S24'
                          },
                          DICOMSeriesInstanceUID: {
                            shape: 'S27'
                          },
                          DICOMSeriesModality: {
                            type: 'string',
                            sensitive: true
                          },
                          DICOMSeriesBodyPart: {
                            type: 'string',
                            sensitive: true
                          },
                          DICOMSeriesNumber: {
                            type: 'integer',
                            sensitive: true
                          },
                          DICOMStudyDate: {
                            shape: 'S29'
                          },
                          DICOMStudyTime: {
                            shape: 'S2a'
                          }
                        }
                      }
                    }
                  }
                },
                sort: {
                  shape: 'S2c'
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'runtime-'
            }
          },
          StartDICOMImportJob: {
            http: {
              requestUri: '/startDICOMImportJob/datastore/{datastoreId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['dataAccessRoleArn', 'clientToken', 'datastoreId', 'inputS3Uri', 'outputS3Uri'],
              members: {
                jobName: {},
                dataAccessRoleArn: {},
                clientToken: {
                  idempotencyToken: true
                },
                datastoreId: {
                  location: 'uri',
                  locationName: 'datastoreId'
                },
                inputS3Uri: {},
                outputS3Uri: {},
                inputOwnerAccountId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['datastoreId', 'jobId', 'jobStatus', 'submittedAt'],
              members: {
                datastoreId: {},
                jobId: {},
                jobStatus: {},
                submittedAt: {
                  type: 'timestamp'
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
                  shape: 'Si'
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
          UpdateImageSetMetadata: {
            http: {
              requestUri: '/datastore/{datastoreId}/imageSet/{imageSetId}/updateImageSetMetadata',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['datastoreId', 'imageSetId', 'latestVersionId', 'updateImageSetMetadataUpdates'],
              members: {
                datastoreId: {
                  location: 'uri',
                  locationName: 'datastoreId'
                },
                imageSetId: {
                  location: 'uri',
                  locationName: 'imageSetId'
                },
                latestVersionId: {
                  location: 'querystring',
                  locationName: 'latestVersion'
                },
                updateImageSetMetadataUpdates: {
                  type: 'structure',
                  members: {
                    DICOMUpdates: {
                      type: 'structure',
                      members: {
                        removableAttributes: {
                          shape: 'S35'
                        },
                        updatableAttributes: {
                          shape: 'S35'
                        }
                      }
                    }
                  },
                  union: true
                }
              },
              payload: 'updateImageSetMetadataUpdates'
            },
            output: {
              type: 'structure',
              required: ['datastoreId', 'imageSetId', 'latestVersionId', 'imageSetState'],
              members: {
                datastoreId: {},
                imageSetId: {},
                latestVersionId: {},
                imageSetState: {},
                imageSetWorkflowStatus: {},
                createdAt: {
                  type: 'timestamp'
                },
                updatedAt: {
                  type: 'timestamp'
                },
                message: {}
              }
            },
            endpoint: {
              hostPrefix: 'runtime-'
            }
          }
        },
        shapes: {
          Si: {
            type: 'map',
            key: {},
            value: {}
          },
          S23: {
            type: 'string',
            sensitive: true
          },
          S24: {
            type: 'string',
            sensitive: true
          },
          S25: {
            type: 'string',
            sensitive: true
          },
          S26: {
            type: 'string',
            sensitive: true
          },
          S27: {
            type: 'string',
            sensitive: true
          },
          S29: {
            type: 'string',
            sensitive: true
          },
          S2a: {
            type: 'string',
            sensitive: true
          },
          S2c: {
            type: 'structure',
            required: ['sortOrder', 'sortField'],
            members: {
              sortOrder: {},
              sortField: {}
            }
          },
          S35: {
            type: 'blob',
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=fde2e735d0dff6be627fe139aa6859a13f654ff8.js.map