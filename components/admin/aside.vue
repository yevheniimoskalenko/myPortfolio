<template>
  <el-menu router :style="{ height: '100%' }" :default-active="$route.path">
    <el-menu-item index="/admin/panel">
      <i class="el-icon-share"></i>
      <span>Про себе</span>
    </el-menu-item>
    <el-menu-item index="/admin/works">
      <i class="el-icon-s-cooperation"></i>
      <span>Роботи</span>
    </el-menu-item>
    <el-menu-item index="/admin/concept">
      <i class="el-icon-edit"></i>
      <span>Концепт</span>
    </el-menu-item>
    <el-menu-item index="/admin/experience">
      <i class="el-icon-date"></i>
      <span>Досвід</span>
    </el-menu-item>
    <el-menu-item index="/exit" @click="exit">
      <i class="el-icon-setting"></i>
      <span>Вихід</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  methods: {
    exit() {
      this.$store.dispatch('exit');
    },
  },
};
</script>
