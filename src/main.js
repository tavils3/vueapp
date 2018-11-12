import Vue from 'vue'
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(BootstrapVue);

const store = new Vuex.Store({
  state: {
    inProcess: true,
    appliedFilters: []
  },
  mutations: {
    addAppliedFilter(state, data) {
      state.appliedFilters.push(data);
    },
    deleteAppliedFilter(state, itemKey) {
      state.appliedFilters = state.appliedFilters.filter((item) => {
        return item.filterName != itemKey
      });
    },
    changeProcessStatus(state) {
      state.inProcess = false;
    }
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
