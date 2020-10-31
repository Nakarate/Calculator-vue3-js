<template>
  <div class="calculator">
    <div class="calculatorlog-template">
      <div class="calculatorlog-filter">
        <div class="calculatorlog-text">{{ "Results" }}</div>

          <input
            type="text"
            v-model="query"
            v-on:input="search"
            class="calculatorlog-input"
            placeholder="Search by result, date"
          />
    
          <select class="round" v-model="selected">
            <option value="">All</option>
            <option value="Calculator A">A</option>
            <option value="Calculator B">B</option>
          </select>
    
      </div>
      <div class="calculatorlog-card">
        <div>
          <div
            class="calculatorlog-template"
            v-for="(logs, index) in filterData"
            :key="index"
          >
            <div class="calculatorlog-container">
              <span id="name">{{ logs.calculatorName }}</span>
              <span id="dateTime" class="calculatorlog-date">{{ logs.dateTime }}</span>
            </div>
            <div>
              <span id="result" class="calculator-result">{{ logs.result }}</span>
              <hr />
              <span
                id="formula"
                class="calculator-formula"
              >{{logs.formula}}</span>
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
    this.searchLogByResultOrTime();
  },
  data() {
    return {
      selected: "",
      query: ""
    };
  },
  methods: {
    ...mapActions([
      "clearLogInLocalStorage",
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
