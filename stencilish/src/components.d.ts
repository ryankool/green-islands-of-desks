/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CardComponent {
        /**
          * The challenge
         */
        "challenge": {
    points: number,
    title: string
  };
        /**
          * The day
         */
        "day": number;
    }
    interface CardsContainer {
        "elements": { title: string; points: number; }[];
    }
}
declare global {
    interface HTMLCardComponentElement extends Components.CardComponent, HTMLStencilElement {
    }
    var HTMLCardComponentElement: {
        prototype: HTMLCardComponentElement;
        new (): HTMLCardComponentElement;
    };
    interface HTMLCardsContainerElement extends Components.CardsContainer, HTMLStencilElement {
    }
    var HTMLCardsContainerElement: {
        prototype: HTMLCardsContainerElement;
        new (): HTMLCardsContainerElement;
    };
    interface HTMLElementTagNameMap {
        "card-component": HTMLCardComponentElement;
        "cards-container": HTMLCardsContainerElement;
    }
}
declare namespace LocalJSX {
    interface CardComponent {
        /**
          * The challenge
         */
        "challenge"?: {
    points: number,
    title: string
  };
        /**
          * The day
         */
        "day"?: number;
    }
    interface CardsContainer {
        "elements"?: { title: string; points: number; }[];
    }
    interface IntrinsicElements {
        "card-component": CardComponent;
        "cards-container": CardsContainer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "card-component": LocalJSX.CardComponent & JSXBase.HTMLAttributes<HTMLCardComponentElement>;
            "cards-container": LocalJSX.CardsContainer & JSXBase.HTMLAttributes<HTMLCardsContainerElement>;
        }
    }
}
