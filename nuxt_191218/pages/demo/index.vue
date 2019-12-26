<template>
  <div>
    <h1>Index</h1>
        <p>{{ msg }}</p>
        <button @click="clickHandler">click</button>   
  </div>
</template>
<script>
import localforage from 'localforage'

export default {
    data(){
        return {
            msg: 'default'
        }
    },
    methods:{
        clickHandler(){
            localforage.getItem('somekey',null).then((value)=>{
                this.msg=value;
            });
        }
    },
    mounted(){
        localforage.setItem('somekey', 'some value').then((value)=>{
            // this.msg=value;
        }
        ).catch(function(err) {
            // This code runs if there were any errors
            console.log(err);
        });

    }
}
</script>
<style scoped>

</style>