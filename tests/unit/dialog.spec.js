import { mount } from '@vue/test-utils'
import DialogBox from '@/components/Modal/DialogBox.vue'

describe('Confirm Modal', () => {
  test("trigger dialog box open", async () => {
    const wrapper = mount(DialogBox);
    expect(wrapper.vm.showModal).toBe(false);
    wrapper.vm.open();
    expect(wrapper.vm.showModal).toBe(true);
  });
  
  test("dialog box is ok", async () => {
    const wrapper = mount(DialogBox);
    expect(wrapper.vm.showModal).toBe(false);
    await wrapper.find("#confirm").trigger("click");
    wrapper.vm.onConfirm();
    expect(wrapper.vm.showModal).toBe(false);
  });

  test('dialog box is cancel', async () => {
    const wrapper = mount(DialogBox ,{
      data() {
        return {
          showModal: true
        }
      }
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.showModal).toBe(true)
    await wrapper.find("#cancel").trigger("click");
    wrapper.vm.onCancel();
    expect(wrapper.vm.showModal).toBe(false)
  })
})
