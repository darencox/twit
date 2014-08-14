module.exports = function(grunt) {

  grunt.initConfig({

    // Install bower.json components in the templates
    bowerInstall: {
      target: {
        src: ['index.html']
      }
    }


  });


  grunt.loadNpmTasks('grunt-bower-install');
  grunt.loadNpmTasks('grunt-jslint');

  grunt.registerTask('bower', ['bowerInstall'
                                  ]);
  grunt.registerTask('default', ['bower']);

};