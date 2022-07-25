module.exports={
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'test_results',
        outputName: 'jest-junit.xml',
        suiteName: 'Devops Challenge App Tests'
      },
    ],
  ]
};