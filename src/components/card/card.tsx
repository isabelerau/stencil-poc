import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-card',
  styleUrl: 'card.css',
  shadow: true,
})
export class AppCard {
  @Prop() title: string;
  render() {
    return (
      <div class="card">
        <h2>{this.title}</h2>
        <slot />
      </div>
    );
  }
}