<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="20" :md="18" :lg="18" :xl="18">
      <app-overview />
      <app-portfolio />
      <app-works />
    </el-col>
  </el-row>
</template>

<script>
import appOverview from '@/components/overview'
import appPortfolio from '@/components/portfolio'
import appWorks from '@/components/works'
export default {
  head: {
    title: 'Portfolio',
  },
  components: {
    appOverview,
    appPortfolio,
    appWorks,
  },
}
</script>

<style></style>
