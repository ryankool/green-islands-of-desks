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
   * The Points
   */
  @Prop() challengePoints: number;

  /**
   * The Title
   */
  @Prop() challengeTitle: string;

  private cardClicked() {
    this.frontfacing = !this.frontfacing;
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
        <div class="back face">
          <div class="card-grid">
            <div class="title-container">{this.challengeTitle}</div>
            <div class="points-container">{this.challengePoints} points</div>
            <button class="button">Done!</button>
          </div>
        </div>
      </div>
    );
  }
}
