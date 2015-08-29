Package.describe({
  name: 'dispatch:view-extensions',
  summary: 'Extend meteor views with some useful helper functions.',
  git: 'https://github.com/DispatchMe/meteor-view-extensions.git',
  version: '1.0.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use([
    // core
    'blaze',
    'reactive-var',
    'templating',
    'tracker',
    'underscore',

    // atmosphere
    'dispatch:blaze-emitter@0.0.4',
    'raix:eventemitter@0.1.2'
  ], 'web');

  api.addFiles([
    'view_extensions.js',
  ], 'web');
});

Package.onTest(function (api) {
  api.use([
    'templating',
    'test-helpers',
    'tinytest',
    'dispatch:view-extensions'
  ], 'web');

  api.addFiles([
    'tests/templates.html',
    'tests/view_extensions.js'
  ], 'web');
});
