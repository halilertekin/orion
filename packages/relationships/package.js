Package.describe({
  name: 'orionjs:relationships',
  summary: 'Define and use relationships between meteor collections, entities and the dictionary',
  version: '1.0.0',
  git: 'https://github.com/orionjs/orion'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'orionjs:base',
    'orionjs:attributes',
    'less',
    'jeremy:selectize@0.12.1',
    ]);

  api.imply([
    'jeremy:selectize',
    ]);

  api.addFiles([
    'attribute.js',
    ]);

  api.addFiles([
    'relationships.html',
    'relationships.js',
    'relationships.less'
    ], 'client');
});