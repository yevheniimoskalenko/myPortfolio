<template>
  <div class="concept">
    <h2>Концепт роботи</h2>
    <el-form ref="form" class="form" :rules="rules" :model="form">
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">Додати головне фото</div>
        <div class="el-upload__tip" slot="tip">
          jpg/png files with a size less than 500kb
        </div>
      </el-upload>
      <el-form-item>
        <el-button type="primary" round @click="login">Додати роботу</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'empty',
  head: {
    title: 'Концепт роботи',
  },
};
</script>

<style lang="scss" scoped></style>
