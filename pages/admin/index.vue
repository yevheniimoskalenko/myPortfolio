<template>
  <div class="auth">
    <el-form ref="form" class="form" :rules="rules" :model="form">
      <el-form-item label="Email" prop="email">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" round>Login</el-button>
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
        email: '',
        password: '',
      },
      rules: {
        email: [{ required: true }],
        password: [{ required: true }],
      },
    }
  },
  head() {
    return {
      title: 'Auth',
    }
  },
}
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
  width: 500px;
  background: #f9f9f9;
  padding: 20px;
}
</style>
