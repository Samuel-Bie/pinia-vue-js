<template>
  <form @submit.prevent="submitTask">
    <input type="text" placeholder="I need to ..." v-model="taskName" />
    <button type="submit">Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTaskStore } from "@/stores/tasks";
import type { Task } from "@/types";

const { addTask } = useTaskStore();

const taskName = ref("");

const submitTask = () => {
  let task: Task = {
    id: Math.random(),
    title: taskName.value,
    description: "Description 1",
    completed: false,
    favorite: false,
  };

  addTask(task);

  taskName.value = "";
};
</script>

<style scoped></style>
