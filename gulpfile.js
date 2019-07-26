/// <reference types="node" />
const path = require("path");
const del = require("del");
const gulp = require("gulp");
const emu = require("gulp-emu");
const livereload = require("gulp-livereload");
const http = require("http");
const st = require("st");

const DOCS_DIR = process.env.DOCS_DIR || "docs";

const clean = () => del(`${DOCS_DIR}/**/*`);
gulp.task("clean", clean);

const build = () => gulp
    .src(["spec/index.html"])
    .pipe(emu())
    .pipe(gulp.dest(DOCS_DIR))
    .pipe(livereload());
gulp.task("build", build);

const watch = () => {
    livereload.listen({ basePath: DOCS_DIR });
    return gulp.watch(["spec/**/*"], build);
};
gulp.task("watch", watch);

const start = (done) => {
    http.createServer(st({ 
        path: path.resolve(DOCS_DIR),
        index: 'index.html',
        cache: false
    })).listen(8080, e => {
        if (e) return done(e);
        console.log(`folder "${DOCS_DIR}" serving at http://localhost:8080`);
        done();
    });
};
gulp.task("start", gulp.parallel(watch, start));

gulp.task("default", build);