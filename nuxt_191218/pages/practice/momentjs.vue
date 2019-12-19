<template>
  <div>
      <ul>
          <li v-for="(item, index) in dt" :key="index">{{item}}</li>
      </ul>
  </div>
</template>
<script>
import moment from 'moment'
moment.locale('zh-tw');

export default {
    data(){
        return {
            dt : []
        }
    },
    mounted(){
        this.dt.push(moment().format('MMMM Do YYYY, h:mm:ss a')); 
        this.dt.push(moment().format('dddd')); 
        this.dt.push(moment().format('MMM Do YY')); 
        this.dt.push(moment().format('MMMM Do YYYY, h:mm:ss a')); 
        this.dt.push(moment().format('MMMM Do YYYY, h:mm:ss a')); 
    }
    
}
</script>
<style scoped>
</style>