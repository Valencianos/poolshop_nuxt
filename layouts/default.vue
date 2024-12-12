<script setup lang="ts">
import {useBreweryStore} from "~/stores/brewery";
const breweryStore = useBreweryStore();
import { storeToRefs } from "pinia";
import { ref } from 'vue';

breweryStore.getBreweries();

const { breweries } = storeToRefs(breweryStore);
const brewery = ref(null); // для v-model
</script>

<template>
  <header class="header">
    <NuxtLink to="/about">About</NuxtLink>
  </header>
  <main class="main">
    <slot></slot>
  </main>
</template>

<style scoped>

</style>