import { shallowMount, mount } from "@vue/test-utils";
import Layout from "../../src/views/layout.vue";

describe("Layout.vue", () => {
  it("has created hook", () => {
    const wapper = shallowMount(Layout);
    wapper.setData({title: 'test'});
    expect(wapper.text()).toEqual("test");
  });

});
