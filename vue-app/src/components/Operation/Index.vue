<template lang="html">

  <section class="index">
    <h1>index Component</h1>

            <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Lecture Name</td>
                <td>Instructor Name</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="item in items.data" :key="item._id">
                    <td>{{ item._id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.instructorName }}</td>
                    <td><router-link :to="{name: 'Edit', params: { id: item._id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteItem(item._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
  </section>

</template>

<script lang="js">

  export default  {
           data(){
            return{
                items: []
            }
        },

         created: function()
        {
            this.fetchItems();
        },

        methods: {
            fetchItems()
            {
              let uri = 'http://localhost:2946/lecture';
              this.axios.get(uri).then((response) => {
                  this.items = response.data;
                  console.log(this.items);
              });
            },

               deleteItem(id)
            {
                let uri = 'http://localhost:2946/lecture/';
                this.axios.delete(uri+ id).then(response => {
                console.log(response.data);
                this.created();
              });
            },

           
        }
}


</script>
<style scoped>
</style>
