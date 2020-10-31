import { createStore } from "vuex";

const RESULTS = "RESULTS";
const FILTER = "FILTER";
const CLEAR = "CLEAR";

export default createStore({
  namespaced: true,
  state: {
    results: [],
    filterData: []
  },
  mutations: {
    [RESULTS](state, payload) {
      state.results = payload;
    },
    [FILTER](state, payload) {
      state.filterData = payload;
    },
    [CLEAR](state) {
      state.results = [];
      state.filterData = [];
    }
  },
  actions: {
    initLocalStorge({ commit }) {
      let existing = JSON.parse(localStorage.getItem("logLists") || "[]");
      if (existing) {
        commit(RESULTS, existing);
        return true;
      }
      return false;
    },
    setDataLocalStorage({ commit }, result) {
      let existing = JSON.parse(localStorage.getItem("logLists") || "[]");
      let added;
      if (existing) added = [result, ...existing];
      else added = [result];

      localStorage.setItem("logLists", JSON.stringify(added));
      commit(RESULTS, added);
      commit(FILTER, added);
      return null;
    },
    searchLogByResultOrTime({ commit }, query) {
      let existing = JSON.parse(localStorage.getItem("logLists") || "[]");
      if (existing && query !== "" && query !== undefined) {
        const filterData = existing.filter(result => {
          return (
            result.result.toString().includes(query) ||
            result.dateTime.toString().includes(query)
          );
        });
        commit(FILTER, filterData);
      } else commit(FILTER, existing);
    },
    filterLogByCalculatorName({ commit }, value) {
      console.log(value);
      let existing = JSON.parse(localStorage.getItem("logLists") || "[]");
      if (existing && value.selected !== "" && value.query !== "") {
        const filterData = existing.filter(result => {
          return (result.calculatorName === value.selected) && (
            result.result.toString().includes(value.query) ||
            result.dateTime.toString().includes(value.query)
          );
        });
        commit(FILTER, filterData);
      } else if (existing && value.selected === "" && value.query !== "") {
        const filterData = existing.filter(result => {
          return (
            result.result.toString().includes(value.query) ||
            result.dateTime.toString().includes(value.query)
          );
        });
        commit(FILTER, filterData);
      } else if (existing && value.selected !== "" && value.query === "") {
        const filterData = existing.filter(result => {
          return result.calculatorName === value.selected
        });
        commit(FILTER, filterData);
      } else commit(FILTER, existing);
    },
    clearLogInLocalStorage({ commit }) {
      localStorage.setItem("logLists", JSON.stringify([]));
      commit(CLEAR);
      return null;
    }
  },
  modules: {}
});
