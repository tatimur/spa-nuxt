<template>
  <section>
    <el-alert
      v-if="$route.query.message"
      title="Need login first"
      type="error">

    </el-alert>
    <el-form @submit.prevent="onSubmit" ref="form" :model="form" label-width="120px">
      <el-form-item label="Login">
        <el-input></el-input>
      </el-form-item>

      <el-form-item label="Pass">
        <el-input></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Login</el-button>
      </el-form-item>

      <p>
        <nuxt-link to="/">To home page</nuxt-link>
      </p>
    </el-form>
  </section>
</template>

<script>
  export default {
    layout: 'empty',
    methods: {
      onSubmit() {
        this.$store.dispatch('login')
        this.$router.push('/')
      }
    }
  }

</script>

<style scoped>
  form {
    width: 600px;
    text-align: center;
    margin-top: 3rem;
  }

  a {
    margin-left: 8rem;
    text-decoration: none;
    color: #606266;
  }
</style>
