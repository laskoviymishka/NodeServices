!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="/dist/",__webpack_require__(0)}([function(module,exports,__webpack_require__){module.exports=__webpack_require__(11)},function(module,exports){module.exports=vendor_a75849b0c613f5024aa2},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)(4)},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)(209)},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)(207)},function(module,exports){},function(module,exports){module.exports="<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-3'>\n            <nav-menu></nav-menu>\n        </div>\n        <div class='col-sm-9 body-content'>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"},function(module,exports){module.exports='<h2>Counter</h2>\n\n<p>This is a simple example of an Angular 2 component.</p>\n\n<p>Current count: <strong>{{ currentCount }}</strong></p>\n\n<button (click)="incrementCounter()">Increment</button>\n'},function(module,exports){module.exports='<h1>Weather forecast</h1>\n\n<p>This component demonstrates fetching data from the server.</p>\n\n<p *ngIf="!forecasts"><em>Loading...</em></p>\n\n<table class=\'table\' *ngIf="forecasts">\n    <thead>\n        <tr>\n            <th>Date</th>\n            <th>Temp. (C)</th>\n            <th>Temp. (F)</th>\n            <th>Summary</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor="#forecast of forecasts">\n            <td>{{ forecast.dateFormatted }}</td>\n            <td>{{ forecast.temperatureC }}</td>\n            <td>{{ forecast.temperatureF }}</td>\n            <td>{{ forecast.summary }}</td>\n        </tr>\n    </tbody>\n</table>\n'},function(module,exports){module.exports="<h1>Hello, world!</h1>\n<p>Welcome to your new single-page application, built with:</p>\n<ul>\n    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\n    <li><a href='https://angular.io/'>Angular 2</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\n    <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\n    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\n</ul>\n<p>To help you get started, we've also set up:</p>\n<ul>\n    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\n    <li><strong>Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular 2 app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.</li>\n    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\n    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular 2 app will be rebuilt and a new instance injected is into the page.</li>\n    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\n</ul>\n"},function(module,exports){module.exports="<div class='main-nav'>\n        <div class='navbar navbar-inverse'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand' [routerLink]=\"['/Home']\">AuthSample</a>\n        </div>\n        <div class='clearfix'></div>\n        <div class='navbar-collapse collapse'>\n            <ul class='nav navbar-nav'>\n                <li>\n                    <a [routerLink]=\"['/Home']\">\n                        <span class='glyphicon glyphicon-home'></span> Home\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/Counter']\">\n                        <span class='glyphicon glyphicon-education'></span> Counter\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/FetchData']\">\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"},function(module,exports,__webpack_require__){"use strict";__webpack_require__(18),__webpack_require__(20),__webpack_require__(5);var browser_1=__webpack_require__(19),common_1=__webpack_require__(17),router=__webpack_require__(3),http_1=__webpack_require__(4),app_1=__webpack_require__(12);browser_1.bootstrap(app_1.App,[router.ROUTER_BINDINGS,http_1.HTTP_PROVIDERS,common_1.FormBuilder])},function(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(3>c?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(k,v):void 0},ng=__webpack_require__(2),router=__webpack_require__(3),nav_menu_1=__webpack_require__(16),home_1=__webpack_require__(15),fetch_data_1=__webpack_require__(14),counter_1=__webpack_require__(13),App=function(){function App(){}return App=__decorate([ng.Component({selector:"app",template:__webpack_require__(6),directives:[nav_menu_1.NavMenu,router.ROUTER_DIRECTIVES]}),router.RouteConfig([{path:"/",component:home_1.Home,name:"Home"},{path:"/counter",component:counter_1.Counter,name:"Counter"},{path:"/fetch-data",component:fetch_data_1.FetchData,name:"FetchData"}]),__metadata("design:paramtypes",[])],App)}();exports.App=App},function(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(3>c?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(k,v):void 0},ng=__webpack_require__(2),Counter=function(){function Counter(){this.currentCount=0}return Counter.prototype.incrementCounter=function(){this.currentCount++},Counter=__decorate([ng.Component({selector:"counter",template:__webpack_require__(7)}),__metadata("design:paramtypes",[])],Counter)}();exports.Counter=Counter},function(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(3>c?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(k,v):void 0},ng=__webpack_require__(2),http_1=__webpack_require__(4),FetchData=function(){function FetchData(http){var _this=this,isServerSide="undefined"==typeof window,options=isServerSide?{headers:{Connection:"keep-alive"}}:null;http.get("/api/SampleData/WeatherForecasts",options).subscribe(function(result){_this.forecasts=result.json()})}return FetchData=__decorate([ng.Component({selector:"fetch-data",template:__webpack_require__(8)}),__metadata("design:paramtypes",[http_1.Http])],FetchData)}();exports.FetchData=FetchData},function(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(3>c?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(k,v):void 0},ng=__webpack_require__(2),Home=function(){function Home(){}return Home=__decorate([ng.Component({selector:"home",template:__webpack_require__(9)}),__metadata("design:paramtypes",[])],Home)}();exports.Home=Home},function(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(3>c?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(k,v):void 0},ng=__webpack_require__(2),router=__webpack_require__(3),NavMenu=function(){function NavMenu(){}return NavMenu=__decorate([ng.Component({selector:"nav-menu",template:__webpack_require__(10),directives:[router.ROUTER_DIRECTIVES]}),__metadata("design:paramtypes",[])],NavMenu)}();exports.NavMenu=NavMenu},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)(119)},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)(206)},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)(208)},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)(273)}]);