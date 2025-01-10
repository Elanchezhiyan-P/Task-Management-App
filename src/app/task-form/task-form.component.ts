import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../model/task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  
  newTask: Task = { id: 0, title: '', description: '', completed: false };

  constructor(private taskService: TaskService) { }

  addTask(): void {
    this.newTask.id = Math.floor(Math.random() * 1000);
    this.taskService.addTask(this.newTask);
    this.newTask = { id: 0, title: '', description: '', completed: false };
  }
}
