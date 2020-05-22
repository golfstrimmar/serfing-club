var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var concat = require("gulp-concat");
var debug = require("gulp-debug");
var sourcemaps = require("gulp-sourcemaps");
var del = require("del");
var newer = require("gulp-newer");
var remember = require("gulp-remember");
var autoprefixer = require("gulp-autoprefixer");
var less = require("gulp-less");
var rigger = require("gulp-rigger");
var uglify = require("gulp-uglify");
var cleanCSS = require("gulp-clean-css");
var pug = require("gulp-pug");
var sass = require("gulp-sass");
var minifyjs = require("gulp-js-minify");
var plumber = require("gulp-plumber");
var pugLinter = require("gulp-pug-linter");
var htmlValidator = require("gulp-html-validator");
var gulpHtmlBemValidator = require("gulp-html-bem-validator");
var imagemin = require("gulp-imagemin");
var tildeImporter = require("node-sass-tilde-importer");
// ----------------pug-------------------------

gulp.task("pug", function () {
  return (
    gulp
      .src("./src/pages/*.pug")

      .pipe(plumber())
      .pipe(pugLinter({ reporter: "default" }))
      .pipe(
        pug({
          pretty: true,
        })
      )
      .on("error", function (err) {
        process.stderr.write(err.message + "\n");
        this.emit("end");
      })
      // .pipe(htmlValidator())
      // .pipe(gulpHtmlBemValidator())

      .pipe(debug({ title: "pug" }))
      .pipe(gulp.dest("public"))
  );
});

// ----------less-------------------

// gulp.task('styles', function () {
//   return (
//     gulp
//       .src("./src/styles/*.less")
//       .pipe(less())

//       .pipe(
//         autoprefixer({
//           browsers: ["last 16 versions"],
//           cascade: false,
//         })
//       )
//       .pipe(
//         sourcemaps.init({
//           sinse: gulp.lastRun("styles"),
//         })
//       )
//       // .pipe(cleanCSS())
//       .pipe(
//         debug({
//           title: "styles",
//         })
//       )

//       .pipe(sourcemaps.write("."))
//       .pipe(debug({ title: "styles" }))
//       .pipe(gulp.dest("public/css"))
//   );
// });





// ---------------sass-----------------------------
gulp.task("styles", function () {
  return (
    gulp
      .src("./src/styles/*.scss", { since: gulp.lastRun("styles") })
      .pipe(remember("styles"))

      .pipe(sourcemaps.init())

      .pipe(
        sass({
          includePaths: require("node-normalize-scss").includePaths,
        })
      )

      .pipe(
        autoprefixer({
          browsers: ["last 16 versions"],
          cascade: false,
        })
      )
      // .pipe(cleanCSS())
      .pipe(
        debug({
          title: "styles",
        })
      )

      .pipe(sourcemaps.write("."))
      .pipe(debug({ title: "styles" }))

      .pipe(gulp.dest("public/css"))
  );
});

// // // // // ----------fonts---------------------
gulp.task("fonts", function () {
  return gulp
    .src("./src/assets/fonts/*.*")

    .pipe(gulp.dest("public/fonts"));
});

// ---------imgmin----------
gulp.task("imgmin", function () {
  return (
    gulp
      .src("./src/assets/img/**/*.{gif,png,jpg,svg,webp}")

      .pipe(
        imagemin([
          imagemin.gifsicle({
            // interlaced: true
          }),
          imagemin.mozjpeg({
            quality: 75,
            progressive: true,
          }),
          imagemin.optipng({ optimizationLevel: 5 }),
          imagemin.svgo({
            plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
          }),
        ])
      )

      .pipe(debug({ title: "imgmin" }))
      .pipe(gulp.dest("public/img"))
  );
});

// // // // ------------clean-------------------------
gulp.task("clean", function () {
  return del("public");
});

// // // // // ------------js-------------------
gulp.task("scripts", function () {
  return (
    gulp
      .src("./src/js/*.js", {
        sinse: gulp.lastRun("scripts"),
      })
      .pipe(plumber())
      .pipe(remember("scripts"))
      .pipe(concat("app.js"))
      .pipe(rigger())
      .pipe(sourcemaps.init())
      // .pipe(uglify()) // минимизируем js
      .pipe(sourcemaps.write("./"))
      .pipe(
        debug({
          title: "scripts",
        })
      )
      .pipe(gulp.dest("public/js"))
  );
});
// // // // // ------watch----------
gulp.task("watch", function () {
  gulp.watch("./src/**/*.pug", gulp.series("pug"));
  gulp.watch("./src/js/*.js", gulp.series("scripts"));
  gulp.watch("./src/styles/", gulp.series("styles"));
  gulp.watch("./src/assets/fonts/*.*", gulp.series("fonts", "build"));
  gulp.watch("src/assets/img/*.{gif,png,jpg,svg,webp}", gulp.series("imgmin"));
});

// // // // // ------------browserSync--------
gulp.task("serve", function () {
  browserSync.init({
    server: "public",
  });
  browserSync.watch("src/**/*.*").on("change", browserSync.reload);
});

// // // // --------------build--------------------
gulp.task(
  "build",
  gulp.series(
    "clean",
    gulp.parallel("scripts", "imgmin", "fonts", "pug", "styles", "watch")
  )
);
gulp.task("dev", gulp.series("build", "watch", "serve"));
// // ----------default-----------------------
gulp.task("default", gulp.parallel("build", "serve"));
