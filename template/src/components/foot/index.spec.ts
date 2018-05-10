import BaseButton from "./index";
import { mount } from "vue-test-utils";
{{#if_eq runner "karma"}}
import { expect } from "chai";
{{/if_eq}}
import "../../localisation";

describe("foot.vue", () => {
  let wrapper: any;

  beforeEach(() => {
      wrapper = mount(BaseButton, {
          data: {},
          propsData: {
            version: "1.0.0",
            build: "1"
          }
      });
  });

  it("should render version correctly", () => {
    wrapper.vm.$nextTick(() => {
      let el = wrapper.vm.$el.querySelector(".text-muted");
      expect((<Element>el).textContent)
        {{#if_eq runner "jest"}}
        .toEqual("Vue-Typescript-boilerplate 1.0.0.1 powered by Vue");
        {{/if_eq}}
        {{#if_eq runner "karma"}}
        .to.equal("Vue-Typescript-boilerplate 1.0.0.1 powered by Vue");
        {{/if_eq}}
    });
  });
});
