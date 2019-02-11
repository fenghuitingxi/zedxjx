import Vue from 'vue';
import Vuex from 'vuex';
import routerTab from './modules/routerTab.js';

Vue.use(Vuex);

/**
 * Vuex全局状态管理
 * @param options {Array} 用于渲染tabs的数组
 */
const store = new Vuex.Store({
    modules: {
        routerTab
    }
});

export default store;
