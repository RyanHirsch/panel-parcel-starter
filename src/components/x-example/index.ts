import { Component, ConfigOptions, AttrsSchema, h } from "panel";

import { safelyDefine, importStyleFile } from "../../utils";

import { ExampleAttrs, ExampleState } from "./types";

const css = importStyleFile(`${__dirname}/styles.css`);
const componentName = "x-example";

export default class Example extends Component<ExampleState, {}, unknown, ExampleAttrs> {
  static get attrsSchema(): AttrsSchema<ExampleAttrs> {
    return {
      ...super.attrsSchema,
      data: { type: `json`, default: {} },
    };
  }

  get config(): ConfigOptions<ExampleState, {}, ExampleAttrs> {
    return {
      css,
      useShadowDom: true,
      template: ({ $attr, $helpers }) => {
        return h("div", "Hello There");
      },
      defaultState: {},
      helpers: {},
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }

  attributeChangedCallback(attr: keyof ExampleAttrs, oldValue: string | null, newValue: string) {
    super.attributeChangedCallback(attr, oldValue, newValue);
  }
}

safelyDefine(componentName, Example);
