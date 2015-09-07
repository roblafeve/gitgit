// Karma configuration
// Generated on Sun Sep 06 2015 15:04:43 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({


    background: true,
    autoWatch: true,
    singleRun: false,


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'app/index.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/**/*.js',
      'src/**/*.spec.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': 'babel',
      'src/**/*.spec.js': 'babel'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS']

  })
}
