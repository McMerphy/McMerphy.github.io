module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      dest: {
        files : {
          'js/perfmatters.min.js' : 'js/perfmatters.js',
          'js/google-analytics.min.js' : 'js/google-analytics.js'
        }
      }
    },

    cssmin : {
      target :{
        files : {
          'css/print.min.css' : 'css/print.css',
          'css/style.min.css' : 'css/style.css'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin']);

};