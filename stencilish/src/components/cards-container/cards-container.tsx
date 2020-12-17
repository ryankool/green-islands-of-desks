import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'cards-container',
  styleUrl: 'cards-container.scss',
  shadow: true,
})
export class CardsContainer {

  @Prop() elements = ['one', 'two', 'three'];

  render() {
    return (
      <Host>
        <div class="cards-container">
          {this.elements.map((value, index) => {
            return <card-component day={index+1} challenge={value}></card-component>
          })}
        </div>
      </Host>
    );
  }

}
