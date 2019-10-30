module.exports = {
  name: "artesgo",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/artesgo/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
