System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2023-05-04',
          endpointPrefix: 'managedblockchain-query',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          ripServiceName: 'chainquery',
          serviceFullName: 'Amazon Managed Blockchain Query',
          serviceId: 'ManagedBlockchain Query',
          signatureVersion: 'v4',
          signingName: 'managedblockchain-query',
          uid: 'managedblockchain-query-2023-05-04'
        },
        operations: {
          BatchGetTokenBalance: {
            http: {
              requestUri: '/batch-get-token-balance',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                getTokenBalanceInputs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['tokenIdentifier', 'ownerIdentifier'],
                    members: {
                      tokenIdentifier: {
                        shape: 'S4'
                      },
                      ownerIdentifier: {
                        shape: 'S8'
                      },
                      atBlockchainInstant: {
                        shape: 'S9'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['tokenBalances', 'errors'],
              members: {
                tokenBalances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['balance', 'atBlockchainInstant'],
                    members: {
                      ownerIdentifier: {
                        shape: 'S8'
                      },
                      tokenIdentifier: {
                        shape: 'S4'
                      },
                      balance: {},
                      atBlockchainInstant: {
                        shape: 'S9'
                      },
                      lastUpdatedTime: {
                        shape: 'S9'
                      }
                    }
                  }
                },
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['errorCode', 'errorMessage', 'errorType'],
                    members: {
                      tokenIdentifier: {
                        shape: 'S4'
                      },
                      ownerIdentifier: {
                        shape: 'S8'
                      },
                      atBlockchainInstant: {
                        shape: 'S9'
                      },
                      errorCode: {},
                      errorMessage: {},
                      errorType: {}
                    }
                  }
                }
              }
            }
          },
          GetAssetContract: {
            http: {
              requestUri: '/get-asset-contract',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['contractIdentifier'],
              members: {
                contractIdentifier: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['contractIdentifier', 'tokenStandard', 'deployerAddress'],
              members: {
                contractIdentifier: {
                  shape: 'Sj'
                },
                tokenStandard: {},
                deployerAddress: {},
                metadata: {
                  type: 'structure',
                  members: {
                    name: {},
                    symbol: {},
                    decimals: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          GetTokenBalance: {
            http: {
              requestUri: '/get-token-balance',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['tokenIdentifier', 'ownerIdentifier'],
              members: {
                tokenIdentifier: {
                  shape: 'S4'
                },
                ownerIdentifier: {
                  shape: 'S8'
                },
                atBlockchainInstant: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['balance', 'atBlockchainInstant'],
              members: {
                ownerIdentifier: {
                  shape: 'S8'
                },
                tokenIdentifier: {
                  shape: 'S4'
                },
                balance: {},
                atBlockchainInstant: {
                  shape: 'S9'
                },
                lastUpdatedTime: {
                  shape: 'S9'
                }
              }
            }
          },
          GetTransaction: {
            http: {
              requestUri: '/get-transaction',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['network'],
              members: {
                transactionHash: {},
                transactionId: {},
                network: {}
              }
            },
            output: {
              type: 'structure',
              required: ['transaction'],
              members: {
                transaction: {
                  type: 'structure',
                  required: ['network', 'transactionHash', 'transactionTimestamp', 'transactionIndex', 'numberOfTransactions', 'to'],
                  members: {
                    network: {},
                    blockHash: {},
                    transactionHash: {},
                    blockNumber: {},
                    transactionTimestamp: {
                      type: 'timestamp'
                    },
                    transactionIndex: {
                      type: 'long'
                    },
                    numberOfTransactions: {
                      type: 'long'
                    },
                    to: {},
                    from: {},
                    contractAddress: {},
                    gasUsed: {},
                    cumulativeGasUsed: {},
                    effectiveGasPrice: {},
                    signatureV: {
                      type: 'integer'
                    },
                    signatureR: {},
                    signatureS: {},
                    transactionFee: {},
                    transactionId: {},
                    confirmationStatus: {},
                    executionStatus: {}
                  }
                }
              }
            }
          },
          ListAssetContracts: {
            http: {
              requestUri: '/list-asset-contracts',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['contractFilter'],
              members: {
                contractFilter: {
                  type: 'structure',
                  required: ['network', 'tokenStandard', 'deployerAddress'],
                  members: {
                    network: {},
                    tokenStandard: {},
                    deployerAddress: {}
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
              required: ['contracts'],
              members: {
                contracts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['contractIdentifier', 'tokenStandard', 'deployerAddress'],
                    members: {
                      contractIdentifier: {
                        shape: 'Sj'
                      },
                      tokenStandard: {},
                      deployerAddress: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListFilteredTransactionEvents: {
            http: {
              requestUri: '/list-filtered-transaction-events',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['network', 'addressIdentifierFilter'],
              members: {
                network: {},
                addressIdentifierFilter: {
                  type: 'structure',
                  required: ['transactionEventToAddress'],
                  members: {
                    transactionEventToAddress: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                timeFilter: {
                  type: 'structure',
                  members: {
                    from: {
                      shape: 'S9'
                    },
                    to: {
                      shape: 'S9'
                    }
                  }
                },
                voutFilter: {
                  type: 'structure',
                  required: ['voutSpent'],
                  members: {
                    voutSpent: {
                      type: 'boolean'
                    }
                  }
                },
                confirmationStatusFilter: {
                  shape: 'S1c'
                },
                sort: {
                  type: 'structure',
                  members: {
                    sortBy: {},
                    sortOrder: {}
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
              required: ['events'],
              members: {
                events: {
                  shape: 'S1j'
                },
                nextToken: {}
              }
            }
          },
          ListTokenBalances: {
            http: {
              requestUri: '/list-token-balances',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['tokenFilter'],
              members: {
                ownerFilter: {
                  type: 'structure',
                  required: ['address'],
                  members: {
                    address: {}
                  }
                },
                tokenFilter: {
                  type: 'structure',
                  required: ['network'],
                  members: {
                    network: {},
                    contractAddress: {},
                    tokenId: {}
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
              required: ['tokenBalances'],
              members: {
                tokenBalances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['balance', 'atBlockchainInstant'],
                    members: {
                      ownerIdentifier: {
                        shape: 'S8'
                      },
                      tokenIdentifier: {
                        shape: 'S4'
                      },
                      balance: {},
                      atBlockchainInstant: {
                        shape: 'S9'
                      },
                      lastUpdatedTime: {
                        shape: 'S9'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTransactionEvents: {
            http: {
              requestUri: '/list-transaction-events',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['network'],
              members: {
                transactionHash: {},
                transactionId: {},
                network: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['events'],
              members: {
                events: {
                  shape: 'S1j'
                },
                nextToken: {}
              }
            }
          },
          ListTransactions: {
            http: {
              requestUri: '/list-transactions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['address', 'network'],
              members: {
                address: {},
                network: {},
                fromBlockchainInstant: {
                  shape: 'S9'
                },
                toBlockchainInstant: {
                  shape: 'S9'
                },
                sort: {
                  type: 'structure',
                  members: {
                    sortBy: {},
                    sortOrder: {}
                  }
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                confirmationStatusFilter: {
                  shape: 'S1c'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['transactions'],
              members: {
                transactions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['transactionHash', 'network', 'transactionTimestamp'],
                    members: {
                      transactionHash: {},
                      transactionId: {},
                      network: {},
                      transactionTimestamp: {
                        type: 'timestamp'
                      },
                      confirmationStatus: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            required: ['network'],
            members: {
              network: {},
              contractAddress: {},
              tokenId: {}
            }
          },
          S8: {
            type: 'structure',
            required: ['address'],
            members: {
              address: {}
            }
          },
          S9: {
            type: 'structure',
            members: {
              time: {
                type: 'timestamp'
              }
            }
          },
          Sj: {
            type: 'structure',
            required: ['network', 'contractAddress'],
            members: {
              network: {},
              contractAddress: {}
            }
          },
          S1c: {
            type: 'structure',
            required: ['include'],
            members: {
              include: {
                type: 'list',
                member: {}
              }
            }
          },
          S1j: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['network', 'transactionHash', 'eventType'],
              members: {
                network: {},
                transactionHash: {},
                eventType: {},
                from: {},
                to: {},
                value: {},
                contractAddress: {},
                tokenId: {},
                transactionId: {},
                voutIndex: {
                  type: 'integer'
                },
                voutSpent: {
                  type: 'boolean'
                },
                spentVoutTransactionId: {},
                spentVoutTransactionHash: {},
                spentVoutIndex: {
                  type: 'integer'
                },
                blockchainInstant: {
                  shape: 'S9'
                },
                confirmationStatus: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b7c474794e4f50dd4e244acb88e0f059a419b5d5.js.map