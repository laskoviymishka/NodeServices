import { MainComponent } from './main.component';
import * as aspnet from 'aspnet-prerendering';
import 'es6-promise';
var jsdom = require("jsdom").jsdom;
let html = '<app>Hi there. Enter some text: <input id="some-input"/><div id="app-container">Hello</div></app>';
var window = jsdom(html, {}).defaultView;
var document = window.document;

let boot: aspnet.BootFunc = function (params, model) {
  return new Promise<aspnet.RenderToStringResult>(function (resolve, reject) {
    let component = new MainComponent(
      document.getElementById('app-container'),
      document.getElementById('some-input'),
      model.bar);

    component.sayHi();
    component.render();
    let htmlResult = window.document.querySelector('app').outerHtml;
    console.log(htmlResult);
    let result: aspnet.RenderToStringResult = {
      html: htmlResult,
      globals: {
        isPrerendered: true,
        model: model
      }
    };

    resolve(result);
  });
};

export default boot;