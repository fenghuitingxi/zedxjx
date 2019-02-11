import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import store from './store';
import api from './api';

import Breadcrumb from './components/breadcrumb';

Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$api = api;
Vue.config.productionTip = false;

Vue.component('db-breadcrumb', Breadcrumb);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
