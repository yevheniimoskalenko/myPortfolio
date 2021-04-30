<template>
  <div class="works">
    <h2>Some concept works</h2>
    <el-row :gutter="30">
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="card">
          <img src="~/assets/image/4.png" alt="" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="card">
          <img src="~/assets/image/5.png" alt="" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="card">
          <img src="~/assets/image/6.png" alt="" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="card">
          <img src="~/assets/image/7.png" alt="" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="card">
          <img src="~/assets/image/8.png" alt="" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="card">
          <img src="~/assets/image/9.png" alt="" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.works {
  margin-top: 67px;
}
.card {
  margin-top: 24px;
  img {
    width: 100%;
  }
}
</style>
