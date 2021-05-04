<template>
  <div class="works">
    <h2>Some concept works</h2>
    <el-row :gutter="30">
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="card">
          <img
            src="https://raw.githubusercontent.com/yevheniimoskalenko/reCAPTCHA/master/assets/recaptcha.png"
            alt=""
          />
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="card">
          <img
            src="https://res.cloudinary.com/dmrpkseez/image/upload/v1598702063/2_dfu1gr.jpg"
            alt=""
          />
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="card">
          <img
            src="https://res.cloudinary.com/dmrpkseez/image/upload/v1598702062/3_wuymyz.png"
            alt=""
          />
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="card">
          <img
            src="https://raw.githubusercontent.com/yevheniimoskalenko/medi-designer/master/src/assets/prev.png"
            alt=""
          />
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
    height: 304px;
  }
}
</style>
