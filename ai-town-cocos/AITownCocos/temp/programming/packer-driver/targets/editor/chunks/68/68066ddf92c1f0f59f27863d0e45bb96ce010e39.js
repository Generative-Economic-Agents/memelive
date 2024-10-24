System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-02-16',
          endpointPrefix: 'inspector',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'Amazon Inspector',
          serviceId: 'Inspector',
          signatureVersion: 'v4',
          targetPrefix: 'InspectorService',
          uid: 'inspector-2016-02-16'
        },
        operations: {
          AddAttributesToFindings: {
            input: {
              type: 'structure',
              required: ['findingArns', 'attributes'],
              members: {
                findingArns: {
                  shape: 'S2'
                },
                attributes: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['failedItems'],
              members: {
                failedItems: {
                  shape: 'S9'
                }
              }
            }
          },
          CreateAssessmentTarget: {
            input: {
              type: 'structure',
              required: ['assessmentTargetName'],
              members: {
                assessmentTargetName: {},
                resourceGroupArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['assessmentTargetArn'],
              members: {
                assessmentTargetArn: {}
              }
            }
          },
          CreateAssessmentTemplate: {
            input: {
              type: 'structure',
              required: ['assessmentTargetArn', 'assessmentTemplateName', 'durationInSeconds', 'rulesPackageArns'],
              members: {
                assessmentTargetArn: {},
                assessmentTemplateName: {},
                durationInSeconds: {
                  type: 'integer'
                },
                rulesPackageArns: {
                  shape: 'Sj'
                },
                userAttributesForFindings: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assessmentTemplateArn'],
              members: {
                assessmentTemplateArn: {}
              }
            }
          },
          CreateExclusionsPreview: {
            input: {
              type: 'structure',
              required: ['assessmentTemplateArn'],
              members: {
                assessmentTemplateArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['previewToken'],
              members: {
                previewToken: {}
              }
            }
          },
          CreateResourceGroup: {
            input: {
              type: 'structure',
              required: ['resourceGroupTags'],
              members: {
                resourceGroupTags: {
                  shape: 'Sp'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['resourceGroupArn'],
              members: {
                resourceGroupArn: {}
              }
            }
          },
          DeleteAssessmentRun: {
            input: {
              type: 'structure',
              required: ['assessmentRunArn'],
              members: {
                assessmentRunArn: {}
              }
            }
          },
          DeleteAssessmentTarget: {
            input: {
              type: 'structure',
              required: ['assessmentTargetArn'],
              members: {
                assessmentTargetArn: {}
              }
            }
          },
          DeleteAssessmentTemplate: {
            input: {
              type: 'structure',
              required: ['assessmentTemplateArn'],
              members: {
                assessmentTemplateArn: {}
              }
            }
          },
          DescribeAssessmentRuns: {
            input: {
              type: 'structure',
              required: ['assessmentRunArns'],
              members: {
                assessmentRunArns: {
                  shape: 'Sy'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assessmentRuns', 'failedItems'],
              members: {
                assessmentRuns: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'name', 'assessmentTemplateArn', 'state', 'durationInSeconds', 'rulesPackageArns', 'userAttributesForFindings', 'createdAt', 'stateChangedAt', 'dataCollected', 'stateChanges', 'notifications', 'findingCounts'],
                    members: {
                      arn: {},
                      name: {},
                      assessmentTemplateArn: {},
                      state: {},
                      durationInSeconds: {
                        type: 'integer'
                      },
                      rulesPackageArns: {
                        type: 'list',
                        member: {}
                      },
                      userAttributesForFindings: {
                        shape: 'S4'
                      },
                      createdAt: {
                        type: 'timestamp'
                      },
                      startedAt: {
                        type: 'timestamp'
                      },
                      completedAt: {
                        type: 'timestamp'
                      },
                      stateChangedAt: {
                        type: 'timestamp'
                      },
                      dataCollected: {
                        type: 'boolean'
                      },
                      stateChanges: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['stateChangedAt', 'state'],
                          members: {
                            stateChangedAt: {
                              type: 'timestamp'
                            },
                            state: {}
                          }
                        }
                      },
                      notifications: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['date', 'event', 'error'],
                          members: {
                            date: {
                              type: 'timestamp'
                            },
                            event: {},
                            message: {},
                            error: {
                              type: 'boolean'
                            },
                            snsTopicArn: {},
                            snsPublishStatusCode: {}
                          }
                        }
                      },
                      findingCounts: {
                        type: 'map',
                        key: {},
                        value: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                },
                failedItems: {
                  shape: 'S9'
                }
              }
            }
          },
          DescribeAssessmentTargets: {
            input: {
              type: 'structure',
              required: ['assessmentTargetArns'],
              members: {
                assessmentTargetArns: {
                  shape: 'Sy'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assessmentTargets', 'failedItems'],
              members: {
                assessmentTargets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'name', 'createdAt', 'updatedAt'],
                    members: {
                      arn: {},
                      name: {},
                      resourceGroupArn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      updatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                failedItems: {
                  shape: 'S9'
                }
              }
            }
          },
          DescribeAssessmentTemplates: {
            input: {
              type: 'structure',
              required: ['assessmentTemplateArns'],
              members: {
                assessmentTemplateArns: {
                  shape: 'Sy'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assessmentTemplates', 'failedItems'],
              members: {
                assessmentTemplates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'name', 'assessmentTargetArn', 'durationInSeconds', 'rulesPackageArns', 'userAttributesForFindings', 'assessmentRunCount', 'createdAt'],
                    members: {
                      arn: {},
                      name: {},
                      assessmentTargetArn: {},
                      durationInSeconds: {
                        type: 'integer'
                      },
                      rulesPackageArns: {
                        shape: 'Sj'
                      },
                      userAttributesForFindings: {
                        shape: 'S4'
                      },
                      lastAssessmentRunArn: {},
                      assessmentRunCount: {
                        type: 'integer'
                      },
                      createdAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                failedItems: {
                  shape: 'S9'
                }
              }
            }
          },
          DescribeCrossAccountAccessRole: {
            output: {
              type: 'structure',
              required: ['roleArn', 'valid', 'registeredAt'],
              members: {
                roleArn: {},
                valid: {
                  type: 'boolean'
                },
                registeredAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeExclusions: {
            input: {
              type: 'structure',
              required: ['exclusionArns'],
              members: {
                exclusionArns: {
                  type: 'list',
                  member: {}
                },
                locale: {}
              }
            },
            output: {
              type: 'structure',
              required: ['exclusions', 'failedItems'],
              members: {
                exclusions: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    required: ['arn', 'title', 'description', 'recommendation', 'scopes'],
                    members: {
                      arn: {},
                      title: {},
                      description: {},
                      recommendation: {},
                      scopes: {
                        shape: 'S1x'
                      },
                      attributes: {
                        shape: 'S21'
                      }
                    }
                  }
                },
                failedItems: {
                  shape: 'S9'
                }
              }
            }
          },
          DescribeFindings: {
            input: {
              type: 'structure',
              required: ['findingArns'],
              members: {
                findingArns: {
                  shape: 'Sy'
                },
                locale: {}
              }
            },
            output: {
              type: 'structure',
              required: ['findings', 'failedItems'],
              members: {
                findings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'attributes', 'userAttributes', 'createdAt', 'updatedAt'],
                    members: {
                      arn: {},
                      schemaVersion: {
                        type: 'integer'
                      },
                      service: {},
                      serviceAttributes: {
                        type: 'structure',
                        required: ['schemaVersion'],
                        members: {
                          schemaVersion: {
                            type: 'integer'
                          },
                          assessmentRunArn: {},
                          rulesPackageArn: {}
                        }
                      },
                      assetType: {},
                      assetAttributes: {
                        type: 'structure',
                        required: ['schemaVersion'],
                        members: {
                          schemaVersion: {
                            type: 'integer'
                          },
                          agentId: {},
                          autoScalingGroup: {},
                          amiId: {},
                          hostname: {},
                          ipv4Addresses: {
                            type: 'list',
                            member: {}
                          },
                          tags: {
                            type: 'list',
                            member: {
                              shape: 'S2i'
                            }
                          },
                          networkInterfaces: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                networkInterfaceId: {},
                                subnetId: {},
                                vpcId: {},
                                privateDnsName: {},
                                privateIpAddress: {},
                                privateIpAddresses: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      privateDnsName: {},
                                      privateIpAddress: {}
                                    }
                                  }
                                },
                                publicDnsName: {},
                                publicIp: {},
                                ipv6Addresses: {
                                  type: 'list',
                                  member: {}
                                },
                                securityGroups: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      groupName: {},
                                      groupId: {}
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      id: {},
                      title: {},
                      description: {},
                      recommendation: {},
                      severity: {},
                      numericSeverity: {
                        type: 'double'
                      },
                      confidence: {
                        type: 'integer'
                      },
                      indicatorOfCompromise: {
                        type: 'boolean'
                      },
                      attributes: {
                        shape: 'S21'
                      },
                      userAttributes: {
                        shape: 'S4'
                      },
                      createdAt: {
                        type: 'timestamp'
                      },
                      updatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                failedItems: {
                  shape: 'S9'
                }
              }
            }
          },
          DescribeResourceGroups: {
            input: {
              type: 'structure',
              required: ['resourceGroupArns'],
              members: {
                resourceGroupArns: {
                  shape: 'Sy'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['resourceGroups', 'failedItems'],
              members: {
                resourceGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'tags', 'createdAt'],
                    members: {
                      arn: {},
                      tags: {
                        shape: 'Sp'
                      },
                      createdAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                failedItems: {
                  shape: 'S9'
                }
              }
            }
          },
          DescribeRulesPackages: {
            input: {
              type: 'structure',
              required: ['rulesPackageArns'],
              members: {
                rulesPackageArns: {
                  shape: 'Sy'
                },
                locale: {}
              }
            },
            output: {
              type: 'structure',
              required: ['rulesPackages', 'failedItems'],
              members: {
                rulesPackages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'name', 'version', 'provider'],
                    members: {
                      arn: {},
                      name: {},
                      version: {},
                      provider: {},
                      description: {}
                    }
                  }
                },
                failedItems: {
                  shape: 'S9'
                }
              }
            }
          },
          GetAssessmentReport: {
            input: {
              type: 'structure',
              required: ['assessmentRunArn', 'reportFileFormat', 'reportType'],
              members: {
                assessmentRunArn: {},
                reportFileFormat: {},
                reportType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['status'],
              members: {
                status: {},
                url: {}
              }
            }
          },
          GetExclusionsPreview: {
            input: {
              type: 'structure',
              required: ['assessmentTemplateArn', 'previewToken'],
              members: {
                assessmentTemplateArn: {},
                previewToken: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                locale: {}
              }
            },
            output: {
              type: 'structure',
              required: ['previewStatus'],
              members: {
                previewStatus: {},
                exclusionPreviews: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['title', 'description', 'recommendation', 'scopes'],
                    members: {
                      title: {},
                      description: {},
                      recommendation: {},
                      scopes: {
                        shape: 'S1x'
                      },
                      attributes: {
                        shape: 'S21'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetTelemetryMetadata: {
            input: {
              type: 'structure',
              required: ['assessmentRunArn'],
              members: {
                assessmentRunArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['telemetryMetadata'],
              members: {
                telemetryMetadata: {
                  shape: 'S3j'
                }
              }
            }
          },
          ListAssessmentRunAgents: {
            input: {
              type: 'structure',
              required: ['assessmentRunArn'],
              members: {
                assessmentRunArn: {},
                filter: {
                  type: 'structure',
                  required: ['agentHealths', 'agentHealthCodes'],
                  members: {
                    agentHealths: {
                      type: 'list',
                      member: {}
                    },
                    agentHealthCodes: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assessmentRunAgents'],
              members: {
                assessmentRunAgents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['agentId', 'assessmentRunArn', 'agentHealth', 'agentHealthCode', 'telemetryMetadata'],
                    members: {
                      agentId: {},
                      assessmentRunArn: {},
                      agentHealth: {},
                      agentHealthCode: {},
                      agentHealthDetails: {},
                      autoScalingGroup: {},
                      telemetryMetadata: {
                        shape: 'S3j'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAssessmentRuns: {
            input: {
              type: 'structure',
              members: {
                assessmentTemplateArns: {
                  shape: 'S3x'
                },
                filter: {
                  type: 'structure',
                  members: {
                    namePattern: {},
                    states: {
                      type: 'list',
                      member: {}
                    },
                    durationRange: {
                      shape: 'S41'
                    },
                    rulesPackageArns: {
                      shape: 'S42'
                    },
                    startTimeRange: {
                      shape: 'S43'
                    },
                    completionTimeRange: {
                      shape: 'S43'
                    },
                    stateChangeTimeRange: {
                      shape: 'S43'
                    }
                  }
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assessmentRunArns'],
              members: {
                assessmentRunArns: {
                  shape: 'S45'
                },
                nextToken: {}
              }
            }
          },
          ListAssessmentTargets: {
            input: {
              type: 'structure',
              members: {
                filter: {
                  type: 'structure',
                  members: {
                    assessmentTargetNamePattern: {}
                  }
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assessmentTargetArns'],
              members: {
                assessmentTargetArns: {
                  shape: 'S45'
                },
                nextToken: {}
              }
            }
          },
          ListAssessmentTemplates: {
            input: {
              type: 'structure',
              members: {
                assessmentTargetArns: {
                  shape: 'S3x'
                },
                filter: {
                  type: 'structure',
                  members: {
                    namePattern: {},
                    durationRange: {
                      shape: 'S41'
                    },
                    rulesPackageArns: {
                      shape: 'S42'
                    }
                  }
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assessmentTemplateArns'],
              members: {
                assessmentTemplateArns: {
                  shape: 'S45'
                },
                nextToken: {}
              }
            }
          },
          ListEventSubscriptions: {
            input: {
              type: 'structure',
              members: {
                resourceArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['subscriptions'],
              members: {
                subscriptions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['resourceArn', 'topicArn', 'eventSubscriptions'],
                    members: {
                      resourceArn: {},
                      topicArn: {},
                      eventSubscriptions: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['event', 'subscribedAt'],
                          members: {
                            event: {},
                            subscribedAt: {
                              type: 'timestamp'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListExclusions: {
            input: {
              type: 'structure',
              required: ['assessmentRunArn'],
              members: {
                assessmentRunArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['exclusionArns'],
              members: {
                exclusionArns: {
                  shape: 'S45'
                },
                nextToken: {}
              }
            }
          },
          ListFindings: {
            input: {
              type: 'structure',
              members: {
                assessmentRunArns: {
                  shape: 'S3x'
                },
                filter: {
                  type: 'structure',
                  members: {
                    agentIds: {
                      type: 'list',
                      member: {}
                    },
                    autoScalingGroups: {
                      type: 'list',
                      member: {}
                    },
                    ruleNames: {
                      type: 'list',
                      member: {}
                    },
                    severities: {
                      type: 'list',
                      member: {}
                    },
                    rulesPackageArns: {
                      shape: 'S42'
                    },
                    attributes: {
                      shape: 'S21'
                    },
                    userAttributes: {
                      shape: 'S21'
                    },
                    creationTimeRange: {
                      shape: 'S43'
                    }
                  }
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['findingArns'],
              members: {
                findingArns: {
                  shape: 'S45'
                },
                nextToken: {}
              }
            }
          },
          ListRulesPackages: {
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['rulesPackageArns'],
              members: {
                rulesPackageArns: {
                  shape: 'S45'
                },
                nextToken: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['tags'],
              members: {
                tags: {
                  shape: 'S4x'
                }
              }
            }
          },
          PreviewAgents: {
            input: {
              type: 'structure',
              required: ['previewAgentsArn'],
              members: {
                previewAgentsArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['agentPreviews'],
              members: {
                agentPreviews: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['agentId'],
                    members: {
                      hostname: {},
                      agentId: {},
                      autoScalingGroup: {},
                      agentHealth: {},
                      agentVersion: {},
                      operatingSystem: {},
                      kernelVersion: {},
                      ipv4Address: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          RegisterCrossAccountAccessRole: {
            input: {
              type: 'structure',
              required: ['roleArn'],
              members: {
                roleArn: {}
              }
            }
          },
          RemoveAttributesFromFindings: {
            input: {
              type: 'structure',
              required: ['findingArns', 'attributeKeys'],
              members: {
                findingArns: {
                  shape: 'S2'
                },
                attributeKeys: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['failedItems'],
              members: {
                failedItems: {
                  shape: 'S9'
                }
              }
            }
          },
          SetTagsForResource: {
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {},
                tags: {
                  shape: 'S4x'
                }
              }
            }
          },
          StartAssessmentRun: {
            input: {
              type: 'structure',
              required: ['assessmentTemplateArn'],
              members: {
                assessmentTemplateArn: {},
                assessmentRunName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['assessmentRunArn'],
              members: {
                assessmentRunArn: {}
              }
            }
          },
          StopAssessmentRun: {
            input: {
              type: 'structure',
              required: ['assessmentRunArn'],
              members: {
                assessmentRunArn: {},
                stopAction: {}
              }
            }
          },
          SubscribeToEvent: {
            input: {
              type: 'structure',
              required: ['resourceArn', 'event', 'topicArn'],
              members: {
                resourceArn: {},
                event: {},
                topicArn: {}
              }
            }
          },
          UnsubscribeFromEvent: {
            input: {
              type: 'structure',
              required: ['resourceArn', 'event', 'topicArn'],
              members: {
                resourceArn: {},
                event: {},
                topicArn: {}
              }
            }
          },
          UpdateAssessmentTarget: {
            input: {
              type: 'structure',
              required: ['assessmentTargetArn', 'assessmentTargetName'],
              members: {
                assessmentTargetArn: {},
                assessmentTargetName: {},
                resourceGroupArn: {}
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'list',
            member: {}
          },
          S4: {
            type: 'list',
            member: {
              shape: 'S5'
            }
          },
          S5: {
            type: 'structure',
            required: ['key'],
            members: {
              key: {},
              value: {}
            }
          },
          S9: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['failureCode', 'retryable'],
              members: {
                failureCode: {},
                retryable: {
                  type: 'boolean'
                }
              }
            }
          },
          Sj: {
            type: 'list',
            member: {}
          },
          Sp: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['key'],
              members: {
                key: {},
                value: {}
              }
            }
          },
          Sy: {
            type: 'list',
            member: {}
          },
          S1x: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                key: {},
                value: {}
              }
            }
          },
          S21: {
            type: 'list',
            member: {
              shape: 'S5'
            }
          },
          S2i: {
            type: 'structure',
            required: ['key'],
            members: {
              key: {},
              value: {}
            }
          },
          S3j: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['messageType', 'count'],
              members: {
                messageType: {},
                count: {
                  type: 'long'
                },
                dataSize: {
                  type: 'long'
                }
              }
            }
          },
          S3x: {
            type: 'list',
            member: {}
          },
          S41: {
            type: 'structure',
            members: {
              minSeconds: {
                type: 'integer'
              },
              maxSeconds: {
                type: 'integer'
              }
            }
          },
          S42: {
            type: 'list',
            member: {}
          },
          S43: {
            type: 'structure',
            members: {
              beginDate: {
                type: 'timestamp'
              },
              endDate: {
                type: 'timestamp'
              }
            }
          },
          S45: {
            type: 'list',
            member: {}
          },
          S4x: {
            type: 'list',
            member: {
              shape: 'S2i'
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=68066ddf92c1f0f59f27863d0e45bb96ce010e39.js.map