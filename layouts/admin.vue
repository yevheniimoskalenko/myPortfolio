<template>
  <div class="auth">
    <nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    error() {
      return this.$store.getters.getError
    },
  },
  watch: {
    error(value) {
      this.$message({
        type: value.status,
        message: value.message,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.auth {
  width: 100%;
  height: 100vh;
}
</style>
