import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'card-component',
  styleUrl: 'card-component.scss',
  shadow: true,
})
export class CardComponent {
  /**
   * The day
   */
  @Prop() day: number;

  /**
   * The challenge
   */
  @Prop() challenge: string;

  render() {
    return (
      <div class="card">
        <div class="front">
          {this.day}
        </div>
        <div class="back">
          <p>{this.challenge}</p>
        </div>
      </div>
    )
  }
}
