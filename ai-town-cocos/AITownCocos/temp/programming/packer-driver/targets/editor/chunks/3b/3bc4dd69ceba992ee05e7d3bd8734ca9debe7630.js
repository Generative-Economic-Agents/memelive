System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-11-19',
          endpointPrefix: 'geo',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'Amazon Location Service',
          serviceId: 'Location',
          signatureVersion: 'v4',
          signingName: 'geo',
          uid: 'location-2020-11-19'
        },
        operations: {
          AssociateTrackerConsumer: {
            http: {
              requestUri: '/tracking/v0/trackers/{TrackerName}/consumers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['TrackerName', 'ConsumerArn'],
              members: {
                TrackerName: {
                  location: 'uri',
                  locationName: 'TrackerName'
                },
                ConsumerArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'cp.tracking.'
            }
          },
          BatchDeleteDevicePositionHistory: {
            http: {
              requestUri: '/tracking/v0/trackers/{TrackerName}/delete-positions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['TrackerName', 'DeviceIds'],
              members: {
                TrackerName: {
                  location: 'uri',
                  locationName: 'TrackerName'
                },
                DeviceIds: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Errors'],
              members: {
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['DeviceId', 'Error'],
                    members: {
                      DeviceId: {},
                      Error: {
                        shape: 'Sb'
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'tracking.'
            }
          },
          BatchDeleteGeofence: {
            http: {
              requestUri: '/geofencing/v0/collections/{CollectionName}/delete-geofences',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CollectionName', 'GeofenceIds'],
              members: {
                CollectionName: {
                  location: 'uri',
                  locationName: 'CollectionName'
                },
                GeofenceIds: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Errors'],
              members: {
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['GeofenceId', 'Error'],
                    members: {
                      GeofenceId: {},
                      Error: {
                        shape: 'Sb'
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'geofencing.'
            }
          },
          BatchEvaluateGeofences: {
            http: {
              requestUri: '/geofencing/v0/collections/{CollectionName}/positions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CollectionName', 'DevicePositionUpdates'],
              members: {
                CollectionName: {
                  location: 'uri',
                  locationName: 'CollectionName'
                },
                DevicePositionUpdates: {
                  type: 'list',
                  member: {
                    shape: 'Sl'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Errors'],
              members: {
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['DeviceId', 'SampleTime', 'Error'],
                    members: {
                      DeviceId: {},
                      SampleTime: {
                        shape: 'Sm'
                      },
                      Error: {
                        shape: 'Sb'
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'geofencing.'
            }
          },
          BatchGetDevicePosition: {
            http: {
              requestUri: '/tracking/v0/trackers/{TrackerName}/get-positions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['TrackerName', 'DeviceIds'],
              members: {
                TrackerName: {
                  location: 'uri',
                  locationName: 'TrackerName'
                },
                DeviceIds: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Errors', 'DevicePositions'],
              members: {
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['DeviceId', 'Error'],
                    members: {
                      DeviceId: {},
                      Error: {
                        shape: 'Sb'
                      }
                    }
                  }
                },
                DevicePositions: {
                  shape: 'S13'
                }
              }
            },
            endpoint: {
              hostPrefix: 'tracking.'
            }
          },
          BatchPutGeofence: {
            http: {
              requestUri: '/geofencing/v0/collections/{CollectionName}/put-geofences',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CollectionName', 'Entries'],
              members: {
                CollectionName: {
                  location: 'uri',
                  locationName: 'CollectionName'
                },
                Entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['GeofenceId', 'Geometry'],
                    members: {
                      GeofenceId: {},
                      Geometry: {
                        shape: 'S18'
                      },
                      GeofenceProperties: {
                        shape: 'Sr'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Successes', 'Errors'],
              members: {
                Successes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['GeofenceId', 'CreateTime', 'UpdateTime'],
                    members: {
                      GeofenceId: {},
                      CreateTime: {
                        shape: 'Sm'
                      },
                      UpdateTime: {
                        shape: 'Sm'
                      }
                    }
                  }
                },
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['GeofenceId', 'Error'],
                    members: {
                      GeofenceId: {},
                      Error: {
                        shape: 'Sb'
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'geofencing.'
            }
          },
          BatchUpdateDevicePosition: {
            http: {
              requestUri: '/tracking/v0/trackers/{TrackerName}/positions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['TrackerName', 'Updates'],
              members: {
                TrackerName: {
                  location: 'uri',
                  locationName: 'TrackerName'
                },
                Updates: {
                  type: 'list',
                  member: {
                    shape: 'Sl'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Errors'],
              members: {
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['DeviceId', 'SampleTime', 'Error'],
                    members: {
                      DeviceId: {},
                      SampleTime: {
                        shape: 'Sm'
                      },
                      Error: {
                        shape: 'Sb'
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'tracking.'
            }
          },
          CalculateRoute: {
            http: {
              requestUri: '/routes/v0/calculators/{CalculatorName}/calculate/route',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CalculatorName', 'DeparturePosition', 'DestinationPosition'],
              members: {
                CalculatorName: {
                  location: 'uri',
                  locationName: 'CalculatorName'
                },
                DeparturePosition: {
                  shape: 'Sn'
                },
                DestinationPosition: {
                  shape: 'Sn'
                },
                WaypointPositions: {
                  type: 'list',
                  member: {
                    shape: 'Sn'
                  }
                },
                TravelMode: {},
                DepartureTime: {
                  shape: 'Sm'
                },
                DepartNow: {
                  type: 'boolean'
                },
                DistanceUnit: {},
                IncludeLegGeometry: {
                  type: 'boolean'
                },
                CarModeOptions: {
                  shape: 'S1s'
                },
                TruckModeOptions: {
                  shape: 'S1t'
                },
                ArrivalTime: {
                  shape: 'Sm'
                },
                OptimizeFor: {},
                Key: {
                  shape: 'S23',
                  location: 'querystring',
                  locationName: 'key'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Legs', 'Summary'],
              members: {
                Legs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['StartPosition', 'EndPosition', 'Distance', 'DurationSeconds', 'Steps'],
                    members: {
                      StartPosition: {
                        shape: 'Sn'
                      },
                      EndPosition: {
                        shape: 'Sn'
                      },
                      Distance: {
                        type: 'double'
                      },
                      DurationSeconds: {
                        type: 'double'
                      },
                      Geometry: {
                        type: 'structure',
                        members: {
                          LineString: {
                            type: 'list',
                            member: {
                              shape: 'Sn'
                            }
                          }
                        }
                      },
                      Steps: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['StartPosition', 'EndPosition', 'Distance', 'DurationSeconds'],
                          members: {
                            StartPosition: {
                              shape: 'Sn'
                            },
                            EndPosition: {
                              shape: 'Sn'
                            },
                            Distance: {
                              type: 'double'
                            },
                            DurationSeconds: {
                              type: 'double'
                            },
                            GeometryOffset: {
                              type: 'integer'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                Summary: {
                  type: 'structure',
                  required: ['RouteBBox', 'DataSource', 'Distance', 'DurationSeconds', 'DistanceUnit'],
                  members: {
                    RouteBBox: {
                      shape: 'S2h'
                    },
                    DataSource: {},
                    Distance: {
                      type: 'double'
                    },
                    DurationSeconds: {
                      type: 'double'
                    },
                    DistanceUnit: {}
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'routes.'
            }
          },
          CalculateRouteMatrix: {
            http: {
              requestUri: '/routes/v0/calculators/{CalculatorName}/calculate/route-matrix',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CalculatorName', 'DeparturePositions', 'DestinationPositions'],
              members: {
                CalculatorName: {
                  location: 'uri',
                  locationName: 'CalculatorName'
                },
                DeparturePositions: {
                  type: 'list',
                  member: {
                    shape: 'Sn'
                  }
                },
                DestinationPositions: {
                  type: 'list',
                  member: {
                    shape: 'Sn'
                  }
                },
                TravelMode: {},
                DepartureTime: {
                  shape: 'Sm'
                },
                DepartNow: {
                  type: 'boolean'
                },
                DistanceUnit: {},
                CarModeOptions: {
                  shape: 'S1s'
                },
                TruckModeOptions: {
                  shape: 'S1t'
                },
                Key: {
                  shape: 'S23',
                  location: 'querystring',
                  locationName: 'key'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RouteMatrix', 'Summary'],
              members: {
                RouteMatrix: {
                  type: 'list',
                  member: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        Distance: {
                          type: 'double'
                        },
                        DurationSeconds: {
                          type: 'double'
                        },
                        Error: {
                          type: 'structure',
                          required: ['Code'],
                          members: {
                            Code: {},
                            Message: {}
                          }
                        }
                      }
                    }
                  }
                },
                SnappedDeparturePositions: {
                  type: 'list',
                  member: {
                    shape: 'Sn'
                  }
                },
                SnappedDestinationPositions: {
                  type: 'list',
                  member: {
                    shape: 'Sn'
                  }
                },
                Summary: {
                  type: 'structure',
                  required: ['DataSource', 'RouteCount', 'ErrorCount', 'DistanceUnit'],
                  members: {
                    DataSource: {},
                    RouteCount: {
                      type: 'integer'
                    },
                    ErrorCount: {
                      type: 'integer'
                    },
                    DistanceUnit: {}
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'routes.'
            }
          },
          CreateGeofenceCollection: {
            http: {
              requestUri: '/geofencing/v0/collections',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CollectionName'],
              members: {
                CollectionName: {},
                PricingPlan: {
                  deprecated: true,
                  deprecatedMessage: 'Deprecated. If included, the only allowed value is RequestBasedUsage.'
                },
                PricingPlanDataSource: {
                  deprecated: true,
                  deprecatedMessage: 'Deprecated. No longer allowed.'
                },
                Description: {},
                Tags: {
                  shape: 'S33'
                },
                KmsKeyId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['CollectionName', 'CollectionArn', 'CreateTime'],
              members: {
                CollectionName: {},
                CollectionArn: {},
                CreateTime: {
                  shape: 'Sm'
                }
              }
            },
            endpoint: {
              hostPrefix: 'cp.geofencing.'
            },
            idempotent: true
          },
          CreateKey: {
            http: {
              requestUri: '/metadata/v0/keys',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['KeyName', 'Restrictions'],
              members: {
                KeyName: {},
                Restrictions: {
                  shape: 'S39'
                },
                Description: {},
                ExpireTime: {
                  shape: 'Sm'
                },
                NoExpiry: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S33'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Key', 'KeyArn', 'KeyName', 'CreateTime'],
              members: {
                Key: {
                  shape: 'S23'
                },
                KeyArn: {},
                KeyName: {},
                CreateTime: {
                  shape: 'Sm'
                }
              }
            },
            endpoint: {
              hostPrefix: 'cp.metadata.'
            },
            idempotent: true
          },
          CreateMap: {
            http: {
              requestUri: '/maps/v0/maps',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MapName', 'Configuration'],
              members: {
                MapName: {},
                Configuration: {
                  shape: 'S3i'
                },
                PricingPlan: {
                  deprecated: true,
                  deprecatedMessage: 'Deprecated. If included, the only allowed value is RequestBasedUsage.'
                },
                Description: {},
                Tags: {
                  shape: 'S33'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['MapName', 'MapArn', 'CreateTime'],
              members: {
                MapName: {},
                MapArn: {},
                CreateTime: {
                  shape: 'Sm'
                }
              }
            },
            endpoint: {
              hostPrefix: 'cp.maps.'
            },
            idempotent: true
          },
          CreatePlaceIndex: {
            http: {
              requestUri: '/places/v0/indexes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IndexName', 'DataSource'],
              members: {
                IndexName: {},
                DataSource: {},
                PricingPlan: {
                  deprecated: true,
                  deprecatedMessage: 'Deprecated. If included, the only allowed value is RequestBasedUsage.'
                },
                Description: {},
                DataSourceConfiguration: {
                  shape: 'S3q'
                },
                Tags: {
                  shape: 'S33'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['IndexName', 'IndexArn', 'CreateTime'],
              members: {
                IndexName: {},
                IndexArn: {},
                CreateTime: {
                  shape: 'Sm'
                }
              }
            },
            endpoint: {
              hostPrefix: 'cp.places.'
            },
            idempotent: true
          },
          CreateRouteCalculator: {
            http: {
              requestUri: '/routes/v0/calculators',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CalculatorName', 'DataSource'],
              members: {
                CalculatorName: {},
                DataSource: {},
                PricingPlan: {
                  deprecated: true,
                  deprecatedMessage: 'Deprecated. If included, the only allowed value is RequestBasedUsage.'
                },
                Description: {},
                Tags: {
                  shape: 'S33'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CalculatorName', 'CalculatorArn', 'CreateTime'],
              members: {
                CalculatorName: {},
                CalculatorArn: {},
                CreateTime: {
                  shape: 'Sm'
                }
              }
            },
            endpoint: {
              hostPrefix: 'cp.routes.'
            },
            idempotent: true
          },
          CreateTracker: {
            http: {
              requestUri: '/tracking/v0/trackers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['TrackerName'],
              members: {
                TrackerName: {},
                PricingPlan: {
                  deprecated: true,
                  deprecatedMessage: 'Deprecated. If included, the only allowed value is RequestBasedUsage.'
                },
                KmsKeyId: {},
                PricingPlanDataSource: {
                  deprecated: true,
                  deprecatedMessage: 'Deprecated. No longer allowed.'
                },
                Description: {},
                Tags: {
                  shape: 'S33'
                },
                PositionFiltering: {},
                EventBridgeEnabled: {
                  type: 'boolean'
                },
                KmsKeyEnableGeospatialQueries: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TrackerName', 'TrackerArn', 'CreateTime'],
              members: {
                TrackerName: {},
                TrackerArn: {},
                CreateTime: {
                  shape: 'Sm'
                }
              }
            },
            endpoint: {
              hostPrefix: 'cp.tracking.'
            },
            idempotent: true
          },
          DeleteGeofenceCollection: {
            http: {
              method: 'DELETE',
              requestUri: '/geofencing/v0/collections/{CollectionName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CollectionName'],
              members: {
                CollectionName: {
                  location: 'uri',
                  locationName: 'CollectionName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'cp.geofencing.'
            },
            idempotent: true
          },
          DeleteKey: {
            http: {
              method: 'DELETE',
              requestUri: '/metadata/v0/keys/{KeyName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['KeyName'],
              members: {
                KeyName: {
                  location: 'uri',
                  locationName: 'KeyName'
                },
                ForceDelete: {
                  location: 'querystring',
                  locationName: 'forceDelete',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'cp.metadata.'
            },
            idempotent: true
          },
          DeleteMap: {
            http: {
              method: 'DELETE',
              requestUri: '/maps/v0/maps/{MapName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MapName'],
              members: {
                MapName: {
                  location: 'uri',
                  locationName: 'MapName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'cp.maps.'
            },
            idempotent: true
          },
          DeletePlaceIndex: {
            http: {
              method: 'DELETE',
              requestUri: '/places/v0/indexes/{IndexName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IndexName'],
              members: {
                IndexName: {
                  location: 'uri',
                  locationName: 'IndexName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'cp.places.'
            },
            idempotent: true
          },
          DeleteRouteCalculator: {
            http: {
              method: 'DELETE',
              requestUri: '/routes/v0/calculators/{CalculatorName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CalculatorName'],
              members: {
                CalculatorName: {
                  location: 'uri',
                  locationName: 'CalculatorName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'cp.routes.'
            },
            idempotent: true
          },
          DeleteTracker: {
            http: {
              method: 'DELETE',
              requestUri: '/tracking/v0/trackers/{TrackerName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['TrackerName'],
              members: {
                TrackerName: {
                  location: 'uri',
                  locationName: 'TrackerName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'cp.tracking.'
            },
            idempotent: true
          },
          DescribeGeofenceCollection: {
            http: {
              method: 'GET',
              requestUri: '/geofencing/v0/collections/{CollectionName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CollectionName'],
              members: {
                CollectionName: {
                  location: 'uri',
                  locationName: 'CollectionName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CollectionName', 'CollectionArn', 'Description', 'CreateTime', 'UpdateTime'],
              members: {
                CollectionName: {},
                CollectionArn: {},
                Description: {},
                PricingPlan: {
                  deprecated: true,
                  deprecatedMessage: 'Deprecated. Always returns RequestBasedUsage.'
                },
                PricingPlanDataSource: {
                  deprecated: true,
                  deprecatedMessage: 'Deprecated. Unused.'
                },
                KmsKeyId: {},
                Tags: {
                  shape: 'S33'
                },
                CreateTime: {
                  shape: 'Sm'
                },
                UpdateTime: {
                  shape: 'Sm'
                },
                GeofenceCount: {
                  type: 'integer'
                }
              }
            },
            endpoint: {
              hostPrefix: 'cp.geofencing.'
            }
          },
          DescribeKey: {
            http: {
              method: 'GET',
              requestUri: '/metadata/v0/keys/{KeyName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['KeyName'],
              members: {
                KeyName: {
                  location: 'uri',
                  locationName: 'KeyName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Key', 'KeyArn', 'KeyName', 'Restrictions', 'CreateTime', 'ExpireTime', 'UpdateTime'],
              members: {
                Key: {
                  shape: 'S23'
                },
                KeyArn: {},
                KeyName: {},
                Restrictions: {
                  shape: 'S39'
                },
                CreateTime: {
                  shape: 'Sm'
                },
                ExpireTime: {
                  shape: 'Sm'
                },
                UpdateTime: {
                  shape: 'Sm'
                },
                Description: {},
                Tags: {
                  shape: 'S33'
                }
              }
            },
            endpoint: {
              hostPrefix: 'cp.metadata.'
            }
          },
          DescribeMap: {
            http: {
              method: 'GET',
              requestUri: '/maps/v0/maps/{MapName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MapName'],
              members: {
                MapName: {
                  location: 'uri',
                  locationName: 'MapName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['MapName', 'MapArn', 'DataSource', 'Configuration', 'Description', 'CreateTime', 'UpdateTime'],
              members: {
                MapName: {},
                MapArn: {},
                PricingPlan: {
                  deprecated: true,
                  deprecatedMessage: 'Deprecated. Always returns RequestBasedUsage.'
                },
                DataSource: {},
                Configuration: {
                  shape: 'S3i'
                },
                Description: {},
                Tags: {
                  shape: 'S33'
                },
                CreateTime: {
                  shape: 'Sm'
                },
                UpdateTime: {
                  shape: 'Sm'
                }
              }
            },
            endpoint: {
              hostPrefix: 'cp.maps.'
            }
          },
          DescribePlaceIndex: {
            http: {
              method: 'GET',
              requestUri: '/places/v0/indexes/{IndexName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IndexName'],
              members: {
                IndexName: {
                  location: 'uri',
                  locationName: 'IndexName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['IndexName', 'IndexArn', 'Description', 'CreateTime', 'UpdateTime', 'DataSource', 'DataSourceConfiguration'],
              members: {
                IndexName: {},
                IndexArn: {},
                PricingPlan: {
                  deprecated: true,
                  deprecatedMessage: 'Deprecated. Always returns RequestBasedUsage.'
                },
                Description: {},
                CreateTime: {
                  shape: 'Sm'
                },
                UpdateTime: {
                  shape: 'Sm'
                },
                DataSource: {},
                DataSourceConfiguration: {
                  shape: 'S3q'
                },
                Tags: {
                  shape: 'S33'
                }
              }
            },
            endpoint: {
              hostPrefix: 'cp.places.'
            }
          },
          DescribeRouteCalculator: {
            http: {
              method: 'GET',
              requestUri: '/routes/v0/calculators/{CalculatorName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CalculatorName'],
              members: {
                CalculatorName: {
                  location: 'uri',
                  locationName: 'CalculatorName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CalculatorName', 'CalculatorArn', 'Description', 'CreateTime', 'UpdateTime', 'DataSource'],
              members: {
                CalculatorName: {},
                CalculatorArn: {},
                PricingPlan: {
                  deprecated: true,
                  deprecatedMessage: 'Deprecated. Always returns RequestBasedUsage.'
                },
                Description: {},
                CreateTime: {
                  shape: 'Sm'
                },
                UpdateTime: {
                  shape: 'Sm'
                },
                DataSource: {},
                Tags: {
                  shape: 'S33'
                }
              }
            },
            endpoint: {
              hostPrefix: 'cp.routes.'
            }
          },
          DescribeTracker: {
            http: {
              method: 'GET',
              requestUri: '/tracking/v0/trackers/{TrackerName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['TrackerName'],
              members: {
                TrackerName: {
                  location: 'uri',
                  locationName: 'TrackerName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TrackerName', 'TrackerArn', 'Description', 'CreateTime', 'UpdateTime'],
              members: {
                TrackerName: {},
                TrackerArn: {},
                Description: {},
                PricingPlan: {
                  deprecated: true,
                  deprecatedMessage: 'Deprecated. Always returns RequestBasedUsage.'
                },
                PricingPlanDataSource: {
                  deprecated: true,
                  deprecatedMessage: 'Deprecated. Unused.'
                },
                Tags: {
                  shape: 'S33'
                },
                CreateTime: {
                  shape: 'Sm'
                },
                UpdateTime: {
                  shape: 'Sm'
                },
                KmsKeyId: {},
                PositionFiltering: {},
                EventBridgeEnabled: {
                  type: 'boolean'
                },
                KmsKeyEnableGeospatialQueries: {
                  type: 'boolean'
                }
              }
            },
            endpoint: {
              hostPrefix: 'cp.tracking.'
            }
          },
          DisassociateTrackerConsumer: {
            http: {
              method: 'DELETE',
              requestUri: '/tracking/v0/trackers/{TrackerName}/consumers/{ConsumerArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['TrackerName', 'ConsumerArn'],
              members: {
                TrackerName: {
                  location: 'uri',
                  locationName: 'TrackerName'
                },
                ConsumerArn: {
                  location: 'uri',
                  locationName: 'ConsumerArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'cp.tracking.'
            }
          },
          ForecastGeofenceEvents: {
            http: {
              requestUri: '/geofencing/v0/collections/{CollectionName}/forecast-geofence-events',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CollectionName', 'DeviceState'],
              members: {
                CollectionName: {
                  location: 'uri',
                  locationName: 'CollectionName'
                },
                DeviceState: {
                  type: 'structure',
                  required: ['Position'],
                  members: {
                    Position: {
                      shape: 'Sn'
                    },
                    Speed: {
                      type: 'double'
                    }
                  }
                },
                TimeHorizonMinutes: {
                  type: 'double'
                },
                DistanceUnit: {},
                SpeedUnit: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ForecastedEvents', 'DistanceUnit', 'SpeedUnit'],
              members: {
                ForecastedEvents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['EventId', 'GeofenceId', 'IsDeviceInGeofence', 'NearestDistance', 'EventType'],
                    members: {
                      EventId: {},
                      GeofenceId: {},
                      IsDeviceInGeofence: {
                        type: 'boolean'
                      },
                      NearestDistance: {
                        type: 'double'
                      },
                      EventType: {},
                      ForecastedBreachTime: {
                        shape: 'Sm'
                      },
                      GeofenceProperties: {
                        shape: 'Sr'
                      }
                    }
                  }
                },
                NextToken: {},
                DistanceUnit: {},
                SpeedUnit: {}
              }
            },
            endpoint: {
              hostPrefix: 'geofencing.'
            }
          },
          GetDevicePosition: {
            http: {
              method: 'GET',
              requestUri: '/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/positions/latest',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['TrackerName', 'DeviceId'],
              members: {
                TrackerName: {
                  location: 'uri',
                  locationName: 'TrackerName'
                },
                DeviceId: {
                  location: 'uri',
                  locationName: 'DeviceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['SampleTime', 'ReceivedTime', 'Position'],
              members: {
                DeviceId: {},
                SampleTime: {
                  shape: 'Sm'
                },
                ReceivedTime: {
                  shape: 'Sm'
                },
                Position: {
                  shape: 'Sn'
                },
                Accuracy: {
                  shape: 'Sp'
                },
                PositionProperties: {
                  shape: 'Sr'
                }
              }
            },
            endpoint: {
              hostPrefix: 'tracking.'
            }
          },
          GetDevicePositionHistory: {
            http: {
              requestUri: '/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/list-positions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['TrackerName', 'DeviceId'],
              members: {
                TrackerName: {
                  location: 'uri',
                  locationName: 'TrackerName'
                },
                DeviceId: {
                  location: 'uri',
                  locationName: 'DeviceId'
                },
                NextToken: {},
                StartTimeInclusive: {
                  shape: 'Sm'
                },
                EndTimeExclusive: {
                  shape: 'Sm'
                },
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DevicePositions'],
              members: {
                DevicePositions: {
                  shape: 'S13'
                },
                NextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'tracking.'
            }
          },
          GetGeofence: {
            http: {
              method: 'GET',
              requestUri: '/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CollectionName', 'GeofenceId'],
              members: {
                CollectionName: {
                  location: 'uri',
                  locationName: 'CollectionName'
                },
                GeofenceId: {
                  location: 'uri',
                  locationName: 'GeofenceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['GeofenceId', 'Geometry', 'Status', 'CreateTime', 'UpdateTime'],
              members: {
                GeofenceId: {},
                Geometry: {
                  shape: 'S18'
                },
                Status: {},
                CreateTime: {
                  shape: 'Sm'
                },
                UpdateTime: {
                  shape: 'Sm'
                },
                GeofenceProperties: {
                  shape: 'Sr'
                }
              }
            },
            endpoint: {
              hostPrefix: 'geofencing.'
            }
          },
          GetMapGlyphs: {
            http: {
              method: 'GET',
              requestUri: '/maps/v0/maps/{MapName}/glyphs/{FontStack}/{FontUnicodeRange}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MapName', 'FontStack', 'FontUnicodeRange'],
              members: {
                MapName: {
                  location: 'uri',
                  locationName: 'MapName'
                },
                FontStack: {
                  location: 'uri',
                  locationName: 'FontStack'
                },
                FontUnicodeRange: {
                  location: 'uri',
                  locationName: 'FontUnicodeRange'
                },
                Key: {
                  shape: 'S23',
                  location: 'querystring',
                  locationName: 'key'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Blob: {
                  type: 'blob'
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                CacheControl: {
                  location: 'header',
                  locationName: 'Cache-Control'
                }
              },
              payload: 'Blob'
            },
            endpoint: {
              hostPrefix: 'maps.'
            }
          },
          GetMapSprites: {
            http: {
              method: 'GET',
              requestUri: '/maps/v0/maps/{MapName}/sprites/{FileName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MapName', 'FileName'],
              members: {
                MapName: {
                  location: 'uri',
                  locationName: 'MapName'
                },
                FileName: {
                  location: 'uri',
                  locationName: 'FileName'
                },
                Key: {
                  shape: 'S23',
                  location: 'querystring',
                  locationName: 'key'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Blob: {
                  type: 'blob'
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                CacheControl: {
                  location: 'header',
                  locationName: 'Cache-Control'
                }
              },
              payload: 'Blob'
            },
            endpoint: {
              hostPrefix: 'maps.'
            }
          },
          GetMapStyleDescriptor: {
            http: {
              method: 'GET',
              requestUri: '/maps/v0/maps/{MapName}/style-descriptor',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MapName'],
              members: {
                MapName: {
                  location: 'uri',
                  locationName: 'MapName'
                },
                Key: {
                  shape: 'S23',
                  location: 'querystring',
                  locationName: 'key'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Blob: {
                  type: 'blob'
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                CacheControl: {
                  location: 'header',
                  locationName: 'Cache-Control'
                }
              },
              payload: 'Blob'
            },
            endpoint: {
              hostPrefix: 'maps.'
            }
          },
          GetMapTile: {
            http: {
              method: 'GET',
              requestUri: '/maps/v0/maps/{MapName}/tiles/{Z}/{X}/{Y}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MapName', 'Z', 'X', 'Y'],
              members: {
                MapName: {
                  location: 'uri',
                  locationName: 'MapName'
                },
                Z: {
                  location: 'uri',
                  locationName: 'Z'
                },
                X: {
                  location: 'uri',
                  locationName: 'X'
                },
                Y: {
                  location: 'uri',
                  locationName: 'Y'
                },
                Key: {
                  shape: 'S23',
                  location: 'querystring',
                  locationName: 'key'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Blob: {
                  type: 'blob'
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                CacheControl: {
                  location: 'header',
                  locationName: 'Cache-Control'
                }
              },
              payload: 'Blob'
            },
            endpoint: {
              hostPrefix: 'maps.'
            }
          },
          GetPlace: {
            http: {
              method: 'GET',
              requestUri: '/places/v0/indexes/{IndexName}/places/{PlaceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IndexName', 'PlaceId'],
              members: {
                IndexName: {
                  location: 'uri',
                  locationName: 'IndexName'
                },
                PlaceId: {
                  location: 'uri',
                  locationName: 'PlaceId'
                },
                Language: {
                  location: 'querystring',
                  locationName: 'language'
                },
                Key: {
                  shape: 'S23',
                  location: 'querystring',
                  locationName: 'key'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Place'],
              members: {
                Place: {
                  shape: 'S5s'
                }
              }
            },
            endpoint: {
              hostPrefix: 'places.'
            }
          },
          ListDevicePositions: {
            http: {
              requestUri: '/tracking/v0/trackers/{TrackerName}/list-positions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['TrackerName'],
              members: {
                TrackerName: {
                  location: 'uri',
                  locationName: 'TrackerName'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                FilterGeometry: {
                  type: 'structure',
                  members: {
                    Polygon: {
                      shape: 'S19'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Entries'],
              members: {
                Entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['DeviceId', 'SampleTime', 'Position'],
                    members: {
                      DeviceId: {},
                      SampleTime: {
                        shape: 'Sm'
                      },
                      Position: {
                        shape: 'Sn'
                      },
                      Accuracy: {
                        shape: 'Sp'
                      },
                      PositionProperties: {
                        shape: 'Sr'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'tracking.'
            }
          },
          ListGeofenceCollections: {
            http: {
              requestUri: '/geofencing/v0/list-collections',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Entries'],
              members: {
                Entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['CollectionName', 'Description', 'CreateTime', 'UpdateTime'],
                    members: {
                      CollectionName: {},
                      Description: {},
                      PricingPlan: {
                        deprecated: true,
                        deprecatedMessage: 'Deprecated. Always returns RequestBasedUsage.'
                      },
                      PricingPlanDataSource: {
                        deprecated: true,
                        deprecatedMessage: 'Deprecated. Unused.'
                      },
                      CreateTime: {
                        shape: 'Sm'
                      },
                      UpdateTime: {
                        shape: 'Sm'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'cp.geofencing.'
            }
          },
          ListGeofences: {
            http: {
              requestUri: '/geofencing/v0/collections/{CollectionName}/list-geofences',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CollectionName'],
              members: {
                CollectionName: {
                  location: 'uri',
                  locationName: 'CollectionName'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Entries'],
              members: {
                Entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['GeofenceId', 'Geometry', 'Status', 'CreateTime', 'UpdateTime'],
                    members: {
                      GeofenceId: {},
                      Geometry: {
                        shape: 'S18'
                      },
                      Status: {},
                      CreateTime: {
                        shape: 'Sm'
                      },
                      UpdateTime: {
                        shape: 'Sm'
                      },
                      GeofenceProperties: {
                        shape: 'Sr'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'geofencing.'
            }
          },
          ListKeys: {
            http: {
              requestUri: '/metadata/v0/list-keys',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filter: {
                  type: 'structure',
                  members: {
                    KeyStatus: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Entries'],
              members: {
                Entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['KeyName', 'ExpireTime', 'Restrictions', 'CreateTime', 'UpdateTime'],
                    members: {
                      KeyName: {},
                      ExpireTime: {
                        shape: 'Sm'
                      },
                      Description: {},
                      Restrictions: {
                        shape: 'S39'
                      },
                      CreateTime: {
                        shape: 'Sm'
                      },
                      UpdateTime: {
                        shape: 'Sm'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'cp.metadata.'
            }
          },
          ListMaps: {
            http: {
              requestUri: '/maps/v0/list-maps',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Entries'],
              members: {
                Entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['MapName', 'Description', 'DataSource', 'CreateTime', 'UpdateTime'],
                    members: {
                      MapName: {},
                      Description: {},
                      DataSource: {},
                      PricingPlan: {
                        deprecated: true,
                        deprecatedMessage: 'Deprecated. Always returns RequestBasedUsage.'
                      },
                      CreateTime: {
                        shape: 'Sm'
                      },
                      UpdateTime: {
                        shape: 'Sm'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'cp.maps.'
            }
          },
          ListPlaceIndexes: {
            http: {
              requestUri: '/places/v0/list-indexes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Entries'],
              members: {
                Entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['IndexName', 'Description', 'DataSource', 'CreateTime', 'UpdateTime'],
                    members: {
                      IndexName: {},
                      Description: {},
                      DataSource: {},
                      PricingPlan: {
                        deprecated: true,
                        deprecatedMessage: 'Deprecated. Always returns RequestBasedUsage.'
                      },
                      CreateTime: {
                        shape: 'Sm'
                      },
                      UpdateTime: {
                        shape: 'Sm'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'cp.places.'
            }
          },
          ListRouteCalculators: {
            http: {
              requestUri: '/routes/v0/list-calculators',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Entries'],
              members: {
                Entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['CalculatorName', 'Description', 'DataSource', 'CreateTime', 'UpdateTime'],
                    members: {
                      CalculatorName: {},
                      Description: {},
                      DataSource: {},
                      PricingPlan: {
                        deprecated: true,
                        deprecatedMessage: 'Deprecated. Always returns RequestBasedUsage.'
                      },
                      CreateTime: {
                        shape: 'Sm'
                      },
                      UpdateTime: {
                        shape: 'Sm'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'cp.routes.'
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S33'
                }
              }
            },
            endpoint: {
              hostPrefix: 'cp.metadata.'
            }
          },
          ListTrackerConsumers: {
            http: {
              requestUri: '/tracking/v0/trackers/{TrackerName}/list-consumers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['TrackerName'],
              members: {
                TrackerName: {
                  location: 'uri',
                  locationName: 'TrackerName'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ConsumerArns'],
              members: {
                ConsumerArns: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'cp.tracking.'
            }
          },
          ListTrackers: {
            http: {
              requestUri: '/tracking/v0/list-trackers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Entries'],
              members: {
                Entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['TrackerName', 'Description', 'CreateTime', 'UpdateTime'],
                    members: {
                      TrackerName: {},
                      Description: {},
                      PricingPlan: {
                        deprecated: true,
                        deprecatedMessage: 'Deprecated. Always returns RequestBasedUsage.'
                      },
                      PricingPlanDataSource: {
                        deprecated: true,
                        deprecatedMessage: 'Deprecated. Unused.'
                      },
                      CreateTime: {
                        shape: 'Sm'
                      },
                      UpdateTime: {
                        shape: 'Sm'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'cp.tracking.'
            }
          },
          PutGeofence: {
            http: {
              method: 'PUT',
              requestUri: '/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CollectionName', 'GeofenceId', 'Geometry'],
              members: {
                CollectionName: {
                  location: 'uri',
                  locationName: 'CollectionName'
                },
                GeofenceId: {
                  location: 'uri',
                  locationName: 'GeofenceId'
                },
                Geometry: {
                  shape: 'S18'
                },
                GeofenceProperties: {
                  shape: 'Sr'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['GeofenceId', 'CreateTime', 'UpdateTime'],
              members: {
                GeofenceId: {},
                CreateTime: {
                  shape: 'Sm'
                },
                UpdateTime: {
                  shape: 'Sm'
                }
              }
            },
            endpoint: {
              hostPrefix: 'geofencing.'
            }
          },
          SearchPlaceIndexForPosition: {
            http: {
              requestUri: '/places/v0/indexes/{IndexName}/search/position',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IndexName', 'Position'],
              members: {
                IndexName: {
                  location: 'uri',
                  locationName: 'IndexName'
                },
                Position: {
                  shape: 'Sn'
                },
                MaxResults: {
                  type: 'integer'
                },
                Language: {},
                Key: {
                  shape: 'S23',
                  location: 'querystring',
                  locationName: 'key'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Summary', 'Results'],
              members: {
                Summary: {
                  type: 'structure',
                  required: ['Position', 'DataSource'],
                  members: {
                    Position: {
                      shape: 'Sn'
                    },
                    MaxResults: {
                      type: 'integer'
                    },
                    DataSource: {},
                    Language: {}
                  }
                },
                Results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Place', 'Distance'],
                    members: {
                      Place: {
                        shape: 'S5s'
                      },
                      Distance: {
                        type: 'double'
                      },
                      PlaceId: {}
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'places.'
            }
          },
          SearchPlaceIndexForSuggestions: {
            http: {
              requestUri: '/places/v0/indexes/{IndexName}/search/suggestions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IndexName', 'Text'],
              members: {
                IndexName: {
                  location: 'uri',
                  locationName: 'IndexName'
                },
                Text: {
                  type: 'string',
                  sensitive: true
                },
                BiasPosition: {
                  shape: 'Sn'
                },
                FilterBBox: {
                  shape: 'S2h'
                },
                FilterCountries: {
                  shape: 'S7o'
                },
                MaxResults: {
                  type: 'integer'
                },
                Language: {},
                FilterCategories: {
                  shape: 'S7q'
                },
                Key: {
                  shape: 'S23',
                  location: 'querystring',
                  locationName: 'key'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Summary', 'Results'],
              members: {
                Summary: {
                  type: 'structure',
                  required: ['Text', 'DataSource'],
                  members: {
                    Text: {
                      shape: 'S7t'
                    },
                    BiasPosition: {
                      shape: 'Sn'
                    },
                    FilterBBox: {
                      shape: 'S2h'
                    },
                    FilterCountries: {
                      shape: 'S7o'
                    },
                    MaxResults: {
                      type: 'integer'
                    },
                    DataSource: {},
                    Language: {},
                    FilterCategories: {
                      shape: 'S7q'
                    }
                  }
                },
                Results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Text'],
                    members: {
                      Text: {},
                      PlaceId: {},
                      Categories: {
                        shape: 'S5w'
                      },
                      SupplementalCategories: {
                        shape: 'S5y'
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'places.'
            }
          },
          SearchPlaceIndexForText: {
            http: {
              requestUri: '/places/v0/indexes/{IndexName}/search/text',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IndexName', 'Text'],
              members: {
                IndexName: {
                  location: 'uri',
                  locationName: 'IndexName'
                },
                Text: {
                  type: 'string',
                  sensitive: true
                },
                BiasPosition: {
                  shape: 'Sn'
                },
                FilterBBox: {
                  shape: 'S2h'
                },
                FilterCountries: {
                  shape: 'S7o'
                },
                MaxResults: {
                  type: 'integer'
                },
                Language: {},
                FilterCategories: {
                  shape: 'S7q'
                },
                Key: {
                  shape: 'S23',
                  location: 'querystring',
                  locationName: 'key'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Summary', 'Results'],
              members: {
                Summary: {
                  type: 'structure',
                  required: ['Text', 'DataSource'],
                  members: {
                    Text: {
                      shape: 'S7t'
                    },
                    BiasPosition: {
                      shape: 'Sn'
                    },
                    FilterBBox: {
                      shape: 'S2h'
                    },
                    FilterCountries: {
                      shape: 'S7o'
                    },
                    MaxResults: {
                      type: 'integer'
                    },
                    ResultBBox: {
                      shape: 'S2h'
                    },
                    DataSource: {},
                    Language: {},
                    FilterCategories: {
                      shape: 'S7q'
                    }
                  }
                },
                Results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Place'],
                    members: {
                      Place: {
                        shape: 'S5s'
                      },
                      Distance: {
                        type: 'double'
                      },
                      Relevance: {
                        type: 'double'
                      },
                      PlaceId: {}
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'places.'
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                Tags: {
                  shape: 'S33'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'cp.metadata.'
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                TagKeys: {
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
              hostPrefix: 'cp.metadata.'
            },
            idempotent: true
          },
          UpdateGeofenceCollection: {
            http: {
              method: 'PATCH',
              requestUri: '/geofencing/v0/collections/{CollectionName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CollectionName'],
              members: {
                CollectionName: {
                  location: 'uri',
                  locationName: 'CollectionName'
                },
                PricingPlan: {
                  deprecated: true,
                  deprecatedMessage: 'Deprecated. If included, the only allowed value is RequestBasedUsage.'
                },
                PricingPlanDataSource: {
                  deprecated: true,
                  deprecatedMessage: 'Deprecated. No longer allowed.'
                },
                Description: {}
              }
            },
            output: {
              type: 'structure',
              required: ['CollectionName', 'CollectionArn', 'UpdateTime'],
              members: {
                CollectionName: {},
                CollectionArn: {},
                UpdateTime: {
                  shape: 'Sm'
                }
              }
            },
            endpoint: {
              hostPrefix: 'cp.geofencing.'
            },
            idempotent: true
          },
          UpdateKey: {
            http: {
              method: 'PATCH',
              requestUri: '/metadata/v0/keys/{KeyName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['KeyName'],
              members: {
                KeyName: {
                  location: 'uri',
                  locationName: 'KeyName'
                },
                Description: {},
                ExpireTime: {
                  shape: 'Sm'
                },
                NoExpiry: {
                  type: 'boolean'
                },
                ForceUpdate: {
                  type: 'boolean'
                },
                Restrictions: {
                  shape: 'S39'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['KeyArn', 'KeyName', 'UpdateTime'],
              members: {
                KeyArn: {},
                KeyName: {},
                UpdateTime: {
                  shape: 'Sm'
                }
              }
            },
            endpoint: {
              hostPrefix: 'cp.metadata.'
            },
            idempotent: true
          },
          UpdateMap: {
            http: {
              method: 'PATCH',
              requestUri: '/maps/v0/maps/{MapName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MapName'],
              members: {
                MapName: {
                  location: 'uri',
                  locationName: 'MapName'
                },
                PricingPlan: {
                  deprecated: true,
                  deprecatedMessage: 'Deprecated. If included, the only allowed value is RequestBasedUsage.'
                },
                Description: {},
                ConfigurationUpdate: {
                  type: 'structure',
                  members: {
                    PoliticalView: {},
                    CustomLayers: {
                      shape: 'S3l'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['MapName', 'MapArn', 'UpdateTime'],
              members: {
                MapName: {},
                MapArn: {},
                UpdateTime: {
                  shape: 'Sm'
                }
              }
            },
            endpoint: {
              hostPrefix: 'cp.maps.'
            },
            idempotent: true
          },
          UpdatePlaceIndex: {
            http: {
              method: 'PATCH',
              requestUri: '/places/v0/indexes/{IndexName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IndexName'],
              members: {
                IndexName: {
                  location: 'uri',
                  locationName: 'IndexName'
                },
                PricingPlan: {
                  deprecated: true,
                  deprecatedMessage: 'Deprecated. If included, the only allowed value is RequestBasedUsage.'
                },
                Description: {},
                DataSourceConfiguration: {
                  shape: 'S3q'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['IndexName', 'IndexArn', 'UpdateTime'],
              members: {
                IndexName: {},
                IndexArn: {},
                UpdateTime: {
                  shape: 'Sm'
                }
              }
            },
            endpoint: {
              hostPrefix: 'cp.places.'
            },
            idempotent: true
          },
          UpdateRouteCalculator: {
            http: {
              method: 'PATCH',
              requestUri: '/routes/v0/calculators/{CalculatorName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CalculatorName'],
              members: {
                CalculatorName: {
                  location: 'uri',
                  locationName: 'CalculatorName'
                },
                PricingPlan: {
                  deprecated: true,
                  deprecatedMessage: 'Deprecated. If included, the only allowed value is RequestBasedUsage.'
                },
                Description: {}
              }
            },
            output: {
              type: 'structure',
              required: ['CalculatorName', 'CalculatorArn', 'UpdateTime'],
              members: {
                CalculatorName: {},
                CalculatorArn: {},
                UpdateTime: {
                  shape: 'Sm'
                }
              }
            },
            endpoint: {
              hostPrefix: 'cp.routes.'
            },
            idempotent: true
          },
          UpdateTracker: {
            http: {
              method: 'PATCH',
              requestUri: '/tracking/v0/trackers/{TrackerName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['TrackerName'],
              members: {
                TrackerName: {
                  location: 'uri',
                  locationName: 'TrackerName'
                },
                PricingPlan: {
                  deprecated: true,
                  deprecatedMessage: 'Deprecated. If included, the only allowed value is RequestBasedUsage.'
                },
                PricingPlanDataSource: {
                  deprecated: true,
                  deprecatedMessage: 'Deprecated. No longer allowed.'
                },
                Description: {},
                PositionFiltering: {},
                EventBridgeEnabled: {
                  type: 'boolean'
                },
                KmsKeyEnableGeospatialQueries: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TrackerName', 'TrackerArn', 'UpdateTime'],
              members: {
                TrackerName: {},
                TrackerArn: {},
                UpdateTime: {
                  shape: 'Sm'
                }
              }
            },
            endpoint: {
              hostPrefix: 'cp.tracking.'
            },
            idempotent: true
          },
          VerifyDevicePosition: {
            http: {
              requestUri: '/tracking/v0/trackers/{TrackerName}/positions/verify',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['TrackerName', 'DeviceState'],
              members: {
                TrackerName: {
                  location: 'uri',
                  locationName: 'TrackerName'
                },
                DeviceState: {
                  type: 'structure',
                  required: ['DeviceId', 'SampleTime', 'Position'],
                  members: {
                    DeviceId: {},
                    SampleTime: {
                      shape: 'Sm'
                    },
                    Position: {
                      shape: 'Sn'
                    },
                    Accuracy: {
                      shape: 'Sp'
                    },
                    Ipv4Address: {},
                    WiFiAccessPoints: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['MacAddress', 'Rss'],
                        members: {
                          MacAddress: {},
                          Rss: {
                            type: 'integer'
                          }
                        }
                      }
                    },
                    CellSignals: {
                      type: 'structure',
                      required: ['LteCellDetails'],
                      members: {
                        LteCellDetails: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['CellId', 'Mcc', 'Mnc'],
                            members: {
                              CellId: {
                                type: 'integer'
                              },
                              Mcc: {
                                type: 'integer'
                              },
                              Mnc: {
                                type: 'integer'
                              },
                              LocalId: {
                                type: 'structure',
                                required: ['Earfcn', 'Pci'],
                                members: {
                                  Earfcn: {
                                    type: 'integer'
                                  },
                                  Pci: {
                                    type: 'integer'
                                  }
                                }
                              },
                              NetworkMeasurements: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  required: ['Earfcn', 'CellId', 'Pci'],
                                  members: {
                                    Earfcn: {
                                      type: 'integer'
                                    },
                                    CellId: {
                                      type: 'integer'
                                    },
                                    Pci: {
                                      type: 'integer'
                                    },
                                    Rsrp: {
                                      type: 'integer'
                                    },
                                    Rsrq: {
                                      type: 'float'
                                    }
                                  }
                                }
                              },
                              TimingAdvance: {
                                type: 'integer'
                              },
                              NrCapable: {
                                type: 'boolean'
                              },
                              Rsrp: {
                                type: 'integer'
                              },
                              Rsrq: {
                                type: 'float'
                              },
                              Tac: {
                                type: 'integer'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                DistanceUnit: {}
              }
            },
            output: {
              type: 'structure',
              required: ['InferredState', 'DeviceId', 'SampleTime', 'ReceivedTime', 'DistanceUnit'],
              members: {
                InferredState: {
                  type: 'structure',
                  required: ['ProxyDetected'],
                  members: {
                    Position: {
                      shape: 'Sn'
                    },
                    Accuracy: {
                      shape: 'Sp'
                    },
                    DeviationDistance: {
                      type: 'double'
                    },
                    ProxyDetected: {
                      type: 'boolean'
                    }
                  }
                },
                DeviceId: {},
                SampleTime: {
                  shape: 'Sm'
                },
                ReceivedTime: {
                  shape: 'Sm'
                },
                DistanceUnit: {}
              }
            },
            endpoint: {
              hostPrefix: 'tracking.'
            }
          }
        },
        shapes: {
          Sb: {
            type: 'structure',
            members: {
              Code: {},
              Message: {}
            }
          },
          Sl: {
            type: 'structure',
            required: ['DeviceId', 'SampleTime', 'Position'],
            members: {
              DeviceId: {},
              SampleTime: {
                shape: 'Sm'
              },
              Position: {
                shape: 'Sn'
              },
              Accuracy: {
                shape: 'Sp'
              },
              PositionProperties: {
                shape: 'Sr'
              }
            }
          },
          Sm: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sn: {
            type: 'list',
            member: {
              type: 'double'
            },
            sensitive: true
          },
          Sp: {
            type: 'structure',
            required: ['Horizontal'],
            members: {
              Horizontal: {
                type: 'double'
              }
            }
          },
          Sr: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          S13: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['SampleTime', 'ReceivedTime', 'Position'],
              members: {
                DeviceId: {},
                SampleTime: {
                  shape: 'Sm'
                },
                ReceivedTime: {
                  shape: 'Sm'
                },
                Position: {
                  shape: 'Sn'
                },
                Accuracy: {
                  shape: 'Sp'
                },
                PositionProperties: {
                  shape: 'Sr'
                }
              }
            }
          },
          S18: {
            type: 'structure',
            members: {
              Polygon: {
                shape: 'S19'
              },
              Circle: {
                type: 'structure',
                required: ['Center', 'Radius'],
                members: {
                  Center: {
                    shape: 'Sn'
                  },
                  Radius: {
                    type: 'double'
                  }
                },
                sensitive: true
              },
              Geobuf: {
                type: 'blob',
                sensitive: true
              }
            }
          },
          S19: {
            type: 'list',
            member: {
              type: 'list',
              member: {
                shape: 'Sn'
              }
            }
          },
          S1s: {
            type: 'structure',
            members: {
              AvoidFerries: {
                type: 'boolean'
              },
              AvoidTolls: {
                type: 'boolean'
              }
            }
          },
          S1t: {
            type: 'structure',
            members: {
              AvoidFerries: {
                type: 'boolean'
              },
              AvoidTolls: {
                type: 'boolean'
              },
              Dimensions: {
                type: 'structure',
                members: {
                  Length: {
                    type: 'double'
                  },
                  Height: {
                    type: 'double'
                  },
                  Width: {
                    type: 'double'
                  },
                  Unit: {}
                }
              },
              Weight: {
                type: 'structure',
                members: {
                  Total: {
                    type: 'double'
                  },
                  Unit: {}
                }
              }
            }
          },
          S23: {
            type: 'string',
            sensitive: true
          },
          S2h: {
            type: 'list',
            member: {
              type: 'double'
            },
            sensitive: true
          },
          S33: {
            type: 'map',
            key: {},
            value: {}
          },
          S39: {
            type: 'structure',
            required: ['AllowActions', 'AllowResources'],
            members: {
              AllowActions: {
                type: 'list',
                member: {}
              },
              AllowResources: {
                type: 'list',
                member: {}
              },
              AllowReferers: {
                type: 'list',
                member: {}
              }
            }
          },
          S3i: {
            type: 'structure',
            required: ['Style'],
            members: {
              Style: {},
              PoliticalView: {},
              CustomLayers: {
                shape: 'S3l'
              }
            }
          },
          S3l: {
            type: 'list',
            member: {}
          },
          S3q: {
            type: 'structure',
            members: {
              IntendedUse: {}
            }
          },
          S5s: {
            type: 'structure',
            required: ['Geometry'],
            members: {
              Label: {},
              Geometry: {
                type: 'structure',
                members: {
                  Point: {
                    shape: 'Sn'
                  }
                }
              },
              AddressNumber: {},
              Street: {},
              Neighborhood: {},
              Municipality: {},
              SubRegion: {},
              Region: {},
              Country: {},
              PostalCode: {},
              Interpolated: {
                type: 'boolean'
              },
              TimeZone: {
                type: 'structure',
                required: ['Name'],
                members: {
                  Name: {},
                  Offset: {
                    type: 'integer'
                  }
                }
              },
              UnitType: {},
              UnitNumber: {},
              Categories: {
                shape: 'S5w'
              },
              SupplementalCategories: {
                shape: 'S5y'
              },
              SubMunicipality: {}
            }
          },
          S5w: {
            type: 'list',
            member: {}
          },
          S5y: {
            type: 'list',
            member: {}
          },
          S7o: {
            type: 'list',
            member: {}
          },
          S7q: {
            type: 'list',
            member: {}
          },
          S7t: {
            type: 'string',
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=3bc4dd69ceba992ee05e7d3bd8734ca9debe7630.js.map