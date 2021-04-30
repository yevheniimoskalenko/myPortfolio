<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="20" :md="18" :lg="18" :xl="18">
      <app-overview />
      <app-portfolio />
    </el-col>
  </el-row>
</template>

<script>
import appOverview from '@/components/overview'
import appPortfolio from '@/components/portfolio'
export default {
  head: {
    title: 'Portfolio',
  },
  components: {
    appOverview,
    appPortfolio,
  },
}
</script>

<style></style>
