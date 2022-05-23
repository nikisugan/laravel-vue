<template>
    <div class="item">
        <input
            type="checkbox"
            @change="updateCheck()"
            v-model="item.completed"
            :class="`chBox list-${item.id}`"
        />
        <span :class="[item.completed ? 'completed': '' , 'item-text']"> {{ item.name }} </span>
        <button @click="removeItem()" class="trashcan">
            <i class="fas fa-trash"></i>
        </button>
    </div>
</template>

<script>
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
export default {
    props:['item'],
    mounted(){
       this.checkStatus();
    },
    updated(){
       this.checkStatus();

    },
    methods:{
        updateCheck(){
            this.$store.dispatch('todos/updateCheck', this.item);
        },
        removeItem(){
            this.$store.dispatch('todos/removeItem', this.item);
        },
        checkStatus(){
            document.querySelectorAll('.chBox').forEach(element => {
                if(element.classList.contains(`list-${this.item.id}`)){
                    element.checked = this.item.completed === 1  ? true : false;
                }
            })
        },
    },
}
</script>
<style scoped>
.completed{
    text-decoration: line-through;
    color:#999999 ;
}
.item-text{
    width: 100%;
    margin-left: 20px;
}
.item{
    display: flex;
    justify-content: center;
    align-items: center;
}
.trashcan{
    background: #e6e6e6;
    border: none;
    color: #FF0000;
    outline: none;
}
</style>