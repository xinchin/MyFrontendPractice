<template>
  <div>
    <h2>Good List</h2>
    <ul>
      <li v-for="(item) in list" :key="item.name">
        <nuxt-link :to="'/detail/'+item.id">{{item.name}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list:[
        {id:'001', name:'aaa', price:234},
        {id:'002', name:'bbb', price:432},
        {id:'003', name:'cccc', price:732},
      ]
    }
  }
}
</script>
<style scoped>

</style>
