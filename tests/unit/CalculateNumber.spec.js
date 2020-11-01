import { mount } from "@vue/test-utils";
import Calculator from "@/components/Calculator/Calculator.vue";
import getResult from "../../src/services/service";

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => 10,
  })
);

describe("Calculate number", () => {
  it("add number", async () => {
    const wrapper = mount(Calculator);
    await wrapper.find("#five").trigger("click");
    await wrapper.find("#add").trigger("click");
    await wrapper.find("#five").trigger("click");
    await wrapper.find("#equal").trigger("click");
    const result = await getResult("5+5");
    expect(result).toEqual(10);
  });
  it("subtraction number", async () => {
    const wrapper = mount(Calculator);
    await wrapper.find("#two").trigger("click");
    await wrapper.find("#zero").trigger("click");
    await wrapper.find("#sub").trigger("click");
    await wrapper.find("#one").trigger("click");
    await wrapper.find("#zero").trigger("click");
    await wrapper.find("#equal").trigger("click");
    const result = await getResult("20-10");
    expect(result).toEqual(10);
  });
  it("multiply number", async () => {
    const wrapper = mount(Calculator);
    await wrapper.find("#two").trigger("click");
    await wrapper.find("#mul").trigger("click");
    await wrapper.find("#five").trigger("click");
    await wrapper.find("#equal").trigger("click");
    const result = await getResult("2*5");
    expect(result).toEqual(10);
  });
});
