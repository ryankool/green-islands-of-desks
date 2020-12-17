import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'card-component',
  styleUrl: 'card-component.scss',
  shadow: true,
})
export class CardComponent {
  @State() frontfacing = true;
  /**
   * The day
   */
  @Prop() day: number;

  /**
   * The challenge
   */
  @Prop() challenge: string;

  private cardClicked() {
    this.frontfacing = !this.frontfacing;
    console.log(this.frontfacing);
  }

  render() {
    return (
      <div
        class={'innercontainer ' + (this.frontfacing ? 'frontfacing' : 'backfacing')}
        onClick={() => {
          this.cardClicked();
        }}
      >
        <div class="front face">{this.day}</div>
        <div class="back face">{this.challenge}</div>
      </div>
    );
  }
}
