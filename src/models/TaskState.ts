import { Task } from './Task';

export interface TaskState {
  loading: boolean;
  data: Task[];
}
