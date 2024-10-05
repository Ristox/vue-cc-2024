<script setup>
import { ref } from "vue";

const name = ref('John Doe');
const status = ref('active');
const tasks = ref(['Buy milk', 'Go for a walk', 'Clean room', 'Go to the gym']);
const link = 'https://google.com';
const newTask = ref('');

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

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
}
</script>

<template>
  <h1>{{ name }}</h1>

  <div>
    <button @click="toggleStatus">Change status</button>
  </div>

  <div v-if="status === 'active'">
    <p>User is active</p>

    <form @submit.prevent="addTask">
      <label for="newTask">Add Task</label>
      <input type="text" id="newTask" name="newTask" v-model="newTask">
      <button type="submit">Submit</button>
    </form>

    <h3>Tasks:</h3>
    <ul>
      <li v-for="(task, index) in tasks" :key="task">
        <span>{{ task }}</span>
        <button @click="deleteTask(index)">x</button>
      </li>
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
