import Vue from "vue";
import Vuex from "vuex";


import todos from "./modules/todos";
// import getters from "./getters";
// import mutations from "./mutations";
// import * as actions from "./actions";


Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        todos
    },
    // state:{

    // },
    // getters,
    // mutations,
    // actions,
});