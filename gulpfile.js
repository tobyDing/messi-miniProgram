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
  demoIgnore,
  componentsSrc,
  componentsDist,
  componentTmp,
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

gulp.task('demo-project', async () => {
  await del(`${demoSrc}/project.config.json`)
  await gulp.src(`${demoDist}/project.config.json`)
    .pipe(gulp.dest(demoSrc))
})

gulp.task('demo', async () => {
  await gulp.src([`${demoSrc}/**`,].concat(demoIgnore))
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

gulp.task('create-componet', async () => {
  const compName = process.env.npm_config_comp;
  if (!compName) {
    console.log('请参考用法:', `${'npm run create --comp=组件名'}`.green)
    return;
  }
  await console.log(`正在创建组件${compName}...`.green)
  await gulp.src(`${componentTmp}/**`)
    .pipe(rename(function (path) {
      if (path.basename) {
        return {
          dirname: path.dirname,
          basename: compName,
          extname: path.extname
        }
      }
    }))
    .pipe(gulp.dest(`${componentsSrc}/${compName}`, { overwrite: false }))
  await console.log(`组件${compName}已创建完成!`.green)
})

gulp.task('dev', gulp.series('clean', 'demo', 'components'))

gulp.task('watch', gulp.series('dev', async () => {
  gulp.watch([`${demoSrc}`], { eventName: ['all'] }, gulp.series('demo'))
  gulp.watch([`${componentsSrc}`], { eventName: ['all'] }, gulp.series('components'))
}))


