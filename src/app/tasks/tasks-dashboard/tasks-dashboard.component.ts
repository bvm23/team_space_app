import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { TeamService } from '../../team/team.service';
import { Member } from '../../team/team-member/team-member.model';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-tasks-dashboard',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks-dashboard.component.html',
  styleUrl: './tasks-dashboard.component.css',
})
export class TasksDashboardComponent implements OnInit {
  peopleList!: Member[];
  isAddingTask: boolean = false;
  selectedUserId!: string;
  selectedUser!: Member;

  constructor(
    private taskService: TaskService,
    private teamService: TeamService
  ) {}

  onStartAddTask(id: string) {
    this.isAddingTask = true;
    this.selectedUserId = id;
    this.selectedUser = this.peopleList.find(
      (m) => m.id === this.selectedUserId
    )!;
  }

  stopAddTask() {
    this.isAddingTask = false;
  }

  ngOnInit() {
    this.peopleList = this.teamService.getMembers();
  }
}
