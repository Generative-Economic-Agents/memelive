System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-05-01',
          endpointPrefix: 'workdocs',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon WorkDocs',
          serviceId: 'WorkDocs',
          signatureVersion: 'v4',
          uid: 'workdocs-2016-05-01'
        },
        operations: {
          AbortDocumentVersionUpload: {
            http: {
              method: 'DELETE',
              requestUri: '/api/v1/documents/{DocumentId}/versions/{VersionId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['DocumentId', 'VersionId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                DocumentId: {
                  location: 'uri',
                  locationName: 'DocumentId'
                },
                VersionId: {
                  location: 'uri',
                  locationName: 'VersionId'
                }
              }
            }
          },
          ActivateUser: {
            http: {
              requestUri: '/api/v1/users/{UserId}/activation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['UserId'],
              members: {
                UserId: {
                  location: 'uri',
                  locationName: 'UserId'
                },
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                User: {
                  shape: 'S8'
                }
              }
            }
          },
          AddResourcePermissions: {
            http: {
              requestUri: '/api/v1/resources/{ResourceId}/permissions',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ResourceId', 'Principals'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                ResourceId: {
                  location: 'uri',
                  locationName: 'ResourceId'
                },
                Principals: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Id', 'Type', 'Role'],
                    members: {
                      Id: {},
                      Type: {},
                      Role: {}
                    }
                  }
                },
                NotificationOptions: {
                  type: 'structure',
                  members: {
                    SendEmail: {
                      type: 'boolean'
                    },
                    EmailMessage: {
                      shape: 'St'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ShareResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PrincipalId: {},
                      InviteePrincipalId: {},
                      Role: {},
                      Status: {},
                      ShareId: {},
                      StatusMessage: {
                        shape: 'St'
                      }
                    }
                  }
                }
              }
            }
          },
          CreateComment: {
            http: {
              requestUri: '/api/v1/documents/{DocumentId}/versions/{VersionId}/comment',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['DocumentId', 'VersionId', 'Text'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                DocumentId: {
                  location: 'uri',
                  locationName: 'DocumentId'
                },
                VersionId: {
                  location: 'uri',
                  locationName: 'VersionId'
                },
                ParentId: {},
                ThreadId: {},
                Text: {
                  shape: 'S10'
                },
                Visibility: {},
                NotifyCollaborators: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Comment: {
                  shape: 'S13'
                }
              }
            }
          },
          CreateCustomMetadata: {
            http: {
              method: 'PUT',
              requestUri: '/api/v1/resources/{ResourceId}/customMetadata',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceId', 'CustomMetadata'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                ResourceId: {
                  location: 'uri',
                  locationName: 'ResourceId'
                },
                VersionId: {
                  location: 'querystring',
                  locationName: 'versionid'
                },
                CustomMetadata: {
                  shape: 'S16'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateFolder: {
            http: {
              requestUri: '/api/v1/folders',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ParentFolderId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                Name: {
                  shape: 'S1b'
                },
                ParentFolderId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Metadata: {
                  shape: 'S1d'
                }
              }
            }
          },
          CreateLabels: {
            http: {
              method: 'PUT',
              requestUri: '/api/v1/resources/{ResourceId}/labels',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceId', 'Labels'],
              members: {
                ResourceId: {
                  location: 'uri',
                  locationName: 'ResourceId'
                },
                Labels: {
                  shape: 'S1g'
                },
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateNotificationSubscription: {
            http: {
              requestUri: '/api/v1/organizations/{OrganizationId}/subscriptions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['OrganizationId', 'Endpoint', 'Protocol', 'SubscriptionType'],
              members: {
                OrganizationId: {
                  location: 'uri',
                  locationName: 'OrganizationId'
                },
                Endpoint: {},
                Protocol: {},
                SubscriptionType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Subscription: {
                  shape: 'S1p'
                }
              }
            }
          },
          CreateUser: {
            http: {
              requestUri: '/api/v1/users',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Username', 'GivenName', 'Surname', 'Password'],
              members: {
                OrganizationId: {},
                Username: {
                  shape: 'S9'
                },
                EmailAddress: {
                  shape: 'Sa'
                },
                GivenName: {
                  shape: 'Sb'
                },
                Surname: {
                  shape: 'Sb'
                },
                Password: {
                  type: 'string',
                  sensitive: true
                },
                TimeZoneId: {},
                StorageRule: {
                  shape: 'Sj'
                },
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                User: {
                  shape: 'S8'
                }
              }
            }
          },
          DeactivateUser: {
            http: {
              method: 'DELETE',
              requestUri: '/api/v1/users/{UserId}/activation',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['UserId'],
              members: {
                UserId: {
                  location: 'uri',
                  locationName: 'UserId'
                },
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                }
              }
            }
          },
          DeleteComment: {
            http: {
              method: 'DELETE',
              requestUri: '/api/v1/documents/{DocumentId}/versions/{VersionId}/comment/{CommentId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['DocumentId', 'VersionId', 'CommentId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                DocumentId: {
                  location: 'uri',
                  locationName: 'DocumentId'
                },
                VersionId: {
                  location: 'uri',
                  locationName: 'VersionId'
                },
                CommentId: {
                  location: 'uri',
                  locationName: 'CommentId'
                }
              }
            }
          },
          DeleteCustomMetadata: {
            http: {
              method: 'DELETE',
              requestUri: '/api/v1/resources/{ResourceId}/customMetadata',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                ResourceId: {
                  location: 'uri',
                  locationName: 'ResourceId'
                },
                VersionId: {
                  location: 'querystring',
                  locationName: 'versionId'
                },
                Keys: {
                  location: 'querystring',
                  locationName: 'keys',
                  type: 'list',
                  member: {}
                },
                DeleteAll: {
                  location: 'querystring',
                  locationName: 'deleteAll',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteDocument: {
            http: {
              method: 'DELETE',
              requestUri: '/api/v1/documents/{DocumentId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['DocumentId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                DocumentId: {
                  location: 'uri',
                  locationName: 'DocumentId'
                }
              }
            }
          },
          DeleteDocumentVersion: {
            http: {
              method: 'DELETE',
              requestUri: '/api/v1/documentVersions/{DocumentId}/versions/{VersionId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['DocumentId', 'VersionId', 'DeletePriorVersions'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                DocumentId: {
                  location: 'uri',
                  locationName: 'DocumentId'
                },
                VersionId: {
                  location: 'uri',
                  locationName: 'VersionId'
                },
                DeletePriorVersions: {
                  location: 'querystring',
                  locationName: 'deletePriorVersions',
                  type: 'boolean'
                }
              }
            }
          },
          DeleteFolder: {
            http: {
              method: 'DELETE',
              requestUri: '/api/v1/folders/{FolderId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['FolderId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                FolderId: {
                  location: 'uri',
                  locationName: 'FolderId'
                }
              }
            }
          },
          DeleteFolderContents: {
            http: {
              method: 'DELETE',
              requestUri: '/api/v1/folders/{FolderId}/contents',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['FolderId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                FolderId: {
                  location: 'uri',
                  locationName: 'FolderId'
                }
              }
            }
          },
          DeleteLabels: {
            http: {
              method: 'DELETE',
              requestUri: '/api/v1/resources/{ResourceId}/labels',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceId'],
              members: {
                ResourceId: {
                  location: 'uri',
                  locationName: 'ResourceId'
                },
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                Labels: {
                  shape: 'S1g',
                  location: 'querystring',
                  locationName: 'labels'
                },
                DeleteAll: {
                  location: 'querystring',
                  locationName: 'deleteAll',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteNotificationSubscription: {
            http: {
              method: 'DELETE',
              requestUri: '/api/v1/organizations/{OrganizationId}/subscriptions/{SubscriptionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SubscriptionId', 'OrganizationId'],
              members: {
                SubscriptionId: {
                  location: 'uri',
                  locationName: 'SubscriptionId'
                },
                OrganizationId: {
                  location: 'uri',
                  locationName: 'OrganizationId'
                }
              }
            }
          },
          DeleteUser: {
            http: {
              method: 'DELETE',
              requestUri: '/api/v1/users/{UserId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['UserId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                UserId: {
                  location: 'uri',
                  locationName: 'UserId'
                }
              }
            }
          },
          DescribeActivities: {
            http: {
              method: 'GET',
              requestUri: '/api/v1/activities',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                StartTime: {
                  location: 'querystring',
                  locationName: 'startTime',
                  type: 'timestamp'
                },
                EndTime: {
                  location: 'querystring',
                  locationName: 'endTime',
                  type: 'timestamp'
                },
                OrganizationId: {
                  location: 'querystring',
                  locationName: 'organizationId'
                },
                ActivityTypes: {
                  location: 'querystring',
                  locationName: 'activityTypes'
                },
                ResourceId: {
                  location: 'querystring',
                  locationName: 'resourceId'
                },
                UserId: {
                  location: 'querystring',
                  locationName: 'userId'
                },
                IncludeIndirectActivities: {
                  location: 'querystring',
                  locationName: 'includeIndirectActivities',
                  type: 'boolean'
                },
                Limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'marker'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UserActivities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Type: {},
                      TimeStamp: {
                        type: 'timestamp'
                      },
                      IsIndirectActivity: {
                        type: 'boolean'
                      },
                      OrganizationId: {},
                      Initiator: {
                        shape: 'S2e'
                      },
                      Participants: {
                        type: 'structure',
                        members: {
                          Users: {
                            type: 'list',
                            member: {
                              shape: 'S2e'
                            }
                          },
                          Groups: {
                            shape: 'S2h'
                          }
                        }
                      },
                      ResourceMetadata: {
                        shape: 'S2k'
                      },
                      OriginalParent: {
                        shape: 'S2k'
                      },
                      CommentMetadata: {
                        shape: 'S2m'
                      }
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeComments: {
            http: {
              method: 'GET',
              requestUri: '/api/v1/documents/{DocumentId}/versions/{VersionId}/comments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DocumentId', 'VersionId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                DocumentId: {
                  location: 'uri',
                  locationName: 'DocumentId'
                },
                VersionId: {
                  location: 'uri',
                  locationName: 'VersionId'
                },
                Limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'marker'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Comments: {
                  type: 'list',
                  member: {
                    shape: 'S13'
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeDocumentVersions: {
            http: {
              method: 'GET',
              requestUri: '/api/v1/documents/{DocumentId}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DocumentId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                DocumentId: {
                  location: 'uri',
                  locationName: 'DocumentId'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'marker'
                },
                Limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                Include: {
                  location: 'querystring',
                  locationName: 'include'
                },
                Fields: {
                  location: 'querystring',
                  locationName: 'fields'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DocumentVersions: {
                  type: 'list',
                  member: {
                    shape: 'S2w'
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeFolderContents: {
            http: {
              method: 'GET',
              requestUri: '/api/v1/folders/{FolderId}/contents',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FolderId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                FolderId: {
                  location: 'uri',
                  locationName: 'FolderId'
                },
                Sort: {
                  location: 'querystring',
                  locationName: 'sort'
                },
                Order: {
                  location: 'querystring',
                  locationName: 'order'
                },
                Limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'marker'
                },
                Type: {
                  location: 'querystring',
                  locationName: 'type'
                },
                Include: {
                  location: 'querystring',
                  locationName: 'include'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Folders: {
                  shape: 'S39'
                },
                Documents: {
                  shape: 'S3a'
                },
                Marker: {}
              }
            }
          },
          DescribeGroups: {
            http: {
              method: 'GET',
              requestUri: '/api/v1/groups',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SearchQuery'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                SearchQuery: {
                  shape: 'S3d',
                  location: 'querystring',
                  locationName: 'searchQuery'
                },
                OrganizationId: {
                  location: 'querystring',
                  locationName: 'organizationId'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'marker'
                },
                Limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Groups: {
                  shape: 'S2h'
                },
                Marker: {}
              }
            }
          },
          DescribeNotificationSubscriptions: {
            http: {
              method: 'GET',
              requestUri: '/api/v1/organizations/{OrganizationId}/subscriptions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['OrganizationId'],
              members: {
                OrganizationId: {
                  location: 'uri',
                  locationName: 'OrganizationId'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'marker'
                },
                Limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Subscriptions: {
                  type: 'list',
                  member: {
                    shape: 'S1p'
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeResourcePermissions: {
            http: {
              method: 'GET',
              requestUri: '/api/v1/resources/{ResourceId}/permissions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                ResourceId: {
                  location: 'uri',
                  locationName: 'ResourceId'
                },
                PrincipalId: {
                  location: 'querystring',
                  locationName: 'principalId'
                },
                Limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'marker'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Principals: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Type: {},
                      Roles: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Role: {},
                            Type: {}
                          }
                        }
                      }
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeRootFolders: {
            http: {
              method: 'GET',
              requestUri: '/api/v1/me/root',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AuthenticationToken'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                Limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'marker'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Folders: {
                  shape: 'S39'
                },
                Marker: {}
              }
            }
          },
          DescribeUsers: {
            http: {
              method: 'GET',
              requestUri: '/api/v1/users',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                OrganizationId: {
                  location: 'querystring',
                  locationName: 'organizationId'
                },
                UserIds: {
                  location: 'querystring',
                  locationName: 'userIds'
                },
                Query: {
                  shape: 'S3d',
                  location: 'querystring',
                  locationName: 'query'
                },
                Include: {
                  location: 'querystring',
                  locationName: 'include'
                },
                Order: {
                  location: 'querystring',
                  locationName: 'order'
                },
                Sort: {
                  location: 'querystring',
                  locationName: 'sort'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'marker'
                },
                Limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                Fields: {
                  location: 'querystring',
                  locationName: 'fields'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Users: {
                  type: 'list',
                  member: {
                    shape: 'S8'
                  }
                },
                TotalNumberOfUsers: {
                  deprecated: true,
                  type: 'long'
                },
                Marker: {}
              }
            }
          },
          GetCurrentUser: {
            http: {
              method: 'GET',
              requestUri: '/api/v1/me',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AuthenticationToken'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                User: {
                  shape: 'S8'
                }
              }
            }
          },
          GetDocument: {
            http: {
              method: 'GET',
              requestUri: '/api/v1/documents/{DocumentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DocumentId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                DocumentId: {
                  location: 'uri',
                  locationName: 'DocumentId'
                },
                IncludeCustomMetadata: {
                  location: 'querystring',
                  locationName: 'includeCustomMetadata',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Metadata: {
                  shape: 'S3b'
                },
                CustomMetadata: {
                  shape: 'S16'
                }
              }
            }
          },
          GetDocumentPath: {
            http: {
              method: 'GET',
              requestUri: '/api/v1/documents/{DocumentId}/path',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DocumentId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                DocumentId: {
                  location: 'uri',
                  locationName: 'DocumentId'
                },
                Limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                Fields: {
                  location: 'querystring',
                  locationName: 'fields'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'marker'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Path: {
                  shape: 'S44'
                }
              }
            }
          },
          GetDocumentVersion: {
            http: {
              method: 'GET',
              requestUri: '/api/v1/documents/{DocumentId}/versions/{VersionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DocumentId', 'VersionId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                DocumentId: {
                  location: 'uri',
                  locationName: 'DocumentId'
                },
                VersionId: {
                  location: 'uri',
                  locationName: 'VersionId'
                },
                Fields: {
                  location: 'querystring',
                  locationName: 'fields'
                },
                IncludeCustomMetadata: {
                  location: 'querystring',
                  locationName: 'includeCustomMetadata',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Metadata: {
                  shape: 'S2w'
                },
                CustomMetadata: {
                  shape: 'S16'
                }
              }
            }
          },
          GetFolder: {
            http: {
              method: 'GET',
              requestUri: '/api/v1/folders/{FolderId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FolderId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                FolderId: {
                  location: 'uri',
                  locationName: 'FolderId'
                },
                IncludeCustomMetadata: {
                  location: 'querystring',
                  locationName: 'includeCustomMetadata',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Metadata: {
                  shape: 'S1d'
                },
                CustomMetadata: {
                  shape: 'S16'
                }
              }
            }
          },
          GetFolderPath: {
            http: {
              method: 'GET',
              requestUri: '/api/v1/folders/{FolderId}/path',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FolderId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                FolderId: {
                  location: 'uri',
                  locationName: 'FolderId'
                },
                Limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                Fields: {
                  location: 'querystring',
                  locationName: 'fields'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'marker'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Path: {
                  shape: 'S44'
                }
              }
            }
          },
          GetResources: {
            http: {
              method: 'GET',
              requestUri: '/api/v1/resources',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                UserId: {
                  location: 'querystring',
                  locationName: 'userId'
                },
                CollectionType: {
                  location: 'querystring',
                  locationName: 'collectionType'
                },
                Limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'marker'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Folders: {
                  shape: 'S39'
                },
                Documents: {
                  shape: 'S3a'
                },
                Marker: {}
              }
            }
          },
          InitiateDocumentVersionUpload: {
            http: {
              requestUri: '/api/v1/documents',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                Id: {},
                Name: {
                  shape: 'S1b'
                },
                ContentCreatedTimestamp: {
                  type: 'timestamp'
                },
                ContentModifiedTimestamp: {
                  type: 'timestamp'
                },
                ContentType: {},
                DocumentSizeInBytes: {
                  type: 'long'
                },
                ParentFolderId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Metadata: {
                  shape: 'S3b'
                },
                UploadMetadata: {
                  type: 'structure',
                  members: {
                    UploadUrl: {
                      shape: 'S31'
                    },
                    SignedHeaders: {
                      type: 'map',
                      key: {},
                      value: {}
                    }
                  }
                }
              }
            }
          },
          RemoveAllResourcePermissions: {
            http: {
              method: 'DELETE',
              requestUri: '/api/v1/resources/{ResourceId}/permissions',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                ResourceId: {
                  location: 'uri',
                  locationName: 'ResourceId'
                }
              }
            }
          },
          RemoveResourcePermission: {
            http: {
              method: 'DELETE',
              requestUri: '/api/v1/resources/{ResourceId}/permissions/{PrincipalId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceId', 'PrincipalId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                ResourceId: {
                  location: 'uri',
                  locationName: 'ResourceId'
                },
                PrincipalId: {
                  location: 'uri',
                  locationName: 'PrincipalId'
                },
                PrincipalType: {
                  location: 'querystring',
                  locationName: 'type'
                }
              }
            }
          },
          RestoreDocumentVersions: {
            http: {
              requestUri: '/api/v1/documentVersions/restore/{DocumentId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['DocumentId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                DocumentId: {
                  location: 'uri',
                  locationName: 'DocumentId'
                }
              }
            }
          },
          SearchResources: {
            http: {
              requestUri: '/api/v1/search',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                QueryText: {
                  shape: 'S3d'
                },
                QueryScopes: {
                  type: 'list',
                  member: {}
                },
                OrganizationId: {},
                AdditionalResponseFields: {
                  type: 'list',
                  member: {}
                },
                Filters: {
                  type: 'structure',
                  members: {
                    TextLocales: {
                      type: 'list',
                      member: {}
                    },
                    ContentCategories: {
                      type: 'list',
                      member: {}
                    },
                    ResourceTypes: {
                      type: 'list',
                      member: {}
                    },
                    Labels: {
                      type: 'list',
                      member: {}
                    },
                    Principals: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['Id'],
                        members: {
                          Id: {},
                          Roles: {
                            type: 'list',
                            member: {}
                          }
                        }
                      }
                    },
                    AncestorIds: {
                      type: 'list',
                      member: {}
                    },
                    SearchCollectionTypes: {
                      type: 'list',
                      member: {}
                    },
                    SizeRange: {
                      type: 'structure',
                      members: {
                        StartValue: {
                          type: 'long'
                        },
                        EndValue: {
                          type: 'long'
                        }
                      }
                    },
                    CreatedRange: {
                      shape: 'S5d'
                    },
                    ModifiedRange: {
                      shape: 'S5d'
                    }
                  }
                },
                OrderBy: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Field: {},
                      Order: {}
                    }
                  }
                },
                Limit: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceType: {},
                      WebUrl: {
                        type: 'string',
                        sensitive: true
                      },
                      DocumentMetadata: {
                        shape: 'S3b'
                      },
                      FolderMetadata: {
                        shape: 'S1d'
                      },
                      CommentMetadata: {
                        shape: 'S2m'
                      },
                      DocumentVersionMetadata: {
                        shape: 'S2w'
                      }
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          UpdateDocument: {
            http: {
              method: 'PATCH',
              requestUri: '/api/v1/documents/{DocumentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DocumentId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                DocumentId: {
                  location: 'uri',
                  locationName: 'DocumentId'
                },
                Name: {
                  shape: 'S1b'
                },
                ParentFolderId: {},
                ResourceState: {}
              }
            }
          },
          UpdateDocumentVersion: {
            http: {
              method: 'PATCH',
              requestUri: '/api/v1/documents/{DocumentId}/versions/{VersionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DocumentId', 'VersionId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                DocumentId: {
                  location: 'uri',
                  locationName: 'DocumentId'
                },
                VersionId: {
                  location: 'uri',
                  locationName: 'VersionId'
                },
                VersionStatus: {}
              }
            }
          },
          UpdateFolder: {
            http: {
              method: 'PATCH',
              requestUri: '/api/v1/folders/{FolderId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FolderId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                FolderId: {
                  location: 'uri',
                  locationName: 'FolderId'
                },
                Name: {
                  shape: 'S1b'
                },
                ParentFolderId: {},
                ResourceState: {}
              }
            }
          },
          UpdateUser: {
            http: {
              method: 'PATCH',
              requestUri: '/api/v1/users/{UserId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['UserId'],
              members: {
                AuthenticationToken: {
                  shape: 'S2',
                  location: 'header',
                  locationName: 'Authentication'
                },
                UserId: {
                  location: 'uri',
                  locationName: 'UserId'
                },
                GivenName: {
                  shape: 'Sb'
                },
                Surname: {
                  shape: 'Sb'
                },
                Type: {},
                StorageRule: {
                  shape: 'Sj'
                },
                TimeZoneId: {},
                Locale: {},
                GrantPoweruserPrivileges: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                User: {
                  shape: 'S8'
                }
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'string',
            sensitive: true
          },
          S8: {
            type: 'structure',
            members: {
              Id: {},
              Username: {
                shape: 'S9'
              },
              EmailAddress: {
                shape: 'Sa'
              },
              GivenName: {
                shape: 'Sb'
              },
              Surname: {
                shape: 'Sb'
              },
              OrganizationId: {},
              RootFolderId: {},
              RecycleBinFolderId: {},
              Status: {},
              Type: {},
              CreatedTimestamp: {
                type: 'timestamp'
              },
              ModifiedTimestamp: {
                type: 'timestamp'
              },
              TimeZoneId: {},
              Locale: {},
              Storage: {
                type: 'structure',
                members: {
                  StorageUtilizedInBytes: {
                    type: 'long'
                  },
                  StorageRule: {
                    shape: 'Sj'
                  }
                }
              }
            }
          },
          S9: {
            type: 'string',
            sensitive: true
          },
          Sa: {
            type: 'string',
            sensitive: true
          },
          Sb: {
            type: 'string',
            sensitive: true
          },
          Sj: {
            type: 'structure',
            members: {
              StorageAllocatedInBytes: {
                type: 'long'
              },
              StorageType: {}
            }
          },
          St: {
            type: 'string',
            sensitive: true
          },
          S10: {
            type: 'string',
            sensitive: true
          },
          S13: {
            type: 'structure',
            required: ['CommentId'],
            members: {
              CommentId: {},
              ParentId: {},
              ThreadId: {},
              Text: {
                shape: 'S10'
              },
              Contributor: {
                shape: 'S8'
              },
              CreatedTimestamp: {
                type: 'timestamp'
              },
              Status: {},
              Visibility: {},
              RecipientId: {}
            }
          },
          S16: {
            type: 'map',
            key: {},
            value: {}
          },
          S1b: {
            type: 'string',
            sensitive: true
          },
          S1d: {
            type: 'structure',
            members: {
              Id: {},
              Name: {
                shape: 'S1b'
              },
              CreatorId: {},
              ParentFolderId: {},
              CreatedTimestamp: {
                type: 'timestamp'
              },
              ModifiedTimestamp: {
                type: 'timestamp'
              },
              ResourceState: {},
              Signature: {},
              Labels: {
                shape: 'S1g'
              },
              Size: {
                type: 'long'
              },
              LatestVersionSize: {
                type: 'long'
              }
            }
          },
          S1g: {
            type: 'list',
            member: {}
          },
          S1p: {
            type: 'structure',
            members: {
              SubscriptionId: {},
              EndPoint: {},
              Protocol: {}
            }
          },
          S2e: {
            type: 'structure',
            members: {
              Id: {},
              Username: {
                shape: 'S9'
              },
              GivenName: {
                shape: 'Sb'
              },
              Surname: {
                shape: 'Sb'
              },
              EmailAddress: {
                shape: 'Sa'
              }
            }
          },
          S2h: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Id: {},
                Name: {}
              }
            }
          },
          S2k: {
            type: 'structure',
            members: {
              Type: {},
              Name: {
                shape: 'S1b'
              },
              OriginalName: {
                shape: 'S1b'
              },
              Id: {},
              VersionId: {},
              Owner: {
                shape: 'S2e'
              },
              ParentId: {}
            }
          },
          S2m: {
            type: 'structure',
            members: {
              CommentId: {},
              Contributor: {
                shape: 'S8'
              },
              CreatedTimestamp: {
                type: 'timestamp'
              },
              CommentStatus: {},
              RecipientId: {},
              ContributorId: {}
            }
          },
          S2w: {
            type: 'structure',
            members: {
              Id: {},
              Name: {
                shape: 'S1b'
              },
              ContentType: {},
              Size: {
                type: 'long'
              },
              Signature: {},
              Status: {},
              CreatedTimestamp: {
                type: 'timestamp'
              },
              ModifiedTimestamp: {
                type: 'timestamp'
              },
              ContentCreatedTimestamp: {
                type: 'timestamp'
              },
              ContentModifiedTimestamp: {
                type: 'timestamp'
              },
              CreatorId: {},
              Thumbnail: {
                type: 'map',
                key: {},
                value: {
                  shape: 'S31'
                }
              },
              Source: {
                type: 'map',
                key: {},
                value: {
                  shape: 'S31'
                }
              }
            }
          },
          S31: {
            type: 'string',
            sensitive: true
          },
          S39: {
            type: 'list',
            member: {
              shape: 'S1d'
            }
          },
          S3a: {
            type: 'list',
            member: {
              shape: 'S3b'
            }
          },
          S3b: {
            type: 'structure',
            members: {
              Id: {},
              CreatorId: {},
              ParentFolderId: {},
              CreatedTimestamp: {
                type: 'timestamp'
              },
              ModifiedTimestamp: {
                type: 'timestamp'
              },
              LatestVersionMetadata: {
                shape: 'S2w'
              },
              ResourceState: {},
              Labels: {
                shape: 'S1g'
              }
            }
          },
          S3d: {
            type: 'string',
            sensitive: true
          },
          S44: {
            type: 'structure',
            members: {
              Components: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Id: {},
                    Name: {
                      shape: 'S1b'
                    }
                  }
                }
              }
            }
          },
          S5d: {
            type: 'structure',
            members: {
              StartValue: {
                type: 'timestamp'
              },
              EndValue: {
                type: 'timestamp'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=9beba039a4e26263124a84537b9e8e2a59a981c0.js.map