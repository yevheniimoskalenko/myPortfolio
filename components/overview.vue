<template>
  <div class="overview">
    <div class="avatar">
      <img
        src="https://res.cloudinary.com/dmrpkseez/image/upload/v1598355171/image_ahstla.png"
        alt=""
      />
    </div>
    <div class="about">
      <h2>Welcome to my Portfolio 👋</h2>
      <p>
        I'm a professional web developer with 3+years volunteer experience in
        web developer. I'm constantly developing and learning new technologies
        in IT.
      </p>
      <nuxt-link to="#contact">Contact Me</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overview {
  margin-top: 67px;
}
.avatar {
  img {
    border-radius: 50%;
  }
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
