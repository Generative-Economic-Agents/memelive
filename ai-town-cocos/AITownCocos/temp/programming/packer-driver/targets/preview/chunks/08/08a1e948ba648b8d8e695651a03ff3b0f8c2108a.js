System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-07-25',
          endpointPrefix: 'auditmanager',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Audit Manager',
          serviceId: 'AuditManager',
          signatureVersion: 'v4',
          signingName: 'auditmanager',
          uid: 'auditmanager-2017-07-25'
        },
        operations: {
          AssociateAssessmentReportEvidenceFolder: {
            http: {
              method: 'PUT',
              requestUri: '/assessments/{assessmentId}/associateToAssessmentReport'
            },
            input: {
              type: 'structure',
              required: ['assessmentId', 'evidenceFolderId'],
              members: {
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
                },
                evidenceFolderId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          BatchAssociateAssessmentReportEvidence: {
            http: {
              method: 'PUT',
              requestUri: '/assessments/{assessmentId}/batchAssociateToAssessmentReport'
            },
            input: {
              type: 'structure',
              required: ['assessmentId', 'evidenceFolderId', 'evidenceIds'],
              members: {
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
                },
                evidenceFolderId: {},
                evidenceIds: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                evidenceIds: {
                  shape: 'S5'
                },
                errors: {
                  shape: 'S7'
                }
              }
            }
          },
          BatchCreateDelegationByAssessment: {
            http: {
              requestUri: '/assessments/{assessmentId}/delegations'
            },
            input: {
              type: 'structure',
              required: ['createDelegationRequests', 'assessmentId'],
              members: {
                createDelegationRequests: {
                  type: 'list',
                  member: {
                    shape: 'Sd'
                  },
                  sensitive: true
                },
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                delegations: {
                  shape: 'Sj'
                },
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      createDelegationRequest: {
                        shape: 'Sd'
                      },
                      errorCode: {},
                      errorMessage: {}
                    }
                  },
                  sensitive: true
                }
              }
            }
          },
          BatchDeleteDelegationByAssessment: {
            http: {
              method: 'PUT',
              requestUri: '/assessments/{assessmentId}/delegations'
            },
            input: {
              type: 'structure',
              required: ['delegationIds', 'assessmentId'],
              members: {
                delegationIds: {
                  type: 'list',
                  member: {}
                },
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
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
                    members: {
                      delegationId: {},
                      errorCode: {},
                      errorMessage: {}
                    }
                  },
                  sensitive: true
                }
              }
            }
          },
          BatchDisassociateAssessmentReportEvidence: {
            http: {
              method: 'PUT',
              requestUri: '/assessments/{assessmentId}/batchDisassociateFromAssessmentReport'
            },
            input: {
              type: 'structure',
              required: ['assessmentId', 'evidenceFolderId', 'evidenceIds'],
              members: {
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
                },
                evidenceFolderId: {},
                evidenceIds: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                evidenceIds: {
                  shape: 'S5'
                },
                errors: {
                  shape: 'S7'
                }
              }
            }
          },
          BatchImportEvidenceToAssessmentControl: {
            http: {
              requestUri: '/assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}/evidence'
            },
            input: {
              type: 'structure',
              required: ['assessmentId', 'controlSetId', 'controlId', 'manualEvidence'],
              members: {
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
                },
                controlSetId: {
                  location: 'uri',
                  locationName: 'controlSetId'
                },
                controlId: {
                  location: 'uri',
                  locationName: 'controlId'
                },
                manualEvidence: {
                  type: 'list',
                  member: {
                    shape: 'S10'
                  }
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
                    members: {
                      manualEvidence: {
                        shape: 'S10'
                      },
                      errorCode: {},
                      errorMessage: {}
                    }
                  }
                }
              }
            }
          },
          CreateAssessment: {
            http: {
              requestUri: '/assessments'
            },
            input: {
              type: 'structure',
              required: ['name', 'assessmentReportsDestination', 'scope', 'roles', 'frameworkId'],
              members: {
                name: {
                  shape: 'Sl'
                },
                description: {
                  shape: 'S18'
                },
                assessmentReportsDestination: {
                  shape: 'S19'
                },
                scope: {
                  shape: 'S1b'
                },
                roles: {
                  shape: 'S1k'
                },
                frameworkId: {},
                tags: {
                  shape: 'S1m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                assessment: {
                  shape: 'S1q'
                }
              }
            }
          },
          CreateAssessmentFramework: {
            http: {
              requestUri: '/assessmentFrameworks'
            },
            input: {
              type: 'structure',
              required: ['name', 'controlSets'],
              members: {
                name: {},
                description: {},
                complianceType: {
                  shape: 'S1t'
                },
                controlSets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name'],
                    members: {
                      name: {},
                      controls: {
                        shape: 'S2l'
                      }
                    }
                  }
                },
                tags: {
                  shape: 'S1m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                framework: {
                  shape: 'S2o'
                }
              }
            }
          },
          CreateAssessmentReport: {
            http: {
              requestUri: '/assessments/{assessmentId}/reports'
            },
            input: {
              type: 'structure',
              required: ['name', 'assessmentId'],
              members: {
                name: {},
                description: {
                  shape: 'S3e'
                },
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
                },
                queryStatement: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                assessmentReport: {
                  type: 'structure',
                  members: {
                    id: {},
                    name: {},
                    description: {
                      shape: 'S3e'
                    },
                    awsAccountId: {},
                    assessmentId: {},
                    assessmentName: {
                      shape: 'Sl'
                    },
                    author: {
                      shape: 'S2b'
                    },
                    status: {},
                    creationTime: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          CreateControl: {
            http: {
              requestUri: '/controls'
            },
            input: {
              type: 'structure',
              required: ['name', 'controlMappingSources'],
              members: {
                name: {},
                description: {
                  shape: 'S26'
                },
                testingInformation: {
                  shape: 'S2w'
                },
                actionPlanTitle: {
                  shape: 'S2x'
                },
                actionPlanInstructions: {
                  shape: 'S2y'
                },
                controlMappingSources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      sourceName: {},
                      sourceDescription: {},
                      sourceSetUpOption: {},
                      sourceType: {},
                      sourceKeyword: {
                        shape: 'S35'
                      },
                      sourceFrequency: {},
                      troubleshootingText: {
                        shape: 'S39'
                      }
                    }
                  }
                },
                tags: {
                  shape: 'S1m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                control: {
                  shape: 'S2u'
                }
              }
            }
          },
          DeleteAssessment: {
            http: {
              method: 'DELETE',
              requestUri: '/assessments/{assessmentId}'
            },
            input: {
              type: 'structure',
              required: ['assessmentId'],
              members: {
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteAssessmentFramework: {
            http: {
              method: 'DELETE',
              requestUri: '/assessmentFrameworks/{frameworkId}'
            },
            input: {
              type: 'structure',
              required: ['frameworkId'],
              members: {
                frameworkId: {
                  location: 'uri',
                  locationName: 'frameworkId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteAssessmentFrameworkShare: {
            http: {
              method: 'DELETE',
              requestUri: '/assessmentFrameworkShareRequests/{requestId}'
            },
            input: {
              type: 'structure',
              required: ['requestId', 'requestType'],
              members: {
                requestId: {
                  location: 'uri',
                  locationName: 'requestId'
                },
                requestType: {
                  location: 'querystring',
                  locationName: 'requestType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteAssessmentReport: {
            http: {
              method: 'DELETE',
              requestUri: '/assessments/{assessmentId}/reports/{assessmentReportId}'
            },
            input: {
              type: 'structure',
              required: ['assessmentId', 'assessmentReportId'],
              members: {
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
                },
                assessmentReportId: {
                  location: 'uri',
                  locationName: 'assessmentReportId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteControl: {
            http: {
              method: 'DELETE',
              requestUri: '/controls/{controlId}'
            },
            input: {
              type: 'structure',
              required: ['controlId'],
              members: {
                controlId: {
                  location: 'uri',
                  locationName: 'controlId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeregisterAccount: {
            http: {
              requestUri: '/account/deregisterAccount'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                status: {}
              }
            }
          },
          DeregisterOrganizationAdminAccount: {
            http: {
              requestUri: '/account/deregisterOrganizationAdminAccount'
            },
            input: {
              type: 'structure',
              members: {
                adminAccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateAssessmentReportEvidenceFolder: {
            http: {
              method: 'PUT',
              requestUri: '/assessments/{assessmentId}/disassociateFromAssessmentReport'
            },
            input: {
              type: 'structure',
              required: ['assessmentId', 'evidenceFolderId'],
              members: {
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
                },
                evidenceFolderId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetAccountStatus: {
            http: {
              method: 'GET',
              requestUri: '/account/status'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                status: {}
              }
            }
          },
          GetAssessment: {
            http: {
              method: 'GET',
              requestUri: '/assessments/{assessmentId}'
            },
            input: {
              type: 'structure',
              required: ['assessmentId'],
              members: {
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                assessment: {
                  shape: 'S1q'
                },
                userRole: {
                  shape: 'S1l'
                }
              }
            }
          },
          GetAssessmentFramework: {
            http: {
              method: 'GET',
              requestUri: '/assessmentFrameworks/{frameworkId}'
            },
            input: {
              type: 'structure',
              required: ['frameworkId'],
              members: {
                frameworkId: {
                  location: 'uri',
                  locationName: 'frameworkId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                framework: {
                  shape: 'S2o'
                }
              }
            }
          },
          GetAssessmentReportUrl: {
            http: {
              method: 'GET',
              requestUri: '/assessments/{assessmentId}/reports/{assessmentReportId}/url'
            },
            input: {
              type: 'structure',
              required: ['assessmentReportId', 'assessmentId'],
              members: {
                assessmentReportId: {
                  location: 'uri',
                  locationName: 'assessmentReportId'
                },
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                preSignedUrl: {
                  type: 'structure',
                  members: {
                    hyperlinkName: {},
                    link: {}
                  }
                }
              }
            }
          },
          GetChangeLogs: {
            http: {
              method: 'GET',
              requestUri: '/assessments/{assessmentId}/changelogs'
            },
            input: {
              type: 'structure',
              required: ['assessmentId'],
              members: {
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
                },
                controlSetId: {
                  location: 'querystring',
                  locationName: 'controlSetId'
                },
                controlId: {
                  location: 'querystring',
                  locationName: 'controlId'
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
                changeLogs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      objectType: {},
                      objectName: {},
                      action: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      createdBy: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetControl: {
            http: {
              method: 'GET',
              requestUri: '/controls/{controlId}'
            },
            input: {
              type: 'structure',
              required: ['controlId'],
              members: {
                controlId: {
                  location: 'uri',
                  locationName: 'controlId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                control: {
                  shape: 'S2u'
                }
              }
            }
          },
          GetDelegations: {
            http: {
              method: 'GET',
              requestUri: '/delegations'
            },
            input: {
              type: 'structure',
              members: {
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
                delegations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {},
                      assessmentName: {
                        shape: 'Sl'
                      },
                      assessmentId: {},
                      status: {},
                      roleArn: {},
                      creationTime: {
                        type: 'timestamp'
                      },
                      controlSetName: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetEvidence: {
            http: {
              method: 'GET',
              requestUri: '/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence/{evidenceId}'
            },
            input: {
              type: 'structure',
              required: ['assessmentId', 'controlSetId', 'evidenceFolderId', 'evidenceId'],
              members: {
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
                },
                controlSetId: {
                  location: 'uri',
                  locationName: 'controlSetId'
                },
                evidenceFolderId: {
                  location: 'uri',
                  locationName: 'evidenceFolderId'
                },
                evidenceId: {
                  location: 'uri',
                  locationName: 'evidenceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                evidence: {
                  shape: 'S4w'
                }
              }
            }
          },
          GetEvidenceByEvidenceFolder: {
            http: {
              method: 'GET',
              requestUri: '/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence'
            },
            input: {
              type: 'structure',
              required: ['assessmentId', 'controlSetId', 'evidenceFolderId'],
              members: {
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
                },
                controlSetId: {
                  location: 'uri',
                  locationName: 'controlSetId'
                },
                evidenceFolderId: {
                  location: 'uri',
                  locationName: 'evidenceFolderId'
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
                evidence: {
                  type: 'list',
                  member: {
                    shape: 'S4w'
                  }
                },
                nextToken: {}
              }
            }
          },
          GetEvidenceFileUploadUrl: {
            http: {
              method: 'GET',
              requestUri: '/evidenceFileUploadUrl'
            },
            input: {
              type: 'structure',
              required: ['fileName'],
              members: {
                fileName: {
                  shape: 'S13',
                  location: 'querystring',
                  locationName: 'fileName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                evidenceFileName: {},
                uploadUrl: {}
              },
              sensitive: true
            }
          },
          GetEvidenceFolder: {
            http: {
              method: 'GET',
              requestUri: '/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}'
            },
            input: {
              type: 'structure',
              required: ['assessmentId', 'controlSetId', 'evidenceFolderId'],
              members: {
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
                },
                controlSetId: {
                  location: 'uri',
                  locationName: 'controlSetId'
                },
                evidenceFolderId: {
                  location: 'uri',
                  locationName: 'evidenceFolderId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                evidenceFolder: {
                  shape: 'S5c'
                }
              }
            }
          },
          GetEvidenceFoldersByAssessment: {
            http: {
              method: 'GET',
              requestUri: '/assessments/{assessmentId}/evidenceFolders'
            },
            input: {
              type: 'structure',
              required: ['assessmentId'],
              members: {
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
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
                evidenceFolders: {
                  shape: 'S5g'
                },
                nextToken: {}
              }
            }
          },
          GetEvidenceFoldersByAssessmentControl: {
            http: {
              method: 'GET',
              requestUri: '/assessments/{assessmentId}/evidenceFolders-by-assessment-control/{controlSetId}/{controlId}'
            },
            input: {
              type: 'structure',
              required: ['assessmentId', 'controlSetId', 'controlId'],
              members: {
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
                },
                controlSetId: {
                  location: 'uri',
                  locationName: 'controlSetId'
                },
                controlId: {
                  location: 'uri',
                  locationName: 'controlId'
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
                evidenceFolders: {
                  shape: 'S5g'
                },
                nextToken: {}
              }
            }
          },
          GetInsights: {
            http: {
              method: 'GET',
              requestUri: '/insights'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                insights: {
                  type: 'structure',
                  members: {
                    activeAssessmentsCount: {
                      type: 'integer'
                    },
                    noncompliantEvidenceCount: {
                      type: 'integer'
                    },
                    compliantEvidenceCount: {
                      type: 'integer'
                    },
                    inconclusiveEvidenceCount: {
                      type: 'integer'
                    },
                    assessmentControlsCountByNoncompliantEvidence: {
                      type: 'integer'
                    },
                    totalAssessmentControlsCount: {
                      type: 'integer'
                    },
                    lastUpdated: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          GetInsightsByAssessment: {
            http: {
              method: 'GET',
              requestUri: '/insights/assessments/{assessmentId}'
            },
            input: {
              type: 'structure',
              required: ['assessmentId'],
              members: {
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                insights: {
                  type: 'structure',
                  members: {
                    noncompliantEvidenceCount: {
                      type: 'integer'
                    },
                    compliantEvidenceCount: {
                      type: 'integer'
                    },
                    inconclusiveEvidenceCount: {
                      type: 'integer'
                    },
                    assessmentControlsCountByNoncompliantEvidence: {
                      type: 'integer'
                    },
                    totalAssessmentControlsCount: {
                      type: 'integer'
                    },
                    lastUpdated: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          GetOrganizationAdminAccount: {
            http: {
              method: 'GET',
              requestUri: '/account/organizationAdminAccount'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                adminAccountId: {},
                organizationId: {}
              }
            }
          },
          GetServicesInScope: {
            http: {
              method: 'GET',
              requestUri: '/services'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                serviceMetadata: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      displayName: {},
                      description: {},
                      category: {}
                    }
                  }
                }
              }
            }
          },
          GetSettings: {
            http: {
              method: 'GET',
              requestUri: '/settings/{attribute}'
            },
            input: {
              type: 'structure',
              required: ['attribute'],
              members: {
                attribute: {
                  location: 'uri',
                  locationName: 'attribute'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                settings: {
                  shape: 'S60'
                }
              }
            }
          },
          ListAssessmentControlInsightsByControlDomain: {
            http: {
              method: 'GET',
              requestUri: '/insights/controls-by-assessment'
            },
            input: {
              type: 'structure',
              required: ['controlDomainId', 'assessmentId'],
              members: {
                controlDomainId: {
                  location: 'querystring',
                  locationName: 'controlDomainId'
                },
                assessmentId: {
                  location: 'querystring',
                  locationName: 'assessmentId'
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
                controlInsightsByAssessment: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      id: {},
                      evidenceInsights: {
                        shape: 'S6h'
                      },
                      controlSetName: {},
                      lastUpdated: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAssessmentFrameworkShareRequests: {
            http: {
              method: 'GET',
              requestUri: '/assessmentFrameworkShareRequests'
            },
            input: {
              type: 'structure',
              required: ['requestType'],
              members: {
                requestType: {
                  location: 'querystring',
                  locationName: 'requestType'
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
                assessmentFrameworkShareRequests: {
                  type: 'list',
                  member: {
                    shape: 'S6l'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAssessmentFrameworks: {
            http: {
              method: 'GET',
              requestUri: '/assessmentFrameworks'
            },
            input: {
              type: 'structure',
              required: ['frameworkType'],
              members: {
                frameworkType: {
                  location: 'querystring',
                  locationName: 'frameworkType'
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
                frameworkMetadataList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      id: {},
                      type: {},
                      name: {},
                      description: {},
                      logo: {},
                      complianceType: {
                        shape: 'S1t'
                      },
                      controlsCount: {
                        type: 'integer'
                      },
                      controlSetsCount: {
                        type: 'integer'
                      },
                      createdAt: {
                        type: 'timestamp'
                      },
                      lastUpdatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAssessmentReports: {
            http: {
              method: 'GET',
              requestUri: '/assessmentReports'
            },
            input: {
              type: 'structure',
              members: {
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
                assessmentReports: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {},
                      name: {},
                      description: {
                        shape: 'S3e'
                      },
                      assessmentId: {},
                      assessmentName: {
                        shape: 'Sl'
                      },
                      author: {
                        shape: 'S2b'
                      },
                      status: {},
                      creationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAssessments: {
            http: {
              method: 'GET',
              requestUri: '/assessments'
            },
            input: {
              type: 'structure',
              members: {
                status: {
                  location: 'querystring',
                  locationName: 'status'
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
                assessmentMetadata: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {
                        shape: 'Sl'
                      },
                      id: {},
                      complianceType: {
                        shape: 'S1t'
                      },
                      status: {},
                      roles: {
                        shape: 'S1k'
                      },
                      delegations: {
                        shape: 'Sj'
                      },
                      creationTime: {
                        type: 'timestamp'
                      },
                      lastUpdated: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListControlDomainInsights: {
            http: {
              method: 'GET',
              requestUri: '/insights/control-domains'
            },
            input: {
              type: 'structure',
              members: {
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
                controlDomainInsights: {
                  shape: 'S75'
                },
                nextToken: {}
              }
            }
          },
          ListControlDomainInsightsByAssessment: {
            http: {
              method: 'GET',
              requestUri: '/insights/control-domains-by-assessment'
            },
            input: {
              type: 'structure',
              required: ['assessmentId'],
              members: {
                assessmentId: {
                  location: 'querystring',
                  locationName: 'assessmentId'
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
                controlDomainInsights: {
                  shape: 'S75'
                },
                nextToken: {}
              }
            }
          },
          ListControlInsightsByControlDomain: {
            http: {
              method: 'GET',
              requestUri: '/insights/controls'
            },
            input: {
              type: 'structure',
              required: ['controlDomainId'],
              members: {
                controlDomainId: {
                  location: 'querystring',
                  locationName: 'controlDomainId'
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
                controlInsightsMetadata: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      id: {},
                      evidenceInsights: {
                        shape: 'S6h'
                      },
                      lastUpdated: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListControls: {
            http: {
              method: 'GET',
              requestUri: '/controls'
            },
            input: {
              type: 'structure',
              required: ['controlType'],
              members: {
                controlType: {
                  location: 'querystring',
                  locationName: 'controlType'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                controlCatalogId: {
                  location: 'querystring',
                  locationName: 'controlCatalogId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                controlMetadataList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      id: {},
                      name: {},
                      controlSources: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      lastUpdatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListKeywordsForDataSource: {
            http: {
              method: 'GET',
              requestUri: '/dataSourceKeywords'
            },
            input: {
              type: 'structure',
              required: ['source'],
              members: {
                source: {
                  location: 'querystring',
                  locationName: 'source'
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
                keywords: {
                  type: 'list',
                  member: {}
                },
                nextToken: {}
              }
            }
          },
          ListNotifications: {
            http: {
              method: 'GET',
              requestUri: '/notifications'
            },
            input: {
              type: 'structure',
              members: {
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
                notifications: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {},
                      assessmentId: {},
                      assessmentName: {
                        shape: 'Sl'
                      },
                      controlSetId: {},
                      controlSetName: {},
                      description: {},
                      eventTime: {
                        type: 'timestamp'
                      },
                      source: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resourceArn}'
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
              members: {
                tags: {
                  shape: 'S1m'
                }
              }
            }
          },
          RegisterAccount: {
            http: {
              requestUri: '/account/registerAccount'
            },
            input: {
              type: 'structure',
              members: {
                kmsKey: {},
                delegatedAdminAccount: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {}
              }
            }
          },
          RegisterOrganizationAdminAccount: {
            http: {
              requestUri: '/account/registerOrganizationAdminAccount'
            },
            input: {
              type: 'structure',
              required: ['adminAccountId'],
              members: {
                adminAccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                adminAccountId: {},
                organizationId: {}
              }
            }
          },
          StartAssessmentFrameworkShare: {
            http: {
              requestUri: '/assessmentFrameworks/{frameworkId}/shareRequests'
            },
            input: {
              type: 'structure',
              required: ['frameworkId', 'destinationAccount', 'destinationRegion'],
              members: {
                frameworkId: {
                  location: 'uri',
                  locationName: 'frameworkId'
                },
                destinationAccount: {},
                destinationRegion: {},
                comment: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                assessmentFrameworkShareRequest: {
                  shape: 'S6l'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}'
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
                  shape: 'S1m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resourceArn}'
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
            }
          },
          UpdateAssessment: {
            http: {
              method: 'PUT',
              requestUri: '/assessments/{assessmentId}'
            },
            input: {
              type: 'structure',
              required: ['assessmentId', 'scope'],
              members: {
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
                },
                assessmentName: {
                  shape: 'Sl'
                },
                assessmentDescription: {
                  shape: 'S18'
                },
                scope: {
                  shape: 'S1b'
                },
                assessmentReportsDestination: {
                  shape: 'S19'
                },
                roles: {
                  shape: 'S1k'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                assessment: {
                  shape: 'S1q'
                }
              }
            }
          },
          UpdateAssessmentControl: {
            http: {
              method: 'PUT',
              requestUri: '/assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}'
            },
            input: {
              type: 'structure',
              required: ['assessmentId', 'controlSetId', 'controlId'],
              members: {
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
                },
                controlSetId: {
                  location: 'uri',
                  locationName: 'controlSetId'
                },
                controlId: {
                  location: 'uri',
                  locationName: 'controlId'
                },
                controlStatus: {},
                commentBody: {
                  shape: 'S2c'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                control: {
                  shape: 'S24'
                }
              }
            }
          },
          UpdateAssessmentControlSetStatus: {
            http: {
              method: 'PUT',
              requestUri: '/assessments/{assessmentId}/controlSets/{controlSetId}/status'
            },
            input: {
              type: 'structure',
              required: ['assessmentId', 'controlSetId', 'status', 'comment'],
              members: {
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
                },
                controlSetId: {
                  location: 'uri',
                  locationName: 'controlSetId'
                },
                status: {},
                comment: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                controlSet: {
                  shape: 'S20'
                }
              }
            }
          },
          UpdateAssessmentFramework: {
            http: {
              method: 'PUT',
              requestUri: '/assessmentFrameworks/{frameworkId}'
            },
            input: {
              type: 'structure',
              required: ['frameworkId', 'name', 'controlSets'],
              members: {
                frameworkId: {
                  location: 'uri',
                  locationName: 'frameworkId'
                },
                name: {},
                description: {},
                complianceType: {
                  shape: 'S1t'
                },
                controlSets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'controls'],
                    members: {
                      id: {},
                      name: {},
                      controls: {
                        shape: 'S2l'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                framework: {
                  shape: 'S2o'
                }
              }
            }
          },
          UpdateAssessmentFrameworkShare: {
            http: {
              method: 'PUT',
              requestUri: '/assessmentFrameworkShareRequests/{requestId}'
            },
            input: {
              type: 'structure',
              required: ['requestId', 'requestType', 'action'],
              members: {
                requestId: {
                  location: 'uri',
                  locationName: 'requestId'
                },
                requestType: {},
                action: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                assessmentFrameworkShareRequest: {
                  shape: 'S6l'
                }
              }
            }
          },
          UpdateAssessmentStatus: {
            http: {
              method: 'PUT',
              requestUri: '/assessments/{assessmentId}/status'
            },
            input: {
              type: 'structure',
              required: ['assessmentId', 'status'],
              members: {
                assessmentId: {
                  location: 'uri',
                  locationName: 'assessmentId'
                },
                status: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                assessment: {
                  shape: 'S1q'
                }
              }
            }
          },
          UpdateControl: {
            http: {
              method: 'PUT',
              requestUri: '/controls/{controlId}'
            },
            input: {
              type: 'structure',
              required: ['controlId', 'name', 'controlMappingSources'],
              members: {
                controlId: {
                  location: 'uri',
                  locationName: 'controlId'
                },
                name: {},
                description: {
                  shape: 'S26'
                },
                testingInformation: {
                  shape: 'S2w'
                },
                actionPlanTitle: {
                  shape: 'S2x'
                },
                actionPlanInstructions: {
                  shape: 'S2y'
                },
                controlMappingSources: {
                  shape: 'S2z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                control: {
                  shape: 'S2u'
                }
              }
            }
          },
          UpdateSettings: {
            http: {
              method: 'PUT',
              requestUri: '/settings'
            },
            input: {
              type: 'structure',
              members: {
                snsTopic: {},
                defaultAssessmentReportsDestination: {
                  shape: 'S19'
                },
                defaultProcessOwners: {
                  shape: 'S1k'
                },
                kmsKey: {},
                evidenceFinderEnabled: {
                  type: 'boolean'
                },
                deregistrationPolicy: {
                  shape: 'S68'
                },
                defaultExportDestination: {
                  shape: 'S6a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                settings: {
                  shape: 'S60'
                }
              }
            }
          },
          ValidateAssessmentReportIntegrity: {
            http: {
              requestUri: '/assessmentReports/integrity'
            },
            input: {
              type: 'structure',
              required: ['s3RelativePath'],
              members: {
                s3RelativePath: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                signatureValid: {
                  type: 'boolean'
                },
                signatureAlgorithm: {},
                signatureDateTime: {},
                signatureKeyId: {},
                validationErrors: {
                  type: 'list',
                  member: {}
                }
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'list',
            member: {}
          },
          S7: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                evidenceId: {},
                errorCode: {},
                errorMessage: {}
              }
            }
          },
          Sd: {
            type: 'structure',
            members: {
              comment: {
                shape: 'Se'
              },
              controlSetId: {},
              roleArn: {},
              roleType: {}
            }
          },
          Se: {
            type: 'string',
            sensitive: true
          },
          Sj: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                id: {},
                assessmentName: {
                  shape: 'Sl'
                },
                assessmentId: {},
                status: {},
                roleArn: {},
                roleType: {},
                creationTime: {
                  type: 'timestamp'
                },
                lastUpdated: {
                  type: 'timestamp'
                },
                controlSetId: {},
                comment: {
                  shape: 'Se'
                },
                createdBy: {
                  shape: 'So'
                }
              },
              sensitive: true
            }
          },
          Sl: {
            type: 'string',
            sensitive: true
          },
          So: {
            type: 'string',
            sensitive: true
          },
          S10: {
            type: 'structure',
            members: {
              s3ResourcePath: {},
              textResponse: {
                type: 'string',
                sensitive: true
              },
              evidenceFileName: {
                shape: 'S13'
              }
            }
          },
          S13: {
            type: 'string',
            sensitive: true
          },
          S18: {
            type: 'string',
            sensitive: true
          },
          S19: {
            type: 'structure',
            members: {
              destinationType: {},
              destination: {}
            },
            sensitive: true
          },
          S1b: {
            type: 'structure',
            members: {
              awsAccounts: {
                type: 'list',
                member: {
                  shape: 'S1d'
                },
                sensitive: true
              },
              awsServices: {
                deprecated: true,
                deprecatedMessage: 'You can\'t specify services in scope when creating/updating an assessment. If you use the parameter to specify one or more AWS services, Audit Manager ignores the input. Instead the value of the parameter will show as empty indicating that the services are defined and managed by Audit Manager.',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    serviceName: {}
                  }
                }
              }
            },
            sensitive: true
          },
          S1d: {
            type: 'structure',
            members: {
              id: {},
              emailAddress: {
                type: 'string',
                sensitive: true
              },
              name: {}
            }
          },
          S1k: {
            type: 'list',
            member: {
              shape: 'S1l'
            },
            sensitive: true
          },
          S1l: {
            type: 'structure',
            required: ['roleType', 'roleArn'],
            members: {
              roleType: {},
              roleArn: {}
            }
          },
          S1m: {
            type: 'map',
            key: {},
            value: {}
          },
          S1q: {
            type: 'structure',
            members: {
              arn: {},
              awsAccount: {
                shape: 'S1d'
              },
              metadata: {
                type: 'structure',
                members: {
                  name: {
                    shape: 'Sl'
                  },
                  id: {},
                  description: {
                    shape: 'S18'
                  },
                  complianceType: {
                    shape: 'S1t'
                  },
                  status: {},
                  assessmentReportsDestination: {
                    shape: 'S19'
                  },
                  scope: {
                    shape: 'S1b'
                  },
                  roles: {
                    shape: 'S1k'
                  },
                  delegations: {
                    shape: 'Sj'
                  },
                  creationTime: {
                    type: 'timestamp'
                  },
                  lastUpdated: {
                    type: 'timestamp'
                  }
                }
              },
              framework: {
                type: 'structure',
                members: {
                  id: {},
                  arn: {},
                  metadata: {
                    type: 'structure',
                    members: {
                      name: {
                        shape: 'Sl'
                      },
                      description: {},
                      logo: {},
                      complianceType: {
                        shape: 'S1t'
                      }
                    }
                  },
                  controlSets: {
                    type: 'list',
                    member: {
                      shape: 'S20'
                    }
                  }
                },
                sensitive: true
              },
              tags: {
                shape: 'S1m'
              }
            }
          },
          S1t: {
            type: 'string',
            sensitive: true
          },
          S20: {
            type: 'structure',
            members: {
              id: {},
              description: {},
              status: {},
              roles: {
                shape: 'S1k'
              },
              controls: {
                type: 'list',
                member: {
                  shape: 'S24'
                }
              },
              delegations: {
                shape: 'Sj'
              },
              systemEvidenceCount: {
                type: 'integer'
              },
              manualEvidenceCount: {
                type: 'integer'
              }
            }
          },
          S24: {
            type: 'structure',
            members: {
              id: {},
              name: {},
              description: {
                shape: 'S26'
              },
              status: {},
              response: {},
              comments: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    authorName: {
                      shape: 'S2b'
                    },
                    commentBody: {
                      shape: 'S2c'
                    },
                    postedDate: {
                      type: 'timestamp'
                    }
                  }
                }
              },
              evidenceSources: {
                type: 'list',
                member: {}
              },
              evidenceCount: {
                type: 'integer'
              },
              assessmentReportEvidenceCount: {
                type: 'integer'
              }
            }
          },
          S26: {
            type: 'string',
            sensitive: true
          },
          S2b: {
            type: 'string',
            sensitive: true
          },
          S2c: {
            type: 'string',
            sensitive: true
          },
          S2l: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {}
              }
            }
          },
          S2o: {
            type: 'structure',
            members: {
              arn: {},
              id: {},
              name: {},
              type: {},
              complianceType: {
                shape: 'S1t'
              },
              description: {},
              logo: {},
              controlSources: {},
              controlSets: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    id: {},
                    name: {},
                    controls: {
                      type: 'list',
                      member: {
                        shape: 'S2u'
                      }
                    }
                  }
                },
                sensitive: true
              },
              createdAt: {
                type: 'timestamp'
              },
              lastUpdatedAt: {
                type: 'timestamp'
              },
              createdBy: {
                shape: 'So'
              },
              lastUpdatedBy: {
                shape: 'S3a'
              },
              tags: {
                shape: 'S1m'
              }
            }
          },
          S2u: {
            type: 'structure',
            members: {
              arn: {},
              id: {},
              type: {},
              name: {},
              description: {
                shape: 'S26'
              },
              testingInformation: {
                shape: 'S2w'
              },
              actionPlanTitle: {
                shape: 'S2x'
              },
              actionPlanInstructions: {
                shape: 'S2y'
              },
              controlSources: {},
              controlMappingSources: {
                shape: 'S2z'
              },
              createdAt: {
                type: 'timestamp'
              },
              lastUpdatedAt: {
                type: 'timestamp'
              },
              createdBy: {
                shape: 'So'
              },
              lastUpdatedBy: {
                shape: 'S3a'
              },
              tags: {
                shape: 'S1m'
              },
              state: {}
            }
          },
          S2w: {
            type: 'string',
            sensitive: true
          },
          S2x: {
            type: 'string',
            sensitive: true
          },
          S2y: {
            type: 'string',
            sensitive: true
          },
          S2z: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                sourceId: {},
                sourceName: {},
                sourceDescription: {},
                sourceSetUpOption: {},
                sourceType: {},
                sourceKeyword: {
                  shape: 'S35'
                },
                sourceFrequency: {},
                troubleshootingText: {
                  shape: 'S39'
                }
              }
            }
          },
          S35: {
            type: 'structure',
            members: {
              keywordInputType: {},
              keywordValue: {}
            }
          },
          S39: {
            type: 'string',
            sensitive: true
          },
          S3a: {
            type: 'string',
            sensitive: true
          },
          S3e: {
            type: 'string',
            sensitive: true
          },
          S4w: {
            type: 'structure',
            members: {
              dataSource: {},
              evidenceAwsAccountId: {},
              time: {
                type: 'timestamp'
              },
              eventSource: {},
              eventName: {},
              evidenceByType: {},
              resourcesIncluded: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    arn: {},
                    value: {},
                    complianceCheck: {}
                  }
                }
              },
              attributes: {
                type: 'map',
                key: {},
                value: {}
              },
              iamId: {},
              complianceCheck: {},
              awsOrganization: {},
              awsAccountId: {},
              evidenceFolderId: {},
              id: {},
              assessmentReportSelection: {}
            }
          },
          S5c: {
            type: 'structure',
            members: {
              name: {},
              date: {
                type: 'timestamp'
              },
              assessmentId: {},
              controlSetId: {},
              controlId: {},
              id: {},
              dataSource: {},
              author: {},
              totalEvidence: {
                type: 'integer'
              },
              assessmentReportSelectionCount: {
                type: 'integer'
              },
              controlName: {},
              evidenceResourcesIncludedCount: {
                type: 'integer'
              },
              evidenceByTypeConfigurationDataCount: {
                type: 'integer'
              },
              evidenceByTypeManualCount: {
                type: 'integer'
              },
              evidenceByTypeComplianceCheckCount: {
                type: 'integer'
              },
              evidenceByTypeComplianceCheckIssuesCount: {
                type: 'integer'
              },
              evidenceByTypeUserActivityCount: {
                type: 'integer'
              },
              evidenceAwsServiceSourceCount: {
                type: 'integer'
              }
            }
          },
          S5g: {
            type: 'list',
            member: {
              shape: 'S5c'
            }
          },
          S60: {
            type: 'structure',
            members: {
              isAwsOrgEnabled: {
                type: 'boolean'
              },
              snsTopic: {
                type: 'string',
                sensitive: true
              },
              defaultAssessmentReportsDestination: {
                shape: 'S19'
              },
              defaultProcessOwners: {
                shape: 'S1k'
              },
              kmsKey: {},
              evidenceFinderEnablement: {
                type: 'structure',
                members: {
                  eventDataStoreArn: {},
                  enablementStatus: {},
                  backfillStatus: {},
                  error: {}
                }
              },
              deregistrationPolicy: {
                shape: 'S68'
              },
              defaultExportDestination: {
                shape: 'S6a'
              }
            }
          },
          S68: {
            type: 'structure',
            members: {
              deleteResources: {}
            }
          },
          S6a: {
            type: 'structure',
            members: {
              destinationType: {},
              destination: {}
            }
          },
          S6h: {
            type: 'structure',
            members: {
              noncompliantEvidenceCount: {
                type: 'integer'
              },
              compliantEvidenceCount: {
                type: 'integer'
              },
              inconclusiveEvidenceCount: {
                type: 'integer'
              }
            }
          },
          S6l: {
            type: 'structure',
            members: {
              id: {},
              frameworkId: {},
              frameworkName: {},
              frameworkDescription: {},
              status: {},
              sourceAccount: {},
              destinationAccount: {},
              destinationRegion: {},
              expirationTime: {
                type: 'timestamp'
              },
              creationTime: {
                type: 'timestamp'
              },
              lastUpdated: {
                type: 'timestamp'
              },
              comment: {},
              standardControlsCount: {
                type: 'integer'
              },
              customControlsCount: {
                type: 'integer'
              },
              complianceType: {
                shape: 'S1t'
              }
            }
          },
          S75: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                id: {},
                controlsCountByNoncompliantEvidence: {
                  type: 'integer'
                },
                totalControlsCount: {
                  type: 'integer'
                },
                evidenceInsights: {
                  shape: 'S6h'
                },
                lastUpdated: {
                  type: 'timestamp'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=08a1e948ba648b8d8e695651a03ff3b0f8c2108a.js.map