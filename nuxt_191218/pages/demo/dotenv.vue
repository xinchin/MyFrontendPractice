<template>
  <div>
    <h1>dotenv</h1>
        <p>{{ msg }}</p>
        <button @click="clickHandler">click</button>   
  </div>
</template>
<script>

// import  dotenv from 'dotenv'
// dotenv.config();



export default {
    data(){
        return {
            msg: 'default'
        }
    },
    methods:{
        clickHandler(){
            this.msg = process.env.myname
        }
    },
    
}
</script>
<style scoped>

</style>