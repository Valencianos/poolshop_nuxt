<script setup lang="ts">
const route = useRoute()

const { data: users, status } = useFetch("/api/users", {
  method: "GET",
})
</script>

<template>
  <h1>Here I am</h1>
  <Icon name="InstaIcon"></Icon>
  <nuxt-link to="/about">About</nuxt-link>
  <div>Status: {{ status }}</div>
  <div v-for="user in users" :key="user.id">
    Username: {{ user?.username }}
  </div>
</template>

<style scoped>
h1 {
  font-family: 'Fira Sans', sans-serif;
}
</style>
