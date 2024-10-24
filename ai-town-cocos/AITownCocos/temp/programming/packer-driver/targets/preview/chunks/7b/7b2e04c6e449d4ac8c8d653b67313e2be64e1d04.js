System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req1 = _unresolved_4.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var AWS = require('../core');

        var Translator = require('./translator');

        var DynamoDBSet = require('./set');
        /**
         * The document client simplifies working with items in Amazon DynamoDB
         * by abstracting away the notion of attribute values. This abstraction
         * annotates native JavaScript types supplied as input parameters, as well
         * as converts annotated response data to native JavaScript types.
         *
         * ## Marshalling Input and Unmarshalling Response Data
         *
         * The document client affords developers the use of native JavaScript types
         * instead of `AttributeValue`s to simplify the JavaScript development
         * experience with Amazon DynamoDB. JavaScript objects passed in as parameters
         * are marshalled into `AttributeValue` shapes required by Amazon DynamoDB.
         * Responses from DynamoDB are unmarshalled into plain JavaScript objects
         * by the `DocumentClient`. The `DocumentClient`, does not accept
         * `AttributeValue`s in favor of native JavaScript types.
         *
         * |                             JavaScript Type                            | DynamoDB AttributeValue |
         * |:----------------------------------------------------------------------:|-------------------------|
         * | String                                                                 | S                       |
         * | Number                                                                 | N                       |
         * | Boolean                                                                | BOOL                    |
         * | null                                                                   | NULL                    |
         * | Array                                                                  | L                       |
         * | Object                                                                 | M                       |
         * | Buffer, File, Blob, ArrayBuffer, DataView, and JavaScript typed arrays | B                       |
         *
         * ## Support for Sets
         *
         * The `DocumentClient` offers a convenient way to create sets from
         * JavaScript Arrays. The type of set is inferred from the first element
         * in the array. DynamoDB supports string, number, and binary sets. To
         * learn more about supported types see the
         * [Amazon DynamoDB Data Model Documentation](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataModel.html)
         * For more information see {AWS.DynamoDB.DocumentClient.createSet}
         *
         */


        AWS.DynamoDB.DocumentClient = AWS.util.inherit({
          /**
           * Creates a DynamoDB document client with a set of configuration options.
           *
           * @option options params [map] An optional map of parameters to bind to every
           *   request sent by this service object.
           * @option options service [AWS.DynamoDB] An optional pre-configured instance
           *  of the AWS.DynamoDB service object. This instance's config will be
           *  copied to a new instance used by this client. You should not need to
           *  retain a reference to the input object, and may destroy it or allow it
           *  to be garbage collected.
           * @option options convertEmptyValues [Boolean] set to true if you would like
           *  the document client to convert empty values (0-length strings, binary
           *  buffers, and sets) to be converted to NULL types when persisting to
           *  DynamoDB.
           * @option options wrapNumbers [Boolean] Set to true to return numbers as a
           *  NumberValue object instead of converting them to native JavaScript numbers.
           *  This allows for the safe round-trip transport of numbers of arbitrary size.
           * @see AWS.DynamoDB.constructor
           *
           */
          constructor: function DocumentClient(options) {
            var self = this;
            self.options = options || {};
            self.configure(self.options);
          },

          /**
           * @api private
           */
          configure: function configure(options) {
            var self = this;
            self.service = options.service;
            self.bindServiceObject(options);
            self.attrValue = options.attrValue = self.service.api.operations.putItem.input.members.Item.value.shape;
          },

          /**
           * @api private
           */
          bindServiceObject: function bindServiceObject(options) {
            var self = this;
            options = options || {};

            if (!self.service) {
              self.service = new AWS.DynamoDB(options);
            } else {
              var config = AWS.util.copy(self.service.config);
              self.service = new self.service.constructor.__super__(config);
              self.service.config.params = AWS.util.merge(self.service.config.params || {}, options.params);
            }
          },

          /**
           * @api private
           */
          makeServiceRequest: function makeServiceRequest(operation, params, callback) {
            var self = this;
            var request = self.service[operation](params);
            self.setupRequest(request);
            self.setupResponse(request);

            if (typeof callback === 'function') {
              request.send(callback);
            }

            return request;
          },

          /**
           * @api private
           */
          serviceClientOperationsMap: {
            batchGet: 'batchGetItem',
            batchWrite: 'batchWriteItem',
            delete: 'deleteItem',
            get: 'getItem',
            put: 'putItem',
            query: 'query',
            scan: 'scan',
            update: 'updateItem',
            transactGet: 'transactGetItems',
            transactWrite: 'transactWriteItems'
          },

          /**
           * Returns the attributes of one or more items from one or more tables
           * by delegating to `AWS.DynamoDB.batchGetItem()`.
           *
           * Supply the same parameters as {AWS.DynamoDB.batchGetItem} with
           * `AttributeValue`s substituted by native JavaScript types.
           *
           * @see AWS.DynamoDB.batchGetItem
           * @example Get items from multiple tables
           *  var params = {
           *    RequestItems: {
           *      'Table-1': {
           *        Keys: [
           *          {
           *             HashKey: 'haskey',
           *             NumberRangeKey: 1
           *          }
           *        ]
           *      },
           *      'Table-2': {
           *        Keys: [
           *          { foo: 'bar' },
           *        ]
           *      }
           *    }
           *  };
           *
           *  var documentClient = new AWS.DynamoDB.DocumentClient();
           *
           *  documentClient.batchGet(params, function(err, data) {
           *    if (err) console.log(err);
           *    else console.log(data);
           *  });
           *
           */
          batchGet: function batchGet(params, callback) {
            var operation = this.serviceClientOperationsMap['batchGet'];
            return this.makeServiceRequest(operation, params, callback);
          },

          /**
           * Puts or deletes multiple items in one or more tables by delegating
           * to `AWS.DynamoDB.batchWriteItem()`.
           *
           * Supply the same parameters as {AWS.DynamoDB.batchWriteItem} with
           * `AttributeValue`s substituted by native JavaScript types.
           *
           * @see AWS.DynamoDB.batchWriteItem
           * @example Write to and delete from a table
           *  var params = {
           *    RequestItems: {
           *      'Table-1': [
           *        {
           *          DeleteRequest: {
           *            Key: { HashKey: 'someKey' }
           *          }
           *        },
           *        {
           *          PutRequest: {
           *            Item: {
           *              HashKey: 'anotherKey',
           *              NumAttribute: 1,
           *              BoolAttribute: true,
           *              ListAttribute: [1, 'two', false],
           *              MapAttribute: { foo: 'bar' }
           *            }
           *          }
           *        }
           *      ]
           *    }
           *  };
           *
           *  var documentClient = new AWS.DynamoDB.DocumentClient();
           *
           *  documentClient.batchWrite(params, function(err, data) {
           *    if (err) console.log(err);
           *    else console.log(data);
           *  });
           *
           */
          batchWrite: function batchWrite(params, callback) {
            var operation = this.serviceClientOperationsMap['batchWrite'];
            return this.makeServiceRequest(operation, params, callback);
          },

          /**
           * Deletes a single item in a table by primary key by delegating to
           * `AWS.DynamoDB.deleteItem()`
           *
           * Supply the same parameters as {AWS.DynamoDB.deleteItem} with
           * `AttributeValue`s substituted by native JavaScript types.
           *
           * @see AWS.DynamoDB.deleteItem
           * @example Delete an item from a table
           *  var params = {
           *    TableName : 'Table',
           *    Key: {
           *      HashKey: 'hashkey',
           *      NumberRangeKey: 1
           *    }
           *  };
           *
           *  var documentClient = new AWS.DynamoDB.DocumentClient();
           *
           *  documentClient.delete(params, function(err, data) {
           *    if (err) console.log(err);
           *    else console.log(data);
           *  });
           *
           */
          delete: function _delete(params, callback) {
            var operation = this.serviceClientOperationsMap['delete'];
            return this.makeServiceRequest(operation, params, callback);
          },

          /**
           * Returns a set of attributes for the item with the given primary key
           * by delegating to `AWS.DynamoDB.getItem()`.
           *
           * Supply the same parameters as {AWS.DynamoDB.getItem} with
           * `AttributeValue`s substituted by native JavaScript types.
           *
           * @see AWS.DynamoDB.getItem
           * @example Get an item from a table
           *  var params = {
           *    TableName : 'Table',
           *    Key: {
           *      HashKey: 'hashkey'
           *    }
           *  };
           *
           *  var documentClient = new AWS.DynamoDB.DocumentClient();
           *
           *  documentClient.get(params, function(err, data) {
           *    if (err) console.log(err);
           *    else console.log(data);
           *  });
           *
           */
          get: function get(params, callback) {
            var operation = this.serviceClientOperationsMap['get'];
            return this.makeServiceRequest(operation, params, callback);
          },

          /**
           * Creates a new item, or replaces an old item with a new item by
           * delegating to `AWS.DynamoDB.putItem()`.
           *
           * Supply the same parameters as {AWS.DynamoDB.putItem} with
           * `AttributeValue`s substituted by native JavaScript types.
           *
           * @see AWS.DynamoDB.putItem
           * @example Create a new item in a table
           *  var params = {
           *    TableName : 'Table',
           *    Item: {
           *       HashKey: 'haskey',
           *       NumAttribute: 1,
           *       BoolAttribute: true,
           *       ListAttribute: [1, 'two', false],
           *       MapAttribute: { foo: 'bar'},
           *       NullAttribute: null
           *    }
           *  };
           *
           *  var documentClient = new AWS.DynamoDB.DocumentClient();
           *
           *  documentClient.put(params, function(err, data) {
           *    if (err) console.log(err);
           *    else console.log(data);
           *  });
           *
           */
          put: function put(params, callback) {
            var operation = this.serviceClientOperationsMap['put'];
            return this.makeServiceRequest(operation, params, callback);
          },

          /**
           * Edits an existing item's attributes, or adds a new item to the table if
           * it does not already exist by delegating to `AWS.DynamoDB.updateItem()`.
           *
           * Supply the same parameters as {AWS.DynamoDB.updateItem} with
           * `AttributeValue`s substituted by native JavaScript types.
           *
           * @see AWS.DynamoDB.updateItem
           * @example Update an item with expressions
           *  var params = {
           *    TableName: 'Table',
           *    Key: { HashKey : 'hashkey' },
           *    UpdateExpression: 'set #a = :x + :y',
           *    ConditionExpression: '#a < :MAX',
           *    ExpressionAttributeNames: {'#a' : 'Sum'},
           *    ExpressionAttributeValues: {
           *      ':x' : 20,
           *      ':y' : 45,
           *      ':MAX' : 100,
           *    }
           *  };
           *
           *  var documentClient = new AWS.DynamoDB.DocumentClient();
           *
           *  documentClient.update(params, function(err, data) {
           *     if (err) console.log(err);
           *     else console.log(data);
           *  });
           *
           */
          update: function update(params, callback) {
            var operation = this.serviceClientOperationsMap['update'];
            return this.makeServiceRequest(operation, params, callback);
          },

          /**
           * Returns one or more items and item attributes by accessing every item
           * in a table or a secondary index.
           *
           * Supply the same parameters as {AWS.DynamoDB.scan} with
           * `AttributeValue`s substituted by native JavaScript types.
           *
           * @see AWS.DynamoDB.scan
           * @example Scan the table with a filter expression
           *  var params = {
           *    TableName : 'Table',
           *    FilterExpression : 'Year = :this_year',
           *    ExpressionAttributeValues : {':this_year' : 2015}
           *  };
           *
           *  var documentClient = new AWS.DynamoDB.DocumentClient();
           *
           *  documentClient.scan(params, function(err, data) {
           *     if (err) console.log(err);
           *     else console.log(data);
           *  });
           *
           */
          scan: function scan(params, callback) {
            var operation = this.serviceClientOperationsMap['scan'];
            return this.makeServiceRequest(operation, params, callback);
          },

          /**
           * Directly access items from a table by primary key or a secondary index.
           *
           * Supply the same parameters as {AWS.DynamoDB.query} with
           * `AttributeValue`s substituted by native JavaScript types.
           *
           * @see AWS.DynamoDB.query
           * @example Query an index
           *  var params = {
           *    TableName: 'Table',
           *    IndexName: 'Index',
           *    KeyConditionExpression: 'HashKey = :hkey and RangeKey > :rkey',
           *    ExpressionAttributeValues: {
           *      ':hkey': 'key',
           *      ':rkey': 2015
           *    }
           *  };
           *
           *  var documentClient = new AWS.DynamoDB.DocumentClient();
           *
           *  documentClient.query(params, function(err, data) {
           *     if (err) console.log(err);
           *     else console.log(data);
           *  });
           *
           */
          query: function query(params, callback) {
            var operation = this.serviceClientOperationsMap['query'];
            return this.makeServiceRequest(operation, params, callback);
          },

          /**
           * Synchronous write operation that groups up to 100 action requests.
           *
           * Supply the same parameters as {AWS.DynamoDB.transactWriteItems} with
           * `AttributeValue`s substituted by native JavaScript types.
           *
           * @see AWS.DynamoDB.transactWriteItems
           * @example Get items from multiple tables
           *  var params = {
           *    TransactItems: [{
           *      Put: {
           *        TableName : 'Table0',
           *        Item: {
           *          HashKey: 'haskey',
           *          NumAttribute: 1,
           *          BoolAttribute: true,
           *          ListAttribute: [1, 'two', false],
           *          MapAttribute: { foo: 'bar'},
           *          NullAttribute: null
           *        }
           *      }
           *    }, {
           *      Update: {
           *        TableName: 'Table1',
           *        Key: { HashKey : 'hashkey' },
           *        UpdateExpression: 'set #a = :x + :y',
           *        ConditionExpression: '#a < :MAX',
           *        ExpressionAttributeNames: {'#a' : 'Sum'},
           *        ExpressionAttributeValues: {
           *          ':x' : 20,
           *          ':y' : 45,
           *          ':MAX' : 100,
           *        }
           *      }
           *    }]
           *  };
           *
           *  documentClient.transactWrite(params, function(err, data) {
           *    if (err) console.log(err);
           *    else console.log(data);
           *  });
           */
          transactWrite: function transactWrite(params, callback) {
            var operation = this.serviceClientOperationsMap['transactWrite'];
            return this.makeServiceRequest(operation, params, callback);
          },

          /**
           * Atomically retrieves multiple items from one or more tables (but not from indexes)
           * in a single account and region.
           *
           * Supply the same parameters as {AWS.DynamoDB.transactGetItems} with
           * `AttributeValue`s substituted by native JavaScript types.
           *
           * @see AWS.DynamoDB.transactGetItems
           * @example Get items from multiple tables
           *  var params = {
           *    TransactItems: [{
           *      Get: {
           *        TableName : 'Table0',
           *        Key: {
           *          HashKey: 'hashkey0'
           *        }
           *      }
           *    }, {
           *      Get: {
           *        TableName : 'Table1',
           *        Key: {
           *          HashKey: 'hashkey1'
           *        }
           *      }
           *    }]
           *  };
           *
           *  documentClient.transactGet(params, function(err, data) {
           *    if (err) console.log(err);
           *    else console.log(data);
           *  });
           */
          transactGet: function transactGet(params, callback) {
            var operation = this.serviceClientOperationsMap['transactGet'];
            return this.makeServiceRequest(operation, params, callback);
          },

          /**
           * Creates a set of elements inferring the type of set from
           * the type of the first element. Amazon DynamoDB currently supports
           * the number sets, string sets, and binary sets. For more information
           * about DynamoDB data types see the documentation on the
           * [Amazon DynamoDB Data Model](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataModel.html#DataModel.DataTypes).
           *
           * @param list [Array] Collection to represent your DynamoDB Set
           * @param options [map]
           *  * **validate** [Boolean] set to true if you want to validate the type
           *    of each element in the set. Defaults to `false`.
           * @example Creating a number set
           *  var documentClient = new AWS.DynamoDB.DocumentClient();
           *
           *  var params = {
           *    Item: {
           *      hashkey: 'hashkey'
           *      numbers: documentClient.createSet([1, 2, 3]);
           *    }
           *  };
           *
           *  documentClient.put(params, function(err, data) {
           *    if (err) console.log(err);
           *    else console.log(data);
           *  });
           *
           */
          createSet: function createSet(list, options) {
            options = options || {};
            return new DynamoDBSet(list, options);
          },

          /**
           * @api private
           */
          getTranslator: function getTranslator() {
            return new Translator(this.options);
          },

          /**
           * @api private
           */
          setupRequest: function setupRequest(request) {
            var self = this;
            var translator = self.getTranslator();
            var operation = request.operation;
            var inputShape = request.service.api.operations[operation].input;

            request._events.validate.unshift(function (req) {
              req.rawParams = AWS.util.copy(req.params);
              req.params = translator.translateInput(req.rawParams, inputShape);
            });
          },

          /**
           * @api private
           */
          setupResponse: function setupResponse(request) {
            var self = this;
            var translator = self.getTranslator();
            var outputShape = self.service.api.operations[request.operation].output;
            request.on('extractData', function (response) {
              response.data = translator.translateOutput(response.data, outputShape);
            });
            var response = request.response;

            response.nextPage = function (cb) {
              var resp = this;
              var req = resp.request;
              var config;
              var service = req.service;
              var operation = req.operation;

              try {
                config = service.paginationConfig(operation, true);
              } catch (e) {
                resp.error = e;
              }

              if (!resp.hasNextPage()) {
                if (cb) cb(resp.error, null);else if (resp.error) throw resp.error;
                return null;
              }

              var params = AWS.util.copy(req.rawParams);

              if (!resp.nextPageTokens) {
                return cb ? cb(null, null) : null;
              } else {
                var inputTokens = config.inputToken;
                if (typeof inputTokens === 'string') inputTokens = [inputTokens];

                for (var i = 0; i < inputTokens.length; i++) {
                  params[inputTokens[i]] = resp.nextPageTokens[i];
                }

                return self[operation](params, cb);
              }
            };
          }
        });
        /**
         * @api private
         */

        module.exports = AWS.DynamoDB.DocumentClient; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../core': _req,
        './translator': _req0,
        './set': _req1
      }));
    }
  };
});
//# sourceMappingURL=7b2e04c6e449d4ac8c8d653b67313e2be64e1d04.js.map