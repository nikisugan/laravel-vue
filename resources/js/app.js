
require('./bootstrap');

import store from './components/store'

window.Vue = require('vue').default;


Vue.component('index', require('./components/Index.vue').default);


const app = new Vue({
    store,
    el: '#app',
});
