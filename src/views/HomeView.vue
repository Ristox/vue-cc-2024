<script setup>
import Title from "@/components/Title.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";
</script>

<template>
  <Title />
  <HomeCards />
  <JobListings :limit="3" :showButton="true" />
</template>

<style scoped>

</style>
