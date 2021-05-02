<template>
  <div class="auth">
    <el-form ref="form" class="form" :rules="rules" :model="form">
      <el-form-item label="Email" prop="email">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="form.password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" round @click="login">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      form: {
        email: 'testjokerqwerty@gmail.com',
        password: 'was123456789was',
      },
      rules: {
        email: [{ required: true }],
        password: [{ required: true }],
      },
    };
  },
  head() {
    return {
      title: 'Auth',
    };
  },
  methods: {
    login() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          const formData = {
            email: this.form.email,
            password: this.form.password,
          };
          await this.$store.dispatch('auth', formData);
          await this.$router.push('/admin/panel');
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.auth {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  width: 30%;
  background: #f9f9f9;
  padding: 20px;
}
</style>
