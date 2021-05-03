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
        :on-change="hendelPreviewImageChange"
        :auto-upload="false"
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
        :on-change="hendelImagesChange"
      >
        <el-button slot="trigger" size="small" type="primary"
          >Вибрати картинки</el-button
        >
        <div class="el-upload__tip" slot="tip">
          jpg/png files with a size less than 500kb
        </div>
      </el-upload>
      <el-form-item>
        <el-button type="primary" round @click="create"
          >Додати роботу</el-button
        >
      </el-form-item>
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
        preview: null,
        images: [],
        title: '',
        description: '',
      },
      rules: {
        title: [{ required: true }],
        description: [{ required: true }],
      },
    };
  },
  methods: {
    hendelPreviewImageChange(file) {
      console.log(file);
      this.form.preview = file.raw;
    },
    hendelImagesChange(file, fileList) {
      this.form.images = fileList.reduce(
        (acc, item) => acc.concat(item.raw),
        []
      );
    },
    create() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          const dataForm = {
            preview: this.form.preview,
            images: this.form.images,
            title: this.form.title,
            description: this.form.description,
          };
          this.$store.dispatch('works', dataForm);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
