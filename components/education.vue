<template>
  <div class="experience">
    <h2>Education</h2>
    <div class="card">
      <el-row :gutter="30">
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8"
          ><div class="card mr-1">
            <h3>Simon Kuznets Kharkiv National University of Economics</h3>
            <span>Master's Degree</span>
            <div class="data">Master's Degree 2019 - 2020</div>
          </div></el-col
        >
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8"
          ><div class="card mr-1">
            <h3>Simon Kuznets Kharkiv National University of Economics</h3>
            <span>Bachelor's degree</span>
            <div class="data">Computer Science 2017 - 2019</div>
          </div></el-col
        >
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8"
          ><div class="card mr-1">
            <h3>Poltava Technical College</h3>
            <span>Junior specialist</span>
            <div class="data">Software Development 2013 - 2017</div>
          </div></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.experience {
  margin-top: 128px;
}
.card {
  h3 {
    color: #666666;
  }
  span {
    color: #666666;
    margin: 8px 0;
  }
  .data {
    color: #999999;
    font-size: 14px;
    line-height: 26px;
  }
}
</style>
