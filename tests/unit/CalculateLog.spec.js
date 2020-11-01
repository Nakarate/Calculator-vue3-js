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
                  dateTime: "30/10/2020 - 23:25:19"
                },
                {
                  calculatorName: "Calculator B",
                  result: 40,
                  formula: "8*5",
                  dateTime: "01/11/2020 - 10:10:15"
                }
              ]
          }
      }
    });
  test("Display logs data", async () => {
    const wrapper = mount(CalculatorLogs, { global: {
        plugins: [store]
    }});

    expect(wrapper.find('#name').text()).toBe("Calculator A");
    expect(wrapper.find('#result').text()).toBe("637.69");
    expect(wrapper.find('#formula').text()).toBe("55.69+582");
    expect(wrapper.find('#dateTime').text()).toBe("30/10/2020 - 23:25:19");
  });

});
