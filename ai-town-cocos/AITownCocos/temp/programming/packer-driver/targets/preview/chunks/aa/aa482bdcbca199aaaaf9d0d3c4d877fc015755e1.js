System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2011-01-01',
          endpointPrefix: 'autoscaling',
          protocol: 'query',
          serviceFullName: 'Auto Scaling',
          serviceId: 'Auto Scaling',
          signatureVersion: 'v4',
          uid: 'autoscaling-2011-01-01',
          xmlNamespace: 'http://autoscaling.amazonaws.com/doc/2011-01-01/'
        },
        operations: {
          AttachInstances: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName'],
              members: {
                InstanceIds: {
                  shape: 'S2'
                },
                AutoScalingGroupName: {}
              }
            }
          },
          AttachLoadBalancerTargetGroups: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName', 'TargetGroupARNs'],
              members: {
                AutoScalingGroupName: {},
                TargetGroupARNs: {
                  shape: 'S6'
                }
              }
            },
            output: {
              resultWrapper: 'AttachLoadBalancerTargetGroupsResult',
              type: 'structure',
              members: {}
            }
          },
          AttachLoadBalancers: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName', 'LoadBalancerNames'],
              members: {
                AutoScalingGroupName: {},
                LoadBalancerNames: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              resultWrapper: 'AttachLoadBalancersResult',
              type: 'structure',
              members: {}
            }
          },
          AttachTrafficSources: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName', 'TrafficSources'],
              members: {
                AutoScalingGroupName: {},
                TrafficSources: {
                  shape: 'Sd'
                }
              }
            },
            output: {
              resultWrapper: 'AttachTrafficSourcesResult',
              type: 'structure',
              members: {}
            }
          },
          BatchDeleteScheduledAction: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName', 'ScheduledActionNames'],
              members: {
                AutoScalingGroupName: {},
                ScheduledActionNames: {
                  shape: 'Sh'
                }
              }
            },
            output: {
              resultWrapper: 'BatchDeleteScheduledActionResult',
              type: 'structure',
              members: {
                FailedScheduledActions: {
                  shape: 'Sj'
                }
              }
            }
          },
          BatchPutScheduledUpdateGroupAction: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName', 'ScheduledUpdateGroupActions'],
              members: {
                AutoScalingGroupName: {},
                ScheduledUpdateGroupActions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ScheduledActionName'],
                    members: {
                      ScheduledActionName: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      },
                      Recurrence: {},
                      MinSize: {
                        type: 'integer'
                      },
                      MaxSize: {
                        type: 'integer'
                      },
                      DesiredCapacity: {
                        type: 'integer'
                      },
                      TimeZone: {}
                    }
                  }
                }
              }
            },
            output: {
              resultWrapper: 'BatchPutScheduledUpdateGroupActionResult',
              type: 'structure',
              members: {
                FailedScheduledUpdateGroupActions: {
                  shape: 'Sj'
                }
              }
            }
          },
          CancelInstanceRefresh: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName'],
              members: {
                AutoScalingGroupName: {}
              }
            },
            output: {
              resultWrapper: 'CancelInstanceRefreshResult',
              type: 'structure',
              members: {
                InstanceRefreshId: {}
              }
            }
          },
          CompleteLifecycleAction: {
            input: {
              type: 'structure',
              required: ['LifecycleHookName', 'AutoScalingGroupName', 'LifecycleActionResult'],
              members: {
                LifecycleHookName: {},
                AutoScalingGroupName: {},
                LifecycleActionToken: {},
                LifecycleActionResult: {},
                InstanceId: {}
              }
            },
            output: {
              resultWrapper: 'CompleteLifecycleActionResult',
              type: 'structure',
              members: {}
            }
          },
          CreateAutoScalingGroup: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName', 'MinSize', 'MaxSize'],
              members: {
                AutoScalingGroupName: {},
                LaunchConfigurationName: {},
                LaunchTemplate: {
                  shape: 'S14'
                },
                MixedInstancesPolicy: {
                  shape: 'S16'
                },
                InstanceId: {},
                MinSize: {
                  type: 'integer'
                },
                MaxSize: {
                  type: 'integer'
                },
                DesiredCapacity: {
                  type: 'integer'
                },
                DefaultCooldown: {
                  type: 'integer'
                },
                AvailabilityZones: {
                  shape: 'S2d'
                },
                LoadBalancerNames: {
                  shape: 'Sa'
                },
                TargetGroupARNs: {
                  shape: 'S6'
                },
                HealthCheckType: {},
                HealthCheckGracePeriod: {
                  type: 'integer'
                },
                PlacementGroup: {},
                VPCZoneIdentifier: {},
                TerminationPolicies: {
                  shape: 'S2g'
                },
                NewInstancesProtectedFromScaleIn: {
                  type: 'boolean'
                },
                CapacityRebalance: {
                  type: 'boolean'
                },
                LifecycleHookSpecificationList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['LifecycleHookName', 'LifecycleTransition'],
                    members: {
                      LifecycleHookName: {},
                      LifecycleTransition: {},
                      NotificationMetadata: {},
                      HeartbeatTimeout: {
                        type: 'integer'
                      },
                      DefaultResult: {},
                      NotificationTargetARN: {},
                      RoleARN: {}
                    }
                  }
                },
                Tags: {
                  shape: 'S2q'
                },
                ServiceLinkedRoleARN: {},
                MaxInstanceLifetime: {
                  type: 'integer'
                },
                Context: {},
                DesiredCapacityType: {},
                DefaultInstanceWarmup: {
                  type: 'integer'
                },
                TrafficSources: {
                  shape: 'Sd'
                },
                InstanceMaintenancePolicy: {
                  shape: 'S2y'
                }
              }
            }
          },
          CreateLaunchConfiguration: {
            input: {
              type: 'structure',
              required: ['LaunchConfigurationName'],
              members: {
                LaunchConfigurationName: {},
                ImageId: {},
                KeyName: {},
                SecurityGroups: {
                  shape: 'S32'
                },
                ClassicLinkVPCId: {},
                ClassicLinkVPCSecurityGroups: {
                  shape: 'S33'
                },
                UserData: {},
                InstanceId: {},
                InstanceType: {},
                KernelId: {},
                RamdiskId: {},
                BlockDeviceMappings: {
                  shape: 'S35'
                },
                InstanceMonitoring: {
                  shape: 'S3f'
                },
                SpotPrice: {},
                IamInstanceProfile: {},
                EbsOptimized: {
                  type: 'boolean'
                },
                AssociatePublicIpAddress: {
                  type: 'boolean'
                },
                PlacementTenancy: {},
                MetadataOptions: {
                  shape: 'S3k'
                }
              }
            }
          },
          CreateOrUpdateTags: {
            input: {
              type: 'structure',
              required: ['Tags'],
              members: {
                Tags: {
                  shape: 'S2q'
                }
              }
            }
          },
          DeleteAutoScalingGroup: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName'],
              members: {
                AutoScalingGroupName: {},
                ForceDelete: {
                  type: 'boolean'
                }
              }
            }
          },
          DeleteLaunchConfiguration: {
            input: {
              type: 'structure',
              required: ['LaunchConfigurationName'],
              members: {
                LaunchConfigurationName: {}
              }
            }
          },
          DeleteLifecycleHook: {
            input: {
              type: 'structure',
              required: ['LifecycleHookName', 'AutoScalingGroupName'],
              members: {
                LifecycleHookName: {},
                AutoScalingGroupName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteLifecycleHookResult',
              type: 'structure',
              members: {}
            }
          },
          DeleteNotificationConfiguration: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName', 'TopicARN'],
              members: {
                AutoScalingGroupName: {},
                TopicARN: {}
              }
            }
          },
          DeletePolicy: {
            input: {
              type: 'structure',
              required: ['PolicyName'],
              members: {
                AutoScalingGroupName: {},
                PolicyName: {}
              }
            }
          },
          DeleteScheduledAction: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName', 'ScheduledActionName'],
              members: {
                AutoScalingGroupName: {},
                ScheduledActionName: {}
              }
            }
          },
          DeleteTags: {
            input: {
              type: 'structure',
              required: ['Tags'],
              members: {
                Tags: {
                  shape: 'S2q'
                }
              }
            }
          },
          DeleteWarmPool: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName'],
              members: {
                AutoScalingGroupName: {},
                ForceDelete: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DeleteWarmPoolResult',
              type: 'structure',
              members: {}
            }
          },
          DescribeAccountLimits: {
            output: {
              resultWrapper: 'DescribeAccountLimitsResult',
              type: 'structure',
              members: {
                MaxNumberOfAutoScalingGroups: {
                  type: 'integer'
                },
                MaxNumberOfLaunchConfigurations: {
                  type: 'integer'
                },
                NumberOfAutoScalingGroups: {
                  type: 'integer'
                },
                NumberOfLaunchConfigurations: {
                  type: 'integer'
                }
              }
            }
          },
          DescribeAdjustmentTypes: {
            output: {
              resultWrapper: 'DescribeAdjustmentTypesResult',
              type: 'structure',
              members: {
                AdjustmentTypes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AdjustmentType: {}
                    }
                  }
                }
              }
            }
          },
          DescribeAutoScalingGroups: {
            input: {
              type: 'structure',
              members: {
                AutoScalingGroupNames: {
                  shape: 'S49'
                },
                NextToken: {},
                MaxRecords: {
                  type: 'integer'
                },
                Filters: {
                  shape: 'S4b'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeAutoScalingGroupsResult',
              type: 'structure',
              required: ['AutoScalingGroups'],
              members: {
                AutoScalingGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['AutoScalingGroupName', 'MinSize', 'MaxSize', 'DesiredCapacity', 'DefaultCooldown', 'AvailabilityZones', 'HealthCheckType', 'CreatedTime'],
                    members: {
                      AutoScalingGroupName: {},
                      AutoScalingGroupARN: {},
                      LaunchConfigurationName: {},
                      LaunchTemplate: {
                        shape: 'S14'
                      },
                      MixedInstancesPolicy: {
                        shape: 'S16'
                      },
                      MinSize: {
                        type: 'integer'
                      },
                      MaxSize: {
                        type: 'integer'
                      },
                      DesiredCapacity: {
                        type: 'integer'
                      },
                      PredictedCapacity: {
                        type: 'integer'
                      },
                      DefaultCooldown: {
                        type: 'integer'
                      },
                      AvailabilityZones: {
                        shape: 'S2d'
                      },
                      LoadBalancerNames: {
                        shape: 'Sa'
                      },
                      TargetGroupARNs: {
                        shape: 'S6'
                      },
                      HealthCheckType: {},
                      HealthCheckGracePeriod: {
                        type: 'integer'
                      },
                      Instances: {
                        shape: 'S4i'
                      },
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      SuspendedProcesses: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            ProcessName: {},
                            SuspensionReason: {}
                          }
                        }
                      },
                      PlacementGroup: {},
                      VPCZoneIdentifier: {},
                      EnabledMetrics: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Metric: {},
                            Granularity: {}
                          }
                        }
                      },
                      Status: {},
                      Tags: {
                        shape: 'S4p'
                      },
                      TerminationPolicies: {
                        shape: 'S2g'
                      },
                      NewInstancesProtectedFromScaleIn: {
                        type: 'boolean'
                      },
                      ServiceLinkedRoleARN: {},
                      MaxInstanceLifetime: {
                        type: 'integer'
                      },
                      CapacityRebalance: {
                        type: 'boolean'
                      },
                      WarmPoolConfiguration: {
                        shape: 'S4r'
                      },
                      WarmPoolSize: {
                        type: 'integer'
                      },
                      Context: {},
                      DesiredCapacityType: {},
                      DefaultInstanceWarmup: {
                        type: 'integer'
                      },
                      TrafficSources: {
                        shape: 'Sd'
                      },
                      InstanceMaintenancePolicy: {
                        shape: 'S2y'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeAutoScalingInstances: {
            input: {
              type: 'structure',
              members: {
                InstanceIds: {
                  shape: 'S2'
                },
                MaxRecords: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'DescribeAutoScalingInstancesResult',
              type: 'structure',
              members: {
                AutoScalingInstances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['InstanceId', 'AutoScalingGroupName', 'AvailabilityZone', 'LifecycleState', 'HealthStatus', 'ProtectedFromScaleIn'],
                    members: {
                      InstanceId: {},
                      InstanceType: {},
                      AutoScalingGroupName: {},
                      AvailabilityZone: {},
                      LifecycleState: {},
                      HealthStatus: {},
                      LaunchConfigurationName: {},
                      LaunchTemplate: {
                        shape: 'S14'
                      },
                      ProtectedFromScaleIn: {
                        type: 'boolean'
                      },
                      WeightedCapacity: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeAutoScalingNotificationTypes: {
            output: {
              resultWrapper: 'DescribeAutoScalingNotificationTypesResult',
              type: 'structure',
              members: {
                AutoScalingNotificationTypes: {
                  shape: 'S54'
                }
              }
            }
          },
          DescribeInstanceRefreshes: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName'],
              members: {
                AutoScalingGroupName: {},
                InstanceRefreshIds: {
                  type: 'list',
                  member: {}
                },
                NextToken: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeInstanceRefreshesResult',
              type: 'structure',
              members: {
                InstanceRefreshes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      InstanceRefreshId: {},
                      AutoScalingGroupName: {},
                      Status: {},
                      StatusReason: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      },
                      PercentageComplete: {
                        type: 'integer'
                      },
                      InstancesToUpdate: {
                        type: 'integer'
                      },
                      ProgressDetails: {
                        shape: 'S5e'
                      },
                      Preferences: {
                        shape: 'S5h'
                      },
                      DesiredConfiguration: {
                        shape: 'S5t'
                      },
                      RollbackDetails: {
                        type: 'structure',
                        members: {
                          RollbackReason: {},
                          RollbackStartTime: {
                            type: 'timestamp'
                          },
                          PercentageCompleteOnRollback: {
                            type: 'integer'
                          },
                          InstancesToUpdateOnRollback: {
                            type: 'integer'
                          },
                          ProgressDetailsOnRollback: {
                            shape: 'S5e'
                          }
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeLaunchConfigurations: {
            input: {
              type: 'structure',
              members: {
                LaunchConfigurationNames: {
                  type: 'list',
                  member: {}
                },
                NextToken: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeLaunchConfigurationsResult',
              type: 'structure',
              required: ['LaunchConfigurations'],
              members: {
                LaunchConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['LaunchConfigurationName', 'ImageId', 'InstanceType', 'CreatedTime'],
                    members: {
                      LaunchConfigurationName: {},
                      LaunchConfigurationARN: {},
                      ImageId: {},
                      KeyName: {},
                      SecurityGroups: {
                        shape: 'S32'
                      },
                      ClassicLinkVPCId: {},
                      ClassicLinkVPCSecurityGroups: {
                        shape: 'S33'
                      },
                      UserData: {},
                      InstanceType: {},
                      KernelId: {},
                      RamdiskId: {},
                      BlockDeviceMappings: {
                        shape: 'S35'
                      },
                      InstanceMonitoring: {
                        shape: 'S3f'
                      },
                      SpotPrice: {},
                      IamInstanceProfile: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      EbsOptimized: {
                        type: 'boolean'
                      },
                      AssociatePublicIpAddress: {
                        type: 'boolean'
                      },
                      PlacementTenancy: {},
                      MetadataOptions: {
                        shape: 'S3k'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeLifecycleHookTypes: {
            output: {
              resultWrapper: 'DescribeLifecycleHookTypesResult',
              type: 'structure',
              members: {
                LifecycleHookTypes: {
                  shape: 'S54'
                }
              }
            }
          },
          DescribeLifecycleHooks: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName'],
              members: {
                AutoScalingGroupName: {},
                LifecycleHookNames: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              resultWrapper: 'DescribeLifecycleHooksResult',
              type: 'structure',
              members: {
                LifecycleHooks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LifecycleHookName: {},
                      AutoScalingGroupName: {},
                      LifecycleTransition: {},
                      NotificationTargetARN: {},
                      RoleARN: {},
                      NotificationMetadata: {},
                      HeartbeatTimeout: {
                        type: 'integer'
                      },
                      GlobalTimeout: {
                        type: 'integer'
                      },
                      DefaultResult: {}
                    }
                  }
                }
              }
            }
          },
          DescribeLoadBalancerTargetGroups: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName'],
              members: {
                AutoScalingGroupName: {},
                NextToken: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeLoadBalancerTargetGroupsResult',
              type: 'structure',
              members: {
                LoadBalancerTargetGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LoadBalancerTargetGroupARN: {},
                      State: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeLoadBalancers: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName'],
              members: {
                AutoScalingGroupName: {},
                NextToken: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeLoadBalancersResult',
              type: 'structure',
              members: {
                LoadBalancers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LoadBalancerName: {},
                      State: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeMetricCollectionTypes: {
            output: {
              resultWrapper: 'DescribeMetricCollectionTypesResult',
              type: 'structure',
              members: {
                Metrics: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Metric: {}
                    }
                  }
                },
                Granularities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Granularity: {}
                    }
                  }
                }
              }
            }
          },
          DescribeNotificationConfigurations: {
            input: {
              type: 'structure',
              members: {
                AutoScalingGroupNames: {
                  shape: 'S49'
                },
                NextToken: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeNotificationConfigurationsResult',
              type: 'structure',
              required: ['NotificationConfigurations'],
              members: {
                NotificationConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AutoScalingGroupName: {},
                      TopicARN: {},
                      NotificationType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribePolicies: {
            input: {
              type: 'structure',
              members: {
                AutoScalingGroupName: {},
                PolicyNames: {
                  type: 'list',
                  member: {}
                },
                PolicyTypes: {
                  type: 'list',
                  member: {}
                },
                NextToken: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribePoliciesResult',
              type: 'structure',
              members: {
                ScalingPolicies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AutoScalingGroupName: {},
                      PolicyName: {},
                      PolicyARN: {},
                      PolicyType: {},
                      AdjustmentType: {},
                      MinAdjustmentStep: {
                        shape: 'S6u'
                      },
                      MinAdjustmentMagnitude: {
                        type: 'integer'
                      },
                      ScalingAdjustment: {
                        type: 'integer'
                      },
                      Cooldown: {
                        type: 'integer'
                      },
                      StepAdjustments: {
                        shape: 'S6x'
                      },
                      MetricAggregationType: {},
                      EstimatedInstanceWarmup: {
                        type: 'integer'
                      },
                      Alarms: {
                        shape: 'S71'
                      },
                      TargetTrackingConfiguration: {
                        shape: 'S73'
                      },
                      Enabled: {
                        type: 'boolean'
                      },
                      PredictiveScalingConfiguration: {
                        shape: 'S7o'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeScalingActivities: {
            input: {
              type: 'structure',
              members: {
                ActivityIds: {
                  type: 'list',
                  member: {}
                },
                AutoScalingGroupName: {},
                IncludeDeletedGroups: {
                  type: 'boolean'
                },
                MaxRecords: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'DescribeScalingActivitiesResult',
              type: 'structure',
              required: ['Activities'],
              members: {
                Activities: {
                  shape: 'S8b'
                },
                NextToken: {}
              }
            }
          },
          DescribeScalingProcessTypes: {
            output: {
              resultWrapper: 'DescribeScalingProcessTypesResult',
              type: 'structure',
              members: {
                Processes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ProcessName'],
                    members: {
                      ProcessName: {}
                    }
                  }
                }
              }
            }
          },
          DescribeScheduledActions: {
            input: {
              type: 'structure',
              members: {
                AutoScalingGroupName: {},
                ScheduledActionNames: {
                  shape: 'Sh'
                },
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                NextToken: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeScheduledActionsResult',
              type: 'structure',
              members: {
                ScheduledUpdateGroupActions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AutoScalingGroupName: {},
                      ScheduledActionName: {},
                      ScheduledActionARN: {},
                      Time: {
                        type: 'timestamp'
                      },
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      },
                      Recurrence: {},
                      MinSize: {
                        type: 'integer'
                      },
                      MaxSize: {
                        type: 'integer'
                      },
                      DesiredCapacity: {
                        type: 'integer'
                      },
                      TimeZone: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeTags: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S4b'
                },
                NextToken: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeTagsResult',
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S4p'
                },
                NextToken: {}
              }
            }
          },
          DescribeTerminationPolicyTypes: {
            output: {
              resultWrapper: 'DescribeTerminationPolicyTypesResult',
              type: 'structure',
              members: {
                TerminationPolicyTypes: {
                  shape: 'S2g'
                }
              }
            }
          },
          DescribeTrafficSources: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName'],
              members: {
                AutoScalingGroupName: {},
                TrafficSourceType: {},
                NextToken: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeTrafficSourcesResult',
              type: 'structure',
              members: {
                TrafficSources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TrafficSource: {
                        deprecated: true,
                        deprecatedMessage: 'TrafficSource has been replaced by Identifier'
                      },
                      State: {},
                      Identifier: {},
                      Type: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeWarmPool: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName'],
              members: {
                AutoScalingGroupName: {},
                MaxRecords: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'DescribeWarmPoolResult',
              type: 'structure',
              members: {
                WarmPoolConfiguration: {
                  shape: 'S4r'
                },
                Instances: {
                  shape: 'S4i'
                },
                NextToken: {}
              }
            }
          },
          DetachInstances: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName', 'ShouldDecrementDesiredCapacity'],
              members: {
                InstanceIds: {
                  shape: 'S2'
                },
                AutoScalingGroupName: {},
                ShouldDecrementDesiredCapacity: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DetachInstancesResult',
              type: 'structure',
              members: {
                Activities: {
                  shape: 'S8b'
                }
              }
            }
          },
          DetachLoadBalancerTargetGroups: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName', 'TargetGroupARNs'],
              members: {
                AutoScalingGroupName: {},
                TargetGroupARNs: {
                  shape: 'S6'
                }
              }
            },
            output: {
              resultWrapper: 'DetachLoadBalancerTargetGroupsResult',
              type: 'structure',
              members: {}
            }
          },
          DetachLoadBalancers: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName', 'LoadBalancerNames'],
              members: {
                AutoScalingGroupName: {},
                LoadBalancerNames: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              resultWrapper: 'DetachLoadBalancersResult',
              type: 'structure',
              members: {}
            }
          },
          DetachTrafficSources: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName', 'TrafficSources'],
              members: {
                AutoScalingGroupName: {},
                TrafficSources: {
                  shape: 'Sd'
                }
              }
            },
            output: {
              resultWrapper: 'DetachTrafficSourcesResult',
              type: 'structure',
              members: {}
            }
          },
          DisableMetricsCollection: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName'],
              members: {
                AutoScalingGroupName: {},
                Metrics: {
                  shape: 'S96'
                }
              }
            }
          },
          EnableMetricsCollection: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName', 'Granularity'],
              members: {
                AutoScalingGroupName: {},
                Metrics: {
                  shape: 'S96'
                },
                Granularity: {}
              }
            }
          },
          EnterStandby: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName', 'ShouldDecrementDesiredCapacity'],
              members: {
                InstanceIds: {
                  shape: 'S2'
                },
                AutoScalingGroupName: {},
                ShouldDecrementDesiredCapacity: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'EnterStandbyResult',
              type: 'structure',
              members: {
                Activities: {
                  shape: 'S8b'
                }
              }
            }
          },
          ExecutePolicy: {
            input: {
              type: 'structure',
              required: ['PolicyName'],
              members: {
                AutoScalingGroupName: {},
                PolicyName: {},
                HonorCooldown: {
                  type: 'boolean'
                },
                MetricValue: {
                  type: 'double'
                },
                BreachThreshold: {
                  type: 'double'
                }
              }
            }
          },
          ExitStandby: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName'],
              members: {
                InstanceIds: {
                  shape: 'S2'
                },
                AutoScalingGroupName: {}
              }
            },
            output: {
              resultWrapper: 'ExitStandbyResult',
              type: 'structure',
              members: {
                Activities: {
                  shape: 'S8b'
                }
              }
            }
          },
          GetPredictiveScalingForecast: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName', 'PolicyName', 'StartTime', 'EndTime'],
              members: {
                AutoScalingGroupName: {},
                PolicyName: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              resultWrapper: 'GetPredictiveScalingForecastResult',
              type: 'structure',
              required: ['LoadForecast', 'CapacityForecast', 'UpdateTime'],
              members: {
                LoadForecast: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Timestamps', 'Values', 'MetricSpecification'],
                    members: {
                      Timestamps: {
                        shape: 'S9i'
                      },
                      Values: {
                        shape: 'S9j'
                      },
                      MetricSpecification: {
                        shape: 'S7q'
                      }
                    }
                  }
                },
                CapacityForecast: {
                  type: 'structure',
                  required: ['Timestamps', 'Values'],
                  members: {
                    Timestamps: {
                      shape: 'S9i'
                    },
                    Values: {
                      shape: 'S9j'
                    }
                  }
                },
                UpdateTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          PutLifecycleHook: {
            input: {
              type: 'structure',
              required: ['LifecycleHookName', 'AutoScalingGroupName'],
              members: {
                LifecycleHookName: {},
                AutoScalingGroupName: {},
                LifecycleTransition: {},
                RoleARN: {},
                NotificationTargetARN: {},
                NotificationMetadata: {},
                HeartbeatTimeout: {
                  type: 'integer'
                },
                DefaultResult: {}
              }
            },
            output: {
              resultWrapper: 'PutLifecycleHookResult',
              type: 'structure',
              members: {}
            }
          },
          PutNotificationConfiguration: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName', 'TopicARN', 'NotificationTypes'],
              members: {
                AutoScalingGroupName: {},
                TopicARN: {},
                NotificationTypes: {
                  shape: 'S54'
                }
              }
            }
          },
          PutScalingPolicy: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName', 'PolicyName'],
              members: {
                AutoScalingGroupName: {},
                PolicyName: {},
                PolicyType: {},
                AdjustmentType: {},
                MinAdjustmentStep: {
                  shape: 'S6u'
                },
                MinAdjustmentMagnitude: {
                  type: 'integer'
                },
                ScalingAdjustment: {
                  type: 'integer'
                },
                Cooldown: {
                  type: 'integer'
                },
                MetricAggregationType: {},
                StepAdjustments: {
                  shape: 'S6x'
                },
                EstimatedInstanceWarmup: {
                  type: 'integer'
                },
                TargetTrackingConfiguration: {
                  shape: 'S73'
                },
                Enabled: {
                  type: 'boolean'
                },
                PredictiveScalingConfiguration: {
                  shape: 'S7o'
                }
              }
            },
            output: {
              resultWrapper: 'PutScalingPolicyResult',
              type: 'structure',
              members: {
                PolicyARN: {},
                Alarms: {
                  shape: 'S71'
                }
              }
            }
          },
          PutScheduledUpdateGroupAction: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName', 'ScheduledActionName'],
              members: {
                AutoScalingGroupName: {},
                ScheduledActionName: {},
                Time: {
                  type: 'timestamp'
                },
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Recurrence: {},
                MinSize: {
                  type: 'integer'
                },
                MaxSize: {
                  type: 'integer'
                },
                DesiredCapacity: {
                  type: 'integer'
                },
                TimeZone: {}
              }
            }
          },
          PutWarmPool: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName'],
              members: {
                AutoScalingGroupName: {},
                MaxGroupPreparedCapacity: {
                  type: 'integer'
                },
                MinSize: {
                  type: 'integer'
                },
                PoolState: {},
                InstanceReusePolicy: {
                  shape: 'S4w'
                }
              }
            },
            output: {
              resultWrapper: 'PutWarmPoolResult',
              type: 'structure',
              members: {}
            }
          },
          RecordLifecycleActionHeartbeat: {
            input: {
              type: 'structure',
              required: ['LifecycleHookName', 'AutoScalingGroupName'],
              members: {
                LifecycleHookName: {},
                AutoScalingGroupName: {},
                LifecycleActionToken: {},
                InstanceId: {}
              }
            },
            output: {
              resultWrapper: 'RecordLifecycleActionHeartbeatResult',
              type: 'structure',
              members: {}
            }
          },
          ResumeProcesses: {
            input: {
              shape: 'S9v'
            }
          },
          RollbackInstanceRefresh: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName'],
              members: {
                AutoScalingGroupName: {}
              }
            },
            output: {
              resultWrapper: 'RollbackInstanceRefreshResult',
              type: 'structure',
              members: {
                InstanceRefreshId: {}
              }
            }
          },
          SetDesiredCapacity: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName', 'DesiredCapacity'],
              members: {
                AutoScalingGroupName: {},
                DesiredCapacity: {
                  type: 'integer'
                },
                HonorCooldown: {
                  type: 'boolean'
                }
              }
            }
          },
          SetInstanceHealth: {
            input: {
              type: 'structure',
              required: ['InstanceId', 'HealthStatus'],
              members: {
                InstanceId: {},
                HealthStatus: {},
                ShouldRespectGracePeriod: {
                  type: 'boolean'
                }
              }
            }
          },
          SetInstanceProtection: {
            input: {
              type: 'structure',
              required: ['InstanceIds', 'AutoScalingGroupName', 'ProtectedFromScaleIn'],
              members: {
                InstanceIds: {
                  shape: 'S2'
                },
                AutoScalingGroupName: {},
                ProtectedFromScaleIn: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'SetInstanceProtectionResult',
              type: 'structure',
              members: {}
            }
          },
          StartInstanceRefresh: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName'],
              members: {
                AutoScalingGroupName: {},
                Strategy: {},
                DesiredConfiguration: {
                  shape: 'S5t'
                },
                Preferences: {
                  shape: 'S5h'
                }
              }
            },
            output: {
              resultWrapper: 'StartInstanceRefreshResult',
              type: 'structure',
              members: {
                InstanceRefreshId: {}
              }
            }
          },
          SuspendProcesses: {
            input: {
              shape: 'S9v'
            }
          },
          TerminateInstanceInAutoScalingGroup: {
            input: {
              type: 'structure',
              required: ['InstanceId', 'ShouldDecrementDesiredCapacity'],
              members: {
                InstanceId: {},
                ShouldDecrementDesiredCapacity: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'TerminateInstanceInAutoScalingGroupResult',
              type: 'structure',
              members: {
                Activity: {
                  shape: 'S8c'
                }
              }
            }
          },
          UpdateAutoScalingGroup: {
            input: {
              type: 'structure',
              required: ['AutoScalingGroupName'],
              members: {
                AutoScalingGroupName: {},
                LaunchConfigurationName: {},
                LaunchTemplate: {
                  shape: 'S14'
                },
                MixedInstancesPolicy: {
                  shape: 'S16'
                },
                MinSize: {
                  type: 'integer'
                },
                MaxSize: {
                  type: 'integer'
                },
                DesiredCapacity: {
                  type: 'integer'
                },
                DefaultCooldown: {
                  type: 'integer'
                },
                AvailabilityZones: {
                  shape: 'S2d'
                },
                HealthCheckType: {},
                HealthCheckGracePeriod: {
                  type: 'integer'
                },
                PlacementGroup: {},
                VPCZoneIdentifier: {},
                TerminationPolicies: {
                  shape: 'S2g'
                },
                NewInstancesProtectedFromScaleIn: {
                  type: 'boolean'
                },
                ServiceLinkedRoleARN: {},
                MaxInstanceLifetime: {
                  type: 'integer'
                },
                CapacityRebalance: {
                  type: 'boolean'
                },
                Context: {},
                DesiredCapacityType: {},
                DefaultInstanceWarmup: {
                  type: 'integer'
                },
                InstanceMaintenancePolicy: {
                  shape: 'S2y'
                }
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'list',
            member: {}
          },
          S6: {
            type: 'list',
            member: {}
          },
          Sa: {
            type: 'list',
            member: {}
          },
          Sd: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {},
                Type: {}
              }
            }
          },
          Sh: {
            type: 'list',
            member: {}
          },
          Sj: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ScheduledActionName'],
              members: {
                ScheduledActionName: {},
                ErrorCode: {},
                ErrorMessage: {}
              }
            }
          },
          S14: {
            type: 'structure',
            members: {
              LaunchTemplateId: {},
              LaunchTemplateName: {},
              Version: {}
            }
          },
          S16: {
            type: 'structure',
            members: {
              LaunchTemplate: {
                type: 'structure',
                members: {
                  LaunchTemplateSpecification: {
                    shape: 'S14'
                  },
                  Overrides: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        InstanceType: {},
                        WeightedCapacity: {},
                        LaunchTemplateSpecification: {
                          shape: 'S14'
                        },
                        InstanceRequirements: {
                          type: 'structure',
                          required: ['VCpuCount', 'MemoryMiB'],
                          members: {
                            VCpuCount: {
                              type: 'structure',
                              required: ['Min'],
                              members: {
                                Min: {
                                  type: 'integer'
                                },
                                Max: {
                                  type: 'integer'
                                }
                              }
                            },
                            MemoryMiB: {
                              type: 'structure',
                              required: ['Min'],
                              members: {
                                Min: {
                                  type: 'integer'
                                },
                                Max: {
                                  type: 'integer'
                                }
                              }
                            },
                            CpuManufacturers: {
                              type: 'list',
                              member: {}
                            },
                            MemoryGiBPerVCpu: {
                              type: 'structure',
                              members: {
                                Min: {
                                  type: 'double'
                                },
                                Max: {
                                  type: 'double'
                                }
                              }
                            },
                            ExcludedInstanceTypes: {
                              type: 'list',
                              member: {}
                            },
                            InstanceGenerations: {
                              type: 'list',
                              member: {}
                            },
                            SpotMaxPricePercentageOverLowestPrice: {
                              type: 'integer'
                            },
                            MaxSpotPriceAsPercentageOfOptimalOnDemandPrice: {
                              type: 'integer'
                            },
                            OnDemandMaxPricePercentageOverLowestPrice: {
                              type: 'integer'
                            },
                            BareMetal: {},
                            BurstablePerformance: {},
                            RequireHibernateSupport: {
                              type: 'boolean'
                            },
                            NetworkInterfaceCount: {
                              type: 'structure',
                              members: {
                                Min: {
                                  type: 'integer'
                                },
                                Max: {
                                  type: 'integer'
                                }
                              }
                            },
                            LocalStorage: {},
                            LocalStorageTypes: {
                              type: 'list',
                              member: {}
                            },
                            TotalLocalStorageGB: {
                              type: 'structure',
                              members: {
                                Min: {
                                  type: 'double'
                                },
                                Max: {
                                  type: 'double'
                                }
                              }
                            },
                            BaselineEbsBandwidthMbps: {
                              type: 'structure',
                              members: {
                                Min: {
                                  type: 'integer'
                                },
                                Max: {
                                  type: 'integer'
                                }
                              }
                            },
                            AcceleratorTypes: {
                              type: 'list',
                              member: {}
                            },
                            AcceleratorCount: {
                              type: 'structure',
                              members: {
                                Min: {
                                  type: 'integer'
                                },
                                Max: {
                                  type: 'integer'
                                }
                              }
                            },
                            AcceleratorManufacturers: {
                              type: 'list',
                              member: {}
                            },
                            AcceleratorNames: {
                              type: 'list',
                              member: {}
                            },
                            AcceleratorTotalMemoryMiB: {
                              type: 'structure',
                              members: {
                                Min: {
                                  type: 'integer'
                                },
                                Max: {
                                  type: 'integer'
                                }
                              }
                            },
                            NetworkBandwidthGbps: {
                              type: 'structure',
                              members: {
                                Min: {
                                  type: 'double'
                                },
                                Max: {
                                  type: 'double'
                                }
                              }
                            },
                            AllowedInstanceTypes: {
                              type: 'list',
                              member: {}
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              InstancesDistribution: {
                type: 'structure',
                members: {
                  OnDemandAllocationStrategy: {},
                  OnDemandBaseCapacity: {
                    type: 'integer'
                  },
                  OnDemandPercentageAboveBaseCapacity: {
                    type: 'integer'
                  },
                  SpotAllocationStrategy: {},
                  SpotInstancePools: {
                    type: 'integer'
                  },
                  SpotMaxPrice: {}
                }
              }
            }
          },
          S2d: {
            type: 'list',
            member: {}
          },
          S2g: {
            type: 'list',
            member: {}
          },
          S2q: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key'],
              members: {
                ResourceId: {},
                ResourceType: {},
                Key: {},
                Value: {},
                PropagateAtLaunch: {
                  type: 'boolean'
                }
              }
            }
          },
          S2y: {
            type: 'structure',
            members: {
              MinHealthyPercentage: {
                type: 'integer'
              },
              MaxHealthyPercentage: {
                type: 'integer'
              }
            }
          },
          S32: {
            type: 'list',
            member: {}
          },
          S33: {
            type: 'list',
            member: {}
          },
          S35: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['DeviceName'],
              members: {
                VirtualName: {},
                DeviceName: {},
                Ebs: {
                  type: 'structure',
                  members: {
                    SnapshotId: {},
                    VolumeSize: {
                      type: 'integer'
                    },
                    VolumeType: {},
                    DeleteOnTermination: {
                      type: 'boolean'
                    },
                    Iops: {
                      type: 'integer'
                    },
                    Encrypted: {
                      type: 'boolean'
                    },
                    Throughput: {
                      type: 'integer'
                    }
                  }
                },
                NoDevice: {
                  type: 'boolean'
                }
              }
            }
          },
          S3f: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              }
            }
          },
          S3k: {
            type: 'structure',
            members: {
              HttpTokens: {},
              HttpPutResponseHopLimit: {
                type: 'integer'
              },
              HttpEndpoint: {}
            }
          },
          S49: {
            type: 'list',
            member: {}
          },
          S4b: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Values: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S4i: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['InstanceId', 'AvailabilityZone', 'LifecycleState', 'HealthStatus', 'ProtectedFromScaleIn'],
              members: {
                InstanceId: {},
                InstanceType: {},
                AvailabilityZone: {},
                LifecycleState: {},
                HealthStatus: {},
                LaunchConfigurationName: {},
                LaunchTemplate: {
                  shape: 'S14'
                },
                ProtectedFromScaleIn: {
                  type: 'boolean'
                },
                WeightedCapacity: {}
              }
            }
          },
          S4p: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ResourceId: {},
                ResourceType: {},
                Key: {},
                Value: {},
                PropagateAtLaunch: {
                  type: 'boolean'
                }
              }
            }
          },
          S4r: {
            type: 'structure',
            members: {
              MaxGroupPreparedCapacity: {
                type: 'integer'
              },
              MinSize: {
                type: 'integer'
              },
              PoolState: {},
              Status: {},
              InstanceReusePolicy: {
                shape: 'S4w'
              }
            }
          },
          S4w: {
            type: 'structure',
            members: {
              ReuseOnScaleIn: {
                type: 'boolean'
              }
            }
          },
          S54: {
            type: 'list',
            member: {}
          },
          S5e: {
            type: 'structure',
            members: {
              LivePoolProgress: {
                type: 'structure',
                members: {
                  PercentageComplete: {
                    type: 'integer'
                  },
                  InstancesToUpdate: {
                    type: 'integer'
                  }
                }
              },
              WarmPoolProgress: {
                type: 'structure',
                members: {
                  PercentageComplete: {
                    type: 'integer'
                  },
                  InstancesToUpdate: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S5h: {
            type: 'structure',
            members: {
              MinHealthyPercentage: {
                type: 'integer'
              },
              InstanceWarmup: {
                type: 'integer'
              },
              CheckpointPercentages: {
                type: 'list',
                member: {
                  type: 'integer'
                }
              },
              CheckpointDelay: {
                type: 'integer'
              },
              SkipMatching: {
                type: 'boolean'
              },
              AutoRollback: {
                type: 'boolean'
              },
              ScaleInProtectedInstances: {},
              StandbyInstances: {},
              AlarmSpecification: {
                type: 'structure',
                members: {
                  Alarms: {
                    type: 'list',
                    member: {}
                  }
                }
              },
              MaxHealthyPercentage: {
                type: 'integer'
              }
            }
          },
          S5t: {
            type: 'structure',
            members: {
              LaunchTemplate: {
                shape: 'S14'
              },
              MixedInstancesPolicy: {
                shape: 'S16'
              }
            }
          },
          S6u: {
            type: 'integer',
            deprecated: true
          },
          S6x: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ScalingAdjustment'],
              members: {
                MetricIntervalLowerBound: {
                  type: 'double'
                },
                MetricIntervalUpperBound: {
                  type: 'double'
                },
                ScalingAdjustment: {
                  type: 'integer'
                }
              }
            }
          },
          S71: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                AlarmName: {},
                AlarmARN: {}
              }
            }
          },
          S73: {
            type: 'structure',
            required: ['TargetValue'],
            members: {
              PredefinedMetricSpecification: {
                type: 'structure',
                required: ['PredefinedMetricType'],
                members: {
                  PredefinedMetricType: {},
                  ResourceLabel: {}
                }
              },
              CustomizedMetricSpecification: {
                type: 'structure',
                members: {
                  MetricName: {},
                  Namespace: {},
                  Dimensions: {
                    shape: 'S79'
                  },
                  Statistic: {},
                  Unit: {},
                  Metrics: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['Id'],
                      members: {
                        Id: {},
                        Expression: {},
                        MetricStat: {
                          type: 'structure',
                          required: ['Metric', 'Stat'],
                          members: {
                            Metric: {
                              shape: 'S7i'
                            },
                            Stat: {},
                            Unit: {}
                          }
                        },
                        Label: {},
                        ReturnData: {
                          type: 'boolean'
                        }
                      }
                    }
                  }
                }
              },
              TargetValue: {
                type: 'double'
              },
              DisableScaleIn: {
                type: 'boolean'
              }
            }
          },
          S79: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Value'],
              members: {
                Name: {},
                Value: {}
              }
            }
          },
          S7i: {
            type: 'structure',
            required: ['Namespace', 'MetricName'],
            members: {
              Namespace: {},
              MetricName: {},
              Dimensions: {
                shape: 'S79'
              }
            }
          },
          S7o: {
            type: 'structure',
            required: ['MetricSpecifications'],
            members: {
              MetricSpecifications: {
                type: 'list',
                member: {
                  shape: 'S7q'
                }
              },
              Mode: {},
              SchedulingBufferTime: {
                type: 'integer'
              },
              MaxCapacityBreachBehavior: {},
              MaxCapacityBuffer: {
                type: 'integer'
              }
            }
          },
          S7q: {
            type: 'structure',
            required: ['TargetValue'],
            members: {
              TargetValue: {
                type: 'double'
              },
              PredefinedMetricPairSpecification: {
                type: 'structure',
                required: ['PredefinedMetricType'],
                members: {
                  PredefinedMetricType: {},
                  ResourceLabel: {}
                }
              },
              PredefinedScalingMetricSpecification: {
                type: 'structure',
                required: ['PredefinedMetricType'],
                members: {
                  PredefinedMetricType: {},
                  ResourceLabel: {}
                }
              },
              PredefinedLoadMetricSpecification: {
                type: 'structure',
                required: ['PredefinedMetricType'],
                members: {
                  PredefinedMetricType: {},
                  ResourceLabel: {}
                }
              },
              CustomizedScalingMetricSpecification: {
                type: 'structure',
                required: ['MetricDataQueries'],
                members: {
                  MetricDataQueries: {
                    shape: 'S7y'
                  }
                }
              },
              CustomizedLoadMetricSpecification: {
                type: 'structure',
                required: ['MetricDataQueries'],
                members: {
                  MetricDataQueries: {
                    shape: 'S7y'
                  }
                }
              },
              CustomizedCapacityMetricSpecification: {
                type: 'structure',
                required: ['MetricDataQueries'],
                members: {
                  MetricDataQueries: {
                    shape: 'S7y'
                  }
                }
              }
            }
          },
          S7y: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {},
                Expression: {},
                MetricStat: {
                  type: 'structure',
                  required: ['Metric', 'Stat'],
                  members: {
                    Metric: {
                      shape: 'S7i'
                    },
                    Stat: {},
                    Unit: {}
                  }
                },
                Label: {},
                ReturnData: {
                  type: 'boolean'
                }
              }
            }
          },
          S8b: {
            type: 'list',
            member: {
              shape: 'S8c'
            }
          },
          S8c: {
            type: 'structure',
            required: ['ActivityId', 'AutoScalingGroupName', 'Cause', 'StartTime', 'StatusCode'],
            members: {
              ActivityId: {},
              AutoScalingGroupName: {},
              Description: {},
              Cause: {},
              StartTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              StatusCode: {},
              StatusMessage: {},
              Progress: {
                type: 'integer'
              },
              Details: {},
              AutoScalingGroupState: {},
              AutoScalingGroupARN: {}
            }
          },
          S96: {
            type: 'list',
            member: {}
          },
          S9i: {
            type: 'list',
            member: {
              type: 'timestamp'
            }
          },
          S9j: {
            type: 'list',
            member: {
              type: 'double'
            }
          },
          S9v: {
            type: 'structure',
            required: ['AutoScalingGroupName'],
            members: {
              AutoScalingGroupName: {},
              ScalingProcesses: {
                type: 'list',
                member: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=aa482bdcbca199aaaaf9d0d3c4d877fc015755e1.js.map