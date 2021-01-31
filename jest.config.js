module.exports = {
  roots: ["<rootDir>"],
  moduleFileExtensions: ["ts", "js"],
  testMatch: [
    "**/*.steps.ts"
  ],
  transform: {
    "^.+\\.(ts)$": "ts-jest",
  },
  "reporters": [
    "default",
    [
      "jest-junit",
      {
        "outputDirectory": "tests/test_reports",
        "outputName": "test-report.xml",
        "suiteNameTemplate":(vars) => {
          return vars.title.toLowerCase();
        },
        "titleTemplate": (vars) => {
          return vars.classname.toLowerCase()+";"+vars.title.toLowerCase();
        },
        "classNameTemplate": (vars) => {
          return vars.suitename.toLowerCase();
        },
        

        "includeShortConsoleOutput":true
      }
    ]
  ],
    "collectCoverage": true,
    "testResultsProcessor": "jest-junit",
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "/tests/"
  ]
};
