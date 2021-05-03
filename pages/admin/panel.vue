<template>
  <div class="panel">
    <h2>Про себе</h2>
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item label="Розповісти про себе" prop="aboutMe">
        <el-input v-model="form.aboutMe" type="textarea" :rows="3" />
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
        <div class="el-upload__text">Аватар користувача</div>
        <div class="el-upload__tip" slot="tip">
          jpg/png files with a size less than 500kb
        </div>
      </el-upload>
      <el-form-item>
        <el-button type="primary" round @click="uploadPortfolio"
          >Зберегти</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'empty',
  data() {
    return {
      form: {
        aboutMe: '',
        image: null,
      },
      rules: {
        aboutMe: [{ required: true }],
      },
    };
  },
  head: {
    title: 'Про себе',
  },
  methods: {
    hendelPreviewImageChange(file) {
      this.form.image = file.raw;
    },
    uploadPortfolio() {
      this.$refs.form.validate((valid) => {
        if (valid && this.form.image) {
          try {
            const formData = {
              description: this.form.aboutMe,
              image: this.form.image,
            };
            this.$store.dispatch('uploadDescription', formData);
          } catch (e) {
            console.log(e);
          }
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
