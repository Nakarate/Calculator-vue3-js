<template>
  <div class="calculator">
    <div class="calculator-name">{{ name }}</div>
    <div class="calculator-card">
      <calc-result :formula="formula" :result="result"/>
      <div class="calculator-button-template">
        <calc-button
          @handlebutton="clear"
          :type="'calculator-button'"
          :showText="'C'"
          :id="'clear'"
        />
        <calc-button
          @handlebutton="addOperator"
          :type="'calculator-button'"
          :showText="'x'"
          :value="'x'"
          :id="'mul'"
        />
        <calc-button
          @handlebutton="addOperator"
          :type="'calculator-button'"
          :showText="'-'"
          :value="'-'"
          :id="'sub'"
        />
        <calc-button
          @handlebutton="addOperator"
          :type="'calculator-button plus'"
          :showText="'+'"
          :value="'+'"
          :id="'add'"
        />
        <calc-button
          @handlebutton="addOperand"
          :type="'calculator-button'"
          :showText="'7'"
          :value="7"
          :id="'seven'"
        />
        <calc-button
          @handlebutton="addOperand"
          :type="'calculator-button'"
          :showText="'8'"
          :value="8"
          :id="'eight'"
        />
        <calc-button
          @handlebutton="addOperand"
          :type="'calculator-button'"
          :showText="'9'"
          :value="9"
          :id="'nine'"
        />
        <calc-button
          @handlebutton="addOperand"
          :type="'calculator-button'"
          :showText="'4'"
          :value="4"
          :id="'four'"
        />
        <calc-button
          @handlebutton="addOperand"
          :type="'calculator-button'"
          :showText="'5'"
          :value="5"
          :id="'five'"
        />
        <calc-button
          @handlebutton="addOperand"
          :type="'calculator-button'"
          :showText="'6'"
          :value="6"
          :id="'six'"
        />
        <calc-button
          @handlebutton="equal"
          :type="'calculator-button equal'"
          :showText="'='"
          :value="'='"
          :id="'equal'"
        />
        <calc-button
          @handlebutton="addOperand"
          :type="'calculator-button'"
          :showText="'1'"
          :value="1"
          :id="'one'"
        />
        <calc-button
          @handlebutton="addOperand"
          :type="'calculator-button'"
          :showText="'2'"
          :value="2"
          :id="'two'"
        />
        <calc-button
          @handlebutton="addOperand"
          :type="'calculator-button'"
          :showText="'3'"
          :value="3"
          :id="'three'"
        />
        <calc-button
          @handlebutton="addOperand"
          :type="'calculator-button zero'"
          :showText="'0'"
          :value="0"
          :id="'zero'"
        />
        <calc-button
          @handlebutton="addDot"
          :type="'calculator-button'"
          :showText="'.'"
          :value="'.'"
          :id="'dot'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CalcButton from "./CalculatorButton";
import CalcResult from "./CalculatorResult";
import { mapActions } from "vuex";
import getResult from '@/services/service.js'

export default {
  name: "component-calculator-button",
  components: {
    CalcButton,
    CalcResult
  },
  props: {
    name: String
  },
  data() {
    return {
      formula: "",
      operatorlist: ["+", "-", "x", "/"],
      result: 0
    };
  },
  methods: {
    ...mapActions(["setDataLocalStorage"]),
    addOperand(number) {
      this.formula += number;
    },
    addOperator(operator) {
      const lastchar = this.formula.slice(-1);
      if (operator !== lastchar) {
        if (this.operatorlist.indexOf(lastchar) !== -1) {
          let str = this.formula.slice(0, -1);
          str = str + operator;
          this.formula = str;
          return;
        }
      }
      switch (lastchar) {
        case "+":
          return;
        case "-":
          return;
        case "x":
          return;
        case "/":
          return;
      }
      this.formula += operator.toString();
    },
    addDot(item) {
      if (this.formula.slice(-1) !== item) {
        this.formula += item.toString();
      }
    },
    async equal() {
      if (this.formula === "") {
        return;
      }
      if (this.formula.slice(-1) === '.') {
        return;
      }
      if (this.formula.charAt(0) === "x") {
        this.formula = "";
        return;
      }

      let params = this.formula;
      params = params.replace(/\+/g, "%2B");
      params = params.replace(/-/g, "%2D");
      params = params.replace(/x/g, "%2A");

      this.result = await getResult(params)
      
      let date = new Date();
      let dateFormat = `${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${date
        .getDate()
        .toString()
        .padStart(2, "0")}/${date
        .getFullYear()
        .toString()
        .padStart(4, "0")} - ${date
        .getHours()
        .toString()
        .padStart(2, "0")}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${date
        .getSeconds()
        .toString()
        .padStart(2, "0")}`;
      const log = {
        calculatorName: this.name,
        result: this.result,
        formula: this.formula,
        dateTime: dateFormat
      };
      this.setDataLocalStorage(log);
    },
    clear() {
      this.formula = "";
      this.result = 0;
    }
  }
};
</script>

<style></style>
