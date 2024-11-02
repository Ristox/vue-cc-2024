
<script setup>
import Navbar from "@/components/Navbar.vue";
import Title from "@/components/Title.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";
</script>

<template>
  <Navbar />
  <Title />
  <HomeCards />
  <JobListings :limit="3" :showButton="true" />
</template>
