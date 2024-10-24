System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        name: 'fb',
        version: '2.0.0',
        description: 'NodeJS Library for Facebook',
        keywords: ['facebook', 'fb', 'graph'],
        author: 'Thuzi LLC <pshrestha@thuzi.com> (https://github.com/Thuzi)',
        contributors: ['Daniel Friesen <d@danf.ca> (http://danf.ca)'],
        homepage: 'https://github.com/node-facebook/facebook-node-sdk',
        license: 'Apache-2.0',
        repository: {
          type: 'git',
          url: 'https://github.com/node-facebook/facebook-node-sdk.git'
        },
        main: './lib/index.js',
        scripts: {
          lint: 'eslint .',
          build: 'babel src/ -d lib/',
          buildw: 'babel -w src/ -d lib/',
          test: 'npm run build && node ./node_modules/mocha/bin/mocha --recursive',
          prepublish: 'npm run build'
        },
        dependencies: {
          'any-promise': '^1.3.0',
          'babel-runtime': '^6.23.0',
          'core-decorators': '^0.17.0',
          debug: '^2.6.3',
          request: '^2.81.0'
        },
        devDependencies: {
          'babel-cli': '^6.24.1',
          'babel-eslint': '^7.2.2',
          'babel-plugin-transform-decorators-legacy': '^1.3.4',
          'babel-plugin-transform-runtime': '^6.23.0',
          'babel-preset-env': '^1.4.0',
          'babel-preset-stage-0': '^6.24.1',
          'babel-register': '^6.24.1',
          bluebird: '^3.5.0',
          chai: '^3.5.0',
          eslint: '^3.19.0',
          'lodash.omit': '^4.5.0',
          mocha: '^3.2.0',
          'mocha-eslint': '^3.0.1',
          nock: '^9.0.13'
        },
        engines: {
          node: '>=4'
        }
      });
    }
  };
});
//# sourceMappingURL=ba7fbc8e8165b01a2422b8379b20e5f6750e9006.js.map