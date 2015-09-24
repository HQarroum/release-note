module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Timing the build tasks.
    require('time-grunt')(grunt);

    grunt.initConfig({
        clean: {
            dist: 'dist/'
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        },
        cssmin: {
            dist: {
                expand: true,
                cwd: 'src/assets/css',
                src: ['*.css'],
                dest: 'dist/assets/css'
            }
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src/assets/images',
                        src: ['**/*'],
                        dest: 'dist/assets/images'
                    }
                ]
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        flatten: true,
                        expand: true,
                        src: ['src/assets/fonts/*'],
                        dest: 'dist/assets/fonts/'
                    }
                ]
            }
        }
    });

    // Registering the tasks.
    grunt.registerTask('default', ['clean', 'htmlmin', 'cssmin', 'imagemin', 'copy']);
};
