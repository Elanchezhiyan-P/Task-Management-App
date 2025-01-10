import { Injectable } from '@angular/core';
import { Task } from './model/task.model';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private tasks: Task[] = [
    { id: 1, title: 'Buy groceries', description: 'Milk, eggs, bread', completed: false },
    { id: 2, title: 'Clean the house', description: 'Vacuum, dust, mop', completed: false },
    { id: 3, title: 'Finish homework', description: 'Complete Angular tutorial', completed: false }
  ];

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  // Add a new task
  addTask(newTask: Task): void {
    this.tasks.push(newTask); // Add the new task to the array
  }

  // Update an existing task
  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask; // Update the task in the array
    }
  }

  // Delete a task
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id); // Remove the task from the array
  }
}
