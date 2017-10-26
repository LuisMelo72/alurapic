import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueMaterial from 'vue-material';
import VueRouter from 'vue-router';
import {routes} from './routes';

// registrando o módulo/plugin no global view object
Vue.use(VueResource);
Vue.use(VueMaterial);
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history' /* o servidor deve retornar por padrao sempre a index.html independente da url */
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

