<template>
  <div class="task">
    <h3>{{ task.title }}</h3>

    <div class="icons">
      <i class="material-icons" @click="performDeleteTask(task)">delete</i>
      <i
        class="material-icons"
        :class="task.favorite ? 'active' : ''"
        @click="favorite(task)"
        >favorite</i
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { Task } from "@/types";

import { useTaskStore } from "@/stores/tasks";
const { deleteTask, toggleFavorite } = useTaskStore();

defineProps({
  task: {
    type: Object as () => Task,
    required: true,
  },
});

const performDeleteTask = (task: Task) => {
  deleteTask(task.id);
};

const favorite = (task: Task) => {
  toggleFavorite(task.id);
};
</script>

<style scoped></style>
