export default {
    entry: './index.js',
    dest: 'bundles/a4-http.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'a4-http',
    external: [
        '@angular/core',
        '@angular/common',
        '@angular/common/http',
        'rxjs/Observable',
        'rxjs/add/operator/do'
    ],
    globals: {
        '@angular/core': 'ng-core',
        '@angular/common': 'ng-common',
        '@angular/common/http': 'ng-http',
        '@angular/router': 'ng-router',
        'rxjs/Observable': 'rxjs-observable',
        'rxjs/add/operator/do': 'rxjs-add-observable-do'
    }
}