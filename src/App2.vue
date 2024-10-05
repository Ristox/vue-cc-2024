<script>
export default {
  setup() {
    const name = 'John Doe';
    const status = 'inactive';
    const tasks = ['Buy milk', 'Go for a walk', 'Clean room', 'Go to the gym'];
    const link = 'https://google.com';
  }
};
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
