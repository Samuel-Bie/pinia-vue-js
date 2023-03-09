import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import type { Task } from "@/types";
import { computed } from "vue";

const mockedTasks: Task[] = [];

const setup = () => {
  // Data
  const tasks = reactive(mockedTasks);
  const loadingTasks = ref(false);

  //   Computed
  const favoriteTasks = computed(() => {
    return tasks.filter((task) => task.favorite);
  });

  const favoriteCount = computed(() => {
    return tasks.filter((task) => task.favorite).length;
  });

  //  Methods

  // This is an asynchronous function
  const addTask = (task: Task) => {
    fetch("http://localhost:3000/tasks", {
      body: JSON.stringify(task),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        tasks.push(task);
      })
      .catch((error) => {
        console.log(error);
        console.log("something went wrong");
      });
  };

  // This is an asynchronous function
  const toggleFavorite = (id: number) => {
    const task = tasks.filter((task) => task.id === id)[0];

    fetch(`http://localhost:3000/tasks/${task.id}`, {
      body: JSON.stringify({
        favorite: !task.favorite,
      }),
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        task.favorite = !task.favorite;
      })
      .catch((error) => {
        console.log(error);
        console.log("something went wrong");
      });
  };

  const deleteTask = (id: number) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        const task = tasks.filter((task) => task.id === id)[0];
        tasks.splice(tasks.indexOf(task), 1);
      })
      .catch((error) => {
        console.log(error);
        console.log("something went wrong");
      });
  };

  const getTasks = async () => {
    loadingTasks.value = true;

    const response = await fetch("http://localhost:3000/tasks");
    const data = await response.json();
    tasks.splice(0);
    tasks.push(...data);
    loadingTasks.value = false;
  };

  return {
    loadingTasks,
    tasks,
    favoriteTasks,
    favoriteCount,
    addTask,
    toggleFavorite,
    deleteTask,
    getTasks,
  };
};

export const useTaskStore = defineStore("tasksStore", setup);

// Path: src/main.ts
