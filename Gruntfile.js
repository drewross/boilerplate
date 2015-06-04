module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

    concat: {   
        dist: {
            src: [
                'assets/js/global.js',
                'assets/js/touchswipe.js',
                'assets/js/revolver.js',
                'assets/js/picturefill.min.js'
            ],
            dest: 'build/js/production.js',
        },
        extras: {
          src: ['assets/js/timetravel.js'],
          dest: 'build/js/timetravel.js',
        }
    },

    uglify: {
        build: {
            src: 'build/js/production.js',
            dest: 'build/js/production.min.js'
        }
    },

    jshint: {
        all: ['Gruntfile.js', 'assets/js/global.js']
    },

    sass: {
        options: {
            outputStyle: 'compressed',
            sourceMap: true
        },
        dist: {
            files: {
                'build/css/production.css': 'assets/scss/compile.scss'
            }
        } 
    },

    autoprefixer: {
        dist: {
            files: {
                'build/css/production.css': 'build/css/production.css'
            }
        }
    },

    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'assets/images/',
                src: ['**/*.{png,jpg,gif,ico,svg}'],
                dest: 'build/images/'
            }]
        }
    },

    pixrem: {
        options: {
            rootvalue: '62.5%',
            replace: false
        },
        dist: {
            src: 'build/css/production.css',
            dest: 'build/css/production.css'
        }
    },

    svgstore: {
        options: {
            prefix : 'shape-',
            cleanup: ['fill','stroke'],
            svg: { 
                style: "display: none;",
                viewBox : '0 0 20 20',
                xmlns: 'http://www.w3.org/2000/svg'
            },
            formatting : {
              indent_size : 4
            }

        },
        dev: {
            files: {
                'assets/images/svg-defs.svg':
                ['assets/images/svgs/*.svg']
            }
        }
    },

    watch: {

        scripts: {
            files: ['assets/js/*.js'],
            tasks: ['concat', 'uglify', 'jshint'],
            options: {
                spawn: false,
                livereload: true,
            }
        },

        css: {
            files: ['assets/images/svgs/*.svg','assets/scss/**/*.scss','production.css'],
            tasks: ['svgstore','sass','autoprefixer','pixrem'],
            options: {
                spawn: false,
                livereload: false,
            }
        }
    }

    });
    
    grunt.registerTask('default', ['concat' , 'uglify' , 'sass' , 'jshint' , 'imagemin' , 'svgstore' , 'pixrem', 'autoprefixer']);
};