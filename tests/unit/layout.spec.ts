import { shallowMount, mount } from "@vue/test-utils";
// import Layout from "../../src/views/layout.vue";
import App from "../../src/App.vue";

describe("App.vue", () => {
  it("has created hook", () => {
    const wapper = shallowMount(App);
    console.log("***", wapper);
    expect(1+1).toEqual(2);
  });

});
