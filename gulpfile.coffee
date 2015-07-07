

gulp   = require "gulp"
coffee = require "gulp-coffee"
plumber = require "gulp-plumber"


srcPath = ["./src/*.coffee"]
targetPath = "./"


gulp.task "compile", ->
  gulp.src(srcPath).pipe(plumber()).pipe(coffee({bare:true})).pipe(gulp.dest(targetPath))

gulp.task "default", ["compile"]