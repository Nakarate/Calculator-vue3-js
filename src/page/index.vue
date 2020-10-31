<template>
  <div class="appbar">
    <div class="title">
      Double Calculator
    </div>
  </div>
  <div class="main">
    <div class="container">
      <div class="calculator-container">
        <calculator-container :name="'Calculator A'" />
        <calculator-container :name="'Calculator B'" />
        <calculator-log />
      </div>
    </div>
  </div>
</template>

<script>
import CalculatorContainer from "../components/Calculator/Calculator";
import CalculatorLog from "../components/Calculator/CalculatorLogs";
export default {
  name: "page-index",
  components: {
    CalculatorContainer,
    CalculatorLog
  }
};
</script>

<style></style>
