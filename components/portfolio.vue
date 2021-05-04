<template>
  <div class="portfolio">
    <el-row :gutter="30">
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="card">
          <img
            src="https://res.cloudinary.com/dmrpkseez/image/upload/v1598702063/1_p6p1fs.jpg"
            alt=""
          />
          <h3>Businesswise</h3>
          <p>
            Businesswise freelance was a project where I worked as a designer.
            The main goal of businesswise is to gather podcasts in various
            categories for professional people.
          </p>
          <nuxt-link v-show="showLink" to="/">See All</nuxt-link>
        </div>
      </el-col>

      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8"
        ><div class="card">
          <img
            src="https://res.cloudinary.com/dmrpkseez/image/upload/v1620069278/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_%D0%BE%D1%82_2021-05-03_22-06-16_n0npgv.png"
            alt=""
          />
          <h3>Simple Scanner</h3>
          <p>
            Simple Scanner is an application that we developed when I was
            working at Enrich mobile. With Simple scanner, you can scan your
            documents and convert them to PDF
          </p>
          <nuxt-link v-show="showLink" to="/" class="isDisable"
            >Coming Soon</nuxt-link
          >
        </div></el-col
      >
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8"
        ><div class="card">
          <img
            src="https://res.cloudinary.com/dmrpkseez/image/upload/v1620069277/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_%D0%BE%D1%82_2021-05-03_22-06-55_yj8fhr.png"
            alt=""
          />
          <h3>Musix</h3>
          <p>
            Musix is a side project I prepared in my spare time. Spotify and
            Apple Music competitors. The biggest advantage compared to its
            competitors is that it provides higher sound quality.
          </p>
          <nuxt-link v-show="showLink" to="/">See All</nuxt-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    showLink: {
      type: Boolean,
      default: () => true,
    },
  },
};
</script>
<style lang="scss" scoped>
.portfolio {
  margin-top: 67px;
}
.card {
  margin-top: 30px;
  img {
    width: 100%;
    height: 304px;
    display: block;
    background-size: cover;
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
