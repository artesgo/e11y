module.exports = {
  name: 'elly',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/elly',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ]
};
