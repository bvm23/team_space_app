import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from '../task.service';
import { Member } from '../../team/team-member/team-member.model';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  @Input({ required: true }) user!: Member;
  @Output() add = new EventEmitter();

  constructor(private taskService: TaskService) {}

  get completedCount() {
    return this.tasks.filter((task) => task.status === 'completed').length;
  }

  get inProgressCount() {
    return this.tasks.filter((task) => task.status === 'in-progress').length;
  }

  get tasks() {
    return this.taskService.getUserTasks(this.user.id);
  }

  changeStatus(id: string) {
    let selectedTask = this.tasks.find((task) => task.id === id)!;
    if (selectedTask) {
      selectedTask.status = {
        pending: 'in-progress',
        'in-progress': 'completed',
        completed: 'pending',
      }[selectedTask!.status] as 'pending' | 'in-progress' | 'completed';
    }
  }

  onAdd() {
    this.add.emit(this.user.id);
  }

  ngOnInit() {}
}
