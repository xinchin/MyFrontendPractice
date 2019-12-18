<template>
    <div>
        <div class="my-button">reference</div>
        <div class="my-popper">popper</div>
    </div>
</template>
<script>
import Popper from 'popper.js';


export default {
    mounted(){
        
    var reference = document.querySelector(".my-button");
    var popper = document.querySelector(".my-popper");
    new Popper(reference, popper, {
          placement: 'right',
    });

    }
}
</script>
<style scoped>
   
    .my-button{
        display: block;
        position: absolute;
        left: 200px;
        background-color: antiquewhite;
        width: 100px;
        height: 100px;
    }
    .my-popper{
        position: absolute;
        display: block;
        background-color:burlywood;
        width: 100px;
        height: 100px;
        margin: 0 20px;
    }
</style>