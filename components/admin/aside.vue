<template>
  <el-menu router :style="{ height: '100%' }" :default-active="$route.path">
    <el-menu-item index="/works">
      <i class="el-icon-s-cooperation"></i>
      <span>Роботи</span>
    </el-menu-item>
    <el-menu-item index="/concept">
      <i class="el-icon-edit"></i>
      <span>Концепт</span>
    </el-menu-item>
    <el-menu-item index="/experience">
      <i class="el-icon-date"></i>
      <span>Досвід</span>
    </el-menu-item>
    <el-menu-item index="/exit">
      <i class="el-icon-setting"></i>
      <span>Вихід</span>
    </el-menu-item>
  </el-menu>
</template>
