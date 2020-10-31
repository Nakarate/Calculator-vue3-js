import { mount } from "@vue/test-utils";
import Calculator from "@/components/Calculator/Calculator.vue";

describe("Calculate number", () => {
  test("add number", async () => {
    const wrapper = mount(Calculator);
    
    await wrapper.find("#one").trigger("click");
    await wrapper.find("#sub").trigger("click");
    await wrapper.find("#two").trigger("click");

    await wrapper.find("#equal").trigger("click");
  });

});
