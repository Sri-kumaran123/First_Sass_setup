const {src,dest,watch,series}=require('gulp');

const sass=require('gulp-sass')(require('sass'));

function buldStyles(){
    return src('sass1/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask(){
    watch(['sass1/**/*.scss'],buldStyles);
}

exports.default = series(buldStyles,watchTask);