import Vue from 'vue'
import CascadingRow from './CascadingRow.vue'

const Components = {
  CascadingRow
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
