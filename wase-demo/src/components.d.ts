/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface WasePeople {}
  interface WasePerson {
    'email': string;
    'name': string;
    'phone': string;
  }
}

declare global {


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLWasePeopleElement extends Components.WasePeople, HTMLStencilElement {}
  var HTMLWasePeopleElement: {
    prototype: HTMLWasePeopleElement;
    new (): HTMLWasePeopleElement;
  };

  interface HTMLWasePersonElement extends Components.WasePerson, HTMLStencilElement {}
  var HTMLWasePersonElement: {
    prototype: HTMLWasePersonElement;
    new (): HTMLWasePersonElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'wase-people': HTMLWasePeopleElement;
    'wase-person': HTMLWasePersonElement;
  }
}

declare namespace LocalJSX {
  interface MyComponent extends JSXBase.HTMLAttributes<HTMLMyComponentElement> {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface WasePeople extends JSXBase.HTMLAttributes<HTMLWasePeopleElement> {}
  interface WasePerson extends JSXBase.HTMLAttributes<HTMLWasePersonElement> {
    'email'?: string;
    'name'?: string;
    'phone'?: string;
  }

  interface IntrinsicElements {
    'my-component': MyComponent;
    'wase-people': WasePeople;
    'wase-person': WasePerson;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


