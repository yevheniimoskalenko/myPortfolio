<template>
  <div class="preview">
    <el-row :gutter="30">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
        ><div class="card mr-2 none">
          <img src="~/assets/image/12.jpg" alt="" /></div
      ></el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
        ><div class="card mr-2">
          <img src="~/assets/image/13.jpg" alt="" /></div
      ></el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
        ><div class="card mr-2">
          <img src="~/assets/image/14.jpg" alt="" /></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.preview {
  margin-top: 128px;
}
.card {
  img {
    width: 100%;
  }
}
</style>
