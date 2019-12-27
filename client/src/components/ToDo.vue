<template lang="html">
  <div>
    <ul>
      <li v-for="todo in todos">
        {{todo}}
      </li>
    </ul>
  </div>
</template>
<script>
import ToDoApi from '@/services/ToDoApi.js'

export default {
  data(){
    return {
      todos:[]
    }
  },
  mounted(){
    this.loadToDoApi()
  },
  methods:{
    async loadToDoApi(){
      const response = await ToDoApi.getToDos()
      this.todos = response.data
    }
  }
}
</script>
<style lang="css">
</style>
