module.exports = function(grunt) {
    const imageminOptipng = require('imagemin-optipng');
grunt.initConfig({
    imagemin: {
        // static: {
            // options: {
            //     optimizationLevel: 0,
            //     svgoPlugins: [{removeViewBox: false}],
            //     use: [imageminOptipng()] // Example plugin usage
            // },
        //     files: {
        //         'imgs/img.png': 'imgs/arcadegame.png',
        //     }
        // },
        dynamic: {
            options: {
                optimizationLevel: 7,
                svgoPlugins: [{removeViewBox: false}],
                use: [imageminOptipng()] // Example plugin usage
            },
            files: [{
                expand: true,
                cwd: 'imgs/',
                src: ['**/*.png'],
                dest: 'imgs/'
            }]
        }
    },
    uglify: {
    options: {
      mangle: false
    },
    my_target: {
      files: {
        'build/js/app.js': ['build/js/app.js']
      }
    }
  },
  concat: {
    dist: {
      src: ['js/app.js', 'js/responsive-app.js'],
      dest: 'build/js/app.js',
    },
  },
});


grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');

grunt.registerTask('default', ['imagemin', 'uglify', 'concat']);

}