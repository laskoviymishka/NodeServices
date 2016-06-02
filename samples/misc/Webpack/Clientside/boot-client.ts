import { MainComponent } from './main.component';
import './styles/main.less';

declare var model: any;
declare var window: any;
let component = new MainComponent(
  document.getElementById('app-container'),
  document.getElementById('some-input'),
  model.bar);

component.sayHi();
component.bind();

declare var module: any;
if (module.hot) {
  module.hot.accept();
}