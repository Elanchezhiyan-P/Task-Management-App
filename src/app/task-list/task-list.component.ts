import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent implements OnInit {

  tasks: Task[] = [];  // Define an empty array for tasks

  constructor(private taskService: TaskService) { }  // Inject the service

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();  // Get the tasks when the component is initialized
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);  // Call the service method to delete the task
    this.tasks = this.taskService.getTasks();  // Update the task list after deletion
  }
}
