const elixir = require('laravel-elixir');

require('laravel-elixir-ts');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('app.scss');
});

elixir(mix=>{
    mix.copy('node_modules/@angular','public/node_modules/@angular');
    mix.copy('node_modules/core-js','public/node_modules/core-js');
    mix.copy('node_modules/zone.js','public/node_modules/zone.js');
    mix.copy('node_modules/reflect-metadata','public/node_modules/reflect-metadata');
    mix.copy('node_modules/systemjs','public/node_modules/systemjs');
    mix.copy('node_modules/rxjs','public/node_modules/rxjs');
    mix.copy('node_modules/angular-in-memory-web-api','public/node_modules/angular-in-memory-web-api');
});

elixir(mix => {
    mix
    .typescript("/**/*.ts", "public/app", {
        "target": "es5",
        "module": "commonjs",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false,
        "noImplicitAny": false,
    });
});
