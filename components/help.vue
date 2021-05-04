<template>
  <div class="help" id="contact">
    <h2>Looking for help with Front-end</h2>
    <span>Send me details</span>
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item label="Name" prop="name">
        <el-input placeholder="Enter your name" v-model="form.name" />
      </el-form-item>
      <el-form-item label="Email Address" prop="email">
        <el-input placeholder="Enter your email" v-model="form.email" />
      </el-form-item>
      <el-form-item label="Detail" prop="detail">
        <el-input
          type="textarea"
          :rows="3"
          placeholder="Enter your message"
          resize="none"
          v-model="form.detail"
        />
      </el-form-item>
      <el-form-item>
        <div class="link-row">
          <button class="link" @click="submit">Submit</button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: { name: '', email: '', detail: '' },
      rules: {
        email: [{ required: true }, { type: 'email' }],
        name: [{ required: true }],
        detail: [{ required: true }],
      },
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          try {
            const dataForm = {
              name: this.form.name,
              email: this.form.email,
              detail: this.form.detail,
            };
            await this.$store.dispatch('email', dataForm);
          } catch (err) {
            this.$message({
              type: 'error',
              message: 'server is destroyed',
            });
          }
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.help {
  margin-top: 102px;
  background: #f9f9f9;
  border-radius: 4px;
  padding: 24px;
  span {
    margin-top: 8px;
    font-weight: 300;
    color: #999999;
  }
  .link-row {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
