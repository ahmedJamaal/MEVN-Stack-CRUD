<template lang="html">
   <div class="container">
      
        <div class="card">
            <div class="card-header">
                <h3>Add Item</h3>
            </div>
            <div class="card-body">
              <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Lecture Name:</label>
                        <input type="text" class="form-control" v-model="item.name"/>
                    </div>
                    <div class="form-group">
                        <label>Instructor Name:</label>
                        <input type="text" class="form-control" v-model="item.instructorName"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Item"/>
                    </div>
                </form>
           
            </div>
        </div>
    
    </div>

</template>

<script>
  export default  {
    
    name: 'src-views-create',
    props: [],
    mounted () {

    },
    data () {
      return {
        item:{}
      }
    },
    
    methods: {
      addItem() {
           let uri = 'http://localhost:2946/lecture';
            this.axios.post(uri, this.item).then((response) => {
                console.log(response.data)
            });
        }
    },
    computed: {
      
    }
}


</script>

<style scoped>

</style>
