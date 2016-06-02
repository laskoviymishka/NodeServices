export class MainComponent {
  constructor(public elem: HTMLElement, public input: HTMLElement, private _name: string) { }

  public sayHi() {
    console.log(`Hello from ${this._name}`);
  }

  public bind() {
    this.input.addEventListener('keyup', this._handleInput.bind(this));
  }

  public render() {
    this.input.setAttribute('value', this._name);
    this.elem.innerHTML = '<h1>Hello from main compoent for ' + this._name + '</h1>';
  }

  private _handleInput(event) {
    this._name = this.input.getAttribute('value');
    this.render();
  }
}
