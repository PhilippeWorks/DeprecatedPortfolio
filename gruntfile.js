module.exports = function(grunt) {
  grunt.initConfig({
  imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'imgs/',
                src: ['**/*.{png}'],
                dest: '/imgs/'
            }]
        }
    }

});


    grunt.loadNpmTasks('grunt-contrib-imagemin');


    grunt.registerTask('default', ['imagemin']);
};



