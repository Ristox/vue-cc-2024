<script setup>
import { ref } from "vue";

const name = ref('John Doe');
const status = ref('inactive');
const tasks = ref(['Buy milk', 'Go for a walk', 'Clean room', 'Go to the gym']);
const link = 'https://google.com';

const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'inactive';
  }
  else if (status.value === 'inactive') {
    status.value = 'pending';
  }
  else {
    status.value = 'active';
  }
}
</script>

<template>
  <h1>{{ name }}</h1>

  <div>
    <button @click="toggleStatus">Change status</button>
  </div>

  <div v-if="status === 'active'">
    <p>User is active</p>
    <h3>Tasks:</h3>
    <ul>
      <li v-for="task in tasks" :key="task">{{ task }}</li>
    </ul>
  </div>

  <p v-else-if="status === 'pending'">
    User is pending
  </p>
  <p v-else>
    User is not active
  </p>

  <div>
    <a :href="link">Click me</a>
  </div>
</template>

<style scoped>

</style>
