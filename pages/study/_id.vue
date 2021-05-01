<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="20" :md="18" :lg="18" :xl="18">
      <app-header />
      <app-description />
      <app-role />
      <app-portfolio :show-link="false" />
      <app-preview />
    </el-col>
  </el-row>
</template>

<script>
import appHeader from '@/components/header'
import appDescription from '@/components/description'
import appRole from '@/components/role'
import appPortfolio from '@/components/portfolio'
import appPreview from '@/components/preview'
export default {
  components: { appHeader, appDescription, appRole, appPreview, appPortfolio },
}
</script>

<style lang="scss" scoped></style>
