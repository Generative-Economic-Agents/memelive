System.register(["__unresolved_0", "net", "tls", "http", "https", "events", "assert", "util", "safe-buffer"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, _httpOverHttp, _httpsOverHttp, _httpOverHttps, _httpsOverHttps, _debug, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_net) {
      _req = _net.__cjsMetaURL;
    }, function (_tls) {
      _req0 = _tls.__cjsMetaURL;
    }, function (_http) {
      _req1 = _http.__cjsMetaURL;
    }, function (_https) {
      _req2 = _https.__cjsMetaURL;
    }, function (_events) {
      _req3 = _events.__cjsMetaURL;
    }, function (_assert) {
      _req4 = _assert.__cjsMetaURL;
    }, function (_util) {
      _req5 = _util.__cjsMetaURL;
    }, function (_safeBuffer) {
      _req6 = _safeBuffer.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var net = require('net'),
            tls = require('tls'),
            http = require('http'),
            https = require('https'),
            events = require('events'),
            assert = require('assert'),
            util = require('util'),
            Buffer = require('safe-buffer').Buffer;

        exports.httpOverHttp = httpOverHttp;
        exports.httpsOverHttp = httpsOverHttp;
        exports.httpOverHttps = httpOverHttps;
        exports.httpsOverHttps = httpsOverHttps;

        function httpOverHttp(options) {
          var agent = new TunnelingAgent(options);
          agent.request = http.request;
          return agent;
        }

        function httpsOverHttp(options) {
          var agent = new TunnelingAgent(options);
          agent.request = http.request;
          agent.createSocket = createSecureSocket;
          agent.defaultPort = 443;
          return agent;
        }

        function httpOverHttps(options) {
          var agent = new TunnelingAgent(options);
          agent.request = https.request;
          return agent;
        }

        function httpsOverHttps(options) {
          var agent = new TunnelingAgent(options);
          agent.request = https.request;
          agent.createSocket = createSecureSocket;
          agent.defaultPort = 443;
          return agent;
        }

        function TunnelingAgent(options) {
          var self = this;
          self.options = options || {};
          self.proxyOptions = self.options.proxy || {};
          self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
          self.requests = [];
          self.sockets = [];
          self.on('free', function onFree(socket, host, port) {
            for (var i = 0, len = self.requests.length; i < len; ++i) {
              var pending = self.requests[i];

              if (pending.host === host && pending.port === port) {
                // Detect the request to connect same origin server,
                // reuse the connection.
                self.requests.splice(i, 1);
                pending.request.onSocket(socket);
                return;
              }
            }

            socket.destroy();
            self.removeSocket(socket);
          });
        }

        util.inherits(TunnelingAgent, events.EventEmitter);

        TunnelingAgent.prototype.addRequest = function addRequest(req, options) {
          var self = this; // Legacy API: addRequest(req, host, port, path)

          if (typeof options === 'string') {
            options = {
              host: options,
              port: arguments[2],
              path: arguments[3]
            };
          }

          if (self.sockets.length >= this.maxSockets) {
            // We are over limit so we'll add it to the queue.
            self.requests.push({
              host: options.host,
              port: options.port,
              request: req
            });
            return;
          } // If we are under maxSockets create a new one.


          self.createConnection({
            host: options.host,
            port: options.port,
            request: req
          });
        };

        TunnelingAgent.prototype.createConnection = function createConnection(pending) {
          var self = this;
          self.createSocket(pending, function (socket) {
            socket.on('free', onFree);
            socket.on('close', onCloseOrRemove);
            socket.on('agentRemove', onCloseOrRemove);
            pending.request.onSocket(socket);

            function onFree() {
              self.emit('free', socket, pending.host, pending.port);
            }

            function onCloseOrRemove(err) {
              self.removeSocket(socket);
              socket.removeListener('free', onFree);
              socket.removeListener('close', onCloseOrRemove);
              socket.removeListener('agentRemove', onCloseOrRemove);
            }
          });
        };

        TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
          var self = this;
          var placeholder = {};
          self.sockets.push(placeholder);
          var connectOptions = mergeOptions({}, self.proxyOptions, {
            method: 'CONNECT',
            path: options.host + ':' + options.port,
            agent: false
          });

          if (connectOptions.proxyAuth) {
            connectOptions.headers = connectOptions.headers || {};
            connectOptions.headers['Proxy-Authorization'] = 'Basic ' + Buffer.from(connectOptions.proxyAuth).toString('base64');
          }

          debug('making CONNECT request');
          var connectReq = self.request(connectOptions);
          connectReq.useChunkedEncodingByDefault = false; // for v0.6

          connectReq.once('response', onResponse); // for v0.6

          connectReq.once('upgrade', onUpgrade); // for v0.6

          connectReq.once('connect', onConnect); // for v0.7 or later

          connectReq.once('error', onError);
          connectReq.end();

          function onResponse(res) {
            // Very hacky. This is necessary to avoid http-parser leaks.
            res.upgrade = true;
          }

          function onUpgrade(res, socket, head) {
            // Hacky.
            process.nextTick(function () {
              onConnect(res, socket, head);
            });
          }

          function onConnect(res, socket, head) {
            connectReq.removeAllListeners();
            socket.removeAllListeners();

            if (res.statusCode === 200) {
              assert.equal(head.length, 0);
              debug('tunneling connection has established');
              self.sockets[self.sockets.indexOf(placeholder)] = socket;
              cb(socket);
            } else {
              debug('tunneling socket could not be established, statusCode=%d', res.statusCode);
              var error = new Error('tunneling socket could not be established, ' + 'statusCode=' + res.statusCode);
              error.code = 'ECONNRESET';
              options.request.emit('error', error);
              self.removeSocket(placeholder);
            }
          }

          function onError(cause) {
            connectReq.removeAllListeners();
            debug('tunneling socket could not be established, cause=%s\n', cause.message, cause.stack);
            var error = new Error('tunneling socket could not be established, ' + 'cause=' + cause.message);
            error.code = 'ECONNRESET';
            options.request.emit('error', error);
            self.removeSocket(placeholder);
          }
        };

        TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
          var pos = this.sockets.indexOf(socket);
          if (pos === -1) return;
          this.sockets.splice(pos, 1);
          var pending = this.requests.shift();

          if (pending) {
            // If we have pending requests and a socket gets closed a new one
            // needs to be created to take over in the pool for the one that closed.
            this.createConnection(pending);
          }
        };

        function createSecureSocket(options, cb) {
          var self = this;
          TunnelingAgent.prototype.createSocket.call(self, options, function (socket) {
            // 0 is dummy port for v0.6
            var secureSocket = tls.connect(0, mergeOptions({}, self.options, {
              servername: options.host,
              socket: socket
            }));
            self.sockets[self.sockets.indexOf(socket)] = secureSocket;
            cb(secureSocket);
          });
        }

        function mergeOptions(target) {
          for (var i = 1, len = arguments.length; i < len; ++i) {
            var overrides = arguments[i];

            if (typeof overrides === 'object') {
              var keys = Object.keys(overrides);

              for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
                var k = keys[j];

                if (overrides[k] !== undefined) {
                  target[k] = overrides[k];
                }
              }
            }
          }

          return target;
        }

        var debug;

        if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
          debug = function debug() {
            var args = Array.prototype.slice.call(arguments);

            if (typeof args[0] === 'string') {
              args[0] = 'TUNNEL: ' + args[0];
            } else {
              args.unshift('TUNNEL:');
            }

            console.error.apply(console, args);
          };
        } else {
          debug = function debug() {};
        }

        exports.debug = debug; // for test
        // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _httpOverHttp = module.exports.httpOverHttp;
        _httpsOverHttp = module.exports.httpsOverHttp;
        _httpOverHttps = module.exports.httpOverHttps;
        _httpsOverHttps = module.exports.httpsOverHttps;
        _debug = module.exports.debug;
      }, () => ({
        'net': _req,
        'tls': _req0,
        'http': _req1,
        'https': _req2,
        'events': _req3,
        'assert': _req4,
        'util': _req5,
        'safe-buffer': _req6
      }));
    }
  };
});
//# sourceMappingURL=741fb28231fb143ee52f219b09f2794e61fc40e6.js.map