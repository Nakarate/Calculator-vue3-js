import { mount } from "@vue/test-utils";
import Calculator from "@/components/Calculator/Calculator.vue";

describe("Calculator Button", () => {
  test("press calculator button", async () => {
    const wrapper = mount(Calculator);
    
    await wrapper.find("#one").trigger("click");
    await wrapper.find("#two").trigger("click");
    await wrapper.find("#sub").trigger("click");
    await wrapper.find("#three").trigger("click");
    await wrapper.find("#add").trigger("click");
    await wrapper.find("#four").trigger("click");
    await wrapper.find("#five").trigger("click");
    await wrapper.find("#six").trigger("click");
    await wrapper.find("#mul").trigger("click");
    await wrapper.find("#seven").trigger("click");
    await wrapper.find("#eight").trigger("click");
    await wrapper.find("#nine").trigger("click");
    await wrapper.find("#dot").trigger("click");
    await wrapper.find("#zero").trigger("click");
  
    expect(wrapper.vm.formula).toBe('12-3+456x789.0')
  });

  test("clear formula", async () => {
    const wrapper = mount(Calculator);

    await wrapper.find("#one").trigger("click");
    await wrapper.find("#two").trigger("click");
    await wrapper.find("#dot").trigger("click");
    await wrapper.find("#three").trigger("click");
    await wrapper.find("#add").trigger("click");
    await wrapper.find("#four").trigger("click");
    await wrapper.find("#five").trigger("click");
    await wrapper.find("#dot").trigger("click");
    await wrapper.find("#six").trigger("click");
    await wrapper.find("#clear").trigger("click");

    expect(wrapper.vm.formula).toBe('')
  });
  
  test("Prevent Spamming of add button", async () => {
    const wrapper = mount(Calculator);

    await wrapper.find("#add").trigger("click");
    await wrapper.find("#add").trigger("click");
    await wrapper.find("#add").trigger("click");

    expect(wrapper.vm.formula).toBe('+')
  });

  test("Prevent Spamming of subtraction button", async () => {
    const wrapper = mount(Calculator);

    await wrapper.find("#sub").trigger("click");
    await wrapper.find("#sub").trigger("click");
    await wrapper.find("#sub").trigger("click");

    expect(wrapper.vm.formula).toBe('-')
  });

  test("Prevent Spamming of multiply button", async () => {
    const wrapper = mount(Calculator);

    await wrapper.find("#mul").trigger("click");
    await wrapper.find("#mul").trigger("click");
    await wrapper.find("#mul").trigger("click");

    expect(wrapper.vm.formula).toBe('x')
  });

  test("Prevent Spamming of dot button", async () => {
    const wrapper = mount(Calculator);

    await wrapper.find("#dot").trigger("click");
    await wrapper.find("#dot").trigger("click");
    await wrapper.find("#dot").trigger("click");

    expect(wrapper.vm.formula).toBe('.')
  });

  test("Change operator", async () => {
    const wrapper = mount(Calculator);

    await wrapper.find("#add").trigger("click");
    await wrapper.find("#mul").trigger("click");
    await wrapper.find("#sub").trigger("click");

    expect(wrapper.vm.formula).toBe('-')
  });

});
