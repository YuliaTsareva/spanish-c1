// Polyfills
import 'es6-shim';
// (these modules are what are in 'angular2/bundles/angular2-polyfills' so don't use that here)
import 'es6-promise';

// Zone.js
require('zone.js/dist/zone-microtask.min');

// RxJS
// In production manually include the operators you use
require('rxjs/add/operator/map');

require('reflect-metadata');

// Angular 2
import 'angular2/platform/browser';
import 'angular2/platform/common_dom';
import 'angular2/router';
import 'angular2/http';
import 'angular2/core';

// RxJS
import 'rxjs';
