System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2023-09-30',
          endpointPrefix: 'bedrock-runtime',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Bedrock Runtime',
          serviceId: 'Bedrock Runtime',
          signatureVersion: 'v4',
          signingName: 'bedrock',
          uid: 'bedrock-runtime-2023-09-30'
        },
        operations: {
          Converse: {
            http: {
              requestUri: '/model/{modelId}/converse',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['modelId', 'messages'],
              members: {
                modelId: {
                  location: 'uri',
                  locationName: 'modelId'
                },
                messages: {
                  shape: 'S3'
                },
                system: {
                  shape: 'Sl'
                },
                inferenceConfig: {
                  shape: 'So'
                },
                toolConfig: {
                  shape: 'St'
                },
                additionalModelRequestFields: {
                  shape: 'Sg'
                },
                additionalModelResponseFieldPaths: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['output', 'stopReason', 'usage', 'metrics'],
              members: {
                output: {
                  type: 'structure',
                  members: {
                    message: {
                      shape: 'S4'
                    }
                  },
                  union: true
                },
                stopReason: {},
                usage: {
                  shape: 'S17'
                },
                metrics: {
                  type: 'structure',
                  required: ['latencyMs'],
                  members: {
                    latencyMs: {
                      type: 'long'
                    }
                  }
                },
                additionalModelResponseFields: {
                  shape: 'Sg'
                }
              }
            }
          },
          ConverseStream: {
            http: {
              requestUri: '/model/{modelId}/converse-stream',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['modelId', 'messages'],
              members: {
                modelId: {
                  location: 'uri',
                  locationName: 'modelId'
                },
                messages: {
                  shape: 'S3'
                },
                system: {
                  shape: 'Sl'
                },
                inferenceConfig: {
                  shape: 'So'
                },
                toolConfig: {
                  shape: 'St'
                },
                additionalModelRequestFields: {
                  shape: 'Sg'
                },
                additionalModelResponseFieldPaths: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                stream: {
                  type: 'structure',
                  members: {
                    messageStart: {
                      type: 'structure',
                      required: ['role'],
                      members: {
                        role: {}
                      },
                      event: true
                    },
                    contentBlockStart: {
                      type: 'structure',
                      required: ['start', 'contentBlockIndex'],
                      members: {
                        start: {
                          type: 'structure',
                          members: {
                            toolUse: {
                              type: 'structure',
                              required: ['toolUseId', 'name'],
                              members: {
                                toolUseId: {},
                                name: {}
                              }
                            }
                          },
                          union: true
                        },
                        contentBlockIndex: {
                          type: 'integer'
                        }
                      },
                      event: true
                    },
                    contentBlockDelta: {
                      type: 'structure',
                      required: ['delta', 'contentBlockIndex'],
                      members: {
                        delta: {
                          type: 'structure',
                          members: {
                            text: {},
                            toolUse: {
                              type: 'structure',
                              required: ['input'],
                              members: {
                                input: {}
                              }
                            }
                          },
                          union: true
                        },
                        contentBlockIndex: {
                          type: 'integer'
                        }
                      },
                      event: true
                    },
                    contentBlockStop: {
                      type: 'structure',
                      required: ['contentBlockIndex'],
                      members: {
                        contentBlockIndex: {
                          type: 'integer'
                        }
                      },
                      event: true
                    },
                    messageStop: {
                      type: 'structure',
                      required: ['stopReason'],
                      members: {
                        stopReason: {},
                        additionalModelResponseFields: {
                          shape: 'Sg'
                        }
                      },
                      event: true
                    },
                    metadata: {
                      type: 'structure',
                      required: ['usage', 'metrics'],
                      members: {
                        usage: {
                          shape: 'S17'
                        },
                        metrics: {
                          type: 'structure',
                          required: ['latencyMs'],
                          members: {
                            latencyMs: {
                              type: 'long'
                            }
                          }
                        }
                      },
                      event: true
                    },
                    internalServerException: {
                      shape: 'S1u'
                    },
                    modelStreamErrorException: {
                      shape: 'S1w'
                    },
                    validationException: {
                      shape: 'S1y'
                    },
                    throttlingException: {
                      shape: 'S1z'
                    }
                  },
                  eventstream: true
                }
              },
              payload: 'stream'
            }
          },
          InvokeModel: {
            http: {
              requestUri: '/model/{modelId}/invoke',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['body', 'modelId'],
              members: {
                body: {
                  shape: 'S21'
                },
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                accept: {
                  location: 'header',
                  locationName: 'Accept'
                },
                modelId: {
                  location: 'uri',
                  locationName: 'modelId'
                },
                trace: {
                  location: 'header',
                  locationName: 'X-Amzn-Bedrock-Trace'
                },
                guardrailIdentifier: {
                  location: 'header',
                  locationName: 'X-Amzn-Bedrock-GuardrailIdentifier'
                },
                guardrailVersion: {
                  location: 'header',
                  locationName: 'X-Amzn-Bedrock-GuardrailVersion'
                }
              },
              payload: 'body'
            },
            output: {
              type: 'structure',
              required: ['body', 'contentType'],
              members: {
                body: {
                  shape: 'S21'
                },
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                }
              },
              payload: 'body'
            }
          },
          InvokeModelWithResponseStream: {
            http: {
              requestUri: '/model/{modelId}/invoke-with-response-stream',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['body', 'modelId'],
              members: {
                body: {
                  shape: 'S21'
                },
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                accept: {
                  location: 'header',
                  locationName: 'X-Amzn-Bedrock-Accept'
                },
                modelId: {
                  location: 'uri',
                  locationName: 'modelId'
                },
                trace: {
                  location: 'header',
                  locationName: 'X-Amzn-Bedrock-Trace'
                },
                guardrailIdentifier: {
                  location: 'header',
                  locationName: 'X-Amzn-Bedrock-GuardrailIdentifier'
                },
                guardrailVersion: {
                  location: 'header',
                  locationName: 'X-Amzn-Bedrock-GuardrailVersion'
                }
              },
              payload: 'body'
            },
            output: {
              type: 'structure',
              required: ['body', 'contentType'],
              members: {
                body: {
                  type: 'structure',
                  members: {
                    chunk: {
                      type: 'structure',
                      members: {
                        bytes: {
                          type: 'blob',
                          sensitive: true
                        }
                      },
                      event: true,
                      sensitive: true
                    },
                    internalServerException: {
                      shape: 'S1u'
                    },
                    modelStreamErrorException: {
                      shape: 'S1w'
                    },
                    validationException: {
                      shape: 'S1y'
                    },
                    throttlingException: {
                      shape: 'S1z'
                    },
                    modelTimeoutException: {
                      type: 'structure',
                      members: {
                        message: {}
                      },
                      error: {
                        httpStatusCode: 408,
                        senderFault: true
                      },
                      exception: true
                    }
                  },
                  eventstream: true
                },
                contentType: {
                  location: 'header',
                  locationName: 'X-Amzn-Bedrock-Content-Type'
                }
              },
              payload: 'body'
            }
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {
              shape: 'S4'
            }
          },
          S4: {
            type: 'structure',
            required: ['role', 'content'],
            members: {
              role: {},
              content: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    text: {},
                    image: {
                      shape: 'S9'
                    },
                    toolUse: {
                      type: 'structure',
                      required: ['toolUseId', 'name', 'input'],
                      members: {
                        toolUseId: {},
                        name: {},
                        input: {
                          shape: 'Sg'
                        }
                      }
                    },
                    toolResult: {
                      type: 'structure',
                      required: ['toolUseId', 'content'],
                      members: {
                        toolUseId: {},
                        content: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              json: {
                                shape: 'Sg'
                              },
                              text: {},
                              image: {
                                shape: 'S9'
                              }
                            },
                            union: true
                          }
                        },
                        status: {}
                      }
                    }
                  },
                  union: true
                }
              }
            }
          },
          S9: {
            type: 'structure',
            required: ['format', 'source'],
            members: {
              format: {},
              source: {
                type: 'structure',
                members: {
                  bytes: {
                    type: 'blob'
                  }
                },
                union: true
              }
            }
          },
          Sg: {
            type: 'structure',
            members: {},
            document: true
          },
          Sl: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                text: {}
              },
              union: true
            }
          },
          So: {
            type: 'structure',
            members: {
              maxTokens: {
                type: 'integer'
              },
              temperature: {
                type: 'float'
              },
              topP: {
                type: 'float'
              },
              stopSequences: {
                type: 'list',
                member: {}
              }
            }
          },
          St: {
            type: 'structure',
            required: ['tools'],
            members: {
              tools: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    toolSpec: {
                      type: 'structure',
                      required: ['name', 'inputSchema'],
                      members: {
                        name: {},
                        description: {},
                        inputSchema: {
                          type: 'structure',
                          members: {
                            json: {
                              shape: 'Sg'
                            }
                          },
                          union: true
                        }
                      }
                    }
                  },
                  union: true
                }
              },
              toolChoice: {
                type: 'structure',
                members: {
                  auto: {
                    type: 'structure',
                    members: {}
                  },
                  any: {
                    type: 'structure',
                    members: {}
                  },
                  tool: {
                    type: 'structure',
                    required: ['name'],
                    members: {
                      name: {}
                    }
                  }
                },
                union: true
              }
            }
          },
          S17: {
            type: 'structure',
            required: ['inputTokens', 'outputTokens', 'totalTokens'],
            members: {
              inputTokens: {
                type: 'integer'
              },
              outputTokens: {
                type: 'integer'
              },
              totalTokens: {
                type: 'integer'
              }
            }
          },
          S1u: {
            type: 'structure',
            members: {
              message: {}
            },
            error: {
              httpStatusCode: 500
            },
            exception: true,
            fault: true
          },
          S1w: {
            type: 'structure',
            members: {
              message: {},
              originalStatusCode: {
                type: 'integer'
              },
              originalMessage: {}
            },
            error: {
              httpStatusCode: 424,
              senderFault: true
            },
            exception: true
          },
          S1y: {
            type: 'structure',
            members: {
              message: {}
            },
            error: {
              httpStatusCode: 400,
              senderFault: true
            },
            exception: true
          },
          S1z: {
            type: 'structure',
            members: {
              message: {}
            },
            error: {
              httpStatusCode: 429,
              senderFault: true
            },
            exception: true
          },
          S21: {
            type: 'blob',
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=43346a0a96e5305e7b131d5a6d10f7380284ccb0.js.map