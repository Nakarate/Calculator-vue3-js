<template>
    <div>
      <div id="result" class="calculator-result">{{ result }}</div>
      <hr />
      <div id="formola" class="calculator-formula">{{formula}}
      </div>
    </div>
</template>

<script>

export default {
  name: "component-calculator-result",
  props: {
    formula: String,
    result: Number
  },
};
</script>

<style></style>
