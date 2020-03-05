module.exports = {
  name: 'elly-comp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/elly-comp',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
