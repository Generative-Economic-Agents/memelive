System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-06-26',
          endpointPrefix: 'forecastquery',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'Amazon Forecast Query Service',
          serviceId: 'forecastquery',
          signatureVersion: 'v4',
          signingName: 'forecast',
          targetPrefix: 'AmazonForecastRuntime',
          uid: 'forecastquery-2018-06-26'
        },
        operations: {
          QueryForecast: {
            input: {
              type: 'structure',
              required: ['ForecastArn', 'Filters'],
              members: {
                ForecastArn: {},
                StartDate: {},
                EndDate: {},
                Filters: {
                  shape: 'S4'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Forecast: {
                  shape: 'S9'
                }
              }
            }
          },
          QueryWhatIfForecast: {
            input: {
              type: 'structure',
              required: ['WhatIfForecastArn', 'Filters'],
              members: {
                WhatIfForecastArn: {},
                StartDate: {},
                EndDate: {},
                Filters: {
                  shape: 'S4'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Forecast: {
                  shape: 'S9'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'map',
            key: {},
            value: {}
          },
          S9: {
            type: 'structure',
            members: {
              Predictions: {
                type: 'map',
                key: {},
                value: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Timestamp: {},
                      Value: {
                        type: 'double'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=346fb18a2d5312887c92ee5a9b29fdc3d2d810ae.js.map