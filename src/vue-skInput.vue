<template>
  <div>
    {{test || 'no test props'}}
  </div>
</template>

<script>
  export default {
    name: 'SkInput',
    props:{
      test: {}
    }
  }
</script>

<style scoped>

</style>