var ngrok = require('ngrok');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      files: { 
            src: 'raw/js/*.js',  // source files mask
            dest: 'js/',    // destination folder
            expand: true,    // allow dynamic building
            flatten: true,   // remove all unnecessary nesting
            ext: '.min.js'   // replace .js to .min.js
        }
    },

    cssmin : {
      target :{
        files : {
          'css/print.min.css' : 'raw/css/print.css',
          'css/style.min.css' : 'raw/css/style.css',
          'css/mobile.min.css' : 'raw/css/mobile.css'
        }
      }
    },

    imagemin: {                          
      static: {
        files: [
          {src: 'raw/img/profilepic.jpg', dest: 'img/profilepic.jpg'},
          {src: 'raw/img/pizzeria.jpg', dest: 'img/pizzeria.jpg'},
          {src: 'raw/img/myprofilepic.jpg', dest: 'img/myprofilepic.jpg'}
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