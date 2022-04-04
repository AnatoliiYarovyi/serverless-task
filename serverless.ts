import type { AWS } from "@serverless/typescript";

import findFirstPositiveElement from "@functions/findFirstPositiveElement";
import findSumPositiveElements from "@functions/findSumPositiveElements";
import getSumAndProductNumber from "@functions/getSumAndProductNumber";
import getIndexNumber from "@functions/getIndexNumber";
import sortUserData from "@functions/sortUserData";

const serverlessConfiguration: AWS = {
  service: "mnb",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    region: "us-east-1",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
  },
  // import the function via paths
  functions: {
    findFirstPositiveElement,
    findSumPositiveElements,
    getSumAndProductNumber,
    getIndexNumber,
    sortUserData,
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;

// ============= webpack configuration =======================

// import type { AWS } from "@serverless/typescript";

// import findFirstPositiveElement from "@functions/findFirstPositiveElement";
// import findSumPositiveElements from "@functions/findSumPositiveElements";
// import getSumAndProductNumber from "@functions/getSumAndProductNumber";
// import getIndexNumber from "@functions/getIndexNumber";
// import sortUserData from "@functions/sortUserData";

// const serverlessConfiguration: AWS = {
//   service: "serverless-task",
//   frameworkVersion: "3",
//   plugins: ["serverless-webpack"],
//   provider: {
//     name: "aws",
//     runtime: "nodejs14.x",
//     region: "us-east-1",
//     apiGateway: {
//       minimumCompressionSize: 1024,
//       shouldStartNameWithService: true,
//     },
//     environment: {
//       AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
//       NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
//     },
//   },
//   // import the function via paths
//   functions: {
//     findFirstPositiveElement,
//     findSumPositiveElements,
//     getSumAndProductNumber,
//     getIndexNumber,
//     sortUserData,
//   },
// };

// module.exports = serverlessConfiguration;