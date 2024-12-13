<script setup lang="ts">
  const prisma = usePrismaClient();
  const users = await prisma.user.findMany();
</script>

<template>
<div v-if="users">
  <div v-for="user in users" :key="user.id">
    <span>Username: {{user.username}}</span>
    <span>Mail: {{user.email}}</span>
  </div>
</div>
</template>

<style scoped>

</style>