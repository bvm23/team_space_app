import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Member } from '../../team/team-member/team-member.model';
import { TaskService } from '../task.service';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) user!: Member;
  @Output() close = new EventEmitter();
  enteredTask = '';

  constructor(private taskService: TaskService) {}

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    if (this.enteredTask) {
      let newTask: Task = {
        id: Date.now().toString(),
        title: this.enteredTask.trim(),
        owner: this.user,
        status: 'pending',
      };
      this.taskService.addTask(newTask);
      this.onCancel();
    }
  }
}
