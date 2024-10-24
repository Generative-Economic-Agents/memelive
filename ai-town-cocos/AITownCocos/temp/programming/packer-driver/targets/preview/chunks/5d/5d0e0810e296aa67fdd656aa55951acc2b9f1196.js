System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-05-13',
          endpointPrefix: 'runtime.sagemaker',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon SageMaker Runtime',
          serviceId: 'SageMaker Runtime',
          signatureVersion: 'v4',
          signingName: 'sagemaker',
          uid: 'runtime.sagemaker-2017-05-13'
        },
        operations: {
          InvokeEndpoint: {
            http: {
              requestUri: '/endpoints/{EndpointName}/invocations'
            },
            input: {
              type: 'structure',
              required: ['EndpointName', 'Body'],
              members: {
                EndpointName: {
                  location: 'uri',
                  locationName: 'EndpointName'
                },
                Body: {
                  shape: 'S3'
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                Accept: {
                  location: 'header',
                  locationName: 'Accept'
                },
                CustomAttributes: {
                  shape: 'S5',
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-Custom-Attributes'
                },
                TargetModel: {
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-Target-Model'
                },
                TargetVariant: {
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-Target-Variant'
                },
                TargetContainerHostname: {
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-Target-Container-Hostname'
                },
                InferenceId: {
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-Inference-Id'
                },
                EnableExplanations: {
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-Enable-Explanations'
                },
                InferenceComponentName: {
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-Inference-Component'
                }
              },
              payload: 'Body'
            },
            output: {
              type: 'structure',
              required: ['Body'],
              members: {
                Body: {
                  shape: 'S3'
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                InvokedProductionVariant: {
                  location: 'header',
                  locationName: 'x-Amzn-Invoked-Production-Variant'
                },
                CustomAttributes: {
                  shape: 'S5',
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-Custom-Attributes'
                }
              },
              payload: 'Body'
            }
          },
          InvokeEndpointAsync: {
            http: {
              requestUri: '/endpoints/{EndpointName}/async-invocations',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['EndpointName', 'InputLocation'],
              members: {
                EndpointName: {
                  location: 'uri',
                  locationName: 'EndpointName'
                },
                ContentType: {
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-Content-Type'
                },
                Accept: {
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-Accept'
                },
                CustomAttributes: {
                  shape: 'S5',
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-Custom-Attributes'
                },
                InferenceId: {
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-Inference-Id'
                },
                InputLocation: {
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-InputLocation'
                },
                RequestTTLSeconds: {
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-RequestTTLSeconds',
                  type: 'integer'
                },
                InvocationTimeoutSeconds: {
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-InvocationTimeoutSeconds',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InferenceId: {},
                OutputLocation: {
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-OutputLocation'
                },
                FailureLocation: {
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-FailureLocation'
                }
              }
            }
          },
          InvokeEndpointWithResponseStream: {
            http: {
              requestUri: '/endpoints/{EndpointName}/invocations-response-stream'
            },
            input: {
              type: 'structure',
              required: ['EndpointName', 'Body'],
              members: {
                EndpointName: {
                  location: 'uri',
                  locationName: 'EndpointName'
                },
                Body: {
                  shape: 'S3'
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                Accept: {
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-Accept'
                },
                CustomAttributes: {
                  shape: 'S5',
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-Custom-Attributes'
                },
                TargetVariant: {
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-Target-Variant'
                },
                TargetContainerHostname: {
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-Target-Container-Hostname'
                },
                InferenceId: {
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-Inference-Id'
                },
                InferenceComponentName: {
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-Inference-Component'
                }
              },
              payload: 'Body'
            },
            output: {
              type: 'structure',
              required: ['Body'],
              members: {
                Body: {
                  type: 'structure',
                  members: {
                    PayloadPart: {
                      type: 'structure',
                      members: {
                        Bytes: {
                          eventpayload: true,
                          type: 'blob',
                          sensitive: true
                        }
                      },
                      event: true
                    },
                    ModelStreamError: {
                      type: 'structure',
                      members: {
                        Message: {},
                        ErrorCode: {}
                      },
                      exception: true,
                      synthetic: true
                    },
                    InternalStreamFailure: {
                      type: 'structure',
                      members: {
                        Message: {}
                      },
                      exception: true,
                      fault: true,
                      synthetic: true
                    }
                  },
                  eventstream: true
                },
                ContentType: {
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-Content-Type'
                },
                InvokedProductionVariant: {
                  location: 'header',
                  locationName: 'x-Amzn-Invoked-Production-Variant'
                },
                CustomAttributes: {
                  shape: 'S5',
                  location: 'header',
                  locationName: 'X-Amzn-SageMaker-Custom-Attributes'
                }
              },
              payload: 'Body'
            }
          }
        },
        shapes: {
          S3: {
            type: 'blob',
            sensitive: true
          },
          S5: {
            type: 'string',
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=5d0e0810e296aa67fdd656aa55951acc2b9f1196.js.map