<template>
  <div class="Досвід в проектах">
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item label="Назва компанії (роботи)">
        <el-input v-model="form.company" />
      </el-form-item>
      <el-form-item label="Роль">
        <el-input v-model="form.role" />
      </el-form-item>
      <el-form-item label="Дата">
        <el-date-picker
          v-model="form.datepicker"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" round @click="addExperience"
          >Додати досвід</el-button
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
    title: 'Досвід',
  },
  data() {
    return {
      form: {
        company: '',
        role: '',
        datepicker: [],
      },
      rules: {},
    };
  },
  methods: {
    addExperience() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          try {
            const dataForm = {
              company: this.form.company,
              role: this.form.role,
              datepicker: this.form.datepicker,
            };
            await this.$store.dispatch('exerience', dataForm);
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
