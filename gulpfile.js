const path = require('path')

const gulp = require('gulp')
const del = require('del')
const less = require('gulp-less')
const rename = require('gulp-rename')

const through = require('through2')
const colors = require('colors')
const moment = require('moment')

const config = require('./config')
const {
  demoSrc,
  demoDist,
  componentsSrc,
  componentsDist
} = config

const logger = (source = 'components') => {
  return through.obj(async function (chunk, enc, cb) {
    const extname = path.extname(chunk.path)
    const type = extname ? extname.slice(1).toLowerCase() : ''
    if (type) {
      await console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss').grey}] [${source.green} ${type.green}] ${'=>'.cyan} ${chunk.path}`)
    }
    this.push(chunk)
    cb()
  })
}

gulp.task('clean', async () => {
  await del(demoDist)
})

gulp.task('demo', async () => {
  await gulp.src(`${demoSrc}/**`)
    .pipe(gulp.dest(demoDist))
})

gulp.task('components', async () => {
  await gulp.src(`${componentsSrc}/**/*.less`)
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(rename({ extname: '.wxss' }))
    .pipe(gulp.src([`${componentsSrc}/**`, `!${componentsSrc}/**/*.less`]))
    .pipe(logger())
    .pipe(gulp.dest(componentsDist))
})

gulp.task('dev', gulp.series('clean', 'demo', 'components'))

gulp.task('watch', gulp.series('dev', async () => {
  gulp.watch([`${demoSrc}`], { eventName: ['all'] }, gulp.series('demo'))
  gulp.watch([`${componentsSrc}`], { eventName: ['all'] }, gulp.series('components'))
}))


