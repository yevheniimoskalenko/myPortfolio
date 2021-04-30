<template>
  <div class="portfolio">
    <el-row :gutter="30">
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="card">
          <img src="~/assets/image/1.png" alt="" />
          <h3>Businesswise</h3>
          <p>
            Businesswise freelance was a project where I worked as a designer.
            The main goal of businesswise is to gather podcasts in various
            categories for professional people.
          </p>
          <nuxt-link to="/">See All</nuxt-link>
        </div>
      </el-col>

      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8"
        ><div class="card">
          <img src="~/assets/image/2.png" alt="" />
          <h3>Simple Scanner</h3>
          <p>
            Simple Scanner is an application that we developed when I was
            working at Enrich mobile. With Simple scanner, you can scan your
            documents and convert them to PDF
          </p>
          <nuxt-link to="/">See All</nuxt-link>
        </div></el-col
      >
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8"
        ><div class="card">
          <img src="~/assets/image/3.png" alt="" />
          <h3>Musix</h3>
          <p>
            Musix is a side project I prepared in my spare time. Spotify and
            Apple Music competitors. The biggest advantage compared to its
            competitors is that it provides higher sound quality.
          </p>
          <nuxt-link to="/">See All</nuxt-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.portfolio {
  margin-top: 67px;
}
.card {
  margin-top: 30px;
  img {
    width: 100%;
  }
  h3 {
    margin-top: 16px;
  }
  p {
    margin-top: 16px;
  }
  a {
    margin-top: 16px;
  }
}
</style>
