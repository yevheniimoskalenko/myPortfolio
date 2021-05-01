<template>
  <div class="description">
    <div class="brand">
      <img src="~/assets/image/10.png" alt="" />
    </div>
    <h2>What is Businesswise</h2>
    <p>
      Businesswise freelance was a project where I worked as a designer. The
      main goal of businesswise is to gather podcasts in various categories for
      professional people.
    </p>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.description {
  width: 45%;
  h2 {
    margin-top: 8px;
  }
  p {
    margin-top: 8px;
    line-height: 26px;
    text-align: justify;
  }
  .brand {
    margin-top: 45px;
    img {
      border-radius: 6px;
    }
  }
}

@media (max-width: 576px) {
  .description {
    width: 100%;
  }
}
@media (min-width: 576px) {
  .description {
    width: 70%;
  }
}
@media (min-width: 768px) {
  .description {
    width: 70%;
  }
}
@media (min-width: 992px) {
  .description {
    width: 60%;
  }
}
</style>
