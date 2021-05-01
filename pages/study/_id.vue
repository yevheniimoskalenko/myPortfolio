<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="20" :md="18" :lg="18" :xl="18">
      <app-header />
      <app-description />
    </el-col>
  </el-row>
</template>

<script>
import appHeader from '@/components/header'
import appDescription from '@/components/description'
export default {
  components: { appHeader, appDescription },
}
</script>

<style lang="scss" scoped></style>
