<template>
  <div class="concept">
    <h2>Концепт роботи</h2>
    <el-form ref="form" class="form" :rules="rules" :model="form">
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-change="hendelImageChange"
        :auto-upload="false"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">Додати головне фото</div>
        <div class="el-upload__tip" slot="tip">
          jpg/png files with a size less than 500kb
        </div>
      </el-upload>
      <el-form-item>
        <el-button type="primary" round @click="addConcept"
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
    title: 'Концепт роботи',
  },
  data() {
    return {
      form: {
        list: [],
      },
      rules: {},
    };
  },
  methods: {
    hendelImageChange(file, fileList) {
      this.form.list = fileList.reduce((acc, item) => acc.concat(item.raw), []);
    },
    addConcept() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          try {
            const formdata = {
              list: this.form.list,
            };
            // formdata.append('list', this.form.list);
            await this.$store.dispatch('concept', formdata);
          } catch (e) {
            console.log(e);
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
