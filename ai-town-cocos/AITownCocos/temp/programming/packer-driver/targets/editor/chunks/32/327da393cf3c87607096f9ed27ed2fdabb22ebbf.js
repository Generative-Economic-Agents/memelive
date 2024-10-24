System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-04-13',
          endpointPrefix: 'codecommit',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'CodeCommit',
          serviceFullName: 'AWS CodeCommit',
          serviceId: 'CodeCommit',
          signatureVersion: 'v4',
          targetPrefix: 'CodeCommit_20150413',
          uid: 'codecommit-2015-04-13'
        },
        operations: {
          AssociateApprovalRuleTemplateWithRepository: {
            input: {
              type: 'structure',
              required: ['approvalRuleTemplateName', 'repositoryName'],
              members: {
                approvalRuleTemplateName: {},
                repositoryName: {}
              }
            }
          },
          BatchAssociateApprovalRuleTemplateWithRepositories: {
            input: {
              type: 'structure',
              required: ['approvalRuleTemplateName', 'repositoryNames'],
              members: {
                approvalRuleTemplateName: {},
                repositoryNames: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['associatedRepositoryNames', 'errors'],
              members: {
                associatedRepositoryNames: {
                  shape: 'S5'
                },
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      repositoryName: {},
                      errorCode: {},
                      errorMessage: {}
                    }
                  }
                }
              }
            }
          },
          BatchDescribeMergeConflicts: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'destinationCommitSpecifier', 'sourceCommitSpecifier', 'mergeOption'],
              members: {
                repositoryName: {},
                destinationCommitSpecifier: {},
                sourceCommitSpecifier: {},
                mergeOption: {},
                maxMergeHunks: {
                  type: 'integer'
                },
                maxConflictFiles: {
                  type: 'integer'
                },
                filePaths: {
                  type: 'list',
                  member: {}
                },
                conflictDetailLevel: {},
                conflictResolutionStrategy: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['conflicts', 'destinationCommitId', 'sourceCommitId'],
              members: {
                conflicts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      conflictMetadata: {
                        shape: 'Sn'
                      },
                      mergeHunks: {
                        shape: 'S12'
                      }
                    }
                  }
                },
                nextToken: {},
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['filePath', 'exceptionName', 'message'],
                    members: {
                      filePath: {},
                      exceptionName: {},
                      message: {}
                    }
                  }
                },
                destinationCommitId: {},
                sourceCommitId: {},
                baseCommitId: {}
              }
            }
          },
          BatchDisassociateApprovalRuleTemplateFromRepositories: {
            input: {
              type: 'structure',
              required: ['approvalRuleTemplateName', 'repositoryNames'],
              members: {
                approvalRuleTemplateName: {},
                repositoryNames: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['disassociatedRepositoryNames', 'errors'],
              members: {
                disassociatedRepositoryNames: {
                  shape: 'S5'
                },
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      repositoryName: {},
                      errorCode: {},
                      errorMessage: {}
                    }
                  }
                }
              }
            }
          },
          BatchGetCommits: {
            input: {
              type: 'structure',
              required: ['commitIds', 'repositoryName'],
              members: {
                commitIds: {
                  type: 'list',
                  member: {}
                },
                repositoryName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                commits: {
                  type: 'list',
                  member: {
                    shape: 'S1l'
                  }
                },
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      commitId: {},
                      errorCode: {},
                      errorMessage: {}
                    }
                  }
                }
              }
            }
          },
          BatchGetRepositories: {
            input: {
              type: 'structure',
              required: ['repositoryNames'],
              members: {
                repositoryNames: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                repositories: {
                  type: 'list',
                  member: {
                    shape: 'S1x'
                  }
                },
                repositoriesNotFound: {
                  type: 'list',
                  member: {}
                },
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      repositoryId: {},
                      repositoryName: {},
                      errorCode: {},
                      errorMessage: {}
                    }
                  }
                }
              }
            }
          },
          CreateApprovalRuleTemplate: {
            input: {
              type: 'structure',
              required: ['approvalRuleTemplateName', 'approvalRuleTemplateContent'],
              members: {
                approvalRuleTemplateName: {},
                approvalRuleTemplateContent: {},
                approvalRuleTemplateDescription: {}
              }
            },
            output: {
              type: 'structure',
              required: ['approvalRuleTemplate'],
              members: {
                approvalRuleTemplate: {
                  shape: 'S2g'
                }
              }
            }
          },
          CreateBranch: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'branchName', 'commitId'],
              members: {
                repositoryName: {},
                branchName: {},
                commitId: {}
              }
            }
          },
          CreateCommit: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'branchName'],
              members: {
                repositoryName: {},
                branchName: {},
                parentCommitId: {},
                authorName: {},
                email: {},
                commitMessage: {},
                keepEmptyFolders: {
                  type: 'boolean'
                },
                putFiles: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['filePath'],
                    members: {
                      filePath: {},
                      fileMode: {},
                      fileContent: {
                        type: 'blob'
                      },
                      sourceFile: {
                        type: 'structure',
                        required: ['filePath'],
                        members: {
                          filePath: {},
                          isMove: {
                            type: 'boolean'
                          }
                        }
                      }
                    }
                  }
                },
                deleteFiles: {
                  shape: 'S2s'
                },
                setFileModes: {
                  shape: 'S2u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                commitId: {},
                treeId: {},
                filesAdded: {
                  shape: 'S2x'
                },
                filesUpdated: {
                  shape: 'S2x'
                },
                filesDeleted: {
                  shape: 'S2x'
                }
              }
            }
          },
          CreatePullRequest: {
            input: {
              type: 'structure',
              required: ['title', 'targets'],
              members: {
                title: {},
                description: {},
                targets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['repositoryName', 'sourceReference'],
                    members: {
                      repositoryName: {},
                      sourceReference: {},
                      destinationReference: {}
                    }
                  }
                },
                clientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['pullRequest'],
              members: {
                pullRequest: {
                  shape: 'S37'
                }
              }
            }
          },
          CreatePullRequestApprovalRule: {
            input: {
              type: 'structure',
              required: ['pullRequestId', 'approvalRuleName', 'approvalRuleContent'],
              members: {
                pullRequestId: {},
                approvalRuleName: {},
                approvalRuleContent: {}
              }
            },
            output: {
              type: 'structure',
              required: ['approvalRule'],
              members: {
                approvalRule: {
                  shape: 'S3g'
                }
              }
            }
          },
          CreateRepository: {
            input: {
              type: 'structure',
              required: ['repositoryName'],
              members: {
                repositoryName: {},
                repositoryDescription: {},
                tags: {
                  shape: 'S3o'
                },
                kmsKeyId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                repositoryMetadata: {
                  shape: 'S1x'
                }
              }
            }
          },
          CreateUnreferencedMergeCommit: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'sourceCommitSpecifier', 'destinationCommitSpecifier', 'mergeOption'],
              members: {
                repositoryName: {},
                sourceCommitSpecifier: {},
                destinationCommitSpecifier: {},
                mergeOption: {},
                conflictDetailLevel: {},
                conflictResolutionStrategy: {},
                authorName: {},
                email: {},
                commitMessage: {},
                keepEmptyFolders: {
                  type: 'boolean'
                },
                conflictResolution: {
                  shape: 'S3t'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                commitId: {},
                treeId: {}
              }
            }
          },
          DeleteApprovalRuleTemplate: {
            input: {
              type: 'structure',
              required: ['approvalRuleTemplateName'],
              members: {
                approvalRuleTemplateName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['approvalRuleTemplateId'],
              members: {
                approvalRuleTemplateId: {}
              }
            }
          },
          DeleteBranch: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'branchName'],
              members: {
                repositoryName: {},
                branchName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                deletedBranch: {
                  shape: 'S42'
                }
              }
            }
          },
          DeleteCommentContent: {
            input: {
              type: 'structure',
              required: ['commentId'],
              members: {
                commentId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                comment: {
                  shape: 'S46'
                }
              }
            }
          },
          DeleteFile: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'branchName', 'filePath', 'parentCommitId'],
              members: {
                repositoryName: {},
                branchName: {},
                filePath: {},
                parentCommitId: {},
                keepEmptyFolders: {
                  type: 'boolean'
                },
                commitMessage: {},
                name: {},
                email: {}
              }
            },
            output: {
              type: 'structure',
              required: ['commitId', 'blobId', 'treeId', 'filePath'],
              members: {
                commitId: {},
                blobId: {},
                treeId: {},
                filePath: {}
              }
            }
          },
          DeletePullRequestApprovalRule: {
            input: {
              type: 'structure',
              required: ['pullRequestId', 'approvalRuleName'],
              members: {
                pullRequestId: {},
                approvalRuleName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['approvalRuleId'],
              members: {
                approvalRuleId: {}
              }
            }
          },
          DeleteRepository: {
            input: {
              type: 'structure',
              required: ['repositoryName'],
              members: {
                repositoryName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                repositoryId: {}
              }
            }
          },
          DescribeMergeConflicts: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'destinationCommitSpecifier', 'sourceCommitSpecifier', 'mergeOption', 'filePath'],
              members: {
                repositoryName: {},
                destinationCommitSpecifier: {},
                sourceCommitSpecifier: {},
                mergeOption: {},
                maxMergeHunks: {
                  type: 'integer'
                },
                filePath: {},
                conflictDetailLevel: {},
                conflictResolutionStrategy: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['conflictMetadata', 'mergeHunks', 'destinationCommitId', 'sourceCommitId'],
              members: {
                conflictMetadata: {
                  shape: 'Sn'
                },
                mergeHunks: {
                  shape: 'S12'
                },
                nextToken: {},
                destinationCommitId: {},
                sourceCommitId: {},
                baseCommitId: {}
              }
            }
          },
          DescribePullRequestEvents: {
            input: {
              type: 'structure',
              required: ['pullRequestId'],
              members: {
                pullRequestId: {},
                pullRequestEventType: {},
                actorArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['pullRequestEvents'],
              members: {
                pullRequestEvents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      pullRequestId: {},
                      eventDate: {
                        type: 'timestamp'
                      },
                      pullRequestEventType: {},
                      actorArn: {},
                      pullRequestCreatedEventMetadata: {
                        type: 'structure',
                        members: {
                          repositoryName: {},
                          sourceCommitId: {},
                          destinationCommitId: {},
                          mergeBase: {}
                        }
                      },
                      pullRequestStatusChangedEventMetadata: {
                        type: 'structure',
                        members: {
                          pullRequestStatus: {}
                        }
                      },
                      pullRequestSourceReferenceUpdatedEventMetadata: {
                        type: 'structure',
                        members: {
                          repositoryName: {},
                          beforeCommitId: {},
                          afterCommitId: {},
                          mergeBase: {}
                        }
                      },
                      pullRequestMergedStateChangedEventMetadata: {
                        type: 'structure',
                        members: {
                          repositoryName: {},
                          destinationReference: {},
                          mergeMetadata: {
                            shape: 'S3c'
                          }
                        }
                      },
                      approvalRuleEventMetadata: {
                        type: 'structure',
                        members: {
                          approvalRuleName: {},
                          approvalRuleId: {},
                          approvalRuleContent: {}
                        }
                      },
                      approvalStateChangedEventMetadata: {
                        type: 'structure',
                        members: {
                          revisionId: {},
                          approvalStatus: {}
                        }
                      },
                      approvalRuleOverriddenEventMetadata: {
                        type: 'structure',
                        members: {
                          revisionId: {},
                          overrideStatus: {}
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DisassociateApprovalRuleTemplateFromRepository: {
            input: {
              type: 'structure',
              required: ['approvalRuleTemplateName', 'repositoryName'],
              members: {
                approvalRuleTemplateName: {},
                repositoryName: {}
              }
            }
          },
          EvaluatePullRequestApprovalRules: {
            input: {
              type: 'structure',
              required: ['pullRequestId', 'revisionId'],
              members: {
                pullRequestId: {},
                revisionId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['evaluation'],
              members: {
                evaluation: {
                  type: 'structure',
                  members: {
                    approved: {
                      type: 'boolean'
                    },
                    overridden: {
                      type: 'boolean'
                    },
                    approvalRulesSatisfied: {
                      type: 'list',
                      member: {}
                    },
                    approvalRulesNotSatisfied: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            }
          },
          GetApprovalRuleTemplate: {
            input: {
              type: 'structure',
              required: ['approvalRuleTemplateName'],
              members: {
                approvalRuleTemplateName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['approvalRuleTemplate'],
              members: {
                approvalRuleTemplate: {
                  shape: 'S2g'
                }
              }
            }
          },
          GetBlob: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'blobId'],
              members: {
                repositoryName: {},
                blobId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['content'],
              members: {
                content: {
                  type: 'blob'
                }
              }
            }
          },
          GetBranch: {
            input: {
              type: 'structure',
              members: {
                repositoryName: {},
                branchName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                branch: {
                  shape: 'S42'
                }
              }
            }
          },
          GetComment: {
            input: {
              type: 'structure',
              required: ['commentId'],
              members: {
                commentId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                comment: {
                  shape: 'S46'
                }
              }
            }
          },
          GetCommentReactions: {
            input: {
              type: 'structure',
              required: ['commentId'],
              members: {
                commentId: {},
                reactionUserArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['reactionsForComment'],
              members: {
                reactionsForComment: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      reaction: {
                        type: 'structure',
                        members: {
                          emoji: {},
                          shortCode: {},
                          unicode: {}
                        }
                      },
                      reactionUsers: {
                        type: 'list',
                        member: {}
                      },
                      reactionsFromDeletedUsersCount: {
                        type: 'integer'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetCommentsForComparedCommit: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'afterCommitId'],
              members: {
                repositoryName: {},
                beforeCommitId: {},
                afterCommitId: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                commentsForComparedCommitData: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      repositoryName: {},
                      beforeCommitId: {},
                      afterCommitId: {},
                      beforeBlobId: {},
                      afterBlobId: {},
                      location: {
                        shape: 'S5u'
                      },
                      comments: {
                        shape: 'S5x'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetCommentsForPullRequest: {
            input: {
              type: 'structure',
              required: ['pullRequestId'],
              members: {
                pullRequestId: {},
                repositoryName: {},
                beforeCommitId: {},
                afterCommitId: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                commentsForPullRequestData: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      pullRequestId: {},
                      repositoryName: {},
                      beforeCommitId: {},
                      afterCommitId: {},
                      beforeBlobId: {},
                      afterBlobId: {},
                      location: {
                        shape: 'S5u'
                      },
                      comments: {
                        shape: 'S5x'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetCommit: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'commitId'],
              members: {
                repositoryName: {},
                commitId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['commit'],
              members: {
                commit: {
                  shape: 'S1l'
                }
              }
            }
          },
          GetDifferences: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'afterCommitSpecifier'],
              members: {
                repositoryName: {},
                beforeCommitSpecifier: {},
                afterCommitSpecifier: {},
                beforePath: {},
                afterPath: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                differences: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      beforeBlob: {
                        shape: 'S69'
                      },
                      afterBlob: {
                        shape: 'S69'
                      },
                      changeType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetFile: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'filePath'],
              members: {
                repositoryName: {},
                commitSpecifier: {},
                filePath: {}
              }
            },
            output: {
              type: 'structure',
              required: ['commitId', 'blobId', 'filePath', 'fileMode', 'fileSize', 'fileContent'],
              members: {
                commitId: {},
                blobId: {},
                filePath: {},
                fileMode: {},
                fileSize: {
                  type: 'long'
                },
                fileContent: {
                  type: 'blob'
                }
              }
            }
          },
          GetFolder: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'folderPath'],
              members: {
                repositoryName: {},
                commitSpecifier: {},
                folderPath: {}
              }
            },
            output: {
              type: 'structure',
              required: ['commitId', 'folderPath'],
              members: {
                commitId: {},
                folderPath: {},
                treeId: {},
                subFolders: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      treeId: {},
                      absolutePath: {},
                      relativePath: {}
                    }
                  }
                },
                files: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      blobId: {},
                      absolutePath: {},
                      relativePath: {},
                      fileMode: {}
                    }
                  }
                },
                symbolicLinks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      blobId: {},
                      absolutePath: {},
                      relativePath: {},
                      fileMode: {}
                    }
                  }
                },
                subModules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      commitId: {},
                      absolutePath: {},
                      relativePath: {}
                    }
                  }
                }
              }
            }
          },
          GetMergeCommit: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'sourceCommitSpecifier', 'destinationCommitSpecifier'],
              members: {
                repositoryName: {},
                sourceCommitSpecifier: {},
                destinationCommitSpecifier: {},
                conflictDetailLevel: {},
                conflictResolutionStrategy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                sourceCommitId: {},
                destinationCommitId: {},
                baseCommitId: {},
                mergedCommitId: {}
              }
            }
          },
          GetMergeConflicts: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'destinationCommitSpecifier', 'sourceCommitSpecifier', 'mergeOption'],
              members: {
                repositoryName: {},
                destinationCommitSpecifier: {},
                sourceCommitSpecifier: {},
                mergeOption: {},
                conflictDetailLevel: {},
                maxConflictFiles: {
                  type: 'integer'
                },
                conflictResolutionStrategy: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['mergeable', 'destinationCommitId', 'sourceCommitId', 'conflictMetadataList'],
              members: {
                mergeable: {
                  type: 'boolean'
                },
                destinationCommitId: {},
                sourceCommitId: {},
                baseCommitId: {},
                conflictMetadataList: {
                  type: 'list',
                  member: {
                    shape: 'Sn'
                  }
                },
                nextToken: {}
              }
            }
          },
          GetMergeOptions: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'sourceCommitSpecifier', 'destinationCommitSpecifier'],
              members: {
                repositoryName: {},
                sourceCommitSpecifier: {},
                destinationCommitSpecifier: {},
                conflictDetailLevel: {},
                conflictResolutionStrategy: {}
              }
            },
            output: {
              type: 'structure',
              required: ['mergeOptions', 'sourceCommitId', 'destinationCommitId', 'baseCommitId'],
              members: {
                mergeOptions: {
                  type: 'list',
                  member: {}
                },
                sourceCommitId: {},
                destinationCommitId: {},
                baseCommitId: {}
              }
            }
          },
          GetPullRequest: {
            input: {
              type: 'structure',
              required: ['pullRequestId'],
              members: {
                pullRequestId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['pullRequest'],
              members: {
                pullRequest: {
                  shape: 'S37'
                }
              }
            }
          },
          GetPullRequestApprovalStates: {
            input: {
              type: 'structure',
              required: ['pullRequestId', 'revisionId'],
              members: {
                pullRequestId: {},
                revisionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                approvals: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      userArn: {},
                      approvalState: {}
                    }
                  }
                }
              }
            }
          },
          GetPullRequestOverrideState: {
            input: {
              type: 'structure',
              required: ['pullRequestId', 'revisionId'],
              members: {
                pullRequestId: {},
                revisionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                overridden: {
                  type: 'boolean'
                },
                overrider: {}
              }
            }
          },
          GetRepository: {
            input: {
              type: 'structure',
              required: ['repositoryName'],
              members: {
                repositoryName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                repositoryMetadata: {
                  shape: 'S1x'
                }
              }
            }
          },
          GetRepositoryTriggers: {
            input: {
              type: 'structure',
              required: ['repositoryName'],
              members: {
                repositoryName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                configurationId: {},
                triggers: {
                  shape: 'S7a'
                }
              }
            }
          },
          ListApprovalRuleTemplates: {
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
              members: {
                approvalRuleTemplateNames: {
                  shape: 'S7j'
                },
                nextToken: {}
              }
            }
          },
          ListAssociatedApprovalRuleTemplatesForRepository: {
            input: {
              type: 'structure',
              required: ['repositoryName'],
              members: {
                repositoryName: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                approvalRuleTemplateNames: {
                  shape: 'S7j'
                },
                nextToken: {}
              }
            }
          },
          ListBranches: {
            input: {
              type: 'structure',
              required: ['repositoryName'],
              members: {
                repositoryName: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                branches: {
                  shape: 'S7e'
                },
                nextToken: {}
              }
            }
          },
          ListFileCommitHistory: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'filePath'],
              members: {
                repositoryName: {},
                commitSpecifier: {},
                filePath: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['revisionDag'],
              members: {
                revisionDag: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      commit: {
                        shape: 'S1l'
                      },
                      blobId: {},
                      path: {},
                      revisionChildren: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListPullRequests: {
            input: {
              type: 'structure',
              required: ['repositoryName'],
              members: {
                repositoryName: {},
                authorArn: {},
                pullRequestStatus: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['pullRequestIds'],
              members: {
                pullRequestIds: {
                  type: 'list',
                  member: {}
                },
                nextToken: {}
              }
            }
          },
          ListRepositories: {
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                sortBy: {},
                order: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                repositories: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      repositoryName: {},
                      repositoryId: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListRepositoriesForApprovalRuleTemplate: {
            input: {
              type: 'structure',
              required: ['approvalRuleTemplateName'],
              members: {
                approvalRuleTemplateName: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                repositoryNames: {
                  shape: 'S5'
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
                resourceArn: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'S3o'
                },
                nextToken: {}
              }
            }
          },
          MergeBranchesByFastForward: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'sourceCommitSpecifier', 'destinationCommitSpecifier'],
              members: {
                repositoryName: {},
                sourceCommitSpecifier: {},
                destinationCommitSpecifier: {},
                targetBranch: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                commitId: {},
                treeId: {}
              }
            }
          },
          MergeBranchesBySquash: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'sourceCommitSpecifier', 'destinationCommitSpecifier'],
              members: {
                repositoryName: {},
                sourceCommitSpecifier: {},
                destinationCommitSpecifier: {},
                targetBranch: {},
                conflictDetailLevel: {},
                conflictResolutionStrategy: {},
                authorName: {},
                email: {},
                commitMessage: {},
                keepEmptyFolders: {
                  type: 'boolean'
                },
                conflictResolution: {
                  shape: 'S3t'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                commitId: {},
                treeId: {}
              }
            }
          },
          MergeBranchesByThreeWay: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'sourceCommitSpecifier', 'destinationCommitSpecifier'],
              members: {
                repositoryName: {},
                sourceCommitSpecifier: {},
                destinationCommitSpecifier: {},
                targetBranch: {},
                conflictDetailLevel: {},
                conflictResolutionStrategy: {},
                authorName: {},
                email: {},
                commitMessage: {},
                keepEmptyFolders: {
                  type: 'boolean'
                },
                conflictResolution: {
                  shape: 'S3t'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                commitId: {},
                treeId: {}
              }
            }
          },
          MergePullRequestByFastForward: {
            input: {
              type: 'structure',
              required: ['pullRequestId', 'repositoryName'],
              members: {
                pullRequestId: {},
                repositoryName: {},
                sourceCommitId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                pullRequest: {
                  shape: 'S37'
                }
              }
            }
          },
          MergePullRequestBySquash: {
            input: {
              type: 'structure',
              required: ['pullRequestId', 'repositoryName'],
              members: {
                pullRequestId: {},
                repositoryName: {},
                sourceCommitId: {},
                conflictDetailLevel: {},
                conflictResolutionStrategy: {},
                commitMessage: {},
                authorName: {},
                email: {},
                keepEmptyFolders: {
                  type: 'boolean'
                },
                conflictResolution: {
                  shape: 'S3t'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                pullRequest: {
                  shape: 'S37'
                }
              }
            }
          },
          MergePullRequestByThreeWay: {
            input: {
              type: 'structure',
              required: ['pullRequestId', 'repositoryName'],
              members: {
                pullRequestId: {},
                repositoryName: {},
                sourceCommitId: {},
                conflictDetailLevel: {},
                conflictResolutionStrategy: {},
                commitMessage: {},
                authorName: {},
                email: {},
                keepEmptyFolders: {
                  type: 'boolean'
                },
                conflictResolution: {
                  shape: 'S3t'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                pullRequest: {
                  shape: 'S37'
                }
              }
            }
          },
          OverridePullRequestApprovalRules: {
            input: {
              type: 'structure',
              required: ['pullRequestId', 'revisionId', 'overrideStatus'],
              members: {
                pullRequestId: {},
                revisionId: {},
                overrideStatus: {}
              }
            }
          },
          PostCommentForComparedCommit: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'afterCommitId', 'content'],
              members: {
                repositoryName: {},
                beforeCommitId: {},
                afterCommitId: {},
                location: {
                  shape: 'S5u'
                },
                content: {},
                clientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                repositoryName: {},
                beforeCommitId: {},
                afterCommitId: {},
                beforeBlobId: {},
                afterBlobId: {},
                location: {
                  shape: 'S5u'
                },
                comment: {
                  shape: 'S46'
                }
              }
            },
            idempotent: true
          },
          PostCommentForPullRequest: {
            input: {
              type: 'structure',
              required: ['pullRequestId', 'repositoryName', 'beforeCommitId', 'afterCommitId', 'content'],
              members: {
                pullRequestId: {},
                repositoryName: {},
                beforeCommitId: {},
                afterCommitId: {},
                location: {
                  shape: 'S5u'
                },
                content: {},
                clientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                repositoryName: {},
                pullRequestId: {},
                beforeCommitId: {},
                afterCommitId: {},
                beforeBlobId: {},
                afterBlobId: {},
                location: {
                  shape: 'S5u'
                },
                comment: {
                  shape: 'S46'
                }
              }
            },
            idempotent: true
          },
          PostCommentReply: {
            input: {
              type: 'structure',
              required: ['inReplyTo', 'content'],
              members: {
                inReplyTo: {},
                clientRequestToken: {
                  idempotencyToken: true
                },
                content: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                comment: {
                  shape: 'S46'
                }
              }
            },
            idempotent: true
          },
          PutCommentReaction: {
            input: {
              type: 'structure',
              required: ['commentId', 'reactionValue'],
              members: {
                commentId: {},
                reactionValue: {}
              }
            }
          },
          PutFile: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'branchName', 'fileContent', 'filePath'],
              members: {
                repositoryName: {},
                branchName: {},
                fileContent: {
                  type: 'blob'
                },
                filePath: {},
                fileMode: {},
                parentCommitId: {},
                commitMessage: {},
                name: {},
                email: {}
              }
            },
            output: {
              type: 'structure',
              required: ['commitId', 'blobId', 'treeId'],
              members: {
                commitId: {},
                blobId: {},
                treeId: {}
              }
            }
          },
          PutRepositoryTriggers: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'triggers'],
              members: {
                repositoryName: {},
                triggers: {
                  shape: 'S7a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                configurationId: {}
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {},
                tags: {
                  shape: 'S3o'
                }
              }
            }
          },
          TestRepositoryTriggers: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'triggers'],
              members: {
                repositoryName: {},
                triggers: {
                  shape: 'S7a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                successfulExecutions: {
                  type: 'list',
                  member: {}
                },
                failedExecutions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      trigger: {},
                      failureMessage: {}
                    }
                  }
                }
              }
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {},
                tagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          UpdateApprovalRuleTemplateContent: {
            input: {
              type: 'structure',
              required: ['approvalRuleTemplateName', 'newRuleContent'],
              members: {
                approvalRuleTemplateName: {},
                newRuleContent: {},
                existingRuleContentSha256: {}
              }
            },
            output: {
              type: 'structure',
              required: ['approvalRuleTemplate'],
              members: {
                approvalRuleTemplate: {
                  shape: 'S2g'
                }
              }
            }
          },
          UpdateApprovalRuleTemplateDescription: {
            input: {
              type: 'structure',
              required: ['approvalRuleTemplateName', 'approvalRuleTemplateDescription'],
              members: {
                approvalRuleTemplateName: {},
                approvalRuleTemplateDescription: {}
              }
            },
            output: {
              type: 'structure',
              required: ['approvalRuleTemplate'],
              members: {
                approvalRuleTemplate: {
                  shape: 'S2g'
                }
              }
            }
          },
          UpdateApprovalRuleTemplateName: {
            input: {
              type: 'structure',
              required: ['oldApprovalRuleTemplateName', 'newApprovalRuleTemplateName'],
              members: {
                oldApprovalRuleTemplateName: {},
                newApprovalRuleTemplateName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['approvalRuleTemplate'],
              members: {
                approvalRuleTemplate: {
                  shape: 'S2g'
                }
              }
            }
          },
          UpdateComment: {
            input: {
              type: 'structure',
              required: ['commentId', 'content'],
              members: {
                commentId: {},
                content: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                comment: {
                  shape: 'S46'
                }
              }
            }
          },
          UpdateDefaultBranch: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'defaultBranchName'],
              members: {
                repositoryName: {},
                defaultBranchName: {}
              }
            }
          },
          UpdatePullRequestApprovalRuleContent: {
            input: {
              type: 'structure',
              required: ['pullRequestId', 'approvalRuleName', 'newRuleContent'],
              members: {
                pullRequestId: {},
                approvalRuleName: {},
                existingRuleContentSha256: {},
                newRuleContent: {}
              }
            },
            output: {
              type: 'structure',
              required: ['approvalRule'],
              members: {
                approvalRule: {
                  shape: 'S3g'
                }
              }
            }
          },
          UpdatePullRequestApprovalState: {
            input: {
              type: 'structure',
              required: ['pullRequestId', 'revisionId', 'approvalState'],
              members: {
                pullRequestId: {},
                revisionId: {},
                approvalState: {}
              }
            }
          },
          UpdatePullRequestDescription: {
            input: {
              type: 'structure',
              required: ['pullRequestId', 'description'],
              members: {
                pullRequestId: {},
                description: {}
              }
            },
            output: {
              type: 'structure',
              required: ['pullRequest'],
              members: {
                pullRequest: {
                  shape: 'S37'
                }
              }
            }
          },
          UpdatePullRequestStatus: {
            input: {
              type: 'structure',
              required: ['pullRequestId', 'pullRequestStatus'],
              members: {
                pullRequestId: {},
                pullRequestStatus: {}
              }
            },
            output: {
              type: 'structure',
              required: ['pullRequest'],
              members: {
                pullRequest: {
                  shape: 'S37'
                }
              }
            }
          },
          UpdatePullRequestTitle: {
            input: {
              type: 'structure',
              required: ['pullRequestId', 'title'],
              members: {
                pullRequestId: {},
                title: {}
              }
            },
            output: {
              type: 'structure',
              required: ['pullRequest'],
              members: {
                pullRequest: {
                  shape: 'S37'
                }
              }
            }
          },
          UpdateRepositoryDescription: {
            input: {
              type: 'structure',
              required: ['repositoryName'],
              members: {
                repositoryName: {},
                repositoryDescription: {}
              }
            }
          },
          UpdateRepositoryEncryptionKey: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'kmsKeyId'],
              members: {
                repositoryName: {},
                kmsKeyId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                repositoryId: {},
                kmsKeyId: {},
                originalKmsKeyId: {}
              }
            }
          },
          UpdateRepositoryName: {
            input: {
              type: 'structure',
              required: ['oldName', 'newName'],
              members: {
                oldName: {},
                newName: {}
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'list',
            member: {}
          },
          Sn: {
            type: 'structure',
            members: {
              filePath: {},
              fileSizes: {
                type: 'structure',
                members: {
                  source: {
                    type: 'long'
                  },
                  destination: {
                    type: 'long'
                  },
                  base: {
                    type: 'long'
                  }
                }
              },
              fileModes: {
                type: 'structure',
                members: {
                  source: {},
                  destination: {},
                  base: {}
                }
              },
              objectTypes: {
                type: 'structure',
                members: {
                  source: {},
                  destination: {},
                  base: {}
                }
              },
              numberOfConflicts: {
                type: 'integer'
              },
              isBinaryFile: {
                type: 'structure',
                members: {
                  source: {
                    type: 'boolean'
                  },
                  destination: {
                    type: 'boolean'
                  },
                  base: {
                    type: 'boolean'
                  }
                }
              },
              contentConflict: {
                type: 'boolean'
              },
              fileModeConflict: {
                type: 'boolean'
              },
              objectTypeConflict: {
                type: 'boolean'
              },
              mergeOperations: {
                type: 'structure',
                members: {
                  source: {},
                  destination: {}
                }
              }
            }
          },
          S12: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                isConflict: {
                  type: 'boolean'
                },
                source: {
                  shape: 'S15'
                },
                destination: {
                  shape: 'S15'
                },
                base: {
                  shape: 'S15'
                }
              }
            }
          },
          S15: {
            type: 'structure',
            members: {
              startLine: {
                type: 'integer'
              },
              endLine: {
                type: 'integer'
              },
              hunkContent: {}
            }
          },
          S1l: {
            type: 'structure',
            members: {
              commitId: {},
              treeId: {},
              parents: {
                type: 'list',
                member: {}
              },
              message: {},
              author: {
                shape: 'S1n'
              },
              committer: {
                shape: 'S1n'
              },
              additionalData: {}
            }
          },
          S1n: {
            type: 'structure',
            members: {
              name: {},
              email: {},
              date: {}
            }
          },
          S1x: {
            type: 'structure',
            members: {
              accountId: {},
              repositoryId: {},
              repositoryName: {},
              repositoryDescription: {},
              defaultBranch: {},
              lastModifiedDate: {
                type: 'timestamp'
              },
              creationDate: {
                type: 'timestamp'
              },
              cloneUrlHttp: {},
              cloneUrlSsh: {},
              Arn: {},
              kmsKeyId: {}
            }
          },
          S2g: {
            type: 'structure',
            members: {
              approvalRuleTemplateId: {},
              approvalRuleTemplateName: {},
              approvalRuleTemplateDescription: {},
              approvalRuleTemplateContent: {},
              ruleContentSha256: {},
              lastModifiedDate: {
                type: 'timestamp'
              },
              creationDate: {
                type: 'timestamp'
              },
              lastModifiedUser: {}
            }
          },
          S2s: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['filePath'],
              members: {
                filePath: {}
              }
            }
          },
          S2u: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['filePath', 'fileMode'],
              members: {
                filePath: {},
                fileMode: {}
              }
            }
          },
          S2x: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                absolutePath: {},
                blobId: {},
                fileMode: {}
              }
            }
          },
          S37: {
            type: 'structure',
            members: {
              pullRequestId: {},
              title: {},
              description: {},
              lastActivityDate: {
                type: 'timestamp'
              },
              creationDate: {
                type: 'timestamp'
              },
              pullRequestStatus: {},
              authorArn: {},
              pullRequestTargets: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    repositoryName: {},
                    sourceReference: {},
                    destinationReference: {},
                    destinationCommit: {},
                    sourceCommit: {},
                    mergeBase: {},
                    mergeMetadata: {
                      shape: 'S3c'
                    }
                  }
                }
              },
              clientRequestToken: {},
              revisionId: {},
              approvalRules: {
                type: 'list',
                member: {
                  shape: 'S3g'
                }
              }
            }
          },
          S3c: {
            type: 'structure',
            members: {
              isMerged: {
                type: 'boolean'
              },
              mergedBy: {},
              mergeCommitId: {},
              mergeOption: {}
            }
          },
          S3g: {
            type: 'structure',
            members: {
              approvalRuleId: {},
              approvalRuleName: {},
              approvalRuleContent: {},
              ruleContentSha256: {},
              lastModifiedDate: {
                type: 'timestamp'
              },
              creationDate: {
                type: 'timestamp'
              },
              lastModifiedUser: {},
              originApprovalRuleTemplate: {
                type: 'structure',
                members: {
                  approvalRuleTemplateId: {},
                  approvalRuleTemplateName: {}
                }
              }
            }
          },
          S3o: {
            type: 'map',
            key: {},
            value: {}
          },
          S3t: {
            type: 'structure',
            members: {
              replaceContents: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['filePath', 'replacementType'],
                  members: {
                    filePath: {},
                    replacementType: {},
                    content: {
                      type: 'blob'
                    },
                    fileMode: {}
                  }
                }
              },
              deleteFiles: {
                shape: 'S2s'
              },
              setFileModes: {
                shape: 'S2u'
              }
            }
          },
          S42: {
            type: 'structure',
            members: {
              branchName: {},
              commitId: {}
            }
          },
          S46: {
            type: 'structure',
            members: {
              commentId: {},
              content: {},
              inReplyTo: {},
              creationDate: {
                type: 'timestamp'
              },
              lastModifiedDate: {
                type: 'timestamp'
              },
              authorArn: {},
              deleted: {
                type: 'boolean'
              },
              clientRequestToken: {},
              callerReactions: {
                type: 'list',
                member: {}
              },
              reactionCounts: {
                type: 'map',
                key: {},
                value: {
                  type: 'integer'
                }
              }
            }
          },
          S5u: {
            type: 'structure',
            members: {
              filePath: {},
              filePosition: {
                type: 'long'
              },
              relativeFileVersion: {}
            }
          },
          S5x: {
            type: 'list',
            member: {
              shape: 'S46'
            }
          },
          S69: {
            type: 'structure',
            members: {
              blobId: {},
              path: {},
              mode: {}
            }
          },
          S7a: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'destinationArn', 'events'],
              members: {
                name: {},
                destinationArn: {},
                customData: {},
                branches: {
                  shape: 'S7e'
                },
                events: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S7e: {
            type: 'list',
            member: {}
          },
          S7j: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=327da393cf3c87607096f9ed27ed2fdabb22ebbf.js.map