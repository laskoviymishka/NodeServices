import { MainComponent } from './main.component';
import './styles/main.less';

declare var name: string;
declare var window: any;
let component = new MainComponent();
component.name = name;
component.doIt();
component.bind(boot);

function boot() {
  document.getElementById('app-container').innerHTML = component.render();
}

declare var module: any;
if (module.hot) {
  module.hot.accept();
}