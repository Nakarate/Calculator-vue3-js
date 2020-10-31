import {mount } from "@vue/test-utils";
import CalculatorLogs from "@/components/Calculator/CalculatorLogs.vue";
import { createStore } from "vuex";

describe("CalculatorLogs", () => {
  const store = createStore({
      state() {
          return {
              filterData: [
                {
                  calculatorName: "Calculator A",
                  result: 637.69,
                  formula: "55.69+582",
                  dateTime: "06/10/2020 23:24.15"
                }
              ]
          }
      }
    });
  test("Display logs data", async () => {
    const wrapper = mount(CalculatorLogs, { global: {
        plugins: [store]
    }});

    expect(wrapper.find('#name').text()).toContain("Calculator A");
    expect(wrapper.find('#result').text()).toContain("637.69");
    expect(wrapper.find('#formula').text()).toContain("55.69+582");
    expect(wrapper.find('#dateTime').text()).toContain("06/10/2020 23:24.15");
  });
});
