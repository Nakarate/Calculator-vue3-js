<template>
  <button @click="handleButton" :id="id" :class="className()">
    {{ showText }}
  </button>
</template>

<script>
export default {
  name: "component-calculator-button",
  props: {
    type: String,
    showText: String,
    value: null,
    id: String
  },
  data() {
    return {};
  },
  methods: {
    className() {
      return this.$props.type;
    },
    handleButton() {
      this.$emit("handlebutton", this.$props.value);
    }
  }
};
</script>
