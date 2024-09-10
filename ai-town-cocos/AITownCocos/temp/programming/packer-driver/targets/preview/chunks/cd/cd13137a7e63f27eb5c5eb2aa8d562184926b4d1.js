System.register(["__unresolved_0", "util", "http", "net", "tls", "https"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_util) {
      _req = _util.__cjsMetaURL;
    }, function (_http) {
      _req0 = _http.__cjsMetaURL;
    }, function (_net) {
      _req1 = _net.__cjsMetaURL;
    }, function (_tls) {
      _req2 = _tls.__cjsMetaURL;
    }, function (_https) {
      _req3 = _https.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        module.exports = ForeverAgent;
        ForeverAgent.SSL = ForeverAgentSSL;

        var util = require('util'),
            Agent = require('http').Agent,
            net = require('net'),
            tls = require('tls'),
            AgentSSL = require('https').Agent;

        function getConnectionName(host, port) {
          var name = '';

          if (typeof host === 'string') {
            name = host + ':' + port;
          } else {
            // For node.js v012.0 and iojs-v1.5.1, host is an object. And any existing localAddress is part of the connection name.
            name = host.host + ':' + host.port + ':' + (host.localAddress ? host.localAddress + ':' : ':');
          }

          return name;
        }

        function ForeverAgent(options) {
          var self = this;
          self.options = options || {};
          self.requests = {};
          self.sockets = {};
          self.freeSockets = {};
          self.maxSockets = self.options.maxSockets || Agent.defaultMaxSockets;
          self.minSockets = self.options.minSockets || ForeverAgent.defaultMinSockets;
          self.on('free', function (socket, host, port) {
            var name = getConnectionName(host, port);

            if (self.requests[name] && self.requests[name].length) {
              self.requests[name].shift().onSocket(socket);
            } else if (self.sockets[name].length < self.minSockets) {
              if (!self.freeSockets[name]) self.freeSockets[name] = [];
              self.freeSockets[name].push(socket); // if an error happens while we don't use the socket anyway, meh, throw the socket away

              var onIdleError = function onIdleError() {
                socket.destroy();
              };

              socket._onIdleError = onIdleError;
              socket.on('error', onIdleError);
            } else {
              // If there are no pending requests just destroy the
              // socket and it will get removed from the pool. This
              // gets us out of timeout issues and allows us to
              // default to Connection:keep-alive.
              socket.destroy();
            }
          });
        }

        util.inherits(ForeverAgent, Agent);
        ForeverAgent.defaultMinSockets = 5;
        ForeverAgent.prototype.createConnection = net.createConnection;
        ForeverAgent.prototype.addRequestNoreuse = Agent.prototype.addRequest;

        ForeverAgent.prototype.addRequest = function (req, host, port) {
          var name = getConnectionName(host, port);

          if (typeof host !== 'string') {
            var options = host;
            port = options.port;
            host = options.host;
          }

          if (this.freeSockets[name] && this.freeSockets[name].length > 0 && !req.useChunkedEncodingByDefault) {
            var idleSocket = this.freeSockets[name].pop();
            idleSocket.removeListener('error', idleSocket._onIdleError);
            delete idleSocket._onIdleError;
            req._reusedSocket = true;
            req.onSocket(idleSocket);
          } else {
            this.addRequestNoreuse(req, host, port);
          }
        };

        ForeverAgent.prototype.removeSocket = function (s, name, host, port) {
          if (this.sockets[name]) {
            var index = this.sockets[name].indexOf(s);

            if (index !== -1) {
              this.sockets[name].splice(index, 1);
            }
          } else if (this.sockets[name] && this.sockets[name].length === 0) {
            // don't leak
            delete this.sockets[name];
            delete this.requests[name];
          }

          if (this.freeSockets[name]) {
            var index = this.freeSockets[name].indexOf(s);

            if (index !== -1) {
              this.freeSockets[name].splice(index, 1);

              if (this.freeSockets[name].length === 0) {
                delete this.freeSockets[name];
              }
            }
          }

          if (this.requests[name] && this.requests[name].length) {
            // If we have pending requests and a socket gets closed a new one
            // needs to be created to take over in the pool for the one that closed.
            this.createSocket(name, host, port).emit('free');
          }
        };

        function ForeverAgentSSL(options) {
          ForeverAgent.call(this, options);
        }

        util.inherits(ForeverAgentSSL, ForeverAgent);
        ForeverAgentSSL.prototype.createConnection = createConnectionSSL;
        ForeverAgentSSL.prototype.addRequestNoreuse = AgentSSL.prototype.addRequest;

        function createConnectionSSL(port, host, options) {
          if (typeof port === 'object') {
            options = port;
          } else if (typeof host === 'object') {
            options = host;
          } else if (typeof options === 'object') {
            options = options;
          } else {
            options = {};
          }

          if (typeof port === 'number') {
            options.port = port;
          }

          if (typeof host === 'string') {
            options.host = host;
          }

          return tls.connect(options);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        'util': _req,
        'http': _req0,
        'net': _req1,
        'tls': _req2,
        'https': _req3
      }));
    }
  };
});
//# sourceMappingURL=cd13137a7e63f27eb5c5eb2aa8d562184926b4d1.js.map