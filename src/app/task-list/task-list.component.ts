import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskFormComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  isModalOpen = false;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  openModal():void{
    this.isModalOpen = true; 
  }
  
  closeModal():void{
    this.isModalOpen = false; 
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);  
    this.tasks = this.taskService.getTasks(); 
  }
}
