<template>
  <div class="calculator">
    <div class="calculatorlog-template">
      <div class="calculatorlog-filter">
        <div class="calculatorlog-text">{{ "Results" }}</div>
        <div>
          <input
            type="text"
            v-model="query"
            v-on:input="search"
            class="calculatorlog-input"
            placeholder="Search by result, date"
          />
        </div>
        <div>
          <select class="round" v-model="selected">
            <option value="">All</option>
            <option value="Calculator A">A</option>
            <option value="Calculator B">B</option>
          </select>
        </div>
      </div>
      <div class="calculatorlog-card">
        <div>
          <div
            class="calculatorlog-template"
            v-for="(history, index) in filterData"
            :key="index"
          >
            <div class="calculatorlog-container">
              <span>{{ history.calculatorName }}</span>
              <span class="calculatorlog-date">{{ history.dateTime }}</span>
            </div>
            <div>
              <span class="calculator-result">{{ history.result }}</span>
              <hr />
              <span
                class="calculator-formula"
                v-html="formatFormulaToDisplay(history.formula)"
              ></span>
            </div>
          </div>
        </div>
      </div>
      <DialogBox ref="dialogBox" @confirmres="confirmClicked" />
      <button id="myBtn" class="calculatorlog-button clear" @click="clearLogs">
        Clear
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  mounted() {
    if (this.initLocalStorge()) this.searchLogByResultOrTime();
  },
  data() {
    return {
      selected: "",
      query: ""
    };
  },
  methods: {
    formatFormulaToDisplay(data) {
      let value = data;
      value = value.replaceAll("+", "<span style='color:#E623CF;'> + </span>");
      value = value.replaceAll("-", "<span style='color:#E623CF;'> - </span>");
      value = value.replaceAll("x", "<span style='color:#E623CF;'> x </span>");
      return value;
    },
    ...mapActions([
      "clearLogInLocalStorage",
      "initLocalStorge",
      "searchLogByResultOrTime",
      "filterLogByCalculatorName"
    ]),
    clearLogs() {
      this.$refs.dialogBox.open(
        "Warning",
        "Do you want to clear this log?",
        "confirm",
        "cancel"
      );
    },
    search() {
      this.searchLogByResultOrTime(this.query);
    },
    confirmClicked(value) {
      if (value) this.clearLogInLocalStorage();
    }
  },
  computed: {
    ...mapState(["filterData"])
  },
  watch: {
    selected() {
      const value = {
        selected: this.selected,
        query: this.query
      };
      this.filterLogByCalculatorName(value);
    }
  }
};
</script>

<style></style>
