<template>
  <div class="overview">
    <div class="avatar">
      <img src="~/assets/image/hero.png" alt="" />
    </div>
    <div class="about">
      <h2>Welcome to my Portfolio 👋</h2>
      <p>
        I’m Mete. I’m 24-year-old. I’m a Digital Product Designer who
        prioritizes simplicity and usability. Currently, I'm Digital Product
        Designer on Norma. Formerly Enrich Mobile, ASDC, TalentMondo, and
        MobileUpp. I love working on side projects, trying to improve myself on
        SwiftUI and Webflow.
      </p>
      <nuxt-link to="/">Contact Me</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overview {
  margin-top: 67px;
}
.about {
  h2 {
    margin-top: 16px;
  }
  p {
    margin-top: 8px;
  }
  a {
    margin-top: 16px;
  }
}
</style>
