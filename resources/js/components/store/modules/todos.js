import axios from 'axios'

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const state = {
    items: []
    }

const getters = {
    allTodos: () => state.todos
}

const actions = {
    getList: state => {
        Swal.fire({
            title: 'Please wait...',
            didOpen: () => {
                Swal.showLoading()
            },
        })
        axios.get('api/items')
        .then(result => {
            Swal.close()
            state.commit('setItems', result.data)
        })
        .catch(err => {
            console.log( err )
        });
    },
    updateCheck(state, item){
        Swal.fire({
            title: 'Please wait...',
            didOpen: () => {
                Swal.showLoading()
            },
        })
        // console.log(item.completed)
        axios.put('api/item/' + item.id, {
            item
        })
        .then((result) => {
            if( result.status == 200){
                Swal.fire({
                icon: 'success',
                title: 'Updated!',
                showConfirmButton: false,
                timer: 1500
                }).then((result) => {
                    state.dispatch('getList');
                })
            }
        }).catch((err) => {
            console.error(err)
        });
    },
    removeItem(state, item){
        Swal.fire({
            title: 'Please wait...',
            didOpen: () => {
                Swal.showLoading()
            },
        })
        axios.delete('api/item/' + item.id, {
            item
        })
        .then((result) => {
            if( result.status == 200){
                
                Swal.fire({
                icon: 'success',
                title: 'Removed!',
                showConfirmButton: false,
                timer: 1500
                }).then((result) => {
                    state.dispatch('getList');
                })
            }
        }).catch((err) => {
            console.error(err)
        });
    },
    addItem(state, item){
            Swal.fire({
                title: 'Please wait...',
                didOpen: () => {
                    Swal.showLoading()
                },
            })
           axios.post('api/item/store', {
               item
           })
           .then(res => {
               if (res.status == 201) {
                Swal.fire({
                icon: 'success',
                title: 'Saved!',
                showConfirmButton: false,
                timer: 1500
                }).then((result) => {                   
                    state.dispatch('getList');

                })
               }
           })
           .catch( error => {
               console.log( error );
           })
    },
}

const mutations = {
    setItems: (state, payload) => state.items = payload,
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}