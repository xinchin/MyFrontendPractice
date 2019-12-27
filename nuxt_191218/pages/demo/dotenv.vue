<template>
  <div>
    <h1>demo :: dotenv</h1>
    <p>{{ msg }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: process.env.apiUrl
    };
  }
};
</script>
<style scoped></style>
