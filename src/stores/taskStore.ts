import { defineStore } from 'pinia';
import { TaskState } from '@/models/TaskState';
import { Task } from '@/models/Task'

export const useTaskStore = defineStore('task', {
  state: (): TaskState => ({
    loading: false,
    data: []
  }),
  actions: {
    addTask(task: Task) {
      this.data.push(task);
    },
    removeTask(task: Task) {
      this.data = this.data.filter(t => t.id !== task.id);
    },
    updateTaskStatus(task: Task) {
      const index = this.data.findIndex(t => t.id === task.id);
      if (index !== -1) {
        this.data[index].status = !this.data[index].status;
      }
    }
  }
});
