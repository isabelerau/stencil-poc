import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class AppButton {
  @Prop() type: 'primary' | 'secondary' = 'primary';
  render() {
    return (
      <button class={this.type}>
        <slot />
      </button>
    );
  }
}