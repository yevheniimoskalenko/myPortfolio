<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="20" :md="18" :lg="18" :xl="18">
      <app-overview />
      <app-portfolio :show-link="true" />
      <app-works />
      <app-experience />
      <app-education />
      <app-help />
      <app-footer />
    </el-col>
  </el-row>
</template>
<script>
import appOverview from '@/components/overview';
import appPortfolio from '@/components/portfolio';
import appWorks from '@/components/works';
import appExperience from '@/components/experience';
import appEducation from '@/components/education';
import appHelp from '@/components/help';
import appFooter from '@/components/footer';

export default {
  components: {
    appOverview,
    appPortfolio,
    appWorks,
    appExperience,
    appEducation,
    appHelp,
    appFooter,
  },
  head: {
    title: 'Yevhenii Moskalenko',
  },
};
</script>
