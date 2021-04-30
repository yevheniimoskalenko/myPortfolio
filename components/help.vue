<template>
  <div class="help">
    <h2>Looking for help with design</h2>
    <span>Send me details</span>
    <el-form>
      <el-form-item label="Name">
        <el-input placeholder="Enter your name" />
      </el-form-item>
      <el-form-item label="Email Address">
        <el-input placeholder="Enter your email" />
      </el-form-item>
      <el-form-item label="Detail">
        <el-input
          type="textarea"
          :rows="3"
          placeholder="Enter your message"
          resize="none"
        />
      </el-form-item>
      <el-form-item>
        <div class="link-row">
          <button class="link">Submit</button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

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
