import Vue from "vue";

export const saveTodo = ({ commit }, payload) => {
    let url = `api/item/store`;
     Swal.fire({
         title: 'Please wait...',
         didOpen: () => {
             Swal.showLoading()
         },
     })
    axios.post(url, {
        item: this.item
    })
    .then(res => {
        if (res.status == 201) {
         Swal.fire({
         icon: 'success',
         title: 'Saved!',
         showConfirmButton: false,
         timer: 1500
         }).then((result) => {
             this.item.name = "";
             this.$emit('reloadList');
         })
        }
    })
    .catch( error => {
        console.log( error );
    })
}