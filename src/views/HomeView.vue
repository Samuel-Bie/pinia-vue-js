<template>
  <main>
    <!-- heading -->
    <header>
      <img src="@/assets/logo.svg" alt="pinia logo" />

      <h1>Pinia Tasks</h1>
    </header>

    <!-- Form -->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- Filter -->

    <nav class="filter">
      <button @click="showAll = true">All Tasks</button>
      <button @click="showAll = false">Fav Tasks</button>
    </nav>

    <!-- Loading area -->
    <div class="loading" v-if="loadingTasks">Loading...</div>

    <!-- Task list -->
    <div v-if="showAll">
      <div class="task-list">
        <p>All Tasks</p>
        <div v-for="task in tasks" :key="task.id">
          <TaskDetails :task="task" />
        </div>
      </div>
    </div>

    <!-- Favorite tasks -->
    <div v-else>
      <div class="task-list">
        <p>Favorite Tasks ({{ favoriteTasks.length }})</p>
        <div v-for="task in favoriteTasks" :key="task.id">
          <TaskDetails :task="task" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useTaskStore } from "@/stores/tasks";

import TaskDetails from "@/components/TaskDetails.vue";
import TaskForm from "@/components/TaskForm.vue";

const showAll = ref(true);

const taskStore = useTaskStore();
const { tasks, favoriteTasks, loadingTasks } = storeToRefs(taskStore);

onMounted(() => {
  taskStore.getTasks().then(() => {
    console.log("Home View mounted and tasks loaded");
  });
});
</script>

<style scoped></style>
