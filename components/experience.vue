<template>
  <div class="experience">
    <h2>Experience</h2>
    <div class="card">
      <el-row :gutter="30">
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8"
          ><div class="card mr-1">
            <h3>Norma</h3>
            <span>Digital Product Designer</span>
            <div class="data">Mar 21 — Now</div>
          </div></el-col
        >
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8"
          ><div class="card mr-1">
            <h3>Enrich Mobile</h3>
            <span>UI Designer </span>
            <div class="data">Apr 2020 — Mar 21</div>
          </div></el-col
        >
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8"
          ><div class="card mr-1">
            <h3>ASDC</h3>
            <span>UI Designer</span>
            <div class="data">Jun 2020 — Mar 20</div>
          </div></el-col
        >
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8"
          ><div class="card mr-2">
            <h3>Talent Mondo</h3>
            <span>Contract UI Designer</span>
            <div class="data">Mar 20 — Jun 20</div>
          </div></el-col
        >
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8"
          ><div class="card mr-2">
            <h3>MobileUpp</h3>
            <span>iOS Developer & UI Designer</span>
            <div class="data">Jan 19 — Mar 20</div>
          </div></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<script>
export default {}
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
