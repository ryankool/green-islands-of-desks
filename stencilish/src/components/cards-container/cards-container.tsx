import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'cards-container',
  styleUrl: 'cards-container.scss',
  shadow: true,
})
export class CardsContainer {

  @Prop() elements = [
    { title: "One", points: 2},
    { title: "Two", points: 1},
    {title: "Three", points: 1}
  ];

  render() {
    return (
      <Host>
        <div class="cards-container">
          {this.elements.map((value, index) => {
            return <card-component day={index + 1} challenge={value}></card-component>
          })}
        </div>
      </Host>
    );
  }

}
