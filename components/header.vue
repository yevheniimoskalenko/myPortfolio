<template>
  <div class="study">
    <div class="page-header">
      <el-page-header @back="goBack" content="to home"> </el-page-header>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
.page-header {
  margin-top: 67px;
}
</style>
