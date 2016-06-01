import { MainComponent } from './main.component';
import * as aspnet from 'aspnet-prerendering';
import 'es6-promise';

let boot: aspnet.BootFunc = function (params, model) {
  console.log(model);
  return new Promise<aspnet.RenderToStringResult>(function (resolve, reject) {
    let component = new MainComponent();
    component.name = model;
    console.log(component);
    component.doIt();

    let result: aspnet.RenderToStringResult = {
      html: component.render(),
      globals: {
        isPrerendered: true,
        name: model
      }
    };

    resolve(result);
  });
};

export default boot;