<template>
    <div class="todo-list-container">
        <div class="heading">
            <h2 id="title"> TODO List</h2>
            <add-item-form />
                <!-- v-on:reloadList="getList()"
            /> -->
        </div>
        <list-view />
            <!-- v-on:reloadList="getList()"

        /> -->
        <!-- <list-view
            :items="items"
            v-on:reloadList="getList()"

        /> -->
    </div>
</template>

<script>
import addItemForm from './addItemForm.vue'
import listView from './listView.vue'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
// import { mapGetters } from 'vuex';

export default {
  components: {
      addItemForm,
      listView,
    },
    created(){
        this.$store.dispatch('todos/getList');
    }
}
</script>
<style scoped>
.todo-list-container{
    width: 350px;
    margin: auto;
}
.heading{
    background: #e6e6e6;
    padding: 10px;
}

#title{
    text-align: center;
}
</style>