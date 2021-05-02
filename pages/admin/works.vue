<template>
  <div class="works">
    <h2>Роботи</h2>
    <el-form ref="form" class="form" :rules="rules" :model="form">
      <el-form-item label="Заголовок" prop="email">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="form.fileList"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">Додати головне фото</div>
        <div class="el-upload__tip" slot="tip">
          jpg/png files with a size less than 500kb
        </div>
      </el-upload>
      <el-form-item label="Опис" prop="password">
        <el-input v-model="form.description" type="textarea" />
      </el-form-item>
      <el-upload
        class="upload-demo"
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :auto-upload="false"
      >
        <el-button slot="trigger" size="small" type="primary"
          >Вибрати картинки</el-button
        >
        <el-button
          style="margin-left: 10px"
          size="small"
          type="success"
          @click="submitUpload"
          >Завантажити на сервер</el-button
        >
        <div class="el-upload__tip" slot="tip">
          jpg/png files with a size less than 500kb
        </div>
      </el-upload>
      <el-form-item>
        <el-button type="primary" round @click="login">Додати роботу</el-button>
      </el-form-item>

      {{ form.fileList }}
    </el-form>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'empty',
  head: {
    title: 'Роботи',
  },
  data() {
    return {
      form: {
        fileList: [],
      },
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `The limit is 3, you selected ${
          files.length
        } files this time, add up to ${files.length + fileList.length} totally`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`Cancel the transfert of ${file.name} ?`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
