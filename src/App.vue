<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: 'inactive',
      tasks: ['Buy milk', 'Go for a walk', 'Clean room', 'Go to the gym'],
      link: 'https://google.com',
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active') {
        this.status = 'inactive';
      } else if (this.status === 'inactive') {
        this.status = 'pending';
      } else {
        this.status = 'active';
      }
    },
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
