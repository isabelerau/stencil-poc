import { Component, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'app-modal',
  styleUrl: 'modal.css',
  shadow: true,
})
export class AppModal {
  @Prop() open: boolean = false;
  @State() isOpen: boolean = false;

  componentWillLoad() {
    this.isOpen = this.open;
  }

  @Watch('open')
  watchOpen(newValue: boolean) {
    this.isOpen = newValue;
  }

  render() {
    if (!this.isOpen) return null;
    return (
      <div class="modal">
        <div class="content">
          <slot />
          <app-button type="secondary" onClick={() => {
            this.isOpen = false;
            this.open = false;
          }}>
            Close
          </app-button>
        </div>
      </div>
    );
  }
}