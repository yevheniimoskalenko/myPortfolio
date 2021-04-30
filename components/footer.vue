<template>
  <div class="footer">
    <el-row>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="footer-company">
          <span>Made ❤️ with Webflow</span>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <ul class="footer-list">
          <li class="footer-item">
            <a href="#" target="_blank">Dribbble</a>
          </li>
          <li class="footer-item">
            <a href="#" target="_blank">Linkedin</a>
          </li>
          <li class="footer-item">
            <a href="#" target="_blank">Twitter</a>
          </li>
          <li class="footer-item">
            <a href="#" target="_blank">Instagram</a>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: 64px;
}
.footer-list {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
}
.footer-company {
  span {
    color: #999999;
  }
}
.footer-item {
  padding: 0px 24px;
  a {
    color: #999999;
    text-decoration: none;
    text-transform: capitalize;
    &:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: 576px) {
  .footer-company {
    text-align: center;
    span {
      font-size: 14px;
    }
  }
  .footer-company {
    text-align: center;
  }
  .footer-list {
    margin-top: 24px;
    width: 100%;
    display: flex;
    justify-content: center;
    .footer-item {
      padding: 0px 16px;
      a {
        font-size: 14px;
      }
    }
  }
}
@media (max-width: 320px) {
  .footer-list {
    .footer-item {
      padding: 0px 10px;
      a {
        font-size: 12px;
      }
    }
  }
}
</style>
