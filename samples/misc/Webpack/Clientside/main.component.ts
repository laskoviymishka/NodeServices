export class MainComponent {
  public name: string;
  public doIt() {
    console.log(`Hello from ${this.name}`);
  }

  public alreadyDoneIt() {
    console.log('Hello already Done It!');
  }

  public bind(rerender) {
    let that = this;
    let elem = (<HTMLInputElement>document.getElementById('some-input'));
    elem.value = that.name;
    elem.addEventListener('keyup', function (event) {
      that.name = elem.value;
      rerender();
    });
  }

  public render(): string {
    return '<h1>Hello from main compoent for ' + this.name + '</h1>';
  }
}
