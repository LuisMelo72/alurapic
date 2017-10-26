import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueMaterial from 'vue-material';

// registrando o módulo/plugin no global view object
Vue.use(VueResource);
Vue.use(VueMaterial);

new Vue({
  el: '#app',
  render: h => h(App)
});

