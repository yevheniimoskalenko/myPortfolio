<template>
  <div class="experience">
    <h2>Experience</h2>
    <div class="card">
      <el-row :gutter="30">
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8"
          ><div class="card mr-1">
            <h3>Siject</h3>
            <span>Front-end vue developer</span>
            <div class="data">Jan 21 — Now</div>
          </div></el-col
        >
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8"
          ><div class="card mr-1">
            <h3>Beetroot</h3>
            <span>Front-end</span>
            <div class="data">Jan 2016 — Mar 2016</div>
          </div></el-col
        >
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8"
          ><div class="card mr-1">
            <h3>KNUE</h3>
            <span>curses at C#</span>
            <div class="data">Nov 2018 — Dec 2018</div>
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
