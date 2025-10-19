import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() name: string = 'Guest';
  @State() inputValue: string = '';
  @Event() nameChanged: EventEmitter<string>;
  handleInput(e: Event) {
    this.inputValue = (e.target as HTMLInputElement).value;
    this.nameChanged.emit(this.inputValue);
  }

  render() {
    return (
      <div class="container">
        <h1>Hello, {this.name}!</h1>
        <input type="text" value={this.inputValue} onInput={e => this.handleInput(e)} placeholder="Enter name" />
      </div>
    );
  }
}

