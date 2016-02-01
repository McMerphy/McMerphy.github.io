var ngrok = require('ngrok');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      dest: {
        files : {
          'js/perfmatters.min.js' : 'raw/js/perfmatters.js',
          'js/google-analytics.min.js' : 'raw/js/google-analytics.js'
        }
      }
    },

    cssmin : {
      target :{
        files : {
          'css/print.min.css' : 'raw/css/print.css',
          'css/style.min.css' : 'raw/css/style.css',
          'css/mobile.min.css' : 'rawcss/mobie.css'
        }
      }
    },

    imagemin: {                          
      static: {
        files: [
          {src: 'raw/img/profilepic.jpg', dest: 'img/profilepic.jpg'},
          {src: 'raw/img/pizzeria.jpg', dest: 'img/pizzeria.jpg'}
        ]
      }
    },

    htmlmin: {          
      dist: { 
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                             
          'index.html': 'raw/index.html',   
        }
      }
    },

    inline: {
        dist: {
            src: 'index.html'
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-inline');


  grunt.registerTask('default', ['uglify', 'cssmin', 'imagemin', 'htmlmin', 'inline']);
};