<template>
  <div class="home">
    <h1>{{userName}} is an idiot</h1>
  </div>
</template>

<script>
export default {
  computed:{
    userName(){
      let name = this.$store.state.userProfile
      console.log(name)
      return name
    }
}
}
</script>