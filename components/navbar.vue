<template>
  <el-menu mode="horizontal">
    <el-menu-item>
      <nuxt-link to="/">Home</nuxt-link>
    </el-menu-item>
    <el-menu-item >
      <nuxt-link to="/about">About</nuxt-link>
    </el-menu-item>
    <el-menu-item >
      <nuxt-link to="/users">Users</nuxt-link>
    </el-menu-item>
    <el-menu-item v-if="!hasToken" >
      <nuxt-link to="/login">Login</nuxt-link>
    </el-menu-item>
    <el-menu-item v-else>
      <nuxt-link @click.prevent="logout" to="/">Logout</nuxt-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    computed: {
      hasToken() {
        return this.$store.getters.hasToken
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
        this.$router.push('/login')
      }
    }
  }
</script>
