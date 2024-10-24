System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2023-07-26',
          endpointPrefix: 'bedrock-agent-runtime',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Agents for Amazon Bedrock Runtime',
          serviceId: 'Bedrock Agent Runtime',
          signatureVersion: 'v4',
          signingName: 'bedrock',
          uid: 'bedrock-agent-runtime-2023-07-26'
        },
        operations: {
          InvokeAgent: {
            http: {
              requestUri: '/agents/{agentId}/agentAliases/{agentAliasId}/sessions/{sessionId}/text',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['agentAliasId', 'agentId', 'sessionId'],
              members: {
                agentAliasId: {
                  location: 'uri',
                  locationName: 'agentAliasId'
                },
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                },
                enableTrace: {
                  type: 'boolean'
                },
                endSession: {
                  type: 'boolean'
                },
                inputText: {
                  type: 'string',
                  sensitive: true
                },
                sessionId: {
                  location: 'uri',
                  locationName: 'sessionId'
                },
                sessionState: {
                  type: 'structure',
                  members: {
                    invocationId: {},
                    promptSessionAttributes: {
                      type: 'map',
                      key: {},
                      value: {}
                    },
                    returnControlInvocationResults: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          apiResult: {
                            type: 'structure',
                            required: ['actionGroup'],
                            members: {
                              actionGroup: {},
                              apiPath: {
                                shape: 'Sd'
                              },
                              httpMethod: {},
                              httpStatusCode: {
                                type: 'integer'
                              },
                              responseBody: {
                                shape: 'Sf'
                              },
                              responseState: {}
                            }
                          },
                          functionResult: {
                            type: 'structure',
                            required: ['actionGroup'],
                            members: {
                              actionGroup: {},
                              'function': {},
                              responseBody: {
                                shape: 'Sf'
                              },
                              responseState: {}
                            }
                          }
                        },
                        union: true
                      }
                    },
                    sessionAttributes: {
                      type: 'map',
                      key: {},
                      value: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['completion', 'contentType', 'sessionId'],
              members: {
                completion: {
                  type: 'structure',
                  members: {
                    accessDeniedException: {
                      type: 'structure',
                      members: {
                        message: {}
                      },
                      error: {
                        httpStatusCode: 403,
                        senderFault: true
                      },
                      exception: true
                    },
                    badGatewayException: {
                      type: 'structure',
                      members: {
                        message: {},
                        resourceName: {}
                      },
                      error: {
                        httpStatusCode: 502
                      },
                      exception: true,
                      fault: true
                    },
                    chunk: {
                      type: 'structure',
                      members: {
                        attribution: {
                          type: 'structure',
                          members: {
                            citations: {
                              shape: 'Sr'
                            }
                          }
                        },
                        bytes: {
                          type: 'blob',
                          sensitive: true
                        }
                      },
                      event: true,
                      sensitive: true
                    },
                    conflictException: {
                      type: 'structure',
                      members: {
                        message: {}
                      },
                      error: {
                        httpStatusCode: 409,
                        senderFault: true
                      },
                      exception: true
                    },
                    dependencyFailedException: {
                      type: 'structure',
                      members: {
                        message: {},
                        resourceName: {}
                      },
                      error: {
                        httpStatusCode: 424,
                        senderFault: true
                      },
                      exception: true
                    },
                    internalServerException: {
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
                    resourceNotFoundException: {
                      type: 'structure',
                      members: {
                        message: {}
                      },
                      error: {
                        httpStatusCode: 404,
                        senderFault: true
                      },
                      exception: true
                    },
                    returnControl: {
                      type: 'structure',
                      members: {
                        invocationId: {},
                        invocationInputs: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              apiInvocationInput: {
                                type: 'structure',
                                required: ['actionGroup'],
                                members: {
                                  actionGroup: {},
                                  apiPath: {
                                    shape: 'Sd'
                                  },
                                  httpMethod: {},
                                  parameters: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        name: {},
                                        type: {},
                                        value: {}
                                      }
                                    }
                                  },
                                  requestBody: {
                                    type: 'structure',
                                    members: {
                                      content: {
                                        type: 'map',
                                        key: {},
                                        value: {
                                          type: 'structure',
                                          members: {
                                            properties: {
                                              type: 'list',
                                              member: {
                                                shape: 'S1m'
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              functionInvocationInput: {
                                type: 'structure',
                                required: ['actionGroup'],
                                members: {
                                  actionGroup: {},
                                  'function': {},
                                  parameters: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        name: {},
                                        type: {},
                                        value: {}
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            union: true
                          }
                        }
                      },
                      event: true,
                      sensitive: true
                    },
                    serviceQuotaExceededException: {
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
                    throttlingException: {
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
                    trace: {
                      type: 'structure',
                      members: {
                        agentAliasId: {},
                        agentId: {},
                        agentVersion: {},
                        sessionId: {},
                        trace: {
                          type: 'structure',
                          members: {
                            failureTrace: {
                              type: 'structure',
                              members: {
                                failureReason: {
                                  type: 'string',
                                  sensitive: true
                                },
                                traceId: {}
                              },
                              sensitive: true
                            },
                            guardrailTrace: {
                              type: 'structure',
                              members: {
                                action: {},
                                inputAssessments: {
                                  shape: 'S20'
                                },
                                outputAssessments: {
                                  shape: 'S20'
                                },
                                traceId: {}
                              },
                              sensitive: true
                            },
                            orchestrationTrace: {
                              type: 'structure',
                              members: {
                                invocationInput: {
                                  type: 'structure',
                                  members: {
                                    actionGroupInvocationInput: {
                                      type: 'structure',
                                      members: {
                                        actionGroupName: {
                                          type: 'string',
                                          sensitive: true
                                        },
                                        apiPath: {
                                          shape: 'Sd'
                                        },
                                        'function': {
                                          type: 'string',
                                          sensitive: true
                                        },
                                        parameters: {
                                          shape: 'S2w'
                                        },
                                        requestBody: {
                                          type: 'structure',
                                          members: {
                                            content: {
                                              type: 'map',
                                              key: {},
                                              value: {
                                                shape: 'S2w'
                                              }
                                            }
                                          }
                                        },
                                        verb: {
                                          type: 'string',
                                          sensitive: true
                                        }
                                      }
                                    },
                                    invocationType: {},
                                    knowledgeBaseLookupInput: {
                                      type: 'structure',
                                      members: {
                                        knowledgeBaseId: {
                                          type: 'string',
                                          sensitive: true
                                        },
                                        text: {
                                          type: 'string',
                                          sensitive: true
                                        }
                                      }
                                    },
                                    traceId: {}
                                  },
                                  sensitive: true
                                },
                                modelInvocationInput: {
                                  shape: 'S34'
                                },
                                observation: {
                                  type: 'structure',
                                  members: {
                                    actionGroupInvocationOutput: {
                                      type: 'structure',
                                      members: {
                                        text: {
                                          type: 'string',
                                          sensitive: true
                                        }
                                      }
                                    },
                                    finalResponse: {
                                      type: 'structure',
                                      members: {
                                        text: {
                                          type: 'string',
                                          sensitive: true
                                        }
                                      }
                                    },
                                    knowledgeBaseLookupOutput: {
                                      type: 'structure',
                                      members: {
                                        retrievedReferences: {
                                          shape: 'Sy'
                                        }
                                      }
                                    },
                                    repromptResponse: {
                                      type: 'structure',
                                      members: {
                                        source: {
                                          type: 'string',
                                          sensitive: true
                                        },
                                        text: {}
                                      },
                                      sensitive: true
                                    },
                                    traceId: {},
                                    type: {}
                                  },
                                  sensitive: true
                                },
                                rationale: {
                                  type: 'structure',
                                  members: {
                                    text: {
                                      shape: 'S3p'
                                    },
                                    traceId: {}
                                  },
                                  sensitive: true
                                }
                              },
                              sensitive: true,
                              union: true
                            },
                            postProcessingTrace: {
                              type: 'structure',
                              members: {
                                modelInvocationInput: {
                                  shape: 'S34'
                                },
                                modelInvocationOutput: {
                                  type: 'structure',
                                  members: {
                                    parsedResponse: {
                                      type: 'structure',
                                      members: {
                                        text: {
                                          type: 'string',
                                          sensitive: true
                                        }
                                      },
                                      sensitive: true
                                    },
                                    traceId: {}
                                  },
                                  sensitive: true
                                }
                              },
                              sensitive: true,
                              union: true
                            },
                            preProcessingTrace: {
                              type: 'structure',
                              members: {
                                modelInvocationInput: {
                                  shape: 'S34'
                                },
                                modelInvocationOutput: {
                                  type: 'structure',
                                  members: {
                                    parsedResponse: {
                                      type: 'structure',
                                      members: {
                                        isValid: {
                                          type: 'boolean'
                                        },
                                        rationale: {
                                          shape: 'S3p'
                                        }
                                      },
                                      sensitive: true
                                    },
                                    traceId: {}
                                  },
                                  sensitive: true
                                }
                              },
                              sensitive: true,
                              union: true
                            }
                          },
                          sensitive: true,
                          union: true
                        }
                      },
                      event: true,
                      sensitive: true
                    },
                    validationException: {
                      type: 'structure',
                      members: {
                        message: {}
                      },
                      error: {
                        httpStatusCode: 400,
                        senderFault: true
                      },
                      exception: true
                    }
                  },
                  eventstream: true
                },
                contentType: {
                  location: 'header',
                  locationName: 'x-amzn-bedrock-agent-content-type'
                },
                sessionId: {
                  location: 'header',
                  locationName: 'x-amz-bedrock-agent-session-id'
                }
              },
              payload: 'completion'
            }
          },
          Retrieve: {
            http: {
              requestUri: '/knowledgebases/{knowledgeBaseId}/retrieve',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['knowledgeBaseId', 'retrievalQuery'],
              members: {
                knowledgeBaseId: {
                  location: 'uri',
                  locationName: 'knowledgeBaseId'
                },
                nextToken: {},
                retrievalConfiguration: {
                  shape: 'S42'
                },
                retrievalQuery: {
                  type: 'structure',
                  required: ['text'],
                  members: {
                    text: {}
                  },
                  sensitive: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['retrievalResults'],
              members: {
                nextToken: {},
                retrievalResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['content'],
                    members: {
                      content: {
                        shape: 'S10'
                      },
                      location: {
                        shape: 'S11'
                      },
                      metadata: {
                        shape: 'S14'
                      },
                      score: {
                        type: 'double'
                      }
                    }
                  },
                  sensitive: true
                }
              }
            }
          },
          RetrieveAndGenerate: {
            http: {
              requestUri: '/retrieveAndGenerate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['input'],
              members: {
                input: {
                  type: 'structure',
                  required: ['text'],
                  members: {
                    text: {}
                  },
                  sensitive: true
                },
                retrieveAndGenerateConfiguration: {
                  type: 'structure',
                  required: ['type'],
                  members: {
                    externalSourcesConfiguration: {
                      type: 'structure',
                      required: ['modelArn', 'sources'],
                      members: {
                        generationConfiguration: {
                          type: 'structure',
                          members: {
                            additionalModelRequestFields: {
                              shape: 'S4n'
                            },
                            guardrailConfiguration: {
                              shape: 'S4q'
                            },
                            inferenceConfig: {
                              shape: 'S4t'
                            },
                            promptTemplate: {
                              shape: 'S4y'
                            }
                          }
                        },
                        modelArn: {},
                        sources: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['sourceType'],
                            members: {
                              byteContent: {
                                type: 'structure',
                                required: ['contentType', 'data', 'identifier'],
                                members: {
                                  contentType: {},
                                  data: {
                                    type: 'blob',
                                    sensitive: true
                                  },
                                  identifier: {
                                    type: 'string',
                                    sensitive: true
                                  }
                                }
                              },
                              s3Location: {
                                type: 'structure',
                                required: ['uri'],
                                members: {
                                  uri: {}
                                }
                              },
                              sourceType: {}
                            }
                          }
                        }
                      }
                    },
                    knowledgeBaseConfiguration: {
                      type: 'structure',
                      required: ['knowledgeBaseId', 'modelArn'],
                      members: {
                        generationConfiguration: {
                          type: 'structure',
                          members: {
                            additionalModelRequestFields: {
                              shape: 'S4n'
                            },
                            guardrailConfiguration: {
                              shape: 'S4q'
                            },
                            inferenceConfig: {
                              shape: 'S4t'
                            },
                            promptTemplate: {
                              shape: 'S4y'
                            }
                          }
                        },
                        knowledgeBaseId: {},
                        modelArn: {},
                        retrievalConfiguration: {
                          shape: 'S42'
                        }
                      }
                    },
                    type: {}
                  }
                },
                sessionConfiguration: {
                  type: 'structure',
                  required: ['kmsKeyArn'],
                  members: {
                    kmsKeyArn: {}
                  }
                },
                sessionId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['output', 'sessionId'],
              members: {
                citations: {
                  shape: 'Sr'
                },
                guardrailAction: {},
                output: {
                  type: 'structure',
                  required: ['text'],
                  members: {
                    text: {}
                  },
                  sensitive: true
                },
                sessionId: {}
              }
            }
          }
        },
        shapes: {
          Sd: {
            type: 'string',
            sensitive: true
          },
          Sf: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                body: {}
              }
            }
          },
          Sr: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                generatedResponsePart: {
                  type: 'structure',
                  members: {
                    textResponsePart: {
                      type: 'structure',
                      members: {
                        span: {
                          type: 'structure',
                          members: {
                            end: {
                              type: 'integer'
                            },
                            start: {
                              type: 'integer'
                            }
                          }
                        },
                        text: {}
                      },
                      sensitive: true
                    }
                  }
                },
                retrievedReferences: {
                  shape: 'Sy'
                }
              }
            }
          },
          Sy: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                content: {
                  shape: 'S10'
                },
                location: {
                  shape: 'S11'
                },
                metadata: {
                  shape: 'S14'
                }
              }
            }
          },
          S10: {
            type: 'structure',
            required: ['text'],
            members: {
              text: {}
            },
            sensitive: true
          },
          S11: {
            type: 'structure',
            required: ['type'],
            members: {
              s3Location: {
                type: 'structure',
                members: {
                  uri: {}
                }
              },
              type: {}
            },
            sensitive: true
          },
          S14: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {},
              document: true
            },
            sensitive: true
          },
          S1m: {
            type: 'structure',
            members: {
              name: {},
              type: {},
              value: {}
            }
          },
          S20: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                contentPolicy: {
                  type: 'structure',
                  members: {
                    filters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          action: {},
                          confidence: {},
                          type: {}
                        },
                        sensitive: true
                      },
                      sensitive: true
                    }
                  },
                  sensitive: true
                },
                sensitiveInformationPolicy: {
                  type: 'structure',
                  members: {
                    piiEntities: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          action: {},
                          match: {},
                          type: {}
                        },
                        sensitive: true
                      },
                      sensitive: true
                    },
                    regexes: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          action: {},
                          match: {},
                          name: {},
                          regex: {}
                        },
                        sensitive: true
                      },
                      sensitive: true
                    }
                  },
                  sensitive: true
                },
                topicPolicy: {
                  type: 'structure',
                  members: {
                    topics: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          action: {},
                          name: {},
                          type: {}
                        },
                        sensitive: true
                      },
                      sensitive: true
                    }
                  },
                  sensitive: true
                },
                wordPolicy: {
                  type: 'structure',
                  members: {
                    customWords: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          action: {},
                          match: {}
                        },
                        sensitive: true
                      },
                      sensitive: true
                    },
                    managedWordLists: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          action: {},
                          match: {},
                          type: {}
                        },
                        sensitive: true
                      },
                      sensitive: true
                    }
                  },
                  sensitive: true
                }
              },
              sensitive: true
            }
          },
          S2w: {
            type: 'list',
            member: {
              shape: 'S1m'
            }
          },
          S34: {
            type: 'structure',
            members: {
              inferenceConfiguration: {
                type: 'structure',
                members: {
                  maximumLength: {
                    type: 'integer'
                  },
                  stopSequences: {
                    type: 'list',
                    member: {}
                  },
                  temperature: {
                    type: 'float'
                  },
                  topK: {
                    type: 'integer'
                  },
                  topP: {
                    type: 'float'
                  }
                }
              },
              overrideLambda: {},
              parserMode: {},
              promptCreationMode: {},
              text: {
                type: 'string',
                sensitive: true
              },
              traceId: {},
              type: {}
            },
            sensitive: true
          },
          S3p: {
            type: 'string',
            sensitive: true
          },
          S42: {
            type: 'structure',
            required: ['vectorSearchConfiguration'],
            members: {
              vectorSearchConfiguration: {
                type: 'structure',
                members: {
                  filter: {
                    shape: 'S44'
                  },
                  numberOfResults: {
                    type: 'integer'
                  },
                  overrideSearchType: {}
                }
              }
            }
          },
          S44: {
            type: 'structure',
            members: {
              andAll: {
                shape: 'S45'
              },
              equals: {
                shape: 'S46'
              },
              greaterThan: {
                shape: 'S46'
              },
              greaterThanOrEquals: {
                shape: 'S46'
              },
              'in': {
                shape: 'S46'
              },
              lessThan: {
                shape: 'S46'
              },
              lessThanOrEquals: {
                shape: 'S46'
              },
              listContains: {
                shape: 'S46'
              },
              notEquals: {
                shape: 'S46'
              },
              notIn: {
                shape: 'S46'
              },
              orAll: {
                shape: 'S45'
              },
              startsWith: {
                shape: 'S46'
              },
              stringContains: {
                shape: 'S46'
              }
            },
            sensitive: true,
            union: true
          },
          S45: {
            type: 'list',
            member: {
              shape: 'S44'
            }
          },
          S46: {
            type: 'structure',
            required: ['key', 'value'],
            members: {
              key: {},
              value: {
                type: 'structure',
                members: {},
                document: true
              }
            }
          },
          S4n: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {},
              document: true
            }
          },
          S4q: {
            type: 'structure',
            required: ['guardrailId', 'guardrailVersion'],
            members: {
              guardrailId: {},
              guardrailVersion: {}
            }
          },
          S4t: {
            type: 'structure',
            members: {
              textInferenceConfig: {
                type: 'structure',
                members: {
                  maxTokens: {
                    type: 'integer'
                  },
                  stopSequences: {
                    type: 'list',
                    member: {}
                  },
                  temperature: {
                    type: 'float'
                  },
                  topP: {
                    type: 'float'
                  }
                }
              }
            }
          },
          S4y: {
            type: 'structure',
            members: {
              textPromptTemplate: {
                type: 'string',
                sensitive: true
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=5e389829450f77d631a5c7235c2ebf0b062440df.js.map