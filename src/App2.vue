<script setup>
import { onMounted, ref } from "vue";

const name = ref('John Doe');
const status = ref('active');
const tasks = ref([]);
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
  if (newTask.value) {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
}

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks.value = data.map(task => task.title);
  }
  catch (error) {
    console.log('Error fetching tasks:', error);
  }
});
</script>

<template>
  <h1>{{ name }}</h1>

  <div class="status-container">
    <button @click="toggleStatus" class="status-btn">Change Status</button>
    <p v-if="status === 'active'" class="status-text">User is active</p>
    <p v-else-if="status === 'pending'" class="status-text">User is pending</p>
    <p v-else class="status-text">User is not active</p>
  </div>

  <div v-if="status === 'active'">
    <form @submit.prevent="addTask" class="task-form">
      <label for="newTask" class="block">Add Task:</label>
      <input type="text" id="newTask" name="newTask" v-model="newTask" class="input-field">
      <button type="submit" class="submit-btn">Submit</button>
    </form>

    <h3>Tasks:</h3>
    <ul class="task-list">
      <li v-for="(task, index) in tasks" :key="task" class="task-item">
        <span>{{ task }}</span>
        <button @click="deleteTask(index)" class="delete-btn">x</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.status-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.status-btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
}

.status-btn:hover {
  background-color: #3e8e41;
}

.status-text {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.task-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
}

.input-field {
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #3e8e41;
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.task-item:last-child {
  border-bottom: none;
}

.delete-btn {
  background-color: #f44336;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #e91e63;
}

.block {
  font-size: 18px;
  margin-bottom: 10px;
}

h3 {
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>
